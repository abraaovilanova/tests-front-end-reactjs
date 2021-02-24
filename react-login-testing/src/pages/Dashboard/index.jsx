import React from 'react'
import PropTypes from 'prop-types'

export default ({ username, products }) => {
    return (
      <div>
        <p>Welcome, {username}!</p>
        {products ? (
          <>
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  <p>Name: {product.name}</p>|<p>Price: {product.price}</p>
                </li>
              ))}
            </ul>
            <strong>
              Total:
              {products
                .map(({ price }) => price)
                .reduce((total, price) => total + price)}
            </strong>
          </>
        ) : (
          <strong>{username} has no registered products</strong>
        )}
      </div>
    )
  }

// Dashboard.propTypes = {
//     username: PropTypes.string,
//     products: PropTypes.array,
//   }