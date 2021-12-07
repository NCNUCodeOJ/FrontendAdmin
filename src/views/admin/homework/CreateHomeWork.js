import React from 'react'
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
      <div>
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
              type='text' />
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
              type='text' />
          </CCol>
        </CRow>
        <CRow sm="12" md="10" className="my-2">
          <h4 className="font-weight-bold">作業難度:</h4>
          <CCol sm="10" md="8">
            <Rating
              name="homeworkDifficulty"
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
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
                  type='datetime-local' />
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
                  type='datetime-local' />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="12" className="my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">評分標準:</h4>
              <CCol sm="10" md="10">
                <CInput
                  custom-size="lg"
                  id="homeworkGradingStandard"
                  alignitems="center"
                  textalign="center"
                  inputprops={{
                    'aria-label': 'naked',
                    'maxLength': 1
                  }}
                  placeholder="請輸入評分標準"
                  type='text' />
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
                  type='text' />
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
                  type='text' />
              </CCol>
            </CRow>
          </CCol>
        </CRow>

      </div>
    </>
  );
}

const CreateHomeWork = () => {
  const isLogin = useSelector(state => state.isLogin);

  if (!isLogin) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <CContainer className="px-2">
        <HomeWorkItem />
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
            />
          </CCol>
          {/* </CRow> */}
          {/* <CCol xs="1" sm="1" md="1">
            <CButton
              variant="outline"
              color="dark"
              type="button"
              component="a"
              onClick={cloneQuestionTopic}
              className="btn-block">
              <CIcon name="cil-plus" className="px-0" custom-size="md" />
            </CButton>
          </CCol>
          <CCol xs="1" sm="1" md="1" className="pl-0">
            <Trash />
          </CCol> */}
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
