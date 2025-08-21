"use client"

// import React from 'react'
// import css from "./TagsMenu.module.css"
// import { CategoryType } from "@/app/types/note";
// import Link from "next/link";

// type TagsMenuProps = {
//   categories: CategoryType[];
// };

// const CategoriesMenu = ({ categories }: TagsMenuProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

// export default function TagsMenu () {
//   return (
//    <div className={css.menuContainer}>
//   <button onClick={toggle} className={css.menuButton}>
//     Notes ▾
//       </button>
//        {isOpen && (
//         <ul className={css.menuList}>
//           {categories.map((CategoryType) => (
//           <li key={category.id} className={css.menuItem}>
//             <Link
//               href={`/notes/filter/${category.id}`}
//               onClick={toggle}
//                 className={css.menuLink}>
//                   All notes
//             </Link>
//           </li>
              
//     </ul>
// </div>

//   )
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import css from './TagsMenu.module.css';
import { CategoryType } from '@/lib/api';

type TagsMenuProps = {
  categories: CategoryType[];
};

export default function TagsMenu({ categories }: TagsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {/* Посилання на всі нотатки */}
          <li className={css.menuItem}>
            <Link href="/notes/filter/all" onClick={toggle} className={css.menuLink}>
              All notes
            </Link>
          </li>

          {/* Список тегів */}
          {categories.map((category) => (
            <li key={category.id} className={css.menuItem}>
              <Link
                href={`/notes/filter/${category.id}`}
                onClick={toggle}
                className={css.menuLink}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
