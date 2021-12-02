import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CButton, CCreateElement, CSidebarNavItem,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput
} from '@coreui/react';

const ContestSideBar = [
  {
    _tag: 'CSidebarNavItem',
    name: '簡介管理',
    to: '/contest/contestintro',
    icon: 'cil-code',
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '題目管理',
    to: '/course/homeworklist',
    icon: 'cil-keyboard',
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '狀態管理',
    to: '/contest/conteststatus',
    icon: 'cil-keyboard',
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Q & A 管理',
    to: '/course/homeworklist',
    icon: 'cil-keyboard',
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '排行榜管理',
    to: '/course/homeworklist',
    icon: 'cil-keyboard',
    badge: {
      color: 'info',
    }
  },
]

const ContestInProgress = [
  { id: 0, 比賽名稱: '第一名有麥當勞!', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 1, 比賽名稱: '程式設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 2, 比賽名稱: '軟體工程(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 3, 比賽名稱: '網頁設計(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 4, 比賽名稱: '網頁設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 5, 比賽名稱: '軟體工程(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 6, 比賽名稱: '1091 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 7, 比賽名稱: '1092 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
]
const ContestInFuture = [
  { id: 0, 比賽名稱: '第一名有麥當勞!', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 1, 比賽名稱: '程式設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 2, 比賽名稱: '軟體工程(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 3, 比賽名稱: '網頁設計(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 4, 比賽名稱: '網頁設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 5, 比賽名稱: '軟體工程(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 6, 比賽名稱: '1091 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 7, 比賽名稱: '1092 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
]
const ContestInPast = [
  { id: 0, 比賽名稱: '第一名有麥當勞!', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 1, 比賽名稱: '程式設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 2, 比賽名稱: '軟體工程(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 3, 比賽名稱: '網頁設計(上)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 4, 比賽名稱: '網頁設計(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 5, 比賽名稱: '軟體工程(下)', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 6, 比賽名稱: '1091 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
  { id: 7, 比賽名稱: '1092 程式設計', 開始時間: '110/10/24 07:00 AM', 結束時間: '110/10/24 07:00 AM' },
]
const fields = [
  { key: '比賽名稱', _style: { width: '15%' } },
  { key: '開始時間', _style: { width: '10%' } },
  { key: '結束時間', _style: { width: '10%' } },
  { key: '查看比賽內容', _style: { width: '7%' } },
  { key: '修改比賽資訊', _style: { width: '7%' } },
  { key: '結束比賽', _style: { width: '5%' } },
]

const endContestfields = [
  { key: '比賽名稱', _style: { width: '15%' } },
  { key: '開始時間', _style: { width: '10%' } },
  { key: '結束時間', _style: { width: '10%' } },
  { key: '查看比賽內容', _style: { width: '7%' } },
]

const ContestList = () => {
  const dispatch = useDispatch();
  const backToContestList = () => {
    dispatch({ type: 'set', customNavBar: null });
  };
  const goToContestDetail = () => {
    dispatch({
      type: 'set', customNavBar: () => {
        return (
          <>
            <CSidebarNavItem to='/contest/contestlist' onClick={backToContestList} name='返回' icon='cil-arrowCircleLeft' />
            <CCreateElement
              items={ContestSideBar}
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
      <div><h3 className="card-title mb-0"><strong>進行中的比賽</strong></h3></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={toggle}
        className="float-right"
      >
        新增比賽
      </CButton>
      <CModal
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton><h3>新增比賽</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h4><strong>比賽名稱</strong></h4></CLabel>
                <CInput
                  type="className"
                  id="className"
                  name="className"
                  placeholder="請輸入比賽名稱.."
                  autoComplete="className"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5><strong>開始時間</strong></h5></CLabel>
                <CInput
                  id="contestStartDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5><strong>結束時間</strong></h5></CLabel>
                <CInput
                  id="contestEndDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
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
        <CModalHeader closeButton><h3>修改比賽資訊</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h4><strong>比賽名稱</strong></h4></CLabel>
                <CInput
                  type="input"
                  id="contestName"
                  name="className"
                  placeholder="請輸入比賽名稱.."
                  autoComplete="className"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5><strong>開始時間</strong></h5></CLabel>
                <CInput
                  id="editContestStartDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5><strong>結束時間</strong></h5></CLabel>
                <CInput
                  id="editContestEndDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
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
        <CModalHeader closeButton><h3>刪除比賽</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>確認要刪掉該比賽？</h5></CLabel>
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
        items={ContestInProgress}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
        hover
        pagination
        scopedSlots={{
          '修改比賽資訊':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="info"
                    shape="spill"
                    size="sm"
                    onClick={toggleEdit}
                  >
                    修改比賽資訊
                  </CButton>
                </td>
              )
            },
          '結束比賽':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="danger"
                    shape="spill"
                    size="sm"
                    onClick={toggleDelete}
                  >
                    結束比賽
                  </CButton>
                </td>
              )
            },
          '查看比賽內容':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToContestDetail}
                    href={`#/contest/contestintro`}
                  >
                    查看比賽內容
                  </CButton>
                </td>
              )
            },
        }}
      />
      <div><h3 className="card-title mb-0"><strong>即將開始比賽</strong></h3></div>
      <CDataTable
        items={ContestInFuture}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
        hover
        pagination
        scopedSlots={{
          // 彈跳視窗 (利用 form 送給後端)
          '修改比賽資訊':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="info"
                    shape="spill"
                    size="sm"
                    onClick={toggleEdit}
                  >
                    修改比賽資訊
                  </CButton>
                </td>
              )
            },
          '結束比賽':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="danger"
                    shape="spill"
                    size="sm"
                    onClick={toggleDelete}
                  >
                    結束比賽
                  </CButton>
                </td>
              )
            },
          '查看比賽內容':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToContestDetail}
                    href={`#/contest/contestintro`}
                  >
                    查看比賽內容
                  </CButton>
                </td>
              )
            },
        }}
      />
      <div><h3 className="card-title mb-0"><strong>過去的比賽</strong></h3></div>
      <CDataTable
        items={ContestInPast}
        fields={endContestfields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
        hover
        pagination
        scopedSlots={{
          // 彈跳視窗 (利用 form 送給後端)
          '查看比賽內容':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={goToContestDetail}
                    href={`#course/homeworklist`}
                  >
                    查看比賽內容
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default ContestList;
