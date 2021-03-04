import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ModalImage from "react-modal-image";

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="col-md-3 mb-5 mt-5">
            <div className="card card-body bg-light text-center h-100">
            <div className="w-100 mb-2">
                <ModalImage
                    small={movie.Poster}
                    large={movie.Poster}
                    hideDownload
                    hideZoom
                    alt="Poster"
                />
            </div>
            <h5 className="text-dark card-title">
                {movie.Title} - {movie.Year}
            </h5>
            <Link className="btn btn-outline-info" to={'/movie/' + movie.imdbID}>
                Movie Details
            </Link>
            </div>
        </div>
        )
    }
}

export default MovieCard
