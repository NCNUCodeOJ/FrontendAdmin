import React, { useState, useEffect } from 'react';
import {
  CButton,
  CDataTable, CModal, CModalHeader,
  CModalBody, CModalFooter, CCol,
  CForm, CFormGroup, CLabel,
  CInput,
} from '@coreui/react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addAnnouncement, deleteAnnouncement, getAnnouncementList } from '../../../api/page/announcement/api';
import JSONbig from 'json-bigint';

function parseData(announcement, setAnnouncementTableData) {
  const dataList = []
  for (var i = 0; i < announcement.length; i++) {
    let tempArray = [];
    tempArray['id'] = announcement[i].announcement_id.toString();
    tempArray['title'] = announcement[i].title;
    const tmpTime = announcement[i].created_at;
    var realDate = new Date(tmpTime * 1000);
    var realMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var realYear = realDate.getFullYear();
    var realMonth = realMonths[realDate.getMonth()];
    var realDay = realDate.getDate();

    let tempRealTime = realYear + '-' + realMonth + '-' + realDay;
    var realTime = new Date(tmpTime * 1000);
    var realHour = realTime.getHours();
    var realMin = realTime.getMinutes();
    var realSec = realTime.getSeconds();
    tempRealTime += ' ' + realHour + ':' + realMin + ':' + realSec;
    tempArray['created_at'] = tempRealTime;
    console.log(tempRealTime);
    dataList.push(tempArray);
  }
  setAnnouncementTableData(dataList);
}


const Announcement = () => {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [deleteID, setDeleteID] = useState();
  const [modalAdd, setModal] = useState(false);
  const [modalDelete, setmodalDelete] = useState(false);
  const [announcementTableData, setAnnouncementTableData] = useState([]);
  const history = useHistory();
  const toggleAdd = () => {
    setModal(!modalAdd);
  }
  const fields = [
    { key: 'title', label: '公告標題', _style: { width: '40%' } },
    { key: 'created_at', label: '公告時間', _style: { width: '30%' } },
    { key: 'delete', label: '刪除', _style: { width: '15%' } },
    { key: 'look', label: '查看', _style: { width: '30%' } },
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
        toast.info('新增成功', options);
        setAnnouncementTitle("");
        setAnnouncementContent("");
        showAnnouncementList();
      })
      .catch((error) => {
        toast.error(error.response, options)
      })
  }
  const toggleDelete = () => {
    setmodalDelete(!modalDelete);
  }
  const submitDelete = (deleteID) => {
    const options = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    };

    console.log("deleteID：" + deleteID)
    const stringDeleteID = deleteID.toString();
    deleteAnnouncement(localStorage.getItem('token'), stringDeleteID)
      .then(() => {
        toast.error('刪除成功', options)
        showAnnouncementList();
      })
      .catch((error) => {
        toast.error(error.response, options)
      })
  }
  const showAnnouncementList = () => {
    getAnnouncementList()
      .then((rs) => {
        const data = JSONbig.parse(rs.data)
        const allAnnouncement = data.announcements;
        parseData(allAnnouncement, setAnnouncementTableData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    showAnnouncementList();
  }, []);

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
          <CButton color="danger" onClick={() => { submitDelete(deleteID); toggleDelete(); }}>確認刪除</CButton>
        </CModalFooter>
      </CModal>
      <CDataTable
        items={announcementTableData}
        fields={fields}
        tableFilter
        itemsPerPage={10}
        hover
        pagination
        scopedSlots={{
          'delete':
            (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="danger"
                    shape="spill"
                    size="sm"
                    // onClick={toggleDelete}
                    onClick={() => { submitDelete(item.id); }}
                    >
                    刪除
                  </CButton>
                </td>
              )
            },
          'look':
            (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="success"
                    shape="spill"
                    size="sm"
                    onClick={() => history.push(`/announcement/announcementcontent/${item.id}`)}
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
