"use client"

import React from 'react'
import css from "./TagsMenu.module.css"
import { NoteTag } from "@/app/types/note";
import Link from "next/link";


export default function TagsMenu () {
  return (
   <div className={css.menuContainer}>
  <button className={css.menuButton}>
    Notes ▾
  </button>
    <ul className={css.menuList}>
    {/* список тегів */}
      <li className={css.menuItem}>
        <Link
            href={`/notes/filter/all`}
            className={css.menuLink}>
                All notes
        </Link>
    </li>
              
    </ul>
</div>

  )
}

