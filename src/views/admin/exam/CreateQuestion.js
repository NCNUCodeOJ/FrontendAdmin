import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CContainer, CButton, CRow,
  CCol, CDataTable, CModal,
  CModalBody, CModalFooter, CModalHeader,
  CForm, CFormGroup,
  CInput, CSelect,
} from '@coreui/react';
import { toast } from 'react-toastify';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import addQuestion from '../../../api/page/homework/api';
import ErrorMsg from '../pkg/ErrorMsg';

const allQuestion =
  [
    {
      question: "請問在python中print(  )的用途是?",
      author: 1,
      layer: 0,
      source: '108.全國程式設計比賽',
      difficulty: 2,
      type: 1,
      option: [
        {
          content: '輸入',
          answer: false,
          question_id: 0,
          sort: 0
        },
        {
          content: '條件判斷式',
          answer: false,
          question_id: 0,
          sort: 1
        },
        {
          content: '輸出',
          answer: true,
          question_id: 0,
          sort: 2
        },
        {
          content: '定義變數',
          answer: false,
          question_id: 0,
          sort: 3
        }
      ]
    },
    {
      question: "print(  )在python中是輸出",
      author: 1,
      layer: 0,
      source: '108.全國程式設計比賽',
      difficulty: 1,
      type: 2,
      option: [
        {
          content: 'O',
          answer: true,
          question_id: 1,
          sort: 0
        },
        {
          content: 'X',
          answer: false,
          question_id: 1,
          sort: 1
        }
      ]
    },
    {
      question: "在python中輸出的語法為?",
      author: 1,
      layer: 0,
      source: '108.全國程式設計比賽',
      difficulty: 1,
      type: 3,
      option: [
        {
          content: 'print()',
          answer: true,
          question_id: 2,
          sort: 0
        }
      ]
    }
  ];
const tempAllQuestionArray = allQuestion.map(x =>
  createQuestionOptionArray(x.type, x.difficulty, x.question, x.source, x.option));
tempAllQuestionArray['totalDifficulty'] = 0;

function createQuestionOptionArray(type, questionDifficulty, question, questionSource, choiceOption) {
  const questionArray = [];
  let questionTypeContent = null;
  // type:
  // 1:選擇
  // 2:是非
  // 3:簡答
  if (type === 1) {
    questionTypeContent = '選擇題';
    for (var optionKey in choiceOption) {
      if (choiceOption[optionKey].answer) {
        if (choiceOption[optionKey].sort === 0) {
          questionArray['questionAnswer'] = "A";
        } else if (choiceOption[optionKey].sort === 1) {
          questionArray['questionAnswer'] = "B";
        } else if (choiceOption[optionKey].sort === 2) {
          questionArray['questionAnswer'] = "C";
        } else if (choiceOption[optionKey].sort === 3) {
          questionArray['questionAnswer'] = "D";
        }
      }
      questionArray['option' + optionKey] = choiceOption[optionKey].content;
      questionArray['id'] = choiceOption[optionKey].question_id;
    }
  } else if (type === 2) {
    questionTypeContent = '是非題';
    for (var TFKey in choiceOption) {
      if (choiceOption[TFKey].answer) {
        questionArray['questionAnswer'] = choiceOption[TFKey].content;
      }
      questionArray['option' + TFKey] = choiceOption[TFKey].content;
      questionArray['id'] = choiceOption[TFKey].question_id;
    }
  } else if (type === 3) {
    questionTypeContent = '問答題';
    for (var SAKey in choiceOption) {
      if (choiceOption[SAKey].answer) {
        questionArray['questionAnswer'] = choiceOption[SAKey].content;
      }
      questionArray['option' + SAKey] = choiceOption[SAKey].content;
      questionArray['id'] = choiceOption[SAKey].question_id;
    }
  }
  questionArray['questionType'] = type;
  questionArray['questionTypeContent'] = questionTypeContent;
  questionArray['questionDifficulty'] = questionDifficulty;
  questionArray['question'] = question;
  questionArray['questionSource'] = questionSource;
  questionArray['questionSelected'] = 0;
  return questionArray;

}

