import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import { FaSearch } from 'react-icons/fa';

const mainUrl = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const PhotosList = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    let url;
    url = `${mainUrl}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const photosList = photos.map((photo) => {
    return <Photo key={photo.id} {...photo} />;
  });

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>{photosList}</div>
      </section>
    </main>
  );
};

export default PhotosList;
