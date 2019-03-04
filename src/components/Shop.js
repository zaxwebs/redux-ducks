import React from 'react'
import { connect } from 'react-redux'
import { buyImage } from '../modules/shop'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Currency from 'react-currency-formatter'

const Shop = props => {
  return (
    <Container>
      <h1>Compelling Images for Your Business</h1>
      <p>This is a simple Redux connected functional component.</p>
      <Row>
        {props.images.map((image, index) => {
          return (
            <Col key={image.id} className="mb-5" md="4">
              <Card>
                <Card.Img variant="top" src={image.url} />
                <Card.Body>
                  <Card.Title>{image.title}</Card.Title>
                  <Card.Text>{image.desc}</Card.Text>
                  <span className="cost">
                    <Currency quantity={image.cost} currency="USD" />
                  </span>
                  {image.bought ? (
                    <Button variant="success" disabled>
                      Purchased
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => {
                        props.buy(index)
                      }}
                    >
                      Purchase
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  images: state.shop.packs
})

const mapDispatchToProps = dispatch => ({
  buy: id => dispatch(buyImage(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop)
