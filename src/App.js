import React, { Component } from 'react';
import './App.css';
import MovieList from './Components/MovieList'
import MovieListData from './Data/movieListData'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList: MovieListData,
      searchInput: '',
      addInput: ''
    }
  }

// Search Button Click Function
  onSearchClick () {
    this.setState({
      movieList: MovieListData.filter(movie =>
        movie.title.includes(this.state.searchInput)
      )
    })
  }

// Add Button Click Function
  onAddClick () {
    MovieListData.push({title: this.state.addInput})
    this.setState({
      movieList: MovieListData
    })
  }

// Updates Search Input in State
  handleChangeSearch(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

// Updates Add Input in State
  handleChangeAdd(event) {
    this.setState({
      addInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <div className="add-container">
          <input
            id="addInput"
            type="text"
            placeholder="Add movie title here.."
            className="add"
            onChange={this.handleChangeAdd.bind(this)}></input>
          <button onClick={this.onAddClick.bind(this)}>Add</button>
        </div>
        <br />
        <div className="search-container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search.."
            className="search"
            onChange={this.handleChangeSearch.bind(this)}></input>
          <button onClick={this.onSearchClick.bind(this)}>Submit</button>
        </div>
        <br />
        <MovieList movies={this.state.movieList} />
      </div>
    )
  }
}




export default App;
