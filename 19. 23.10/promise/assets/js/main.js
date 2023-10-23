// get user location with callbacks
const displayUserLocation = () => {
    getUserLocation(
        data => console.log(data),
        err => console.error(err),
    )
}

const getUserLocation = (successCallback, errorCallback) => {
    navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
    )
}

// get user location with promise
const displayUserLocationWithPromise = () => {
    getUserLocationWithPromise()
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(() => console.log("finished"));
}

// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

const getUserLocationWithPromise = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (data) => resolve(data),
            (err) => reject(err),
        );
    });
}