import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from './actions/products';

class GetProducts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default connect()(GetProducts)
