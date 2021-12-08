import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton, CCreateElement, CSidebarNavItem,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel
} from '@coreui/react';

const CourseSideBar = [
  {
    _tag: 'CSidebarNavItem',
    name: '測驗管理',
    to: '/course/examlist',
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
  { id: 0, 學號: '107213001', 學生姓名: '張一', 繳交時間: '2021/11/01 19:59', 成績: '10' },
  { id: 1, 學號: '107213002', 學生姓名: '張二', 繳交時間: '2021/11/01 23:02', 成績: '0' },
  { id: 2, 學號: '107213003', 學生姓名: '張三', 繳交時間: '2021/11/03 13:05', 成績: '3' },
  { id: 3, 學號: '107213004', 學生姓名: '張四', 繳交時間: '2021/11/04 17:01', 成績: '5' },
  { id: 4, 學號: '107213005', 學生姓名: '張五', 繳交時間: '2021/11/04 18:46', 成績: '6' },
  { id: 5, 學號: '107213006', 學生姓名: '張六', 繳交時間: '2021/11/04 19:20', 成績: '1' },
  { id: 6, 學號: '107213007', 學生姓名: '張七', 繳交時間: '2021/11/04 23:20', 成績: '2' },
  { id: 7, 學號: '107213008', 學生姓名: '張八', 繳交時間: '2021/11/04 23:55', 成績: '4' },
]

const fields = [
  { key: '學號', _style: { width: '15%' } },
  { key: '學生姓名', _style: { width: '10%' } },
  { key: '繳交時間', _style: { width: '20%' } },
  { key: '成績', _style: { width: '10%' } },
  { key: '查看作業', _style: { width: '10%' } },
]



const HomeWorkStudentList = ({ match }) => {
  const classID = match.params.id;
  console.log(classID);
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
  const [modalDelete, setmodalDelete] = useState(false);
  const toggleDelete = () => {
    setmodalDelete(!modalDelete);
  }
  return (
    <>
      <div><h1><strong>程式設計(上)作業-八皇后</strong></h1></div>
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
      <CButton
        color="danger"
        shape="spill"
        position="top-right"
        href='http://moss.stanford.edu/results/3/2941481227494'
        className="float-right"
      >
        抄襲比對
      </CButton>
      <CDataTable
        items={usersData}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={10}
        hover
        sorter
        pagination
        scopedSlots={{
          // 彈跳視窗 (利用 form 送給後端)
          '查看作業':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToHomeworkList}
                    href={`#course/homeworkinfo`}
                  >
                    查看作業
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default HomeWorkStudentList;
