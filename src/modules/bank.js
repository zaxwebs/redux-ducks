//constants
const ADD = "app/bank/add"
const SUB = "app/bank/sub"
const SET_AMOUNT = "app/bank/set_amount"
//store
const initialState = {
  balance: 500000,
  amount: 1000,
  error: false
}
//actions
export const addBalance = () => {
  return {
    type: ADD
  }
}
export const subBalance = () => {
  return {
    type: SUB
  }
}

export const updateAmount = e => {
  return {
    type: SET_AMOUNT,
    payload: e.target.value
  }
}
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, balance: state.balance + state.amount }
    case SUB:
      if (state.amount <= state.balance) {
        return { ...state, balance: state.balance - state.amount }
      } else {
        return {
          ...state,
          error: "You don't have enough balance for this transaction."
        }
      }
    case SET_AMOUNT:
      let amount = action.payload
      if (amount === "") {
        amount = 0
      }
      amount = parseInt(amount, 10)
      return { ...state, amount: amount }
    default:
      return state
  }
}
