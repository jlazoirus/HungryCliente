import { Payments } from '../../mocks/Payments';

export enum PaymentsActionTypes {
  PAYMENTS_FETCH = '[PAYMENTS] FETCH',
  PAYMENTS_SUCCESS = '[PAYMENTS] SUCCESS',
  PAYMENTS_ERROR = '[PAYMENTS] ERROR',

}

export const fetchPayments = () => {
    // return fetch('https://www.google.com/search?q=secret+sauce');
    // Coz We are using mocks , we will handle them as Promises
    return Promise.resolve(Payments)
}

export const PaymentFetchSuccess = (list) => ({
    type: PaymentsActionTypes.PAYMENTS_SUCCESS,
    payload: list
});

// Function that return a Object
export const PaymentFetchError = () => ({
    type: PaymentsActionTypes.PAYMENTS_ERROR
})

// Function that returns a Function that returns a Promise
export const getPayments = () => (dispatch) => {
    return fetchPayments().then(
        list => dispatch(PaymentFetchSuccess(list)),
        error => dispatch(PaymentFetchError())
    );
}

export const PaymentActions = {
    getPayments,
    fetchPayments,
}
