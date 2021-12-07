import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { getAnnouncementList } from 'src/api/page/announcement/api';
import JSONbig from 'json-bigint';

const Item = (props) => {
  const x = props.item;
  return (
    <>
      {(() => {
        if (props.currentID == x.announcement_id.toString()) {
          console.log(x.announcement_id.toString());
          return (
            <>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader className="contestIntroArea">
                      <CRow>
                        <CCol sm="5">
                          <div>
                            <h4>
                              <strong>{x.title}</strong>
                            </h4>
                          </div>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol xs="12">
                          <CRow>
                            <CCol>
                              <h5>
                                {x.content}
                              </h5>
                            </CCol>
                          </CRow>
                        </CCol>
                      </CRow>
                      <br />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </>
          );
        }
      })()}
    </>
  );
}
const AnnouncementContent = ({ match }) => {
  const currentID = match.params.id;
  const [announcement, getAllAnnouncement] = useState([]);
  const showAnnouncementContent = () => {
    getAnnouncementList()
      .then((rs) => {
        const data = JSONbig.parse(rs.data)
        const allAnnouncement = data.announcements;
        console.log(allAnnouncement)
        getAllAnnouncement(allAnnouncement);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };
  useEffect(() => {
    showAnnouncementContent();
  }, []);
  return (
    <>
      <div>
        {
          announcement.map((x) => (
            <Item key={x.announcement_id.toString()} item={x} currentID={currentID} />
          ))
        }
      </div>
    </>
  )
}

export default AnnouncementContent
