// TODO - Use all of these from the library

/**
 * Returns Promise chain (resolve, reject)
 * @param {Promise} promise
 * @returns if response [`response`, `null`]
 * @returns if error [`null`, `error`]
 */
const responseFrom = promise => {
    return promise
        .then(response => [response, null])
        .catch(error => [null, error]);
};

const isPayloadValid = () => {
    return true;
};

/**
 * Retrieves an error message from API response when an HTTP error.
 * If message is longer than 150 chars => truncateString.
 * @param {*} error
 * @returns `string`
 */
const httpErrorMessage = error => {
    let errorMsg = 'Something Has Gone Wrong';

    if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
    ) {
        errorMsg = error.response.data.message;
    } else if (error && error.message) {
        errorMsg = error.message;
    } else if (error && error.response && error.response.status) {
        errorMsg = `Request Failed With Status ${error.response.status}.`;
    } else if (error && error.data && error.data.message) {
        errorMsg = error.data.message;
    } else if (error && error.data && error.data.status) {
        errorMsg = `Request Failed With Status ${error.data.status}.`;
    }

    return errorMsg;
};

/**
 * Returns same object that receives if NODE_ENV === 'test', else returns empty object
 * @param {Object} obj
 * @returns `object`
 */
const addToExportsWhenTest = obj => {
    return process.env.NODE_ENV === 'test' ? obj : {};
};

export default {
    responseFrom,
    isPayloadValid,
    httpErrorMessage,
    addToExportsWhenTest,
};
