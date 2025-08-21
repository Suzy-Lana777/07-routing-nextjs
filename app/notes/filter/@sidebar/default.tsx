// app/notes/filter/@sidebar/default.tsx

import Link from 'next/link';
import { getCategories } from '@/lib/api';
import css from "./SideBarNotes.module.css"

export default async function NotesSidebar() {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes/filter/All" className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories?.map((category) => (
        <li key={category.id} className={css.menuItem}>
          <Link
            href={`/notes/filter/${encodeURIComponent(category.name)}`}
            className={css.menuLink}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
