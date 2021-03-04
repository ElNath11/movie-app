import {SEARCH_MOVIE, GET_MOVIES, GET_MOVIE, LOADING} from './types';
import axios from 'axios';

import {APIKeyOwn} from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const getMovies = text => dispatch => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKeyOwn}&s=${text}`)
      .then(response =>
        dispatch({
          type: GET_MOVIES,
          payload: response.data.Search
        })
      )
      .catch(err => console.log(err));
  };

  export const getOmdb = (params) => dispatch => {
    return axios
      .get(`https://www.omdbapi.com`, {
        params: {apikey:APIKeyOwn, ...params} 
      })
      .then(response => {
          dispatch({
          type: GET_MOVIES,
          payload: response.data.Search
        })
        return response;
      })
      .catch(err => console.log(err));
  };

  export const getMovie = id => dispatch => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKeyOwn}&i=${id}`)
      .then(response =>
        dispatch({
          type: GET_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

  export const setLoading = () => {
   return {
     type: LOADING
   }
  };

  // export const getInfiniteScroll = () => {
  //   return {
  //     type: LOADING
      
  //   }
  //  };