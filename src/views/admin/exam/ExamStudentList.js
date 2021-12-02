import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton, CCreateElement, CSidebarNavItem,
  CDataTable
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
  { key: '查看測驗', _style: { width: '10%' } },
]



const ExamStudentList = () => {
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

  return (
    <>
      <div><h1><strong>程式設計(上)測驗-第一次隨堂考</strong></h1></div>

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
          '查看測驗':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToHomeworkList}
                    href={`#course/examinfo`}
                  >
                    查看測驗
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default ExamStudentList;
