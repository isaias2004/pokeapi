import React from 'react'

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;
  return (
    <div className='pagination'>
        <button onLeftClick={onLeftClick}>
            <div>Left</div>
            </button>
        <div>{page} de {totalPages}</div>
        <button onRightClick={onRightClick}>
            <div>Right</div>
            </button>
    </div>
  );
};

export default Pagination;