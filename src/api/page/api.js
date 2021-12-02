import axios from 'axios';
const serverURL = "http://localhost:8000";
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const getUserInfo = () => {
  return axios.get(`${serverURL}/accounts/user/`);
}

const logout = () => {
  return axios.post(`${serverURL}/accounts/logout/`);
}

const newExamSubmition=(MultipleAnswer,TrueFalseAnswer,ShortAnswer)=>{
  return axios.post(`${serverURL}/high/info`,{
    "MultipleAnswer":MultipleAnswer,
    "TrueFalseAnswer":TrueFalseAnswer,
    "ShortAnswer":ShortAnswer,
  });
}

export {getUserInfo, logout, newExamSubmition};
