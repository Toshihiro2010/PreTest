export default function (dataArgs) {

    this.id = dataArgs.id
    this.name = dataArgs.name
    this.place_id = dataArgs.place_id
    this.rating = dataArgs.rating
    this.photosArray = dataArgs.photos
    this.photoMain = dataArgs.photos ? dataArgs.photos[0].photo_reference : null
    this.location = {
        lat: dataArgs.geometry.location.lat,
        lng: dataArgs.geometry.location.lng,
    }
}