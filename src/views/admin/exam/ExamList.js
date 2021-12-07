import React, { useState } from 'react';
import {
  CButton, CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel
} from '@coreui/react'

const usersData = [
  { id: 0, 測驗名稱: '訂機票出去玩', 剩餘時間: '00:30:12' },
  { id: 1, 測驗名稱: '八皇后在哪裡', 剩餘時間: '12:38:23' },
  { id: 2, 測驗名稱: '麻將好好玩', 剩餘時間: '1 day' },
  { id: 3, 測驗名稱: '有趣的鋪克牌', 剩餘時間: '2 day' },
  { id: 4, 測驗名稱: '馬拉松接力賽', 剩餘時間: '4 day' },
  { id: 5, 測驗名稱: '走馬炮', 剩餘時間: '5 day' },
  { id: 6, 測驗名稱: '閏年判斷計算機', 剩餘時間: '16 day' },
  { id: 7, 測驗名稱: '迷宮遊戲', 剩餘時間: '21 day' },
];

const fields = [
  { key: '測驗名稱', _style: { width: '30%' } },
  { key: '剩餘時間', _style: { width: '25%' } },
  '刪除',
  '修改',
  { key: '查看', _style: { width: '10%' } },
];

const ExamInfo = () => {
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
      <div><h1><strong>測驗管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        className="float-right"
        href='#course/createexam'
      >
        新增測驗
      </CButton>
      <CModal
        show={modalDelete}
        onClose={toggleDelete}
      >
        <CModalHeader closeButton><h3>刪除測驗</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該測驗？</h5></CLabel>
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
                    onClick={toggleEdit}
                    href='#course/updateexam'
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
                    href='#course/examinfo'
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
export default ExamInfo;
