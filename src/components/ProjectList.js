import React from 'react';

function ProjectList(props) {
  const {data} = props;
  return (
    <div className='conts'>
      {data.map((item, index) =>
        <img
          className='const_item'
          key={index}
          src={item.img}
          alt={item.category}
        />
      )}
    </div>
  );
}

export default ProjectList;
