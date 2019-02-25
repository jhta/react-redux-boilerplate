import axios from axios


const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty",
  timeout: 1000,
})

export default instance