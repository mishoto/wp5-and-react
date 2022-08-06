import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import { FaSearch } from 'react-icons/fa';

const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/${clientId}`;
const searchUrl = `https://api.unsplash.com/search/photos/${clientId}`;
const pageSuffix = '&page=';
const querySuffix = '&query=';
const initialPhotosData = [];
const queryPhotosData = [];


const PhotosList = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const initialUrl = `${mainUrl}${pageSuffix}${page}`;
  const queryUrl = `${searchUrl}${pageSuffix}${page}${querySuffix}${query}`;

  const fetchInitialImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(initialUrl);
      const initialData = await response.json();

      setPhotos((oldPhotos) => {
        initialPhotosData.push(oldPhotos);
        return [...oldPhotos, ...initialData];
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchQueryImages = async()=>{
    setLoading(true);
    try {
      const response = await fetch(queryUrl);
      const queryData = await response.json();

      setPhotos((oldPhotos) => {
        queryPhotosData.push(oldPhotos);
        return [...oldPhotos, ...queryData.results];
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  if(query){
    useEffect(()=>{
      fetchQueryImages()
    },[page])
  }else{
    useEffect(()=>{
      fetchInitialImages()
    },[page])
  }

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 8
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    initialPhotosData.length = 0;
    setPhotos(initialPhotosData)
  };

  const photosList = photos.map((photo) => {
    console.log(photos);
    return <Photo key={photo.id} {...photo} />;
  });

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            className='form-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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
