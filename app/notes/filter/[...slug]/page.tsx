// app/notes/filter/[...slug]/page.tsx

import { fetchNotes, FetchNotesResponse } from "@/lib/api";
import NotesClient from "../../filter/[...slug]/Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params; 
  const tag = slug?.[0] || "all"; 

  const initialPage = 1;
  const initialQuery = "";

  const initialData: FetchNotesResponse = await fetchNotes(initialPage, initialQuery, tag);

  return (
    <NotesClient
      initialPage={initialPage}
      initialData={initialData}
      initialQuery={initialQuery}
      selectedTag={tag}
    />
  );
}

