import React, { useState } from 'react';
import {
  CButton, CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput
} from '@coreui/react'
import { useHistory } from 'react-router-dom';


const usersData = [
  { id: 0, 作業名稱: '訂機票出去玩', 剩餘時間: '00:30:12' },
  { id: 1, 作業名稱: '八皇后在哪裡', 剩餘時間: '12:38:23' },
  { id: 2, 作業名稱: '麻將好好玩', 剩餘時間: '1 day' },
  { id: 3, 作業名稱: '有趣的鋪克牌', 剩餘時間: '2 day' },
  { id: 4, 作業名稱: '馬拉松接力賽', 剩餘時間: '4 day' },
  { id: 5, 作業名稱: '走馬炮', 剩餘時間: '5 day' },
  { id: 6, 作業名稱: '閏年判斷計算機', 剩餘時間: '16 day' },
  { id: 7, 作業名稱: '迷宮遊戲', 剩餘時間: '21 day' },
];

const fields = [
  { key: '作業名稱', _style: { width: '30%' } },
  { key: '剩餘時間', _style: { width: '25%' } },
  '刪除',
  '修改',
  { key: '查看', _style: { width: '10%' } },
];

const HomeWorkList = ({ match }) => {
  const classID = match.params.id;
  console.log(classID);
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
  const history = useHistory()

  return (
    <>
      <div><h1><strong>作業管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
        href='#course/createhomework'
      >
        新增作業
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增作業</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-homeWorkName"><h5>作業名稱</h5></CLabel>
                <CInput
                  type="homeWorkName"
                  id="homeWorkName"
                  name="homeWorkName"
                  placeholder="請輸入作業名稱.."
                  autoComplete="homeWorkName"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-submitTime"><h5>規定繳交日期</h5></CLabel>
                {/* 還要再想想要怎麼填入時間 */}
                <CInput defaultValue={new Date()} />
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
        <CModalHeader closeButton><h3>修改作業資訊</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-homeWorkNameEdit"><h5>作業名稱</h5></CLabel>
                <CInput
                  type="homeWorkNameEdit"
                  id="homeWorkNameEdit"
                  name="homeWorkNameEdit"
                  placeholder="八皇后在哪裡"
                // autoComplete="courseName"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-submitTimeEdit"><h5>規定繳交時間</h5></CLabel>
                {/* 還要再想想要怎麼填入時間 */}
                <CInput defaultValue={new Date()} />
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
        <CModalHeader closeButton><h3>刪除作業</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該作業？</h5></CLabel>
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
        itemsPerPage={10}
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
                    href='#course/updatehomework'
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
          '查看':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={() => history.push(`/course/homeworkstudentlist/${classID}`)}
                  >
                    查看
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default HomeWorkList;
