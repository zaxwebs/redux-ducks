import React from 'react'
import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Alert
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addBalance, subBalance, updateAmount } from '../modules/bank'
import Currency from 'react-currency-formatter'

const Bank = props => {
  return (
    <Container>
      <h1>The Bank App</h1>
      <p>This is a simple Redux connected functional component.</p>
      {props.error && <Alert variant="danger">{props.error}</Alert>}
      <Row className="mb-3">
        <Col md="1">Balance:</Col>
        <Col>
          <Currency quantity={props.balance} currency="USD" />
        </Col>
      </Row>
      <Row>
        <Col md="1">Amount:</Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              aria-label="Amount"
              value={props.amount}
              onChange={e => props.updateAmount(e)}
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

      <Button className="mr-3" onClick={props.add}>
        Deposit
      </Button>
      <Button variant="danger" onClick={props.sub}>
        Withdraw
      </Button>
    </Container>
  )
}

const mapStateToProps = state => ({
  balance: state.bank.balance,
  amount: state.bank.amount,
  error: state.bank.error
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addBalance()),
  sub: () => dispatch(subBalance()),
  updateAmount: e => dispatch(updateAmount(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank)
