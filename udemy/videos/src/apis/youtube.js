import axios from 'axios';

const KEY = 'AIzaSyC55zyGkLTtaMUGUF6XE56Rr4c91IKVBFk'

export default axios.create({
 baseURL: 'https://www.googleapis.com/youtube/v3',
 params: {
    part: 'snippet',
    type: 'video',
    maxrResults: 5,
    key: KEY
 }
});
