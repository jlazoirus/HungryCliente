import { PaymentsActionTypes } from '../actions/PaymentsActions';

type Action = {
    type: string,
    payload: any
}

export default function PaymentReducer (state = { inProgress: false}, action: Action) {
    switch (action.type) {
        case PaymentsActionTypes.add_total:
            return { ...state, inProgress: true,  total: action.payload};
        case PaymentsActionTypes.add_card:
            return { ...state, inProgress: true,  card: action.payload};
        case PaymentsActionTypes.end: 
            return { inProgress: false };
        case PaymentsActionTypes.end: 
            return { ...state, inProgress: true };
        default:
            return state;
    }
}