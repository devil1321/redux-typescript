import { Action } from '../actions'
import { ActionType } from '../action-types'

const initState = 0

// export interface Action {
//     type:string,
//     payload?:number
// }


const accountReducer = (state:number = initState, action:Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
        case ActionType.BANKRUPT:
            return state = 0
        default: 
            return state
    }
}

export default accountReducer