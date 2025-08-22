// app/notes/page.tsx

// app/notes/page.tsx

import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

const Notes = async () => {
  const initialPage = 1;
  const initialSearch = "";

  const response = await fetchNotes(initialPage, initialSearch);

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;

