import React from 'react';
import ReactDOM from 'react-dom';
import {
  CContainer, CButton, CRow,
  CCol, CInput, CTextarea,
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import $ from 'jquery';
let tempTopicIndex = 1;

const ExamItem = () => {
  return (
    <>
      <div>
        <CRow sm="12" md="10">
          <CCol sm="12" md="12" className="mx-auto my-1">
            <h1 className="font-weight-bold card-title mb-0">
              新增測驗
            </h1>
            <hr />
          </CCol>
          <h4 className="my-auto font-weight-bold">測驗標題:</h4>
          <CCol sm="10" md="10">
            <CInput
              custom-size="lg"
              id="examTopic"
              alignitems="center"
              textalign="center"
              inputprops={{
                'aria-label': 'naked',
                'maxLength': 1
              }}
              placeholder="請輸入測驗標題"
              type='text' />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="my-auto font-weight-bold">測驗說明:</h4>
          <CCol sm="10" md="10">
            <CTextarea
              id="examDescription"
              alignitems="center"
              textalign="center"
              inputprops={{
                'aria-label': 'naked',
                'maxLength': 1
              }}
              placeholder="請輸入測驗說明"
              type='text' />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="font-weight-bold">測驗難度:</h4>
          <CCol sm="10" md="8">
            <Rating
              name="examDifficulty"
              defaultValue={0}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">開放時間: </h4>
              <CCol sm="8" md="8">
                <CInput
                  id="examStartDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local' />
              </CCol>
            </CRow>
          </CCol>
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">截止時間:</h4>
              <CCol sm="8" md="8">
                <CInput
                  id="examEndDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local' />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </div>
    </>
  );
}

const Trash = () => {
  $('#allTopic').on('click', ".trashBtn", function (event) {
    event.preventDefault();
    let btnId = $(this).attr("id");
    if (btnId) {
      let divIndex = btnId.split("trash")[1];
      let toBeDel = document.getElementById('qTopic' + divIndex);
      if (toBeDel) {
        toBeDel.parentNode.removeChild(toBeDel);
        tempTopicIndex--;
      }
    }
  });
  return (
    <>
      <CCol xs="2" sm="2" md="2" className="my-4 ">
        <CButton
          variant="outline"
          color="dark"
          type="button"
          component="a"
          id="trash0"
          className="trashBtn"
        >
          <CIcon name="cil-trash" className="px-0" custom-size="lg" />
        </CButton>
      </CCol>
    </>
  );
}

const CreateExam = () => {
  const cloneQuestionTopic = (element) => {
    // title input
    const groups = document.querySelectorAll('.group');
    const target = groups[groups.length - 1];
    // clone input
    element.preventDefault();
    let cloneElement = target.cloneNode(true);
    // append trash
    if (tempTopicIndex === 1) {
      const newChildNode = document.createElement('span');
      ReactDOM.render(<Trash />, newChildNode);
      cloneElement.appendChild(newChildNode);
    }
    cloneElement.querySelectorAll('h3')[0].innerText = '段落' + (tempTopicIndex + 1);
    cloneElement.querySelectorAll('h3')[0].id = 'questionTopic' + tempTopicIndex;
    cloneElement.querySelectorAll('input')[0].id = 'topic' + tempTopicIndex;
    cloneElement.querySelectorAll('input')[1].id = 'topicScore' + tempTopicIndex;
    cloneElement.querySelectorAll('button')[0].id = 'trash' + tempTopicIndex;
    target.parentNode.insertBefore(cloneElement, target.nextSibling);

    const allTopics = document.getElementById('allTopic');
    allTopics.childNodes[allTopics.childNodes.length - 1].id = 'qTopic' + tempTopicIndex;

    tempTopicIndex++;
  };

  return (
    <>
      <CContainer className="px-2">
        <ExamItem />
        <div id="allTopic">
          <CRow className="group py-2" >
            <h3 className='font-weight-bold mx-1' id="questionTopic0">
              段落1
            </h3>
            <CCol sm="10" md="10" id="qTopic0" className="border border-black-50 rounded-lg d-flex flex-column py-2 px-0">
              <CRow xs="12" sm="12" md="12">
                <CCol sm="12" md="5">
                  <CCol className="my-2">
                    <h4 className="my-auto font-weight-bold">段落標題:</h4>
                  </CCol>
                  <CRow sm="12" md="12">
                    <CCol xs="10" sm="10" md="10" className="mx-3">
                      <CInput
                        id="topic0"
                        alignitems="center"
                        textalign="center"
                        inputprops={{
                          'aria-label': 'naked',
                          'maxLength': 1
                        }}
                        placeholder="第一大題"
                        type='text' />
                    </CCol>
                  </CRow>
                </CCol>
                <CCol sm="12" md="5">
                  <CCol className="my-2">
                    <h4 className="my-auto font-weight-bold">配分:</h4>
                  </CCol>
                  <CRow sm="12" md="12">
                    <CCol xs="10" sm="10" md="10" className="mx-3">
                      <CInput
                        id="topicScore0"
                        alignitems="center"
                        textalign="center"
                        inputprops={{
                          'aria-label': 'naked',
                          'maxLength': 1
                        }}
                        placeholder="100"
                        type='text' />
                    </CCol>
                  </CRow>
                </CCol>

              </CRow>

              <CCol sm="12" md="12">
                <CRow sm="12" md="12">
                  <CCol className="my-2">
                    <h4 className="my-auto font-weight-bold">題目:</h4>
                  </CCol>
                </CRow>
                <CRow sm="12" md="12">
                  <CCol xs="10" sm="10" md="10" className="px-3">
                    <CButton
                      variant="outline"
                      color="dark"
                      type="button"
                      component="a"
                      href={`#course/createquestion`}
                      className="btn-block">

                      <CIcon name="cil-plus" className="px-0" custom-size="md" />
                      <br />
                      <h5 className='font-weight-bold'>
                        選擇題目
                      </h5>
                    </CButton>
                  </CCol>
                </CRow>
              </CCol>
            </CCol>
          </CRow>
        </div>
        <CCol sm="10" md="10" id="allQuestion" className="my-2 ml-0">
          <CButton
            color="secondary"
            type="button"
            component="a"
            onClick={cloneQuestionTopic}
            className="btn-block">
            <CIcon name="cil-plus" className="px-0" custom-size="md" />
          </CButton>
        </CCol>

        <CCol xs="3" sm="3" md="3" className='my-3 mx-auto d-flex flex-column'>
          <CButton type="button" component="a" color="primary"
            className="my-auto float-right">
            提交
          </CButton>
        </CCol>
      </CContainer >
    </>
  )
}
export default CreateExam;
