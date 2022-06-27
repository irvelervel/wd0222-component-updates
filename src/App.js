import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'

class App extends Component {
  state = {
    movieTitle: 'Batman Begins',
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center mt-3 mb-2">
            <Col md={6}>
              <h3>Choose your superhero!</h3>
              <Form.Group>
                <Form.Control
                  as="select"
                  value={this.state.movieTitle}
                  onChange={(e) =>
                    this.setState({ movieTitle: e.target.value })
                  }
                >
                  <option>Batman Begins</option>
                  <option>Man of Steel</option>
                  <option>The Joker</option>
                  <option>The Flash</option>
                  <option>Wonder Woman</option>
                </Form.Control>
              </Form.Group>
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
