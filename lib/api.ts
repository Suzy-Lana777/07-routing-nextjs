// // lib/api.ts

import axios from 'axios';
import type { Note, NoteTag } from '../app/types/note';

axios.defaults.baseURL = 'https://next-docs-api.onrender.com';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface NewNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface CategoryType {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const getAuthHeader = () => {
  const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  return { Authorization: `Bearer ${myKey}` };
};

// Отримати нотатки з можливістю фільтрувати за тегом
export const fetchNotes = async (
  page: number,
  search: string,
  tag?: string,
  perPage: number = 12
): Promise<FetchNotesResponse> => {
  const params: Record<string, string | number> = {
    page,
    perPage,
    ...(search.trim() && { search: search.trim() }),
    ...(tag && tag.toLowerCase() !== 'all' && { tag }),
  };

  const res = await axios.get<FetchNotesResponse>('/notes', {
    params,
    headers: getAuthHeader(),
  });

  return res.data;
};

// Створити нову нотатку
export const createNote = async (newNote: NewNote): Promise<Note> => {
  const res = await axios.post<Note>('/notes', newNote, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Видалити нотатку
export const deleteNote = async (noteId: string): Promise<Note> => {
  const res = await axios.delete<Note>(`/notes/${noteId}`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Отримати одну нотатку за id
export const getSingleNote = async (id: string): Promise<Note> => {
  const res = await axios.get<Note>(`/notes/${id}`, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// Отримати всі категорії/теги
export const getCategories = async (): Promise<CategoryType[]> => {
  const res = await axios.get<CategoryType[]>('/categories', {
    headers: getAuthHeader(),
  });
  return res.data;
};


// lib/api.ts
// import axios from "axios";
// import type { Note, NoteTag } from "../app/types/note";

// axios.defaults.baseURL = "https://next-docs-api.onrender.com";

// // ----------------- Типи -----------------
// export interface FetchNotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// export interface NewNote {
//   title: string;
//   content: string;
//   tag: NoteTag;
// }

// export interface CategoryType {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// // ----------------- Хелпер -----------------
// const getAuthHeader = () => {
//   const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
//   return myKey ? { Authorization: `Bearer ${myKey}` } : {};
// };

// // ----------------- API функції -----------------

// // Отримати нотатки з можливістю фільтрувати за тегом
// export const fetchNotes = async (
//   page: number,
//   search: string = "",
//   tag?: string,
//   perPage: number = 12
// ): Promise<FetchNotesResponse> => {
//   const params: Record<string, string | number> = {
//     page,
//     perPage,
//     ...(search.trim() && { search: search.trim() }),
//     ...(tag && tag.toLowerCase() !== "all" && { tag }),
//   };

//   const res = await axios.get<FetchNotesResponse>("/notes", {
//     params,
//     headers: getAuthHeader(),
//   });

//   return res.data;
// };

// // Створити нову нотатку
// export const createNote = async (newNote: NewNote): Promise<Note> => {
//   const res = await axios.post<Note>("/notes", newNote, {
//     headers: getAuthHeader(),
//   });
//   return res.data;
// };

// Видалити нотатку
// export const deleteNote = async (noteId: string): Promise<Note> => {
//   const res = await axios.delete<Note>(`/notes/${noteId}`, {
//     headers: getAuthHeader(),
//   });
//   return res.data;
// };

// // Отримати одну нотатку за id
// export const getSingleNote = async (id: string): Promise<Note> => {
//   const res = await axios.get<Note>(`/notes/${id}`, {
//     headers: getAuthHeader(),
//   });
//   return res.data;
// };

// // Отримати всі категорії
// export const getCategories = async (): Promise<CategoryType[]> => {
//   try {
//     const res = await axios.get<CategoryType[]>("/categories", {
//       headers: getAuthHeader(),
//     });
//     return res.data;
//   } catch (error) {
//     console.error("Failed to fetch categories:", error);
//     return []; // повертаємо порожній масив, щоб компонент міг працювати
//   }

