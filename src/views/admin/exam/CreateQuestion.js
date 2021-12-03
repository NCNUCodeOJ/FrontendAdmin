import React, { useState, useEffect } from 'react';
import {
  CContainer, CButton, CRow,
  CCol, CDataTable
} from '@coreui/react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const chosenQuestionNo = [];
const chosenQuestionData = [];
// var totalDifficulty = 0;
// totalQuestionNumbers: chosenQuestionData.length,
const totalData = [{
  totalQuestionNumbers: 2,
  averageQuestionDifficulty: (2 / 2),
  // 暫定
  totalQuestionScore: 100
}];

const allQuestion =
  [
    {
      id: 1,
      question: "請問在python中print(  )的用途是?",
      questionType: 1,
      questionDifficulty: 1,
      questionSource: '108.全國程式設計比賽',
      choiceOption: [
        {
          option: '輸入',
          optionAnswer: 0
        },
        {
          option: '條件判斷式',
          optionAnswer: 0
        },
        {
          option: '輸出',
          optionAnswer: 1
        },
        {
          option: '定義變數',
          optionAnswer: 0
        }
      ]
    },
    {
      id: 2,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    },
    {
      id: 3,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 2
    },
    {
      id: 4,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 3
    },
    {
      id: 5,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    },
    {
      id: 6,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    },
    {
      id: 7,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    },
    {
      id: 8,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    }
  ];

const selectedQuestion =
  [
    {
      id: 1,
      question: "請問在python中print(  )的用途是?",
      questionType: 1,
      questionDifficulty: 1,
      questionSource: '108.全國程式設計比賽',
      choiceOption: [
        {
          option: '輸入',
          optionAnswer: 0
        },
        {
          option: '條件判斷式',
          optionAnswer: 0
        },
        {
          option: '輸出',
          optionAnswer: 1
        }
      ]
    },
    {
      id: 2,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 1
    },
    {
      id: 3,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 2
    },
    {
      id: 4,
      question: 0,
      questionType: "程式設計",
      questionDifficulty: 3
    }];

function setChosenQuestion() {
  var questionNoArray = document.getElementsByClassName('questionNo');
  for (var i = 0; questionNoArray[i]; ++i) {
    if (questionNoArray[i].checked) {
      if (!chosenQuestionNo.includes(parseInt(questionNoArray[i].value))) {
        chosenQuestionNo.push(parseInt(questionNoArray[i].value));
      }
    }
  }
  for (var q = 0; allQuestion[q]; ++q) {
    if (chosenQuestionNo.includes(allQuestion[q].id) && !chosenQuestionData.includes(allQuestion[q])) {
      chosenQuestionData.push(allQuestion[q]);
      totalDifficulty += allQuestion[q].questionDifficulty;
    }
  }
  console.log(chosenQuestionData.length);

}

function createQuestionOptionArray(id, type, questionDifficulty, question, questionSource, choiceOption) {
  const questionArray = [];
  for (var key in choiceOption) {
    if (choiceOption[key].optionAnswer === 1) {
      if (key === 0) {
        questionArray['questionAnswer'] = "A";
      } else if (key === 1) {
        questionArray['questionAnswer'] = "B";
      } else if (key === 2) {
        questionArray['questionAnswer'] = "C";
      } else if (key === 3) {
        questionArray['questionAnswer'] = "D";
      }
    }
    questionArray['option' + key] = choiceOption[key].option;
    console.log(choiceOption[key].option);

  }
  questionArray['id'] = id;
  questionArray['questionType'] = type;
  questionArray['questionDifficulty'] = questionDifficulty;
  questionArray['question'] = question;
  questionArray['questionSource'] = questionSource;
  return questionArray;
  // type:
  // 1:選擇
  // 2:是非
  // 3:簡答
}

const QuestionList = (props) => {
  return (
    <>
      <CDataTable
        class="question-table stickyTable stickyTableBody"
        items={props.items}
        fields={props.fields}
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
                  <input className={props.inputName} type="checkbox" name='question[]' value={item.id} />
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
                  >預覽</CButton>
                </td>
              )
            }
        }}
      />
    </>
  );
}

