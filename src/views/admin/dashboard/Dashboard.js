import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">系統狀態</h4>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="align-self-center" >
              <div className="text"><h4>網路狀態</h4></div>
              <strong>正常</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text"><h4>伺服器狀態</h4></div>
              <strong>正常</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">統計數據</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">目前上線人數</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">課程總數</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">學校總數</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">系統使用者總數</small>
                        <br />
                        <strong className="h4">49,123</strong>
                      </CCallout>
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

export default Dashboard
