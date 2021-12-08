import React, { useState } from 'react';
import {
  CButton, CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel, CSelect
} from '@coreui/react';

const usersData = [
  { id: 0, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '王曉明' },
  { id: 1, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '謝基基' },
  { id: 2, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '邱蝸瓜' },
  { id: 3, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '蔡瓜布' },
  { id: 4, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '蔡瓜布' },
  { id: 5, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '蔡瓜布' },
  { id: 6, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '蔡瓜布' },
]

const fields = [
  { key: '帳號', _style: { width: '20%' } },
  { key: '使用者名稱', _style: { width: '20%' } },
  { key: '修改', _style: { width: '10%' } },
]

const teacherAccount = [
  { id: 0, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 1, 帳號: 's107213020@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 2, 帳號: 's107213034@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 3, 帳號: 's107213012@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 4, 帳號: 's107213054@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 5, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 6, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 7, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 8, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 9, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 10, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
  { id: 11, 帳號: 's107213055@mail1.ncnu.edu.tw', 使用者名稱: '陳暐婷' },
]

const UserAccountManage = () => {
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
      <div><h1 className="card-title mb-0"><strong>使用者帳號管理</strong></h1></div>
      <br />
      <div><h3 className="card-title mb-0"><strong>權限身分：學生</strong></h3></div>
      <CModal
        show={modalEdit}
        onClose={toggleEdit}
      >
        <CModalHeader closeButton><h3>修改權限</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel><h5>帳號：</h5></CLabel>
                <br />
                <CLabel><h5>使用者名稱：</h5></CLabel>
                <br />
                <CLabel><h5>權限：</h5></CLabel>
                <CSelect
                  name="teacherName"
                  placeholder="俞旭昇"
                // autoComplete="current-teacherName"
                >
                  <option>老師</option>
                  <option>學生</option>
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
      <CDataTable
        items={usersData}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
        hover
        pagination
        className="studentAccount"
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
        }}
      />
      <div><h3 className="card-title mb-0"><strong>權限身分：老師</strong></h3></div>
      <CDataTable
        items={teacherAccount}
        fields={fields}
        tableFilter
        // itemsPerPageSelect
        itemsPerPage={5}
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
                    marginWidth="10"
                    marginHeight="10"
                  >
                    修改
                  </CButton>
                </td>
              )
            },
        }}
      />
    </>
  )
}
export default UserAccountManage;
