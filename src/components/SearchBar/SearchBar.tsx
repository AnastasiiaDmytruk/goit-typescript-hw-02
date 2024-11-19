import styles from "./SearchBar.module.css";

import { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <div>
      <Toaster />
      <header className={styles.header}>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input}
            type="text"
            name="searchBarInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.btn}>
            🔍
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
