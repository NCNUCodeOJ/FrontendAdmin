import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JSONbig from 'json-bigint';
import {
  CButton, CCreateElement, CSidebarNavItem,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput, CSelect,
} from '@coreui/react';
import { toast } from 'react-toastify';
import { getCourseList, getCourseInfo, deleteCourse } from '../../../api/page/course/api';
import { getUserInfoById } from '../../../api/page/user/api';

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

// const usersData = [
//   { id: 0, class_name: '程式設計(上)', teacher: '俞旭昇' },
//   { id: 1, class_name: '程式設計(下)', teacher: '俞旭昇' },
//   { id: 2, class_name: '軟體工程(上)', teacher: '陳建宏' },
//   { id: 3, class_name: '網頁設計(上)', teacher: '陳彥錚' },
//   { id: 4, class_name: '網頁設計(下)', teacher: '陳彥錚' },
//   { id: 5, class_name: '軟體工程(下)', teacher: '陳建宏' },
//   { id: 6, class_name: '1091 程式設計', teacher: '俞旭昇' },
//   { id: 7, class_name: '1092 程式設計', teacher: '俞旭昇' },
// ]

const fields = [
  { key: 'class_name', label: '課程名稱', _style: { width: '30%' } },
  { key: 'teacher', label: '授課老師', _style: { width: '25%' } },
  '刪除',
  '修改',
  { key: 'studentList', label: '查看學生名單', _style: { width: '12%' } },
  { key: 'goToHW', label: '進入作業/測驗', _style: { width: '12%' } }
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
  const toggleEdit = (id) => {
    setmodalEdit(!modalEdit);
    console.log(id.toString());
  }
  const [modalDelete, setmodalDelete] = useState(false);
  const toggleDelete = () => {
    setmodalDelete(!modalDelete);
  }
  const [allCourse, setAllCourse] = useState([]);
  const [allTeacherID, setAllTeacherID] = useState([]);
  const [allTeacherName, setAllTeacherName] = useState([]);

  const options = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  };
  const showCourseList = () => {
    if (localStorage.getItem('token') != null) {
      const token = localStorage.getItem('token');
      console.log(token);
      getCourseList(token)
        .then((rs) => {
          var data = JSONbig.parse(rs.data);
          const tempClassID = data.classes;
          const classData = [];
          const teacherID = new Set;
          getClassIndiData(token, tempClassID, classData, teacherID);
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data.message, options);
          }
        })
    }
  }
  const submitDelete = (deleteClassID) => {
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };

    const stringDeleteID = deleteClassID.toString();
    const nowToken = localStorage.getItem('token')
    console.log("deleteID：" + deleteClassID)
    console.log(nowToken)
    deleteCourse(nowToken, stringDeleteID)
      .then(() => {
        toast.error('刪除成功', options)
        showCourseList();
      })
      .catch((error) => {
        toast.error(error.response, options)
        console.log(error)
      })
  }
  useEffect(() => {
    showCourseList();
  }, []);
  function getClassIndiData(token, tempClassID, classData, teacherID) {
    let temp = null;
    temp = tempClassID.pop();
    getCourseInfo(token, temp.toString())
      .then((rs) => {
        var classInfo = JSONbig.parse(rs.data);
        classInfo.class_id = classInfo.class_id.toString();
        classData.push(classInfo);
        teacherID.add(classInfo.teacher.toString());
        // if (allTeacherName.user_id == teacherID){
        //   teacherID = allTeacherName.username
        //   console.log("teacherID"+teacherID)
        // }
        if (tempClassID.length > 0) {
          getClassIndiData(token, tempClassID, classData, teacherID);
        } else {
          const teacherIDJSON = {};
          teacherIDJSON["user_id"] = Array.from(teacherID);
          getUserInfo(token, teacherIDJSON);
          setAllCourse(classData);
          setAllTeacherID(teacherIDJSON);
          // console.log(teacherIDJSON);
        }
      })
  }

  function getUserInfo(token, allTeacherID) {
    getUserInfoById(token, allTeacherID)
      .then((rs) => {
        setAllTeacherName(rs.data);
        console.log(allTeacherName)
      })
      .catch((er) => {
        console.log(er.response.data.message);
      }
      )
  }
  const classID='717021008802840578';
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
      {/* <CModal
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
          <CButtondeleteCourse
            color="secondary"
            onClick={toggleDelete}
          >Cancel</CButton>
          <CButton color="danger">確認刪除</CButton>{' '}
        </CModalFooter>
      </CModal> */}
      <CDataTable
        items={allCourse}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={10}
        hover
        pagination
        scopedSlots={{
          // 彈跳視窗 (利用 form 送給後端)
          '刪除':
            (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="danger"
                    shape="spill"
                    size="sm"
                    onClick={() => {submitDelete(item.class_id); toggleDelete();}}
                  >
                    刪除
                  </CButton>
                </td>
              )
            },
          '修改':
            (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="info"
                    shape="spill"
                    size="sm"
                    onClick={() => toggleEdit(item.class_id)}
                  >
                    修改
                  </CButton>
                </td>
              )
            },
          'studentList':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    shape="spill"
                    size="sm"
                    href={`#course/studentlist/${classID}`}
                  >
                    查看學生名單
                  </CButton>
                </td>
              )
            },
          'goToHW':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToHomeworkList}
                    href={`#course/homeworklist/${classID}`}
                  >
                    進入作業/測驗
                  </CButton>
                </td>
              )
            }
        }}
      />
    </>
  )
}
export default CourseList;
