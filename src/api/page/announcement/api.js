import axios from 'axios';
const host = "";
const serverURL = host + "/api";
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
  return axios.get(`${serverURL}/v1/announcements`, {transformResponse:[data => data]})
};

const deleteAnnouncement = (userToken, id) => {
  const authAxios = axios.create({
    baseURL: serverURL,
    headers: {
      Authorization: `Bearer ${userToken}`
    },
  })
  return authAxios.delete(`${serverURL}/v1/announcements/${id}`, {
    "id ": id ,
  })
}


export {
  addAnnouncement, deleteAnnouncement, getAnnouncementList
};
