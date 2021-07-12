import React from 'react';
const Dashboard = React.lazy(() => import('../views/admin/dashboard/Dashboard'));
const CourseList = React.lazy(() => import('../views/admin/course/CourseList'));
const HomeWorkList = React.lazy(() => import('../views/admin/homework/HomeWorkList'));
const ExamInfo = React.lazy(() => import('../views/admin/exam/ExamInfo'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/course/courselist', name: 'CourseList', component: CourseList },
  { path: '/course/homeworklist', name: 'HomeWorkList', component: HomeWorkList },
  { path: '/course/examinfo', name: 'ExamInfo', component: ExamInfo },
];

export default routes;
