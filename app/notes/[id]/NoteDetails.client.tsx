// app/notes/[id]/NoteDetails.client.tsx

// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { useParams, useRouter } from 'next/navigation';
// import { getSingleNote } from '@/lib/api';

// interface NoteDetailsClientProps {
//   id: string;
// }

// const NoteDetailsClient = () => {
//   const { id } = useParams<{ id: string }>();
//   const router = useRouter();

//   const {
//     data: note,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ['note', id],
//     queryFn: () => getSingleNote(id),
//     refetchOnMount: false,
//   });
  
//   const handleGoBack = () => {
//     const isSure = confirm('Are you sure?');
//     if (isSure) {
//       router.back();
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;

//   if (error || !note) return <p>Some error..</p>;

//   const formattedDate = note.updatedAt
//     ? `Updated at: ${note.updatedAt}`
//     : `Created at: ${note.createdAt}`;

//   return (
//     <div>
//       <button onClick={handleGoBack}>Back</button>
//       <h2>{note.title}</h2>
//       <p>{note.content}</p>
//       <p>{formattedDate}</p>
//     </div>
//   );
// };

// export default NoteDetailsClient;

"use client";

import React from "react";
import css from "./NoteDetailsClient.module.css"; // переконайся, що файл існує
import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";

interface NoteDetailsClientProps {
  id: string;
}

const NoteDetailsClient: React.FC<NoteDetailsClientProps> = ({ id }) => {
  const router = useRouter();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const handleClose = () => router.back();

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!note) return <p>No note found</p>;

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <button className={css.backBtn} onClick={handleClose}>
            Back
          </button>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
};

export default NoteDetailsClient;
