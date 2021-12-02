import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const AnnouncementContent = () => {
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
                      <strong>公告內容：系統維護</strong>
                    </h4>
                  </div>
                </CCol>
                <CCol>
                  {/* <CButton
                    color="primary"
                    // shape="spill"
                    position="top-right"
                    // onClick={toggle}
                    className="float-right"
                  >
                    修改簡介
                  </CButton> */}
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CRow>
                    <CCol>
                      <h5>
                        本系統因辦理例行性系統維護將於：
                        110年12月13日(一) 23：30～110年12月18日(二) 00：30
                        暫停所有服務，如造成您的不便，敬請見諒。
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
  )
}

export default AnnouncementContent
