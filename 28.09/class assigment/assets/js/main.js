const displayLocation = () => {
  getUserLocation(
    (location) => console.log(`${location.latitude}, ${location.longitude}`),
    (error) => console.log(`error is ${error}`)
  );
};

const getUserLocation = (successCallback, errorCallback) => {
  try {
    navigator.geolocation.getCurrentPosition((position) =>
      successCallback(position.coords)
    );
  } catch (err) {
    errorCallback(err);
  }
};
