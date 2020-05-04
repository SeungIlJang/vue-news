import axios from 'axios';

//1.HTTP Request & Response와 관련된 기본 설정
const config = {    
    baseUrl:'https://api.hnpwa.com/v0'
}

// 2.API 함수들을 정리
const fetchNewsList = () =>{    
    // return axios.get(config.baseUrl+'/news/1.json');
    return axios.get(`${config.baseUrl}/news/1.json`);    
}
const fetchAskList = () => {
    return axios.get(`${config.baseUrl}/ask/1.json`);    
}
const fetchJobsList = () => {
    return axios.get(`${config.baseUrl}/jobs/1.json`);    
}

const fetchList = (pageName) => {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);    
}

const fetchUser = (userName) => {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);    
}
const fetchItem = (id) => {
    return axios.get(`${config.baseUrl}/item/${id}.json`);    
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUser,
    fetchItem,
    fetchList,
}