const PreviewQuestion = (props) => {
  const obj = props.data;
  const [questionAnswer, setQuestionAnswer] = useState("");
  const handleQuestionAnswerChange = (event) => {
    setQuestionAnswer(event.target.value);
  };
  return (
    <>
      <CModalHeader closeButton><h3>預覽題目</h3></CModalHeader>
      <CModalBody>
        <CCol sm="12">
          <CForm method="post">
            <CFormGroup>
              <CRow xs="12" sm="12" md="12">
                <CCol className="px-1">
                  <h5 className="d-inline align-middle">難易度</h5>
                  {(() => {
                    return (
                      <Rating
                        className="align-middle"
                        name="examDifficulty"
                        defaultValue={0}
                        precision={1}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        value={obj.questionDifficulty ? obj.questionDifficulty : ""}
                        readOnly
                      />
                    );
                  })()}
                </CCol>
              </CRow>
              <div>
                {(() => {
                  if (obj.questionType === 1) {
                    return (
                      <>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-1 d-flex p-2 align-items-center border border-secondary bg-white" id="createQuestionTextArea">
                          <CCol className="px-1">
                            {obj.question}
                            <br />
                            <p className='text-black-50 my-0'>
                              [{obj.questionSource}]
                            </p>
                            (A) {obj.option0}
                            (B) {obj.option1}
                            (C) {obj.option2}
                            (D) {obj.option3}
                          </CCol>
                        </CRow>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-0 d-flex p-2 align-items-center border border-secondary bg-secondary">
                          <CCol className="px-1">
                            解答: {obj.questionAnswer}
                          </CCol>
                        </CRow>
                      </>
                    );
                  }
                  else if (obj.questionType === 2) {
                    return (
                      <>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-1 d-flex p-2 align-items-center border border-secondary bg-white" id="createQuestionTextArea">
                          <CCol className="px-1">
                            {obj.question}
                            <br />
                            <p className='text-black-50'>
                              [{obj.questionSource}]
                            </p>
                          </CCol>
                        </CRow>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-0 d-flex p-2 align-items-center border border-secondary bg-secondary">
                          <CCol className="px-1">
                            解答: {obj.questionAnswer}
                          </CCol>
                        </CRow>
                      </>
                    );
                  }
                  else if (obj.questionType === 3) {
                    return (
                      <>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-1 d-flex p-2 align-items-center border border-secondary bg-white" id="createQuestionTextArea">
                          <CCol className="px-1">
                            {obj.question}
                            <br />
                            <p className='text-black-50'>
                              [{obj.questionSource}]
                            </p>
                          </CCol>
                        </CRow>
                        <CRow xs="12" sm="12" md="12" className="mx-0 my-0 d-flex p-2 align-items-center border border-secondary bg-secondary">
                          <CCol className="px-1">
                            解答: {obj.questionAnswer}
                          </CCol>
                        </CRow>
                      </>
                    );
                  }
                })()}
              </div>
            </CFormGroup>
          </CForm>
        </CCol>
      </CModalBody >
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={props.togglePreview}
        >Cancel</CButton>
      </CModalFooter>
    </>
  )
}

