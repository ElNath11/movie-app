import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import SearchInput from './SearchInput';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';
import { getOmdb } from '../../actions/searchActions';



const Landing = () => {
    const loading =  useSelector(state => state.movies.loading)
    const dispatch = useDispatch(null);
    useEffect(() => {
        dispatch(getOmdb(
            {s: 'Harry'}
        ))
    })
        return (
            <div className="container">
                <SearchInput />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )    
}

export default Landing;