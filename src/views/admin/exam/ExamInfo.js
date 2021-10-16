import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CContainer, CButton, CRow,
  CCol, CInput,
} from '@coreui/react'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { newExamSubmition } from '../../../api/page/api';

const UpdateExamLink = (props) => {
  return <CButton type="button" component="a" {...props} />;
}

function createQuestion(type, question, option1, option2, option3, option4) {
  return { type, question, option1, option2, option3, option4 };
  // type:
  // 1:選擇
  // 2:是非
  // 3:簡答
}

function createTopic(sort, description, distribution) {
  return { sort, description, distribution }
}

const ExamItem = (props) => {
  const x = props.item;
  return (
    <>
      <div>
        <CRow sm="12" md="10" className="mx-auto">
          <CCol sm="7" md="8">
            <h1 className="card-title mb-0">{x.examName}</h1>
          </CCol>
          <CCol sm="3" md="2" className="ml-auto d-flex flex-column">
            <UpdateExamLink color="success" className="float-right"
              href={`#course/homeworklist`}>
              修改測驗
            </UpdateExamLink>
          </CCol>
        </CRow>
        <hr />
        <CRow sm="10" md="10" className="ml-2 my-2">
          <h4 className="my-auto font-weight-bold">測驗說明: </h4>
          <h4 className="my-auto">
            {x.examDescription}
          </h4>
        </CRow>
        <CRow sm="10" md="10" className="ml-2 my-2">
          <h4 className="font-weight-bold">測驗難度: </h4>
          <Rating
            name="examDifficulty"
            defaultValue={x.examDifficulty}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            readOnly
          />
        </CRow>
        <CRow sm="12" md="12" className="ml-2 my-2">
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">開放時間: </h4>
              <h4 className="my-auto">
                {x.examEndDate}
              </h4>
            </CRow>
          </CCol>
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">截止時間:</h4>
              <h4 className="my-auto">
                {x.examStartDate}
              </h4>
            </CRow>
          </CCol>
        </CRow>
      </div>
    </>
  );
}

const ExamInfo = () => {
  const [Exam, setExam] = useState([]);
  const history = useHistory();
  const isLogin = useSelector(state => state.isLogin);
  const [MultipleAnswer, setMultipleAnswer] = useState("");
  const [TrueFalseAnswer, setTrueFalseAnswer] = useState("");
  const [ShortAnswer, setShortAnswer] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorComponent, setErrorComponent] = useState([]);
  useEffect(() => {
    setExam([
      {
        "id": 0,
        "examName": "Hello World",
        "examDescription": "考試期間請勿與他人交談或使用聊天軟體，作弊者以零分計算。",
        "examDifficulty": 1,
        "examStartDate": "2021/01/10 09:10",
        "examEndDate": "2021/01/10 12:00"
      }
    ]);
  }, []);
  const Questionrows = [
    createQuestion(1, '請問在python中print( )的用途是?', '輸入', '條件判斷式', '輸出', '定義變數'),
    createQuestion(2, '在python中input( )是輸出'),
    createQuestion(3, '請問在python中輸出是?')
  ];
  const Topicrows = [
    createTopic(1, '選擇題', 60)
  ];
  if (!isLogin) {
    return (
      <Redirect to="/" />
    )
  }
  const submit = () => {
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };
    const errorList = [];
    let errorMsg = "";
    let errorOccurred = false;
    if (MultipleAnswer !== "1" && MultipleAnswer !== "2" && MultipleAnswer !== "3" && MultipleAnswer !== "4") {
      errorMsg += "選擇題請填寫1-4其中一個編號 ";
      errorList.push("MultipleAnswer");
      errorOccurred = true;
    }
    if (TrueFalseAnswer !== "T" && TrueFalseAnswer !== "F") {
      errorMsg += "是非題請填寫'T'或'F' ";
      errorList.push("TrueFalseAnswer");
      errorOccurred = true;
    }
    if (ShortAnswer === "") {
      errorMsg += "未填寫簡答題";
      errorList.push("ShortAnswer");
      errorOccurred = true;
    }
    setErrorMsg(errorMsg);
    setErrorComponent(errorList);
    if (errorOccurred)
      return;
    newExamSubmition(MultipleAnswer, TrueFalseAnswer, ShortAnswer)
      .then((rs) => {
        const data = rs.data;
        toast.info(data.message, options);
        history.push('/');
      })
      .catch((err) => {
        const data = err.response.data;
        toast.error(data.message, options);
      })
  }
  return (
    <>
      <CContainer className="px-2">
        {
          Exam.map((x) => (
            <ExamItem key={x.id} item={x} />
          ))
        }
        {
          Topicrows.map((obj) => {
            return (
              <h3 className="ml-2 my-2">
                {obj.description}
                {obj.distribution}%
              </h3>
            )
          })
        }
        {
          Questionrows.map((obj, index) => {
            if (obj.type === 1)
              return (
                <div key={obj.num}>
                  <CRow xs="12" md="10"
                    className="ml-2 my-2">
                    <h4 className="px-0">{index + 1}. (</h4>
                    <CCol xs={1} md={1}>
                      <CInput
                        id="MultipleAnswer"
                        alignitems="center"
                        textalign="center"
                        inputProps={{
                          'aria-label': 'naked',
                          'maxLength': 1
                        }} type='text'
                        onChange={(event) => setMultipleAnswer(event.target.value)} />
                    </CCol>
                    <h4 className="px-0">)</h4>
                    <CCol xs={10} md={10}>
                      <h4>{obj.question}</h4>
                      <h4>
                        (A) {obj.option1}
                        (B) {obj.option2}
                        (C) {obj.option3}
                        (D) {obj.option4}
                      </h4>
                    </CCol>
                  </CRow>
                </div>
              );
            else if (obj.type === 2)
              return (
                <div key={obj.num}>
                  <CRow xs="12" md="10"
                    className="ml-2 my-2">
                    <h4 className="px-0">{index + 1}. (</h4>
                    <CCol xs={1} md={1}>
                      <CInput
                        id="TrueFalseAnswer"
                        alignitems="center"
                        textalign="center"
                        inputProps={{
                          'aria-label': 'naked',
                          'maxLength': 1
                        }} type='text'
                        onChange={(event) => setTrueFalseAnswer(event.target.value)} />
                    </CCol>
                    <h4 className="px-0">)</h4>
                    <CCol item xs={10} md={10}>
                      <h4>
                        {obj.question}
                      </h4>
                    </CCol>
                  </CRow>
                </div>
              );
            else if (obj.type === 3)
              return (
                <div key={obj.num}>
                  <CRow xs="12" md="10"
                    className="ml-2 my-2">
                    <h4 className="px-0">{index + 1}.</h4>
                    <CCol xs={10} md={10}>
                      <h4>
                        {obj.question}
                      </h4>
                    </CCol>
                  </CRow>
                  <CRow xs="12" md="10"
                    className="ml-3 my-2">
                    <textarea
                      className="w-75"
                      id="ShortAnswer"
                      rows={4}
                      variant="outlined"
                      multiline
                      fullWidth
                      onChange={(event) => setShortAnswer(event.target.value)} />
                  </CRow>
                </div>
              );
            return null;
          })
        }

        <CRow className="d-flex justify-content-center my-2">
          <CCol xa="3" sm="3" md="3" lg="3" className="d-flex flex-column">
            <CButton
              className="float-center"
              onClick={submit}
              color="primary"
            >
              提交
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}
export default ExamInfo;
