// app/notes/[id]/NoteDetails.client.tsx

'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { getSingleNote } from '@/lib/api';
import css from "./NoteDetails.module.css"

interface NoteDetailsClientProps {
  id: string;
}

export default function NoteDetailsClient({id}: NoteDetailsClientProps) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["note", id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false,
    });

  if (isLoading) return <p>Loading, please wait...</p>;
    if (error) return <p>Something went wrong.</p>;
    if (!data) return <p>No note found.</p>;


    return (
    <div className={css.container}>
	    <div className={css.item}>
	        <div className={css.header}>
	            <h2>{data.title}</h2>
	        </div>
	    <p className={css.content}>{data.content}</p>
	    <p className={css.date}>{data.createdAt}</p>
	    </div>
    </div>
    )
}

