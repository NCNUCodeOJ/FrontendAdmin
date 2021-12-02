import React from 'react';
const Dashboard = React.lazy(() => import('../views/admin/dashboard/Dashboard'));
const CourseList = React.lazy(() => import('../views/admin/course/CourseList'));
const StudentList = React.lazy(() => import('../views/admin/student/StudentList'));
const HomeWorkList = React.lazy(() => import('../views/admin/homework/HomeWorkList'));
const HomeWorkStudentList = React.lazy(() => import('../views/admin/homework/HomeWorkStudentList'));
const HomeWorkInfo = React.lazy(() => import('../views/admin/homework/HomeWorkInfo'));
const CreateHomeWork = React.lazy(() => import('../views/admin/homework/CreateHomeWork'));
const UpdateHomeWork = React.lazy(() => import('../views/admin/homework/UpdateHomeWork'));
const ExamList = React.lazy(() => import('../views/admin/exam/ExamList'));
const ExamStudentList = React.lazy(() => import('../views/admin/exam/ExamStudentList'));
const ExamInfo = React.lazy(() => import('../views/admin/exam/ExamInfo'));
const CreateExam = React.lazy(() => import('../views/admin/exam/CreateExam'));
const UpdateExam = React.lazy(() => import('../views/admin/exam/UpdateExam'));
const CreateQuestion = React.lazy(() => import('../views/admin/exam/CreateQuestion'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/course/courselist', name: 'CourseList', component: CourseList },
  { path: '/course/studentlist', name: 'StudentList', component: StudentList },
  { path: '/course/homeworklist', name: 'HomeWorkList', component: HomeWorkList },
  { path: '/course/homeworkstudentlist', name: 'HomeWorkStudentList', component: HomeWorkStudentList },
  { path: '/course/homeworkinfo', name: 'HomeWorkInfo', component: HomeWorkInfo },
  { path: '/course/createhomework', name: 'CreateHomeWork', component: CreateHomeWork },
  { path: '/course/updatehomework', name: 'UpdateHomeWork', component: UpdateHomeWork },
  { path: '/course/examlist', name: 'ExamList', component: ExamList },
  { path: '/course/examstudentlist', name: 'ExamStudentList', component: ExamStudentList },
  { path: '/course/examinfo', name: 'ExamInfo', component: ExamInfo },
  { path: '/course/createexam', name: 'CreateExam', component: CreateExam },
  { path: '/course/updateexam', name: 'CreateExam', component: UpdateExam },
  { path: '/course/createquestion', name: 'CreateQuestion', component: CreateQuestion },
];

export default routes;
