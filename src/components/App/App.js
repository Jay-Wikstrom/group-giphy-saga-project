
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../Search/Search'
import Images from '../Images/Images';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('component did mount');
    dispatch({
      type: 'GET_IMAGE',
    })
  }, []);

  return (


    <div>
      <h1>Giphy Search!</h1>
      <Search />
      <Images/>
    </div>
  );
}

export default App;
