import styles from "./ImageModal.module.css";

import Modal from "react-modal";

import { CgCloseO } from "react-icons/cg";

Modal.setAppElement("#root");

const ImageModal = ({ modalImages, closeModal, modalIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}>
        {modalImages && (
          <div className={styles.wrap} onClick={closeModal}>
            <button onClick={closeModal} className={styles.btn}>
              <CgCloseO />
            </button>
            <img
              src={modalImages.urls.regular}
              alt={modalImages.alt_description}
              className={styles.img}
            />
            <div className={styles.wrapper}>
              <p className={styles.text}>
                Photo: {modalImages.alt_description}
              </p>
              {/* <p className={styles.text}>Autor: {modalImages.user.name}</p>
              <p className={styles.text}>Likes: {modalImages.likes}</p> */}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
