import React from 'react';
import ReactDOM from 'react-dom';
import {
  CContainer,
  CButton,
  CRow,
  CCol,
  CInput,
  CTextarea
} from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import $ from 'jquery';
let tempTopicIndex = 1;

const ExamItem = (props) => {
  const x = props.item;
  return (
    <>
      <div>
        <CRow sm="12" md="10">
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
      <CCol xs="1" sm="1" md="1">
        <CButton
          variant="outline"
          color="dark"
          type="button"
          component="a"
          id="trash0"
          className="trashBtn"
        >
          <CIcon name="cil-trash" className="px-0" custom-size="md" />
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
    if (tempTopicIndex == 1) {
      const newChildNode = document.createElement('div');
      ReactDOM.render(<Trash />, newChildNode);
      cloneElement.appendChild(newChildNode);
    }
    cloneElement.querySelectorAll('input')[0].id = 'topic' + tempTopicIndex;
    cloneElement.querySelectorAll('button')[0].id = 'trash' + tempTopicIndex;
    target.parentNode.insertBefore(cloneElement, target.nextSibling);

    const allTopics = document.getElementById('allTopic');
    allTopics.childNodes[allTopics.childNodes.length - 2].id = 'qTopic' + tempTopicIndex;

    tempTopicIndex++;
  };

  return (
    <>
      <CContainer className="px-2">
        <ExamItem />

        <CRow sm="12" md="12" className="my-2">
          <h4 className="my-auto font-weight-bold">題目標題:</h4>
        </CRow>
        <CCol id="allTopic">
          <CRow sm="10" md="10" className="my-2 group" id="qTopic0">
            <CCol xs="9" sm="9" md="9">
              <CInput
                id="topic0"
                alignitems="center"
                textalign="center"
                inputprops={{
                  'aria-label': 'naked',
                  'maxLength': 1
                }}
                placeholder="請輸入題目標題"
                type='text' />
            </CCol>
          </CRow>
          <CRow sm="10" md="10" className="my-2">
            <CCol xs="9" sm="9" md="9">
              <CButton
                variant="outline"
                color="dark"
                type="button"
                component="a"
                onClick={cloneQuestionTopic}
                className="btn-block">
                <CIcon name="cil-plus" className="px-0" custom-size="md" />
              </CButton>
            </CCol>
          </CRow>
        </CCol>

        <CRow sm="12" md="12" className="my-2">
          <h4 className="my-auto font-weight-bold">題目:</h4>
        </CRow>
        <CCol id="allQuestion">
          <CRow sm="10" md="10" className="my-2">
            <CCol xs="9" sm="9" md="9">
              <CButton
                variant="outline"
                color="dark"
                type="button"
                component="a"
                href={`#course/createquestion`}
                className="btn-block">
                <CIcon name="cil-plus" className="px-0" custom-size="md" />
              </CButton>
            </CCol>
          </CRow>
        </CCol>
      </CContainer>
    </>
  )
}
export default CreateExam;
