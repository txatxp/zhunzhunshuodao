import { ADD2, MINUS2 } from '../constants/counter2'

const INITIAL_STATE = {
  num1: 0,
  num2: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        num1: state.num1 + 10
      }
     case MINUS2:
       return {
         ...state,
         num2: state.num2 + 15
       }
     default:
       return state
  }
}
