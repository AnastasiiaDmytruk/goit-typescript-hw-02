import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  if (!photos || photos.length === 0) {
    return;
  }

  return (
    <ul className={styles.list}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={styles.listItem}>
            <ImageCard photo={photo} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
