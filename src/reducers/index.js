import { combineReducers } from 'redux';
import areArticlesBeingFetched from './areArticlesBeingFetched';
import articles from './articles';

export default combineReducers({
  areArticlesBeingFetched,
  articles,
});
