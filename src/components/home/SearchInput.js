import React, { Component } from 'react'
import {searchMovie, getMovies, setLoading, getOmdb } from '../../actions/searchActions'
import  {connect} from 'react-redux' 

export class SearchInput extends Component {
    constructor(props){
        super(props);
            this.state = {
                page: 2,
        }
    }

    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        const { page } = this.state;
        e.preventDefault();
        // this.props.getMovies(this.props.text);
        this.props.getOmdb({
            s: this.props.text,
            p: page,
        });
        // debugger;
        this.props.setLoading();
    }

    render() {
        return (
            <div className=" jumbotron-fluid mt-5 text-center">
            <div className="container">
            <form id="searchForm"
                onSubmit={this.onSubmit}
            >
                <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="What are you searching for ..."
                onChange={this.onChange}
                />
                <button type="submit" className="bbtn btn-primary btn-lg btn-block mt-3" style={{ cursor: 'pointer' }}>
                Search
                </button>
            </form>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
  });

export default connect(
    mapStateToProps,
    {searchMovie, getMovies, setLoading, getOmdb})
(SearchInput);