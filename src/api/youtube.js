import axios from 'axios';

// export async function search (keyword) {
//     return axios
//     .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
//     .then(res => {
//       console.log(res);
//       return res.data.items
//     });
//   }

export default class Youtube {
    constructor(){
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
        });
    }

    async search (keyword) {
        // #: private function
        // can call inside of class, but not outside of class
        return keyword? this.#searchByKeyword(keyword) : this.#mostPopular();
        
      }

      async #searchByKeyword(keyword) {
        return this.httpClient
        .get('search', {params: {
            part: 'snippet', 
            maxResults: 25,
            type: 'video',
            q: keyword,
        },
    })
        .then(res => res.data.items)
        .then(items => items.map(item => ({...item, id: item.id.videoId})));
      }

      async #mostPopular() {
        return this.httpClient
        .get('videos', {
            params: {
            part: 'snippet', 
            maxResults: 25,
            chart: 'mostPopular',
        },
    })
        .then(res => res.data.items);
      }

}