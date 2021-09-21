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
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (!imageName) {
      return;
    }
    async function getHits() {
      try {
        setStatus('pending');

        const hits = await fetchImages(imageName, page);
        setStatus('resolved');

        if (hits.length === 0) {
          return toast.error(
            `Picture with the name ${imageName} is not in the catalog`,
          );
        }

        setHits(prevState => [...prevState, ...hits]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      } catch (error) {
        setStatus('rejected');
        console.error(error.message);
      }
    }
    getHits();
  }, [imageName, page]);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setHits([]);
    setPage(1);
  };

  const pageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSelectedImage = (src, tags) => {
    setSelectedImage({ src, tags });
  };

  const handleCloseModal = () => {
    setSelectedImage('');
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      {status === 'pending' && <Spinner />}

      {status === 'resolved' && (
        <ImageGallery hits={hits} handleSelectedImage={handleSelectedImage} />
      )}

      {hits.length > 0 && <Button onClick={pageIncrement} />}

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
