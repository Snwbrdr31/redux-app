import $ from 'jquery';
const BASE_URL = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/products'

export const getProducts = () => {
  return (dispatch) => {
    $.ajax({
      url: BASE_URL,
      type: 'GET'
    }).done( products => {
      dispatch({ type: 'PRODUCTS', products })
    });
  }
}

export const addProduct = (product) => {
}

export const updateProduct = (product) => {
}

export const deleteProduct = (id) => {
}
