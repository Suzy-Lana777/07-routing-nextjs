// app/notes/filter/[...slug]/page.tsx

import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: { slug?: string[] }; // опціональний
};

export default async function NotesByCategory({ params }: Props) {
  const slug = params?.slug ?? [];
  const category = slug[0] === 'all' ? undefined : slug[0];

  const response = await getNotes(category);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length ? <NoteList notes={response.notes} /> : <p>No notes</p>}
    </div>
  );
}
