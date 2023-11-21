import axios from 'axios';

export default class FakeYoutubeClient {
  async search({params}) {
    //return params.relatedToVideoId  
    return params.channelId  
      ? axios.get('/videos/relatedbyChannelId.json')
      : axios.get('/videos/search.json');
    // return axios.get('/videos/search.json');
  }
  async videos() {
    return axios.get('/videos/popular.json');
  }
  async channels() {
    return axios.get('/videos/channel.json');
  }
}
