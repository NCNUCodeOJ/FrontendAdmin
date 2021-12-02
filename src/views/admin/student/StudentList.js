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
  { id: 0, 學號: '107213001', 使用者名稱: 'apple', 學生姓名: '張一', 信箱: 's107213001@mail1.ncnu.edu.tw' },
  { id: 1, 學號: '107213002', 使用者名稱: 'beef', 學生姓名: '張二', 信箱: 's107213002@mail1.ncnu.edu.tw' },
  { id: 2, 學號: '107213003', 使用者名稱: 'cucumba', 學生姓名: '張三', 信箱: 's107213003@mail1.ncnu.edu.tw' },
  { id: 3, 學號: '107213004', 使用者名稱: 'donut', 學生姓名: '張四', 信箱: 's107213004@mail1.ncnu.edu.tw' },
  { id: 4, 學號: '107213005', 使用者名稱: 'egg', 學生姓名: '張五', 信箱: 's107213005@mail1.ncnu.edu.tw' },
  { id: 5, 學號: '107213006', 使用者名稱: 'fruit', 學生姓名: '張六', 信箱: 's107213006@mail1.ncnu.edu.tw' },
  { id: 6, 學號: '107213007', 使用者名稱: 'grapes', 學生姓名: '張七', 信箱: 's107213007@mail1.ncnu.edu.tw' },
  { id: 7, 學號: '107213008', 使用者名稱: 'ham', 學生姓名: '張八', 信箱: 's107213008@mail1.ncnu.edu.tw' },
]

const fields = [
  { key: '學號', _style: { width: '15%' } },
  { key: '使用者名稱', _style: { width: '10%' } },
  { key: '學生姓名', _style: { width: '10%' } },
  { key: '信箱', _style: { width: '30%' } },
]



const StudentList = () => {
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
      <div><h1><strong>程式設計(上)-學生名單</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
      >
        新增學生
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增學生</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>學生姓名</h5></CLabel>
                <CInput
                  name="studentName"
                  placeholder="請輸入學生姓名.."
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
        sorter
        itemsPerPage={10}
        hover
        pagination
        scopedSlots={{
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
          '查看學生名單':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    shape="spill"
                    size="sm"
                    onClick={goToHomeworkList}
                    href={`#course/studentlist`}
                  >
                    查看學生名單
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
export default StudentList;
