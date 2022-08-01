import React from 'react';

const Follower = ({avatar, first_name, last_name  }) => {
  return (
    <article className='card'>
      <img src={avatar} alt={avatar} />
      <h4>{first_name}</h4>
      <h4>{last_name}</h4>
      
    </article>
  );
};

export default Follower;
