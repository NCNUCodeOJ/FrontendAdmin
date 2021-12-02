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
      <CCol sm="3" md="2" className="ml-auto d-flex flex-column my-1">
        <CButton type="button" component="a" color="success"
          className="float-right" href={`#course/createhomework`}>
          新增作業
        </CButton>
      </CCol>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton type="button" component="a" color="primary"
                className="float-right" href={`#course/homeworkstudentlist`}>
                查看
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}
export default HomeWorklist;
