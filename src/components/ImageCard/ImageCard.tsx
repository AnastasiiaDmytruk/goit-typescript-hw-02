import { Photo } from "../App/App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <div>
      <img
        className={styles.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => openModal(photo)}
      />
    </div>
  );
};

export default ImageCard;
