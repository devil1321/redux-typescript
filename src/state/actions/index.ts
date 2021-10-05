import { ActionType } from '../action-types'

interface DepositAction {
    type:ActionType.DEPOSIT,
    payload:number
}
interface WithDrawAction {
    type:ActionType.WITHDRAW,
    payload:number
}
interface Bankrupt {
    type:ActionType.BANKRUPT,
}

export type Action = DepositAction | WithDrawAction | Bankrupt