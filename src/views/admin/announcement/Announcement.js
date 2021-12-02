import React, { useState } from 'react';
import {
  CButton,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput,
} from '@coreui/react';


const usersData = [
  { id: 0, 公告標題: '系統維護', 公告時間: '110/10/26 20:00 AM' },
  { id: 1, 公告標題: '比賽新增功能', 公告時間: '110/10/24 13:00 AM' },
  { id: 2, 公告標題: '作業繳交教學', 公告時間: '110/10/20 09:00 AM' },
  { id: 3, 公告標題: '忘記密碼怎麼辦', 公告時間: '110/10/16 18:00 AM' },
]

const fields = [
  { key: '公告標題', _style: { width: '40%' } },
  { key: '公告時間', _style: { width: '30%' } },
  '修改',
  '刪除',
  '查看'
]



const Announcement = () => {
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
      <div><h1 className="card-title mb-0"><strong>公告管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
      >
        新增公告
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增公告</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>公告名稱</h5></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入課程名稱"
                  autoComplete="className"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherName"><h5>公告內容</h5></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入公告之詳細內容"
                  autoComplete="className"
                />
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
        <CModalHeader closeButton><h3>修改公告資訊</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-courseNameEdit"><h5>公告名稱</h5></CLabel>
                <CInput
                  type="courseNameEdit"
                  id="courseNameEdit"
                  name="courseNameEdit"
                  placeholder="程式設計(上)"
                // autoComplete="courseName"
                />
              </CFormGroup>
              <CFormGroup>
              <CLabel htmlFor="nf-teacherName"><h5>公告內容</h5></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入公告之詳細內容"
                  autoComplete="className"
                />
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
        <CModalHeader closeButton><h3>刪除公告</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該公告？</h5></CLabel>
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
                    // onClick={goToHomeworkList}
                    href={`#announcement/announcementcontent`}
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
export default Announcement;
