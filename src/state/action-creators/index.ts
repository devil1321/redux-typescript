import { Action } from '../actions'
import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
export const deposit = (amount:number) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:ActionType.DEPOSIT,
        payload:amount
    })
}
export const withdraw = (amount:number) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:ActionType.WITHDRAW,
        payload:amount
    })
}

export const bankrupt = (amount:number) => (dispatch:Dispatch<Action>) =>{
    dispatch({
        type:ActionType.BANKRUPT,
        payload:amount
    })
}

export const actions = {
    deposit,
    withdraw,
    bankrupt
}