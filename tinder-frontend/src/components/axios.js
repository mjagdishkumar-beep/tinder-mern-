import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-mjk.herokuapp.com/"
})

export default instance