const AddQuestionModal = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [errorComponent, setErrorComponent] = useState([]);
  const [Question, setQuestion] = useState("");
  const [MultiQuestion, setMultiQuestion] = useState("");
  const [TFQuestion, setTFQuestion] = useState("");
  const [SimpleQuestion, setSimpleQuestion] = useState("");
  const [Source, setSource] = useState("");
  const [Difficulty, setDifficulty] = useState(0);
  const [Type, setType] = useState("1");
  const [Option0, setOption0] = useState({
    content: '', answer: false,
    question_id: 0, sort: 0
  });
  const [Option1, setOption1] = useState({});
  const [Option2, setOption2] = useState({});
  const [Option3, setOption3] = useState({});
  const OptionT = {
    content: 'O', answer: false,
    question_id: 0, sort: 0
  };
  const OptionF = {
    content: 'X', answer: false,
    question_id: 0, sort: 1
  };
  const [Answer, setAnswer] = useState("");
  const history = useHistory();

  function handleQuestionTypeChange(event) {
    setType(event.target.value);
    // 清空error訊息
    setErrorMsg("");
    setErrorComponent([]);
    // initialize
    setMultiQuestion("");
    setTFQuestion("");
    setSimpleQuestion("");
    setAnswer("");
    setSource("");
    setDifficulty(0);
    setOption0({});
    setOption1({});
    setOption2({});
    setOption3({});
  }

  const submit = () => {
    const Author = 1;
    const toastOption = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };
    const errorList = [];
    let errorMsg = "";
    let option = 0;

    if (Source === "") {
      errorMsg += "未填寫題目來源 ";
      errorList.push("Source");
    }
    if (Difficulty === 0) {
      errorMsg += "未選擇題目難易度 ";
      errorList.push("Difficulty");
    }
    if (Type === '1') {
      console.log(Option0.content);
      console.log(Option0);
      console.log(Option0['content']);

      if (MultiQuestion === "") {
        errorMsg += "未填寫題目 ";
        errorList.push("MultiQuestion");
      }
      if (Option0.content === "") {
        errorList.push("Option0");
        option = 1;
      }
      if (Option1.content === "") {
        errorList.push("Option1");
        option = 1;
      }
      if (Option2.content === "") {
        errorList.push("Option2");
        option = 1;
      }
      if (Option3.content === "") {
        errorList.push("Option3");
        option = 1;
      }
      if (option === 1) {
        errorMsg += "未填寫選擇題選項 ";
      }
    }
    else if (Type === '2') {
      if (TFQuestion === "") {
        errorMsg += "未填寫題目 ";
        errorList.push("TFQuestion");
      }
    } else if (Type === '3') {
      if (SimpleQuestion === "") {
        errorMsg += "未填寫題目 ";
        errorList.push("SimpleQuestion");
      }
    }
    if (Answer === "") {
      errorMsg += "未填寫解答 ";
      errorList.push("Answer");
    }
    setErrorMsg(errorMsg);
    setErrorComponent(errorList);

    if (errorMsg !== "") {
      return;
    }
    else {
      const options = [];
      if (Type === '1') {
        let tempArr0 = { ...Option0 };
        let tempArr1 = { ...Option1 };
        let tempArr2 = { ...Option2 };
        let tempArr3 = { ...Option3 };
        if (Answer === '0') {
          tempArr0.answer = true;
          tempArr1.answer = false;
          tempArr2.answer = false;
          tempArr3.answer = false;
        } else if (Answer === '1') {
          tempArr0.answer = false;
          tempArr1.answer = true;
          tempArr2.answer = false;
          tempArr3.answer = false;
        } else if (Answer === '2') {
          tempArr0.answer = false;
          tempArr1.answer = false;
          tempArr2.answer = true;
          tempArr3.answer = false;
        } else if (Answer === '3') {
          tempArr0.answer = false;
          tempArr1.answer = false;
          tempArr2.answer = false;
          tempArr3.answer = true;
        }
        options.push(tempArr0);
        options.push(tempArr1);
        options.push(tempArr2);
        options.push(tempArr3);
        setQuestion(MultiQuestion);

      } else if (Type === '2') {
        if (Answer === '0') {
          OptionT.answer = true;
        } else if (Answer === '1') {
          OptionF.answer = true;
        }
        options.push(OptionT);
        options.push(OptionF);
        setQuestion(TFQuestion);
      } else if (Type === '3') {
        options.push({
          content: Answer, answer: true,
          question_id: 0, sort: 0
        });
        setQuestion(SimpleQuestion);
        console.log(options);
      }
    }
    // if (localStorage.getItem('token') != null) {
    //   const userToken = localStorage.getItem('token');
    //   addQuestion = (userToken, Question, Author, Source, Difficulty, Type, options)
    //   .then(() => {
    //     // 跳出error視窗
    //     toast.info('新增成功', options);
    //     // 切換路徑
    //     history.push('/course/createquestion');
    //     props.handleProfileEditClick()
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message, options);
    //   })
    // }
  }
  return (
    <>
      <CModalHeader closeButton><h3>新增題目</h3></CModalHeader>
      <CModalBody>
        <CCol sm="12">
          <ErrorMsg msg={errorMsg} />
          <CForm>
            <CFormGroup>
              <h5 className='mx-0'>題型</h5>
              <CSelect
                name="questionType"
                onChange={handleQuestionTypeChange}
                value={Type}
              >
                {/* type: */}
                {/* 1:選擇 */}
                {/* 2:是非 */}
                {/* 3:簡答 */}
                <option value='1'>選擇題</option>
                <option value='2'>是非題</option>
                <option value='3'>簡答題</option>
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              {(() => {
                if (Type === '1') {
                  return (
                    <div>
                      <CRow xs="12" md="10" className="form-row">
                        <CCol xs={10} md={10} className='my-2'>
                          <h5>題目</h5>
                          <CInput
                            className={(errorComponent.includes("MultiQuestion")) ? "is-invalid" : ""}
                            name="MultiQuestion"
                            placeholder="請輸入題目"
                            // value={MultiQuestion}
                            onChange={(e) => {
                              setMultiQuestion(e.target.value);
                            }}
                          />
                          <h5 className="ml-4 my-0">A</h5>
                          <cilInput
                            className={`form-control ml-4 my-1 ${(errorComponent.includes("Option0")) ? "is-invalid" : ""}`}
                            name="Option0"
                            placeholder="請輸入選項"
                            // value={Option0}
                            onChange={(e) =>
                              setOption0({
                                content: e.target.value, answer: false,
                                question_id: 0, sort: 0
                              })
                            }
                            required
                          />

                          <h5 className="ml-4 my-0">B</h5>
                          <CInput
                            className={`form-control ml-4 my-1 ${(errorComponent.includes("Option1")) ? "is-invalid" : ""}`}
                            name="Option1"
                            placeholder="請輸入選項"
                            // value={Option1}
                            onChange={(event) =>
                              setOption1({
                                content: event.target.value, answer: false,
                                question_id: 0, sort: 1
                              })
                            }required
                          />
                          <h5 className="ml-4 my-0">C</h5>
                          <CInput
                            className={`ml-4 my-1 ${(errorComponent.includes("Option2")) ? "is-invalid" : ""}`}
                            name="Option2"
                            placeholder="請輸入選項"
                            // value={Option2}
                            onChange={(event) =>
                              setOption2({
                                content: event.target.value, answer: false,
                                question_id: 0, sort: 2
                              })
                            }
                          />
                          <h5 className="ml-4 my-0">D</h5>
                          <CInput
                            className={`ml-4 my-1 ${(errorComponent.includes("Option3")) ? "is-invalid" : ""}`}
                            name="Option3"
                            placeholder="請輸入選項"
                            // value={Option3}
                            onChange={(event) =>
                              setOption3({
                                content: event.target.value, answer: false,
                                question_id: 0, sort: 3
                              })
                            }
                          />
                          <h5>請選擇解答</h5>
                          <CSelect
                            className={`my-2 ${(errorComponent.includes("Answer")) ? "is-invalid" : ""}`}
                            name="questionOptionAnswer"
                            onChange={event => setAnswer(event.target.value)}
                          >
                            <option value='' selected>請選擇</option>
                            <option value={0}>A</option>
                            <option value={1}>B</option>
                            <option value={2}>C</option>
                            <option value={3}>D</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                    </div>
                  )
                } else if (Type === '2') {
                  return (
                    <div>
                      <CRow xs="12" md="10"
                      >
                        <CCol item xs={10} md={10}>
                          <h5>題目</h5>
                          <CInput
                            className={(errorComponent.includes("TFQuestion")) ? "is-invalid" : ""}
                            name="TFQuestion"
                            placeholder="請輸入題目"
                            value={TFQuestion}
                            onChange={(e) => {
                              setTFQuestion(e.target.value);
                            }}
                          />
                          <h5>請選擇解答</h5>
                          <CSelect
                            className={`my-1 ${(errorComponent.includes("Answer")) ? "is-invalid" : ""}`}
                            name="questionOptionAnswer"
                            onChange={event => setAnswer(event.target.value)}
                          >
                            <option value='' selected>請選擇</option>
                            <option value={0}>O</option>
                            <option value={1}>X</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                    </div>
                  )
                } else if (Type === '3') {
                  return (
                    <div>
                      <CRow xs="12" md="10"
                        className="my-2">
                        <CCol item xs={10} md={10}>
                          <h5>題目</h5>
                          <CInput
                            className={(errorComponent.includes("SimpleQuestion")) ? "is-invalid" : ""}
                            name="SimpleQuestion"
                            placeholder="請輸入題目"
                            value={SimpleQuestion}
                            onChange={(e) => {
                              setSimpleQuestion(e.target.value);
                            }}
                          />
                          <h5>解答</h5>
                          <textarea
                            className={`form-control w-100 ${(errorComponent.includes("Answer")) ? "is-invalid" : ""}`}
                            name="questionOptionAnswer"
                            placeholder="請輸入簡答答案"
                            onChange={event => setAnswer(event.target.value)}
                            rows={2}
                            variant="outlined"
                            multiline="true"
                          ></textarea>
                        </CCol>
                      </CRow>
                    </div>
                  )
                }
              })()}

              <h5 className={`mx-0 my-2 ${(errorComponent.includes("Difficulty")) ? "text-danger" : ""}`}>題目難易度</h5>
              <Rating
                className={`align-middle ml-4`}
                name="examDifficulty"
                defaultValue={0}
                precision={1}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                onChange={setDifficulty}
              />
              <CRow xs="12" md="10"
                className="my-2">
                <CCol item xs={10} md={10}>
                  <h5 className='mx-0 my-2'>題目來源</h5>
                  <CInput
                    className={(errorComponent.includes("Source")) ? "is-invalid" : ""}
                    name="source"
                    placeholder="請輸入題目來源"
                    onChange={(e) => {
                      setSource(e.target.value);
                    }}
                  />
                </CCol>
              </CRow>

            </CFormGroup>
          </CForm>
        </CCol>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          onClick={props.toggle}>
          Cancel
        </CButton>
        <CButton onClick={submit} color="primary">
          新增至題庫
        </CButton>
      </CModalFooter>
    </>
  );
}

