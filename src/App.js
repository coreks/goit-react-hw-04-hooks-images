import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchImages } from './services/imagesApi';

import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Spinner from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    async function getImages() {
      try {
        setStatus('pending');

        const images = await fetchImages(imageName, page);
        setStatus('resolved');

        if (!images.length) {
          return toast.error(
            `Picture with the name ${imageName} is not in the catalog`,
          );
        }

        setImages(prevState => [...prevState, ...images]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setStatus('rejected');
        console.error(error.message);
      }
    }
    getImages();
  }, [imageName, page]);

  const handleFormSubmit = newImageName => {
    if (imageName === newImageName) {
      return;
    }

    setImageName(newImageName);
    setImages([]);
    setPage(1);
  };

  const pageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSelectedImage = (src, tags) => {
    setSelectedImage({ src, tags });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const isShowButton = images.length > 0;

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery images={images} handleSelectedImage={handleSelectedImage} />

      {status === 'pending' && <Spinner />}

      {isShowButton && <Button onClick={pageIncrement} />}

      {selectedImage && (
        <Modal
          onClose={handleCloseModal}
          src={selectedImage.src}
          alt={selectedImage.tags}
        />
      )}

      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
