import React from 'react';
const Dashboard = React.lazy(() => import('../views/admin/dashboard/Dashboard'));
const CourseList = React.lazy(() => import('../views/admin/course/CourseList'));
const HomeWorkList = React.lazy(() => import('../views/admin/homework/HomeWorkList'));
const ExamList = React.lazy(() => import('../views/admin/exam/ExamList'));
const ExamInfo = React.lazy(() => import('../views/admin/exam/ExamInfo'));
const CreateExam = React.lazy(() => import('../views/admin/exam/CreateExam'));
const CreateQuestion = React.lazy(() => import('../views/admin/exam/CreateQuestion'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/course/courselist', name: 'CourseList', component: CourseList },
  { path: '/course/homeworklist', name: 'HomeWorkList', component: HomeWorkList },
  { path: '/course/examlist', name: 'ExamList', component: ExamList },
  { path: '/course/createexam', name: 'CreateExam', component: CreateExam },
  { path: '/course/createquestion', name: 'CreateQuestion', component: CreateQuestion },
  { path: '/course/examinfo', name: 'ExamInfo', component: ExamInfo },
];

export default routes;
