const products = ( state = [], action ) => {
  switch ( action.type ) {
    case 'PRODUCTS':
      return action.products;
    case 'ADD_PRODUCT':
      return [action.product, ...state]
    case 'DELETE_PRODUCT':
      return state.filter( p => p !== action.id )
    case 'UPDATE_PRODUCT':
      return state.map( product => {
        if (action.product.id === product.id)
          return action.product;
        return product;
      })
    default:
      return state;
  }
}

export default products;
