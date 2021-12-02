import React, { useState } from 'react';
import {
  CButton, CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput, CSelect,
} from '@coreui/react';

const usersData = [
  { id: 0, 學校名稱: '國立暨南國際大學', 負責人: '俞旭昇' },
  { id: 1, 學校名稱: '國立台灣大學', 負責人: '俞旭昇' },
  { id: 2, 學校名稱: '國立清華大學', 負責人: '陳建宏' },
  { id: 3, 學校名稱: '國立交通大學', 負責人: '陳彥錚' },
  { id: 4, 學校名稱: '國立台北師範大學', 負責人: '陳彥錚' },
  { id: 5, 學校名稱: '國立成功大學', 負責人: '陳建宏' },
  { id: 6, 學校名稱: '國立東海大學', 負責人: '俞旭昇' },
  { id: 7, 學校名稱: '國立中正大學', 負責人: '俞旭昇' },
]

const fields = [
  { key: '學校名稱', _style: { width: '30%' } },
  { key: '負責人', _style: { width: '25%' } },
  '修改',
  '刪除',
  { key: '進入課程管理', _style: { width: '15%'} },
]



const SchoolList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  const [modalEdit, setmodalEdit] = useState(false);
  const toggleEdit = () => {
    setmodalEdit(!modalEdit);
  }
  const [modalDelete, setmodalDelete] = useState(false);
  const toggleDelete = () => {
    setmodalDelete(!modalDelete);
  }
  return (
    <>
      <div><h1><strong>學校管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
      >
        新增學校
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增學校</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>學校名稱</h5></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入學校名稱.."
                  autoComplete="className"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherName"><h5>負責人</h5></CLabel>
                <CSelect
                  name="teacherName"
                  placeholder="俞旭昇"
                // autoComplete="current-teacherName"
                >
                  <option>俞旭昇</option>
                  <option>陳彥錚</option>
                  <option>陳建宏</option>
                  <option>姜美玲</option>
                </CSelect>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={toggle}
          >Cancel</CButton>
          <CButton color="primary">新增</CButton>{' '}
        </CModalFooter>
      </CModal>
      <CModal
        show={modalEdit}
        onClose={toggleEdit}
      >
        <CModalHeader closeButton><h3>修改學校資訊</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-courseNameEdit"><h5>學校名稱</h5></CLabel>
                <CInput
                  type="courseNameEdit"
                  id="courseNameEdit"
                  name="courseNameEdit"
                  placeholder="程式設計(上)"
                // autoComplete="courseName"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherNameEdit"><h5>負責人</h5></CLabel>
                <CSelect
                  name="teacherNameEdit"
                  placeholder="俞旭昇"
                // autoComplete="current-teacherName"
                >
                  <option>俞旭昇</option>
                  <option>陳彥錚</option>
                  <option>陳建宏</option>
                  <option>姜美玲</option>
                </CSelect>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={toggleEdit}
          >Cancel</CButton>
          <CButton color="info">儲存</CButton>{' '}
        </CModalFooter>
      </CModal>
      <CModal
        show={modalDelete}
        onClose={toggleDelete}
      >
        <CModalHeader closeButton><h3>刪除學校</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該學校的所有課程？</h5></CLabel>
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={toggleDelete}
          >Cancel</CButton>
          <CButton color="danger">確認刪除</CButton>{' '}
        </CModalFooter>
      </CModal>
      <CDataTable
        items={usersData}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
        hover
        pagination
        scopedSlots={{
          // 彈跳視窗 (利用 form 送給後端)
          '修改':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="info"
                    shape="spill"
                    size="sm"
                    onClick={toggleEdit}
                  >
                    修改
                  </CButton>
                </td>
              )
            },
          '刪除':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="danger"
                    shape="spill"
                    size="sm"
                    onClick={toggleDelete}
                  >
                    刪除
                  </CButton>
                </td>
              )
            },
          '進入課程管理':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    href={`#course/courselist`}
                  >
                    進入課程管理
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default SchoolList;