const CreateQuestion = () => {
  const questionData = useSelector(state => state.questionData);
  const [viewQuestion, setViewQuestion] = useState([]);
  const [modal, setModal] = useState(!modal ? false : true);
  const [allQuestionData, setAllQuestionData] = useState(tempAllQuestionArray);
  const [chosenQuestionData, setChosenQuestionData] = useState([]);
  const [previewModal, setPreviewModal] = useState(false);
  const [previewData, setPreviewData] = useState(false);
  const [totalDifficulty, setTotalDifficulty] = useState(0);
  toast.configure();
  const totalData = [{
    totalQuestionNumbers: chosenQuestionData.length,
    averageQuestionDifficulty: Math.round(totalDifficulty / chosenQuestionData.length),
    totalQuestionScore: 100
  }];

  const togglePreview = (data) => {
    setPreviewModal(!previewModal);
    setPreviewData(data);
  }

  useEffect(() => {
    setViewQuestion([
      {
        question: "在python中輸出的語法為?",
        author: 1,
        layer: 0,
        source: '108.全國程式設計比賽',
        difficulty: 2,
        type: 3,
        option: [
          {
            content: 'print()',
            answer: true,
            question_id: 2,
            sort: 0
          }
        ]
      }
    ]);
  }, []);

  const questionFields = [
    { key: 'check_box', label: '', _style: { width: '5%', backgroundColor: '#636f83', color: 'white' } },
    { key: 'questionDifficulty', label: '難易度', _style: { width: '5%', backgroundColor: '#636f83', color: 'white' } },
    { key: 'questionTypeContent', label: '題型', _style: { width: '20%', backgroundColor: '#636f83', color: 'white' } },
    { key: 'question', label: '題目', _style: { width: '60%', backgroundColor: '#636f83', color: 'white' }, sorter: false },
    {
      key: 'view_details',
      label: '預覽',
      _style: { width: '10%', backgroundColor: '#636f83', color: 'white' },
      sorter: false
    }
  ];
  const totalFields = [
    { key: 'totalQuestionNumbers', label: '總題數', _style: { width: '15%', backgroundColor: 'none' } },
    { key: 'averageQuestionDifficulty', label: '平均難易度(四捨五入取整數)', _style: { width: '15%', backgroundColor: 'rgba(255, 255, 255, 0)' } },
    { key: 'totalQuestionScore', label: '總分', _style: { width: '20%', backgroundColor: 'rgba(255, 255, 255, 0)' } },
  ];


  function setChosenQuestion(questionId, allQuestionData, setChosenQuestionData) {
    const tempChosenQuestion = [];
    let totalDifficulty = null;

    const options = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };

    for (var q = 0; allQuestionData[q]; ++q) {
      // 已被選的題目
      if (allQuestionData[q].questionSelected === 1) {
        // 已選題目
        if (questionId === allQuestionData[q].id) {
          toast.info('此題目已選取', options);
        }
        tempChosenQuestion.push(allQuestionData[q]);
        totalDifficulty += allQuestionData[q].questionDifficulty;
      }
      // 新選的題目
      else if (questionId === allQuestionData[q].id && !tempChosenQuestion.includes(allQuestionData[q])) {
        tempChosenQuestion.push(allQuestionData[q]);
        allQuestionData[q].questionSelected = 1;
        totalDifficulty += allQuestionData[q].questionDifficulty;
      }
    }
    setTotalDifficulty(totalDifficulty);
    setChosenQuestionData(tempChosenQuestion);
  }

  function setRemoveQuestion(questionId, allQuestionData, setChosenQuestionData) {
    const tempChosenQuestion = [];
    let totalDifficulty = null;

    for (var q = 0; allQuestionData[q]; ++q) {
      // 移除的題目
      if (questionId === allQuestionData[q].id) {
        allQuestionData[q].questionSelected = 0;
        totalDifficulty -= allQuestionData[q].questionDifficulty;
      }
      else if (allQuestionData[q].questionSelected === 1) {
        tempChosenQuestion.push(allQuestionData[q]);
      }
    }
    setTotalDifficulty(totalDifficulty);
    setChosenQuestionData(tempChosenQuestion);
  }
  return (
    <>
      <CContainer className="px-2">
        <CRow sm="12" md="12">
          <CCol xs="5" sm="5" md="8">
            <h3 className="my-auto font-weight-bold">題庫:</h3>
          </CCol>
          <CCol xs="5" sm="5" md="2" className="ml-auto d-flex flex-column">
            <CButton type="button" component="a" color="success"
              onClick={setModal}
              className="my-auto float-right" >
              新增題目至題庫
            </CButton>
            <CModal
              show={modal}
              onClose={setModal}
              scrollable
            >
              <AddQuestionModal modal={modal} setModal={setModal} />
            </CModal>
          </CCol>
        </CRow>

        <CRow xs="12" sm="12" md="12" className="my-2">
          <CCol xs="12" sm="12" md="6" className="mx-0">
            <CRow sm="12" md="12">
              <CCol xs="5" sm="5" md="8">
                <h4 className="my-auto">待選題目</h4>
              </CCol>
            </CRow>
            <CRow className="table-responsive my-2 mx-0 p-0" >
              <CDataTable
                key={allQuestionData.id}
                className="question-table stickyTable stickyTableBody"
                items={allQuestionData}
                fields={questionFields}
                tableFilter={{
                  lazy: true,
                  label: '搜尋',
                  placeholder: '請輸入關鍵字'
                }}
                hover
                sorter
                outlined
                responsive={false}
                scopedSlots={{
                  'check_box':
                    (item) => {
                      return (
                        <td className="py-2">
                          <CButton
                            type="button"
                            component="a"
                            color='success'
                            variant="outline"
                            className="my-auto float-right"
                            name='checkedQuestion[]'
                            value={item.id}
                            onClick={() =>
                              setChosenQuestion(item.id, allQuestionData, setChosenQuestionData)
                            }>
                            加入
                          </CButton>
                        </td>
                      )
                    },
                  'view_details':
                    (item) => {
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="lg"
                            value={item.id}
                            onClick={() => togglePreview(item)}
                          >預覽</CButton>
                        </td>
                      )
                    }
                }}
              />
              <CModal
                show={previewModal}
                onClose={setPreviewModal}
                scrollable
              >
                <PreviewQuestion data={previewData} previewModal={previewModal} togglePreview={togglePreview} />
              </CModal>
            </CRow>
          </CCol>
          <CCol xs="12" sm="12" md="6" className="mx-0">
            <CRow sm="12" md="12">
              <CCol xs="5" sm="5" md="7">
                <h4 className="my-auto">已選題目</h4>
              </CCol>
            </CRow>
            <CRow className="table-responsive my-2 mx-0 p-0" >
              <CDataTable
                key={chosenQuestionData.id}
                className="question-table stickyTable stickyTableBody"
                items={chosenQuestionData}
                fields={questionFields}
                tableFilter={{
                  lazy: true,
                  label: '搜尋',
                  placeholder: '請輸入關鍵字'
                }}
                hover
                sorter
                outlined
                responsive={false}
                scopedSlots={{
                  'check_box':
                    (item) => {
                      return (
                        <td className="py-2">
                          <CButton
                            type="button"
                            component="a"
                            color='danger'
                            variant="outline"
                            className="my-auto float-right"
                            name='checkedQuestion[]'
                            value={item.id}
                            onClick={() =>
                              setRemoveQuestion(item.id, allQuestionData, setChosenQuestionData)
                            }>
                            移除
                          </CButton>
                        </td>
                      )
                    },
                  'view_details':
                    (item) => {
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="lg"
                            value={item.id}
                            onClick={() => togglePreview(item)}
                          >預覽</CButton>
                        </td>
                      )
                    }
                }}
              />
              <CModal
                show={previewModal}
                onClose={setPreviewModal}
                scrollable
              >
                <PreviewQuestion data={previewData} previewModal={previewModal} togglePreview={togglePreview} />
              </CModal>
            </CRow>
          </CCol>
        </CRow>

        <CRow xs="12" sm="12" md="12" className="my-2">
          <CCol xs="12" sm="12" md="12">
            <CRow sm="12" md="12">
              <CCol xs="12" sm="12" md="12" className="mb-2">
                <h4 className="">題目總計</h4>
              </CCol>
            </CRow>
            <CCol xs="12" sm="12" md="12" className="mx-0 my-0">
              <CDataTable
                items={totalData}
                fields={totalFields}
                outlined
                responsive={false}
              />
            </CCol>
            <CCol xs="12" sm="12" md="4" className="mx-0 my-0 mx-auto d-flex flex-column">
              <CButton type="button" component="a" color="primary"
                className="my-auto float-right">
                新增題目至測驗卷
              </CButton>
            </CCol>
          </CCol>
        </CRow>
      </CContainer >
    </>
  )
}

export default CreateQuestion;
