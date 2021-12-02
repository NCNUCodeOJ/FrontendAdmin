import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton, CCreateElement, CSidebarNavItem,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput, CSelect,
} from '@coreui/react';

const CourseSideBar = [
  {
    _tag: 'CSidebarNavItem',
    name: '測驗管理',
    to: '/course/examinfo',
    icon: 'cil-code',
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '作業管理',
    to: '/course/homeworklist',
    icon: 'cil-keyboard',
    badge: {
      color: 'info',
    }
  }
]

const usersData = [
  { id: 0, 課程名稱: '程式設計(上)', 授課老師: '俞旭昇' },
  { id: 1, 課程名稱: '程式設計(下)', 授課老師: '俞旭昇' },
  { id: 2, 課程名稱: '軟體工程(上)', 授課老師: '陳建宏' },
  { id: 3, 課程名稱: '網頁設計(上)', 授課老師: '陳彥錚' },
  { id: 4, 課程名稱: '網頁設計(下)', 授課老師: '陳彥錚' },
  { id: 5, 課程名稱: '軟體工程(下)', 授課老師: '陳建宏' },
  { id: 6, 課程名稱: '1091 程式設計', 授課老師: '俞旭昇' },
  { id: 7, 課程名稱: '1092 程式設計', 授課老師: '俞旭昇' },
]

const fields = [
  { key: '課程名稱', _style: { width: '30%' } },
  { key: '授課老師', _style: { width: '25%' } },
  '修改',
  '刪除',
  { key: '進入作業/測驗', _style: { width: '15%'} }
]



const CourseList = () => {
  const dispatch = useDispatch();
  const backToCourseList = () => {
    dispatch({ type: 'set', customNavBar: null });
  };
  const goToHomeworkList = () => {
    dispatch({
      type: 'set', customNavBar: () => {
        return (
          <>
            <CSidebarNavItem to='/course/courselist' onClick={backToCourseList} name='返回' icon='cil-arrowCircleLeft' />
            <CCreateElement
              items={CourseSideBar}
              components={{
                CSidebarNavItem
              }} />
          </>
        )
      }
    });
  };
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
      <div><h1><strong>國立暨南國際大學-課程管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
      >
        新增課程
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增課程</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>課程名稱</h5></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入課程名稱.."
                  autoComplete="className"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherName"><h5>授課老師</h5></CLabel>
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
        <CModalHeader closeButton><h3>修改課程資訊</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-courseNameEdit"><h5>課程名稱</h5></CLabel>
                <CInput
                  type="courseNameEdit"
                  id="courseNameEdit"
                  name="courseNameEdit"
                  placeholder="程式設計(上)"
                // autoComplete="courseName"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherNameEdit"><h5>授課老師</h5></CLabel>
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
        <CModalHeader closeButton><h3>刪除課程</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該課程？</h5></CLabel>
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
          '進入作業/測驗':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToHomeworkList}
                    href={`#course/homeworklist`}
                  >
                    進入作業/測驗
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default CourseList;
