import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { Navbar, Container } from "react-bootstrap"
import Home from "./Home"
import Bank from "./Bank"
import "./App.scss"
import Shop from "./Shop"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg" className="mb-2">
            <Container>
              <Link to="/">
                <Navbar.Brand>Redux-Ducks</Navbar.Brand>
              </Link>
            </Container>
          </Navbar>
          <Route path="/" component={Home} exact />
          <Route path="/bank" component={Bank} />
          <Route path="/shop" component={Shop} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
