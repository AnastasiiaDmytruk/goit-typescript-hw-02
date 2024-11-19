import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.buttonWrap}>
      <button className={styles.button} type="button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
