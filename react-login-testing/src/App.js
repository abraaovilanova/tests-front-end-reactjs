import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PropTypes from 'prop-types'

import './App.css';

function App({ isLoggedin, username, products }) {
  return (
    <div className="App">
        {
          isLoggedin
          ? (
            <Dashboard username={username} products={products} />
          )
          : (
            <Login />
          )
        }
    </div>
  );
}

// App.propTypes = {
//   isLoggedin: PropTypes.bool,
//   username: PropTypes.string,
//   products: PropTypes.array,
// }

export default App;
