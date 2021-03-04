import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';
        content = typeof movies !== 'undefined' ? movies.map((x, index) => 
            <MovieCard key={index} movie={x}/>
        ) : <div className="text-center mt-3" style={{ margin: '0 auto' }}>Tolong ketikan nama film yang benar pada kolom pencarian</div>;
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.movies
});
export default connect(mapStateToProps)(MoviesContainer);
