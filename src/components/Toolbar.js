import React from 'react';

function Toolbar(props) {
  const {all, chosen, onSelectFilter} = props
  return (
    <nav className='blokBt'>
      {all.map((item, index) => 
        <button
          key={index}
          onClick={(item) => {onSelectFilter(item.target.textContent)}}
          className = {chosen === item ? 'btn blue' : 'btn'}
        >{item}</button>
      )}
    </nav>
  );
}

export default Toolbar;
