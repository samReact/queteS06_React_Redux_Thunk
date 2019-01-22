const areArticlesBeingFetched = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES__BEGIN':
      return true;
    case 'FETCH_ARTICLES__RESOLVE':
      return false;
    default:
      return state;
  }
};

export default areArticlesBeingFetched;
