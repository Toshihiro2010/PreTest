import Axios from "axios";
const apiKey = 'AIzaSyCFbOA1fUKoRGzn3VEXhks4fvDKRP7WczQ'


export const getDataRestaurant = () => {
    let path = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Bangsue+Restaurant&sensor=true&location=13.8234866,100.5081204&radius=5000&key=' + apiKey
    return Axios.get(path)
}

export const getDataNextPageToken = (token) => {
    let key = '&key=' + apiKey
    let pagetoken = 'pagetoken=' + token
    let path = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' + pagetoken + key
    return Axios.get(path)
}

export const getImageGoogle = (googleImage) => {
    let key = '&key=' + apiKey
    // let image = '&photoreference=CmRaAAAALOaa6IowfyTD_bqrRzv6zM58pgj8Trk-7lvRlcc9p-vnZuRLhBXbavBMlN87toEA2b8GJmDbKNUJnU1S9AQBgkmhba5RgL34DihTZEDGiSs9jWdmuyGc-KzCZYKNlhwNEhBRRbWkBB1HHs95ejwCCe8RGhR3X_DtixqcEbBu1fb0u3RU_VDlwA'
    let image = '&photoreference=' + googleImage
    let path = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=600' + image + key
    return path
}