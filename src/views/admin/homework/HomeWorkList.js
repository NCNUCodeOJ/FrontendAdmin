import {
  CButton,
  CCard,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/react'
const HomeWorklist = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}
export default HomeWorklist;
