import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import {
  CRow, CCol, CDataTable
} from '@coreui/react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import {
  Typography, TextField,
  Button, Grid, FormControl,
  InputLabel, Select
} from '@material-ui/core/';
import {
  FileCopyOutlined
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(3),
    },
  },
  box: {
    textalign: 'left',
  },
  filezone: {
    minWidth: 300,
    minHeight: 100,
    background: grey[50],
  },
  filebutton: {
    margin: 'auto',
    marginTop: 25,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ShowBox = (prop) => {
  const element = useRef();
  const onCopyClick = (e) => {
    e.current.select()
    document.execCommand("copy");
  };
  return (
    <Grid item sx={12} md={6}>
      <Typography variant="h6" >
        {prop.title}
        <Button>
          <FileCopyOutlined onClick={() => onCopyClick(element)} />
        </Button>
      </Typography>
      <TextField
        inputRef={element}
        defaultValue={prop.value}
        InputProps={{ readOnly: true }}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
}

const HomeWorkItem = (props) => {
  const x = props.item;
  return (
    <>
      <div>
        <CRow sm="12" md="10" className="mx-auto">
          <CCol sm="7" md="8">
            <h1 className="card-title mb-0">{x.homeworkName}</h1>
          </CCol>
          <CCol sm="3" md="2" className="ml-auto d-flex flex-column">
          </CCol>
        </CRow>
        <hr />
        <CRow sm="10" md="10" className="ml-2 my-2">
          <h4 className="my-auto font-weight-bold">作業說明: </h4>
          <h4 className="my-auto">
            {x.homeworkDescription}
          </h4>
        </CRow>
        <CRow sm="10" md="10" className="ml-2 my-2">
          <h4 className="font-weight-bold">作業難度: </h4>
          <Rating
            name="homeworkDifficulty"
            defaultValue={x.homeworkDifficulty}
            precision={1}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            readOnly
          />
        </CRow>
        <CRow sm="12" md="12" className="ml-2 my-2">
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">開放時間: </h4>
              <h4 className="my-auto">
                {x.homeworkEndDate}
              </h4>
            </CRow>
          </CCol>
          <CCol sm="10" md="6">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">截止時間:</h4>
              <h4 className="my-auto">
                {x.homeworkStartDate}
              </h4>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="12" className="ml-2 my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">評分標準:</h4>
              <h4 className="my-auto">
                {x.homeworkGradingStandard}
              </h4>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="12" className="ml-2 my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">輸入:</h4>
              <h4 className="my-auto">
                {x.homeworkInputdescription}
              </h4>
            </CRow>
          </CCol>
        </CRow>
        <CRow sm="12" md="12" className="ml-2 my-2">
          <CCol sm="12" md="12">
            <CRow>
              <h4 className="my-auto pr-1 font-weight-bold">輸出:</h4>
              <h4 className="my-auto">
                {x.homeworkDescription}
              </h4>
            </CRow>
          </CCol>
        </CRow>

      </div>
    </>
  );
}
const HomeWorkInfo = () => {
  const classes = useStyles();
  const isLogin = useSelector(state => state.isLogin);
  const [HomeWork, setHomeWork] = useState([]);
  const [allTestData, setAllTestData] = useState([]);
  const [allLanguageName, setAllLanguageName] = useState([]);
  const [languageState, setLanguageState] = useState(0);
  useEffect(() => {
    setHomeWork([
      {
        "id": 0,
        "homeworkName": "HW1: Hello World!",
        "homeworkDifficulty": 3.5,
        "homeworkStartDate": "2021/01/10 09:10",
        "homeworkEndDate": "2021/01/10 12:00",
        "homeworkInputdescription": "兩個用空格分開的整數",
        "homeworkOuputdescription": "兩數之和",
        "homeworkDescription": "請計算出兩數之和，並輸出",
        "homeworkGradingStandard": "通過測資1及測資2者 至少得3分"
      }
    ]);
  }, []);
  useEffect(() => {
    const testData = [{
      "id": "0",
      "inputvalue": "1 1",
      "outputvalue": "2",
    }, {
      "id": "1",
      "inputvalue": "1 2",
      "outputvalue": "3",
    }]
    setAllTestData(testData);
  }, []);
  useEffect(() => {
    const languageFiles = [{
      name: "C",
      language: "c",
      value: `#include "config.h"`,
    }, {
      name: "Java",
      language: "java",
      value: "// System.out.println('Hello World');",
    }, {
      name: "Python",
      language: "python",
      value: "# print('Hello World!')",
    }]
    setAllLanguageName(languageFiles);
  }, []);

  const homeWorkStudentData = [
    { id: 0, Line: '2', Column: '8', 規則: 'indentation', 描述: 'indentation is not a multiple of four' },
    { id: 1, Line: '25', Column: '29', 規則: 'indentation', 描述: 'indentation contains tabs' },
    { id: 1, Line: '69', Column: '11', 規則: 'comment', 描述: 'Missing function or method docstring (missing-function-docstring)' }
  ]

  const fields = [
    { key: 'Line', _style: { width: '5%' } },
    { key: 'Column', _style: { width: '5%' } },
    { key: '規則', _style: { width: '10%' } },
    { key: '描述', _style: { width: '30%' } },
  ]

  const handleLanguageChange = (event) => {
    setLanguageState(event.target.value);
  };
  const handleEditorChange = (value) => {
    console.log(value);
  }

  if (!isLogin) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      {
        HomeWork.map((x) => (
          <HomeWorkItem key={x.id} item={x} />
        ))
      }

      <Grid item xs={12}>
        {allTestData.map((value, index) => {
          return (
            <Grid container key={value.id} spacing={3}>
              <ShowBox title="input" value={value.inputvalue} />
              <ShowBox title="output" value={value.outputvalue} />
            </Grid>
          );
        })}
      </Grid>
      <CRow xs={10} sm={10} md={10} className="my-2 mx-1">
        <h4 className="mt-2 pr-1 font-weight-bold">
          繳交區:
        </h4>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="language">
            Language
          </InputLabel>
          <Select native
            onChange={handleLanguageChange}
            value={languageState}
            id="language"
            name='languageSelected'
          >
            {allLanguageName.map((value, index) => {
              return (
                <option key={index} value={index}>{value.name}</option>
              );
            })}
          </Select>
        </FormControl>
      </CRow>
      <CRow xs={10} sm={10} md={10} className="my-3 mx-5">
        {/* <Editor
          height="60vh"
          theme="vs-dark"
          path={allLanguageName[languageState] ? allLanguageName[languageState].name : ''}
          language={allLanguageName[languageState] ? allLanguageName[languageState].language : ''}
          value={allLanguageName[languageState] ? allLanguageName[languageState].value : ''}
          onChange={handleEditorChange}
        /> */}
      </CRow>

      <CRow xs={10} sm={10} md={10} className="mx-3 my-3">
        <h4 className="my-auto pr-1 font-weight-bold">
          批改結果
        </h4>
      </CRow>
      <CRow xs={10} sm={10} md={12} className="mx-3 my-2">
        <CCol xs={10} sm={10} md={8} className="mx-3 my-2">
          <CDataTable
            items={homeWorkStudentData}
            fields={fields}
            tableFilter
            hover
          />
        </CCol>
        <CCol xs={10} sm={10} md={3} className="ml-5 my-2 border bg-dark d-flex flex-column py-2 px-0">
          <h2 className="ml-2 pr-1 font-weight-bold text-light">
            分數:
          </h2>
          <h1 className="my-auto mx-auto pr-1 font-weight-bold text-light display-1">
            10
          </h1>
        </CCol>
      </CRow>
      <Grid
        container spacing={1} justify="center">
        <Grid item xs={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            提交
          </Button>
        </Grid>
      </Grid>

    </>
  )
}

export default HomeWorkInfo;