const CreateQuestion = () => {
  const [viewQuestion, setViewQuestion] = useState([]);

  useEffect(() => {
    setViewQuestion([
      {
        id: 1,
        question: "請問在python中print(  )的用途是?",
        questionType: 1,
        questionDifficulty: 1,
        questionSource: '108.全國程式設計比賽',
        choiceOption: [
          {
            option: '輸入',
            optionAnswer: 0
          },
          {
            option: '條件判斷式',
            optionAnswer: 0
          },
          {
            option: '輸出',
            optionAnswer: 1
          },
          {
            option: '定義變數',
            optionAnswer: 0
          }
        ]
      }
    ]);
  }, []);

  const Questionrows = viewQuestion.map(x =>
    createQuestionOptionArray(x.id, x.questionType, x.questionDifficulty, x.question, x.questionSource, x.choiceOption));

  const questionFields = [
    { key: 'check_box', label: '勾選', _style: { width: '5%', backgroundColor: '#636f83', color: 'white' } },
    { key: 'questionDifficulty', label: '難易度', _style: { width: '5%', backgroundColor: '#636f83', color: 'white' } },
    { key: 'questionType', label: '題型', _style: { width: '20%', backgroundColor: '#636f83', color: 'white' } },
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
    { key: 'averageQuestionDifficulty', label: '平均難易度', _style: { width: '15%', backgroundColor: 'rgba(255, 255, 255, 0)' } },
    { key: 'totalQuestionScore', label: '總分', _style: { width: '20%', backgroundColor: 'rgba(255, 255, 255, 0)' } },
  ];

  return (
    <>
      <CContainer className="px-2">
        <CRow sm="12" md="12">
          <CCol xs="5" sm="5" md="8">
            <h4 className="my-auto font-weight-bold">題庫:</h4>
          </CCol>
        </CRow>

        <CRow xs="12" sm="12" md="12" className="my-2">
          <CCol xs="12" sm="12" md="6" className="mx-0">
            <CRow sm="12" md="12">
              <CCol xs="5" sm="5" md="8">
                <h4 className="my-auto">待選題目</h4>
              </CCol>
              <CCol xs="5" sm="5" md="4" className="ml-auto d-flex flex-column">
                <CButton
                  type="button"
                  component="a"
                  color="success"
                  variant="outline"
                  className="my-auto float-right"
                  onClick={setChosenQuestion}>
                  加入題目
                </CButton>
              </CCol>
            </CRow>
            <CRow className="table-responsive my-2 mx-0 p-0" >
              <QuestionList
                items={allQuestion}
                fields={questionFields}
                inputName='questionNo' />
            </CRow>
          </CCol>
          <CCol xs="12" sm="12" md="6" className="mx-0">
            <CRow sm="12" md="12">
              <CCol xs="5" sm="5" md="7">
                <h4 className="my-auto">已選題目</h4>
              </CCol>
              <CCol xs="5" sm="5" md="4" className="ml-auto d-flex flex-column">
                <CButton
                  type="button"
                  component="a"
                  color="danger"
                  variant="outline"
                  className="my-auto float-right"
                  href={`#course/createquestion`}>
                  移除題目
                </CButton>
              </CCol>
            </CRow>
            <CRow className="table-responsive my-2 mx-0 p-0" >
              <QuestionList
                items={selectedQuestion}
                fields={questionFields}
                inputName='choosenQuestion' />
            </CRow>
          </CCol>
        </CRow>

        <CRow xs="12" sm="12" md="12" className="my-2">
          <CCol xs="12" sm="12" md="6">
            {Questionrows.map((obj, index) => {
              return (
                <CRow sm="12" md="12">
                  <CCol xs="12" sm="12" md="12" className="mb-2">
                    <h4 className="d-inline align-middle">題目預覽</h4>
                    <h5 className="d-inline align-middle"> 難易度</h5>
                    <Rating
                      className="align-middle"
                      name="examDifficulty"
                      defaultValue={0}
                      precision={1}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      value={obj.questionDifficulty}
                      readOnly
                    />
                  </CCol>
                </CRow>
              )
            })
            }
            {
              Questionrows.forEach(obj => {
                // Questionrows.map((obj, index) => {
                if (obj.questionType === 1)
                  return (
                    <div key={obj.id}>
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
                    </div>
                  );
                else if (obj.questionType === 2)
                  return (
                    <div key={obj.id}>
                      <CRow xs="12" sm="12" md="12" className="mx-0 my-1 d-flex p-2 align-items-center border border-secondary bg-white" id="createQuestionTextArea">
                        <CCol className="px-1">
                          {obj.question}
                          <br />
                          <p className='text-black-50'>
                            [{obj.questionSource}]
                          </p>
                        </CCol>
                      </CRow>
                    </div>
                  );
                else if (obj.questionType === 3)
                  return (
                    <div key={obj.id}>
                      <CRow xs="12" sm="12" md="12" className="mx-0 my-1 d-flex p-2 align-items-center border border-secondary bg-white" id="createQuestionTextArea">
                        <CCol className="px-1">
                          {obj.question}
                          <br />
                          <p className='text-black-50'>
                            [{obj.questionSource}]
                          </p>
                        </CCol>
                      </CRow>
                    </div>
                  );
                // })
              })
            }
          </CCol>

          <CCol xs="12" sm="12" md="6">
            <CRow sm="12" md="12">
              <CCol xs="12" sm="12" md="12" className="mb-2">
                <h4 className="">題目總計</h4>
              </CCol>
            </CRow>
            <CRow sm="12" md="12">
              <CCol xs="12" sm="12" md="12" className="mx-0 my-0">
                <CDataTable
                  items={totalData}
                  fields={totalFields}
                  outlined
                  responsive={false}
                />
                <CRow xs="12" sm="12" md="12" className="mx-0 my-0 ml-auto d-flex flex-column">
                  <CButton type="button" component="a" color="success"
                    className="my-auto float-right" href={`#course/createquestion`}>
                    新增題目
                  </CButton>
                </CRow>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CContainer >
    </>
  )
}

export default CreateQuestion;
