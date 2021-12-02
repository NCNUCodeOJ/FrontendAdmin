import React from 'react'
import { useSelector } from 'react-redux';
import {
  CContainer, CRow,
  CCol, CInput, CTextarea
} from '@coreui/react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Redirect } from 'react-router-dom';
import {
  Typography, TextField,
  Button, Grid
} from '@material-ui/core/';

const HomeWorkItem = (props) => {
  const x = props.item;

  console.log(x);
  return (
    <>
      <div>
        <CRow sm="12" md="10" className="mx-auto">
          <CCol sm="7" md="8">
            <h1 className="font-weight-bold card-title mb-0">
              修改作業
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
              value={x.homeworkName}
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
              value={x.homeworkDescription}
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
              defaultValue={x.homeworkDifficulty}
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
                  value={x.homeworkStartDate} />
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
                  value={x.homeworkEndDate} />
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
                  type='text'
                  value={x.homeworkGradingStandard} />
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
                  value={x.homeworkInputdescription} />
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
                  value={x.homeworkOuputdescription} />
              </CCol>
            </CRow>
          </CCol>
        </CRow>

      </div>
    </>
  );
}

const TestCaseItem = (props) => {
  const homeworkTestCase = props.item;
  const x = props.index;
  return (
    <>
      <Typography variant="h6" >
        測資 {(x + 1)}
      </Typography>
      < CRow sm="12" md="12" className="border border-black-50 rounded-lg py-2 mx-5" >
        <CCol sm="12" md="6" >
          <Typography variant="h6" >
            input
          </Typography>
          <TextField
            name='inputOne'
            variant="outlined"
            placeholder='請輸入測資'
            value={homeworkTestCase[0]}
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
            value={homeworkTestCase[1]}
            fullWidth
          />
        </CCol>
      </CRow>
    </>
  );
}
const UpdateHomeWork = () => {
  const isLogin = useSelector(state => state.isLogin);
  const homeWork = [{
    "id": 0,
    "homeworkName": "HW1: Hello World!",
    "homeworkDifficulty": 3.5,
    "homeworkStartDate": "2021-01-10T09:10",
    "homeworkEndDate": "2021-01-10T12:00",
    "homeworkInputdescription": "兩個用空格分開的整數",
    "homeworkOuputdescription": "兩數之和",
    "homeworkDescription": "請計算出兩數之和，並輸出",
    "homeworkGradingStandard": "通過測資1及測資2者 至少得3分",
    "homeworkTestCase": [["1 1", "2"], ["5 0", "5"]],
    "homeworkLanguge": [
      'python', 'Java'
    ]
  }];
  const data = homeWork[0].homeworkTestCase;
  if (!isLogin) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <CContainer className="px-2">
        {
          homeWork.map((x) => (
            <HomeWorkItem key={x.id} item={x} />
          ))
        }
        {
          data.map((x, index) => (
            <TestCaseItem item={x} index={index} />
          ))
        }

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

        <Grid
          container spacing={1} justify="center" className='my-2'>
          <Grid item xs={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
            >
              修改
            </Button>
          </Grid>
        </Grid>
      </CContainer>
    </>
  )
}

export default UpdateHomeWork;
