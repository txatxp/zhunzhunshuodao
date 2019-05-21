import {
    ADD2,
    MINUS2
  } from '../constants/counter2'
  
  export const add = () => {
    return {
      type: ADD2
    }
  }
  export const minus = () => {
    return {
      type: MINUS2
    }
  }
  
  // 异步的action
  export function asyncAdd () {
    return dispatch => {
      setTimeout(() => {
        dispatch(add())
      }, 2000)
    }
  }
  