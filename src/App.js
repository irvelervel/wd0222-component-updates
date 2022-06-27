import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'
import MovieDropdown from './components/MovieDropdown'

class App extends Component {
  state = {
    movieTitle: 'Batman Begins',
  }

  handleMovieTitle = (newMovie) => {
    // I need to write this function here, because I need to invoke setState
    // in the component I want to change the state of!
    this.setState({
      movieTitle: newMovie,
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-3 mb-2">
            <Col md={6}>
              <MovieDropdown
                movieTitle={this.state.movieTitle} // READ MODE
                handleMovieTitle={this.handleMovieTitle} // "WRITE" MODE
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-2">
            <Col md={6}>
              <MovieDetails movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
