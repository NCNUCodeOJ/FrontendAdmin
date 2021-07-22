import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton, CCard, CCardBody,
  CRow, CCol, CContainer,
  CCreateElement, CSidebarNavItem,
} from '@coreui/react';

const HomeWorkItemLink = (props) => {
  return <CButton type="button" component="a" {...props} />;
}

const HomeWorkSideBar = [
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

const Item = (props) => {
  const x = props.item;
  const dispatch = useDispatch();
  const backToCourseList = () => {
    dispatch({ type: 'set', customNavBar: null });
  };
  const goToHomeworkList = () => {
    dispatch({
      type: 'set', customNavBar: () => {
        return (
          <>
            <CSidebarNavItem to='/dashboard' onClick={backToCourseList} name='首頁' icon='cil-speedometer' />
            <CSidebarNavItem to='/course/courselist' onClick={backToCourseList} name='返回' icon='cil-arrowCircleLeft' />
            <CCreateElement
              items={HomeWorkSideBar}
              components={{
                CSidebarNavItem
              }} />


          </>
        )
      }
    });
  };
  return (
    <>
      <CContainer md={10} xs={12}>
        <CCard id={x.id}>
          <CRow>
            <CCol md={8} xs={6}>
              <h2>{x.courseName}</h2>
            </CCol>
            <CCol>
              <CCol className="d-none d-md-block">
                <HomeWorkItemLink color="primary" className="float-right"
                  onClick={goToHomeworkList} href={`#course/homeworklist`}>
                  進入
                </HomeWorkItemLink>
              </CCol>
            </CCol>
          </CRow>
        </CCard>
      </CContainer>
    </>
  );
}

const CourseList = () => {
  const [allCourse, setAllCourse] = useState([])
  useEffect(() => {
    setAllCourse([
      {
        "id": 0,
        "courseName": "程式設計"
      },
      {
        "id": 1,
        "courseName": "Hello World"
      }
    ]);
  }, []);
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            {
              allCourse.map((x) => (
                <Item key={x.id} item={x} />
              ))
            }
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}
export default CourseList;
