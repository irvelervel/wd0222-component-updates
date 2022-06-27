// ...this component is definitely going to perform a network call on the mounting phase...

import { Component } from 'react'
import { Card } from 'react-bootstrap'

// ORDER OF CALLING
// 1) render()
// 2) componentDidMount()
// 3) the fetchMovieDetails() function sets the state
// 4) render() fires again!

// GOLDEN RULE! every time you use setState(), render() automagically fires again!

class MovieDetails extends Component {
  // MovieDetails should get the value of the dropdown on mounting,
  // in order to perform a network call and fetch the relevant details!
  // we're passing it down with a prop called movieTitle

  state = {
    movieDetailsObject: null, // it is going to become an object after componentDidMount
  }

  componentDidMount = () => {
    // THIS WILL HAPPEN JUST ONCE!!
    // componentDidMount is a lifecycle method happening upon mounting,
    // just after the initial render()
    this.fetchMovieDetails()
  }

  // we should find a way to re-trigger the fetchMovieDetails() function
  // whenever the movieTitle prop changes value!

  componentDidUpdate = () => {
    // componentDidUpdate will trigger automatically whenever the state changes
    // or the props change!
    console.log('COMPONENT JUST UPDATED')
    // this.fetchMovieDetails()
    // invoking the function just like that brings the application into
    // an infinite loop! why? because the function at the end of the network call
    // sets the state, and that's enough for entering the componentDidUpdate function
    // once again.
    // the solution? we should find a way to call fetchMovieDetails() from componentDidMount
    // not when the STATE changes, ma when a particular props does change: this.props.movieTitle
  }

  fetchMovieDetails = async () => {
    try {
      // we'll perform a network call in here
      let response = await fetch(
        'http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.movieTitle
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data.Search[0])
        this.setState({
          movieDetailsObject: data.Search[0],
        }) // setting the state, re-launches render()!
      } else {
        console.log('error fetching the movie details :(')
      }
    } catch (error) {
      console.log('error happened', error)
    }
  }

  render() {
    return (
      <>
        {this.state.movieDetailsObject ? (
          <Card>
            <Card.Img
              variant="top"
              src={this.state.movieDetailsObject.Poster}
            />
            <Card.Body className="text-dark">
              <Card.Title>{this.state.movieDetailsObject.Title}</Card.Title>
              <Card.Text>
                {this.state.movieDetailsObject.Year} -{' '}
                {this.state.movieDetailsObject.imdbID}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <div>LOADING...</div>
          //   this loading div is the whole rendered content initially!
        )}
      </>
    )
  }
}

export default MovieDetails
