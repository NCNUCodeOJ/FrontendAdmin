import React, { useState, useEffect } from 'react';
import {
  CContainer, CButton, CRow,
  CCol, CDataTable,
} from '@coreui/react'
import {
  Checkbox
} from '@material-ui/core';

const QuestionList = (props) => {
  return (
    <>
      <CDataTable
        className="question-table"
        items={props.items}
        fields={props.fields}
        tableFilter="{lazy: true,
                      label: '待選題目',
                      placeholder: '請輸入關鍵字'}"
        sorter
        outlined
        color="green"
        striped={true}
        scopedSlots={{
          'check_box':
            (item, index) => {
              return (
                <td className="py-2">
                  <Checkbox />
                </td>
              )
            },
          'view_details':
            (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
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
  const [allQuestion, setAllQuestion] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setAllQuestion([
      {
        id: 1,
        question: "請問在python中print(  )的用途是?",
        questionType: "程式設計",
        questionDifficulty: 1
      },
      {
        id: 2,
        question: 0,
        questionType: "程式設計",
        questionDifficulty: 1
      }
    ]);
  }, []);
  const fields = [
    { key: 'check_box', label: '勾選', _style: { width: '1%' } },
    { key: 'questionDifficulty', label: '難易度', _style: { width: '1%' } },
    { key: 'questionType', label: '題型', _style: { width: '10%' } },
    { key: 'question', label: '題目', _style: { width: '20%' }, sorter: false },
    {
      key: 'view_details',
      label: '預覽',
      _style: { width: '5%' },
      sorter: false
    }
  ];

  return (
    <>
      <CContainer className="px-2">
        <CRow sm="12" md="12">
          <CCol xs="5" sm="5" md="8">
            <h4 className="my-auto font-weight-bold">題庫:</h4>
          </CCol>
          <CCol xs="5" sm="5" md="2" className="ml-auto d-flex flex-column">
            <CButton type="button" component="a" color="success"
              className="my-auto float-right" href={`#course/createquestion`}>
              新增題目
            </CButton>
          </CCol>
        </CRow>
        <CRow xs="12" sm="12" md="12" className="my-2">
          <CCol xs="12" sm="12" md="6">
            <CRow sm="12" md="12">
              <CCol xs="5" sm="5" md="6">
                <h4 className="my-auto">待選題目</h4>
              </CCol>
              <CCol xs="5" sm="5" md="4" className="ml-auto d-flex flex-column">
                <CButton
                  type="button"
                  component="a"
                  color="success"
                  variant="outline"
                  className="my-auto float-right"
                  href={`#course/createquestion`}>
                  加入題目
                </CButton>
              </CCol>
            </CRow>
            <QuestionList
              items={allQuestion}
              fields={fields}
            />
          </CCol>



          <CCol xs="12" sm="12" md="6">
            <h5 className="my-auto">題目預覽</h5>
          </CCol>
        </CRow>

      </CContainer>
    </>
  )
}

export default CreateQuestion;
