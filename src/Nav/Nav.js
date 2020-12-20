import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className='Nav'>
      { /* -swap the buttons for link components 
      <button onClick={() => props.clickPage('list')}> 
        Bookmark List
      </button> */}

      <Link to ={'/'}>
        Bookmark List
      </Link>
      {' '}
      { /* -swap the buttons for link components
      <button onClick={() => props.clickPage('add')}>
        Add Bookmark
      </button> */}

      <Link to={'/add-bookmark'}>
        Add Bookmark
      </Link>
    </nav>
  );
}
