import Axios from "axios";
const apiKey = 'AIzaSyCFbOA1fUKoRGzn3VEXhks4fvDKRP7WczQ'


export const getDataRestaurant = () => {
    let path = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Bangsue+Restaurant&sensor=true&location=13.8234866,100.5081204&radius=5000&key=' + apiKey
    return Axios.get(path)
}