// app/@modal/(.)notes/[id]/page.tsx

// import { getSingleNote } from "@/lib/api";
// import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import NotePreviewClient from "./NotePreview.client";

// interface NotePreviewProps {
//     params: Promise<{ id: string }>;
// };

// const NotePreview = async ({ params }: NotePreviewProps) => {
//     const { id } = await params;


//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotePreviewClient id={id} />
//     </HydrationBoundary>
//   );
// };

// export default NotePreview;

  import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import NotePreviewClient from "./NotePreview.client";
import { getSingleNote } from "@/lib/api";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: NoteDetailsProps) {
  const { id } = await params;
  const parsedId = String(id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", parsedId],
    queryFn: () => getSingleNote(parsedId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient id={parsedId} />
    </HydrationBoundary>
  );
} 

