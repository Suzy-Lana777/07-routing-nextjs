// app/@modal/(.)notes/[id]/page.tsx

import { getSingleNote } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  params: { id: string };
};

export default async function NotePreview({ params }: Props) {
  const { id } = params;
  const note = await getSingleNote(id);

  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal onClose={handleClose}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}
