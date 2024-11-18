import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./App.module.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "S7fJoSs7dZ76egNkIJ7y9brZtLi6uVWsnhV3owtbRt4";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [displayLoadMore, setDisplayLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState(null);

  const handleSubmit = (event) => {
    // функція обробние
    event.preventDefault(); // Зупиняємо стандартну поведінку форми, щоб сторінка не перезавантажувалась.
    const form = event.currentTarget; // Отримуємо посилання на форму, яка була сабмітнута
    const inputValue = form.elements.searchBarInput.value.trim(); // Отримуємо значення з поля введення (інпуту) з іменем "searchBarInput" і прибираємо пробіли з початку та кінця введеного рядка
    if (inputValue === "") {
      toast.error("Enter a word"); // Якщо введене значення порожнє (після видалення пробілів), показуємо сповіщення через toast
      return; // Зупиняємо виконання функції, оскільки поле порожнє
    }
    setDisplayLoadMore(false);
    setQuery(inputValue); // Якщо значення введено, оновлюємо стан пошукового слова
    setPage(1); // Скидаємо номер сторінки на 1
    setPhotos([]); // Очищаємо масив зображень, щоб підготувати його для нових результатів пошуку
    form.reset(); // Скидаємо форму після сабміту, щоб очистити поле пошуку
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (photos) => {
    setModalIsOpen(true);
    setModalImages(photos);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages(null);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!query) return;

      setDisplayLoadMore(false);
      try {
        setIsLoading(true);
        const { data } = await axios.get(API_URL, {
          params: {
            client_id: API_KEY,
            query,
            page,
            per_page: 16,
          },
        });

        if (data.total_pages === 0 || data.total_pages === page) {
          setDisplayLoadMore(false);
        } else {
          setDisplayLoadMore(true);
        }

        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  return (
    <div className={styles.mainWrapper}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {displayLoadMore && <LoadMoreBtn onClick={handleClick} />}
      {modalIsOpen && (
        <ImageModal
          modalImages={modalImages}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}
export default App;
