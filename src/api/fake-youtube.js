import axios from 'axios';

// export async function search (keyword) {
//     return axios
//     .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
//     .then(res => {
//       console.log(res);
//       return res.data.items
//     });
//   }

export default class FakeYoutube {
    constructor(){


    }

    async search (keyword) {
        // #: private function
        // can call inside of class, but not outside of class
        return keyword? this.#searchByKeyword(keyword) : this.#mostPopular();
        
      }

      async #searchByKeyword() {
        return axios
        .get(`/videos/search.json`)
        .then(res => res.data.items)
        .then(items => items.map(item => ({...item, id: item.id.videoId})));
      }

      async #mostPopular() {
        return axios
        .get(`/videos/popular.json`)
        .then(res => res.data.items);
      }

}