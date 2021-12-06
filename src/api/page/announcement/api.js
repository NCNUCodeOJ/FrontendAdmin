import axios from 'axios';
const serverURL = "https://precode.ptass.org/api";
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const addAnnouncement = (userToken, Title, Content) => {
  const authAxios = axios.create({
    baseURL: serverURL,
    headers: {
      Authorization: `Bearer ${userToken}`
    },
  })
  return authAxios.post(`${serverURL}/v1/announcements`, {
    "title": Title,
    "content": Content,
  })
};

const getAnnouncementList = () => {
  return axios.get(`${serverURL}/v1/announcements`)
};

const deleteAnnouncement = (userToken, announcementID) => {
  const authAxios = axios.create({
    baseURL: serverURL,
    headers: {
      Authorization: `Bearer ${userToken}`
    },
  })
  return authAxios.post(`${serverURL}/v1/announcements/{id}`, {
    "id ": announcementID ,
  })
}


export {
  addAnnouncement, deleteAnnouncement, getAnnouncementList
};
