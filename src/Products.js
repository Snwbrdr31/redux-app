import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Products extends React.Component {
  render() {
    let products = this.props.products.map( product => {
      return (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      )
    });
    return (
      <div>
        <ul>
          { products }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products }
}

export default connect(mapStateToProps)(Products);
