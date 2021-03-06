export function searchNearby(google, map, params) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(params, (results, status, pagination) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        resolve(results, pagination);
      } else {
        reject(results, status);
      }
    })
  });
}
/*
 * getDetails
 *
 * Get details from the Google API about one specific place.
 */
export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);
    
    service.getDetails({ placeId }, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return reject(status);
      } else {
        resolve(place);
      }
    })
  })
}
