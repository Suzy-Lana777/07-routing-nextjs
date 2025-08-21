// app/@modal/(.)notes/[id]/page.tsx

import { getSingleNote } from '@/lib/api';
import Modal from '@/components/Modal/Modal';

type Props = {
  params: { id: string };
};

export default async function NotePreview({ params }: Props) {
  const { id } = params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
