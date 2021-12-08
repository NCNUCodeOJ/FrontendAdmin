import axios from 'axios';
const host = "https://precode.ptass.org";
const serverURL = host + "/api";
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const addQuestion = (userToken, Question, Author, Source, Difficulty, Type, Option) => {
  const authAxios = axios.post({
    baseURL: serverURL,
    headers: {
      Authorization: `Bearer ${userToken}`
    },
  })
  return authAxios.get(`${serverURL}/v1/user`, {
    "question": Question,
    "author": Author,
    "layer": 0,
    "source": Source,
    "difficulty": Difficulty,
    "type": Type,
    "option": [
      Option
    ]
  })
}


export { addQuestion };
