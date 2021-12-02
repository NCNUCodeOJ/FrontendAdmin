import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CButton,

} from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardHeader className="contestIntroArea">
          <CRow>
            <CCol sm="5">
              <div>
                <h4>
                  <strong>比賽名稱：</strong>
                  <strong>第一名有麥當勞</strong>
                </h4>
              </div>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="contestStartTime" >
              <div className="text"><h4>開始時間</h4></div>
              <h5><strong>110/10/24 07:00 AM</strong></h5>
            </CCol>
            <CCol md sm="12" className="contestEndTime">
              <div className="text"><h4>結束時間</h4></div>
              <h5><strong>110/10/24 07:00 AM</strong></h5>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="contestIntroArea">
              <CRow>
                <CCol sm="5">
                  <div>
                    <h4>
                      <strong>比賽名稱：</strong>
                    </h4>
                  </div>
                </CCol>
                <CCol>
                  <CButton
                    color="primary"
                    // shape="spill"
                    position="top-right"
                    // onClick={toggle}
                    className="float-right"
                  >
                    修改簡介
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CRow>
                    <CCol>
                      <h5>
                        我們經常看到網頁上的各種字體樣式，因為 HTML 標籤可以改變字體樣式。
                        有時候，我們看到的是，特殊的文本顯示與圖片。但是，社交媒體只允許文章和評論中的純文本格式。
                        在 UNICODE 中，有許多獨特的字符和數學符號，它們看起來像各種類型的字體。
                        此頁面是一個線上 Web 應用程式，可以將字母字母轉換為那些特定的符號文字。
                        輸出結果是純文本，而不是圖像，也不是 HTML。
                        只是純文字！任何作業系統都可以顯示這些字元，而不需要安裝字型檔案。
                        臉書，推特和 Instagram 應用程序可以正確顯示所有字母。只要按一下複製按鈕，然後貼到您想要的社交媒體上即可。
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

export default Dashboard
