import React, { useState, useEffect } from 'react';
import {
  CButton,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput,
} from '@coreui/react';
import { toast } from 'react-toastify';
import { addAnnouncement, deleteAnnouncement, getAnnouncementList } from '../../../api/page/announcement/api';
import { ContactSupportOutlined } from '@material-ui/icons';

const dataList = []

function parseData(announcement, setAnnouncementTableData) {
  for (var i = 0; i < announcement.length; i++) {
    const tempArray = {};
    tempArray['title'] = announcement[i].title;
    tempArray['created_at'] = announcement[i].created_at;
    dataList.push(tempArray);
  }
  console.log(dataList);
  setAnnouncementTableData(dataList);
}


const Announcement = () => {
  const [announcement, getAllAnnouncement] = useState([]);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [modalAdd, setModal] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [announcementTableData, setAnnouncementTableData] = useState([]);
  const toggleAdd = () => {
    setModal(!modalAdd);
  }
  const fields = [
    { key: 'title', label: '公告標題', _style: { width: '40%' } },
    { key: 'created_at', label: '公告時間', _style: { width: '30%' } },
    { key: 'delete', label: '刪除', _style: { width: '15%' } },
    { key: 'look', label: '查看', _style: { width: '30%' } },
  ]

  const usersData = [
    { id: 0, title: '1', created_at: '123' },
    { id: 1, title: '123', created_at: '456' },
  ]
  const submitAdd = () => {
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };
    console.log(localStorage.getItem('token'))
    addAnnouncement(localStorage.getItem('token'), announcementTitle, announcementContent)
      .then(() => {
        toast.info('新增成功', options)
      })
      .catch((error) => {
        toast.info(error.response, options)
      })
  }
  const toggleDelete = () => {
    setmodalDelete(!modalDelete);
  }
  const submitDelete = () => {
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };
    console.log(localStorage.getItem('token'))
    deleteAnnouncement(localStorage.getItem('token'), announcementTitle, announcementContent)
      .then(() => {
        toast.info('新增成功', options)
      })
      .catch((error) => {
        toast.info(error.response, options)
      })
  }
  const showAnnouncementList = () => {
    getAnnouncementList()
      .then((rs) => {
        const allAnnouncement = rs.data.announcements;
        getAllAnnouncement(allAnnouncement);
        parseData(announcement, setAnnouncementTableData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    showAnnouncementList();
  }, []);

  console.log(announcementTableData);
  return (
    <>
      <div><h1 className="card-title mb-0"><strong>公告管理</strong></h1></div>
      <CButton
        color="primary"
        shape="spill"
        position="top-right"
        onClick={() => { toggleAdd(); }}
        className="float-right"
      >
        新增公告
      </CButton>
      <CModal
        show={modalAdd}
        onClose={toggleAdd}
      >
        <CModalHeader closeButton><h3>新增公告</h3></CModalHeader>
        <CModalBody>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-className"><h5>公告名稱</h5></CLabel>
                <CInput
                  type="input"
                  id="announcementTitle"
                  placeholder="請輸入公告標題"
                  autoComplete="className"
                  value={announcementTitle}
                  onChange={(e) => {
                    setAnnouncementTitle(e.target.value);
                  }}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-teacherName"><h5>公告內容</h5></CLabel>
                <CInput
                  type="input"
                  id="announcementContent"
                  placeholder="請輸入公告之詳細內容"
                  autoComplete="className"
                  value={announcementContent}
                  onChange={(e) => {
                    setAnnouncementContent(e.target.value);
                  }}
                />
              </CFormGroup>
            </CForm>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={toggleAdd}
          >Cancel</CButton>
          <CButton color="primary" onClick={() => { submitAdd(); toggleAdd(); }}>新增</CButton>
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
          <CButton color="danger" onClick={() => { submitDelete(); toggleDelete(); }}>確認刪除</CButton>
        </CModalFooter>
      </CModal>
      <CDataTable
        items={dataList}
        fields={fields}
        tableFilter
        itemsPerPage={10}
        hover
        pagination
        scopedSlots={{
          'delete':
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
          'look':
            () => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
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
