import actionTypes from '../store/actionTypes';
import services from '../apis/services';
import utils from '../utils';

const {
    FETCH_ALBUMS_START,
    FETCH_ALBUMS_FULFILLED_VALID,
    FETCH_ALBUMS_FULFILLED_INVALID,
    FETCH_ALBUMS_REJECTED,
    RESET_ALBUMS_STATE,
} = actionTypes;

const { getAlbums } = services;
const {
    responseFrom,
    isPayloadValid,
    httpErrorMessage,
    addToExportsWhenTest,
} = utils;

const fetchAlbumsStart = () => ({
    type: FETCH_ALBUMS_START,
});

const fetchAlbumsFulfilledValid = data => ({
    type: FETCH_ALBUMS_FULFILLED_VALID,
    payload: data,
});

const fetchAlbumsFulfilledInvalid = data => ({
    type: FETCH_ALBUMS_FULFILLED_INVALID,
    payload: data,
});

const fetchAlbumsRejected = err => ({
    type: FETCH_ALBUMS_REJECTED,
    payload: err,
});

const resetAlbumsState = () => ({
    type: RESET_ALBUMS_STATE,
});

const handleAlbumsApiResponse = (dispatch, response, error) => {
    if (response) {
        if (isPayloadValid()) {
            dispatch(fetchAlbumsFulfilledValid(response.data));
        } else {
            dispatch(fetchAlbumsFulfilledInvalid(response.data));
        }
    } else {
        const httpError = httpErrorMessage(error);

        dispatch(fetchAlbumsRejected(httpError));
    }
};

const fetchAlbums = () => async dispatch => {
    dispatch(fetchAlbumsStart());

    const [response, error] = await responseFrom(getAlbums());

    handleAlbumsApiResponse(dispatch, response, error);
};

const itemsTest = {};

export default {
    fetchAlbums,
    resetAlbumsState,
    ...addToExportsWhenTest(itemsTest),
};
