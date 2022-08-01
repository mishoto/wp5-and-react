import React, { useState, useEffect } from 'react';
import Follower from './Follower';
import { useFetch } from './useFetch';

const FollowerList = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  
  

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    setUsers(data[page]);
    
  }, [page]);

  

  

  const prevPage = (currentPage) => {
    if (currentPage > 0 && currentPage < data.length) {
      setPage(currentPage - 1);
    } else {
      setPage(0);
    }
  };

  const nextPage = (currentPage) => {
    
    if (currentPage < data.length - 1) {
      setPage(currentPage + 1);
    } else {
      setPage(data.length - 1);
    }
  };

  const test = ()=>{
    data.map((item, index)=>{
      console.log(item[index]);
    })
  }

  test();


  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
        <section className='followers'>
          <div className='container'>
            {data.map((user, index) => (
              
                
            
                  <Follower key={user[index]} {...user[index]} />
                
              
            ))}
          </div>
          {!loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={() => prevPage(page)}>
                prev
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? 'active-btn' : null
                    }`}
                    onClick={() => handlePage(index)}>
                    {index + 1}
                  </button>
                );
              })}
              <button className='next-btn' onClick={() => nextPage(page)}>
                next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default FollowerList;
