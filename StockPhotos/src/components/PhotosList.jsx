import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import { FaSearch } from 'react-icons';


const mainUrl = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const PhotosList = () => {
  const [loading, setLoading] = useState(true);
  const[photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    let url;
    url = `${mainUrl}`;
    try{
      const response = await fetch(url);
      const responseJson = await response.json();

    }catch(error){
      setLoading(false);
      console.log(error);
    }
    
  };

  useEffect(() => {
    
    fetchImages();
  }, []);

  return <div>PhotosList</div>;
};

export default PhotosList;
