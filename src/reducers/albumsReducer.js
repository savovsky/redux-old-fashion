import defaultStates from '../store/defaultStates';
import actionTypes from '../store/actionTypes';

const { albums: defaultState } = defaultStates;
const {
    FETCH_ALBUMS_START,
    FETCH_ALBUMS_FULFILLED_VALID,
    FETCH_ALBUMS_FULFILLED_INVALID,
    FETCH_ALBUMS_REJECTED,
    RESET_ALBUMS_STATE,
} = actionTypes;

export default (state = defaultState, action = { type: null }) => {
    switch (action.type) {
        case FETCH_ALBUMS_START: {
            return {
                ...state,
                isFetching: true,
                isFetchFulfilled: false,
                isFetchRejected: false,
                fetchError: '',
                isPayloadValid: null,
                data: [],
            };
        }

        case FETCH_ALBUMS_FULFILLED_VALID: {
            return {
                ...state,
                isFetching: false,
                isFetchFulfilled: true,
                isFetchRejected: false,
                fetchError: '',
                isPayloadValid: true,
                data: action.payload,
            };
        }

        case FETCH_ALBUMS_FULFILLED_INVALID: {
            return {
                ...state,
                isFetching: false,
                isFetchFulfilled: true,
                isFetchRejected: false,
                fetchError: '',
                isPayloadValid: false,
                data: action.payload,
            };
        }

        case FETCH_ALBUMS_REJECTED: {
            return {
                ...state,
                isFetching: false,
                isFetchFulfilled: false,
                isFetchRejected: true,
                fetchError: action.payload,
                isPayloadValid: null,
                data: [],
            };
        }

        case RESET_ALBUMS_STATE: {
            return {
                ...state,
                ...defaultState,
            };
        }

        default:
            return state;
    }
};
