import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  show = () => {
    return (
      <div>
        <h1>{this.props.product.name}</h1>
        <button onClick={this.toggleEdit}>Edit</button>
      </div>
    )
  }

  edit = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input defaultValue={this.props.product.name} ref={ n => this.name = n } />
        <br />
        <button type="button" onClick={this.toggleEdit}>Cancel</button>
        {' '}
        <button>Save</button>
      </form>
    )
  }

  render() {
    if (this.props.product && this.props.product.id) {
      return this.state.edit ? this.edit() : this.show();
    } else {
      return (<h3>Loading Product...</h3>)
    }
  }
}

const mapStateToProps = (state, props) => {
  return { product: state.products.find( p => p.id === parseInt(props.params.id) ) }
}

export default connect(mapStateToProps)(Product);
