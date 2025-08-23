// app/notes/[id]/NoteDetails.client.tsx

// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { getSingleNote } from '@/lib/api';
// import css from "./NoteDetails.page.module.css"

// interface NoteDetailsClientProps {
//   id: string;
// }

// export default function NoteDetailsClient({id}: NoteDetailsClientProps) {
//     const { data, isLoading, error } = useQuery({
//         queryKey: ["note", id],
//         queryFn: () => getSingleNote(id),
//         refetchOnMount: false,
//     });

//   if (isLoading) return <p>Loading, please wait...</p>;
//     if (error) return <p>Something went wrong.</p>;
//     if (!data) return <p>No note found.</p>;


//     return (
//     <div className={css.container}>
// 	    <div className={css.item}>
// 	        <div className={css.header}>
// 	            <h2>{data.title}</h2>
// 	        </div>
// 	    <p className={css.content}>{data.content}</p>
// 	    <p className={css.date}>{data.createdAt}</p>
// 	    </div>
//     </div>
//     )
// }

'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getSingleNote } from '@/lib/api';

import css from './NoteDetails.page.module.css';

const NoteDetailsClient = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const parsedId = String(id);

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(parsedId),
    refetchOnMount: false,
  });

  const handleClickBack = () => {
    router.back();
  };

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <>
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <button className={css.backBtn} onClick={handleClickBack}>
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
      )}
    </>
  );
};

export default NoteDetailsClient;
