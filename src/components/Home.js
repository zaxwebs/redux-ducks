import React from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Container>
      <h1>Welcome to Redux-Ducks</h1>
      This is a demo application that utilizes the Ducks structural setup for
      Redux.
      <br />
      <p>
        This setup makes it easy to organize related reducers, actions and
        constants into single files thus making the developer more efficient as
        it requires less boilerplate structuring than the traditional method.
      </p>
      <p>
        At the same time, this app also utilizes React-Router to demo how such a
        setup would work with routing.
      </p>
      <p>
        Take a look at the sub-apps below that are connected to the created
        Redux store.
      </p>
      <Link to="/bank">
        <Button className="mr-3">Bank App</Button>
      </Link>
      <Link to="/shop">
        <Button>Image Shop App</Button>
      </Link>
    </Container>
  )
}

export default Home
