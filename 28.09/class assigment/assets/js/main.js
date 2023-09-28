const displayLocation = () => {
    getUserLocation(location => console.log(`${location.latitude}, ${location.longitude}`));
}

const getUserLocation = (callback) => {
    navigator.geolocation.getCurrentPosition(position => callback(position.coords));
}