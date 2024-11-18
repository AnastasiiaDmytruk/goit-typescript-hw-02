import styles from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      <img
        // data-modal={photo.urls.regular}
        className={styles.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
