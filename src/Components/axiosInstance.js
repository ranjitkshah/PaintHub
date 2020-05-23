import  axios from 'axios'
const instance= axios.create({baseURL:'http://painthb.herokuapp.com/',timeout:100000});
export default instance;