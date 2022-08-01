import { useState, useEffect } from 'react';
import paginate from './utils';
const url = 'https://random-data-api.com/api/users/random_user?size=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(()=>{
    getUsers();
  },[])

  return { loading, data};
};

