import {
  CButton,
  CCard,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/react'
const ExamList = () => {
  return (
    <>
      <CCol sm="3" md="2" className="ml-auto d-flex flex-column my-1">
        <CButton type="button" component="a" color="success"
          className="float-right" href={`#course/createexam`}>
          新增測驗
        </CButton>
      </CCol>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="3" className="d-none d-md-block">
              <CButton color="info"
                className="float-right" href={`#course/updateexam`}>
                修改測驗
              </CButton>
            </CCol>
            <CCol sm="3" className="d-none d-md-block">
              <CButton  color="primary"
                className="float-right" href={`#course/examstudentlist`}>
                查看
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}
export default ExamList;
