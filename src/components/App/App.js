
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../Search/Search'
import Images from '../Images/Images';
import Favorites from '../Favorites/Favorites'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

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
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>


      <Route exact path="/">
          <Search />
          <Images />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
  
      </Router>

    </div>
  );
}

export default App;
