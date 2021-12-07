import { React, useState } from 'react'
import { useSelector } from 'react-redux';
import {
  CContainer, CRow, CCol,
  CInput, CTextarea, CButton
} from '@coreui/react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Redirect } from 'react-router-dom';
import {
  Typography, TextField, Grid
} from '@material-ui/core/';

const HomeWorkItem = () => {


  return (
    <>

    </>
  );
}

const CreateHomeWork = () => {
  const isLogin = useSelector(state => state.isLogin);
  const [HWTitle, setHWTitle] = useState("");
  const [HWDiscription, setHWDiscription] = useState("");
  const [HWDifficulty, setHWDifficulty] = useState("");
  const [HWOpenTime, setHWOpenTime] = useState("");
  const [HWCloseTime, setHWCloseTime] = useState("");
  const [HWInputDiscription, setHWInputDiscription] = useState("");
  const [HWOutputDiscription, setHWOutputDiscription] = useState("");
  const [HWInput, setHWInput] = useState("");
  const [HWOutput, setHWOutput] = useState("");
  if (!isLogin) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <CContainer className="px-2">
        {/* <HomeWorkItem /> */}
        <CRow sm="12" md="10" className="mx-auto">
          <CCol sm="7" md="8">
            <h1 className="font-weight-bold card-title mb-0">
              新增作業
            </h1>
          </CCol>
        </CRow>
        <hr />
        <CRow sm="12" md="10">
          <h4 className="my-auto font-weight-bold">作業標題:</h4>
          <CCol sm="10" md="10">
            <CInput
              custom-size="lg"
              id="homeworkName"
              alignitems="center"
              textalign="center"
              inputprops={{
                'aria-label': 'naked',
                'maxLength': 1
              }}
              placeholder="請輸入作業標題"
              type='text'
              onChange={(e) => {
                setHWTitle(e.target.value);
              }} />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="my-auto font-weight-bold">作業說明: </h4>
          <CCol sm="12" md="10">
            <CTextarea
              id="homeworkDescription"
              alignitems="center"
              textalign="center"
              inputprops={{
                'aria-label': 'naked',
                'maxLength': 1
              }}
              placeholder="請輸入作業說明"
              type='text'
              onChange={(e) => {
                setHWDiscription(e.target.value);
              }} />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="font-weight-bold">作業難度:</h4>
          <CCol sm="10" md="8">
            <Rating
              name="homeworkDifficulty"
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={(e) => {
                setHWDifficulty(e.target.value);
              }}
            />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">開放時間: </h4>
              <CCol sm="8" md="8">
                <CInput
                  id="homeworkEndDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
                  onChange={(e) => {
                    setHWOpenTime(e.target.value);
                  }} />
              </CCol>
            </CRow>
          </CCol>
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">截止時間:</h4>
              <CCol sm="8" md="8">
                <CInput
                  id="homeworkStartDate"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  type='datetime-local'
                  onChange={(e) => {
                    setHWCloseTime(e.target.value);
                  }} />
              </CCol>
            </CRow>
          </CCol>
        </CRow>

        <CRow sm="12" md="12" className="my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">作業輸入:</h4>
              <CCol sm="10" md="10">
                <CInput
                  custom-size="lg"
                  id="homeworkInputdescription"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  placeholder="輸入描述"
                  type='text'
                  onChange={(e) => {
                    setHWInputDiscription(e.target.value);
                  }} />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="12" className="my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">作業輸出:</h4>
              <CCol sm="10" md="10">
                <CInput
                  custom-size="lg"
                  id="homeworkDescription"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  placeholder="輸出描述"
                  type='text'
                  onChange={(e) => {
                    setHWOutputDiscription(e.target.value);
                  }} />
              </CCol>
            </CRow>
          </CCol>
        </CRow>

        <Typography variant="h6" >
          測資1
        </Typography>
        <CRow sm="12" md="12" className="border border-black-50 rounded-lg py-2 mx-5">
          <CCol sm="12" md="6" >
            <Typography variant="h6" >
              input
            </Typography>
            <TextField
              name='inputOne'
              variant="outlined"
              placeholder='請輸入測資'
              fullWidth
            />
          </CCol>
          <CCol sm="12" md="6">
            <Typography variant="h6" >
              output
            </Typography>
            <TextField
              name='outputOne'
              variant="outlined"
              placeholder='請輸入測資'
              fullWidth
              onChange={(e) => {
                setHWOutput(e.target.value);
              }}
            />
          </CCol>
        </CRow>

        <Typography variant="h6" >
          測資2
        </Typography>
        <CRow sm="12" md="12" className="border border-black-50 rounded-lg py-2 mx-5">
          <CCol sm="12" md="6" >
            <Typography variant="h6" >
              input
            </Typography>
            <TextField
              name='inputTwo'
              variant="outlined"
              placeholder='請輸入測資'
              fullWidth
              onChange={(e) => {
                setHWInput(e.target.value);
              }}
            />
          </CCol>
          <CCol sm="12" md="6">
            <Typography variant="h6" >
              output
            </Typography>
            <TextField
              name='outputTwo'
              variant="outlined"
              placeholder='請輸入測資'
              fullWidth
            />
          </CCol>
        </CRow>

        <CRow sm="12" md="10" className="my-2">
          <h4 className="my-auto font-weight-bold">繳交語言:</h4>
        </CRow>
        <CRow sm="12" md="10" className="my-2 mx-5">
          <CCol sm="10" md="6">
            <CRow className="ml-2">
              <CInput class="form-check-input" type="checkbox" value="" id="homeworkLanguage[]" />
              <CCol sm="8" md="8">
                <h4 className="my-auto pr-1 font-weight-bold">python </h4>
              </CCol>
            </CRow>
          </CCol>
          <CCol sm="10" md="6">
            <CRow className="ml-2">
              <CInput class="form-check-input" type="checkbox" value="" id="homeworkLanguage[]" />
              <CCol sm="8" md="8">
                <h4 className="my-auto pr-1 font-weight-bold">java</h4>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2 mx-5">
          <CCol sm="10" md="6">
            <CRow className="ml-2">
              <CInput class="form-check-input" type="checkbox" value="" id="homeworkLanguage[]" />
              <CCol sm="8" md="8">
                <h4 className="my-auto pr-1 font-weight-bold">C</h4>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="my-auto font-weight-bold">上傳Test Case(Zip壓縮檔):</h4>
        </CRow>
        <input type="file" class="form-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>

        <CCol xs="3" sm="3" md="3" className='my-3 mx-auto d-flex flex-column'>
          <CButton type="button" component="a" color="primary"
            className="my-auto float-right">
            提交
          </CButton>
        </CCol>
      </CContainer>
    </>
  )
}

export default CreateHomeWork;
