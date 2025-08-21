// components/Header/Header.tsx

// import Link from 'next/link';
// import css from './Header.module.css';
// import TagsMenu from "../TagsMenu/TagsMenu";
// import { getCategories } from "@/lib/api";


// const Header = async () => {
//   const categories = await getCategories();
//   return (
//     <header className={css.header}>
//       <Link href="/" aria-label="Home" className={css.logo}>
//         NoteHub
//       </Link>
//       <nav aria-label="Main Navigation">
//         <ul className={css.navigation}>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <TagsMenu />
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import Link from 'next/link';
import css from './Header.module.css';
import TagsMenu from '../TagsMenu/TagsMenu';
import { getCategories, CategoryType } from '@/lib/api';

const Header = async () => {
  const categories: CategoryType[] = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* Компонент TagsMenu замість старого посилання Notes */}
          <li>
            <TagsMenu categories={categories} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
