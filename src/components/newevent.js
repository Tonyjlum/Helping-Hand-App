import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const RESETSTATE = {
  datetime: "",
  title: "",
  discription: "",
  max_volunteers: 5,
  address: "",
  lat: 0,
  long: 0
}

class NewEvent extends Component {
  state = RESETSTATE

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, console.log(this.state))
  }


  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyA-kXyO4hu_HuTp2rb36ub5Adun3uY88n8`)
    .then(response => response.json())
    .then(geolocation => this.setState({
      lat: geolocation.results[0].geometry.location.lat,
      long: geolocation.results[0].geometry.location.lng
    }, () => this.postNewEvent()))
  }

  postNewEvent = () => {
    fetch(`http://localhost:3000/events`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        coordinator_id: this.props.state.currentUser.id,
        datetime: this.state.datetime,
        title: this.state.title,
        max_volunteers: this.state.max_volunteers,
        address: this.state.address,
        description: this.state.discription,
        lat: this.state.lat,
        long: this.state.long
      })
    })
    .then(response => response.json())
    .then(json => this.props.addEventToStore(json))
    .then(() => this.setState(RESETSTATE))
  }


  render() {
    return (
      <Form
        ClassName= "new-event-form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}>
        <Row>
            <Col xs={5}>
            <Form.Group controlId="title">
              <Form.Label>Event Title:</Form.Label>
              <Form.Control type="text" value={this.state.title} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            </Col>
            <Col xs={7}>
            <Form.Group controlId="discription">
              <Form.Label>Discription: </Form.Label>
              <Form.Control type="text"placeholder="e.g. clean up the trash from Coney Island"  value={this.state.discription} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            </Col>
        </Row>
        <Row>
          <Col xs={5}>
          <Form.Group controlId="address">
            <Form.Label>Address: </Form.Label>
            <Form.Control type="text" value={this.state.address} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          </Col>
          <Col xs={2}>
          <Form.Group controlId="max_volunteers">
            <Form.Label>Volunteers:</Form.Label>
            <Form.Control type="number" value={this.state.max_volunteers} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          </Col>
          <Col xs={5}>
          <Form.Group controlId="datetime">
            <Form.Label>Date and Time</Form.Label>
            <Form.Control type="datetime-local" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" >
          Plan the event!
        </Button>
      </Form>
    );
  }

}

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = {
  addEventToStore: (event) => ({type: "ADD_NEW_EVENT", payload: event})
}


export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)
