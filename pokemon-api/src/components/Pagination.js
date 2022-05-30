import React from 'react'

const Pagination = (props) => {
    const leftImage = 'https://www.grupojmartinez.com/images/ver-buttoni.png'
    const rightImage = 'https://www.grupojmartinez.com/images/ver-buttond.png'
    const {onLeftClick, onRightClick, page, totalPages} = props;
  return (
    <div className='pagination'>
        <button onClick={onLeftClick}>
            <img src={leftImage} width="15px"></img>
            </button>
        <div>{page} de {totalPages}</div>
        <button onClick={onRightClick}>
            <img src={rightImage} width="15px"></img>
            </button>
    </div>
  );
};

export default Pagination;