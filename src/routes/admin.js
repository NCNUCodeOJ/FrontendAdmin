import React from 'react';
const Dashboard = React.lazy(() => import('../views/admin/dashboard/Dashboard'));
const Announcement = React.lazy(() => import('../views/admin/announcement/Announcement'));
const AnnouncementContent = React.lazy(() => import('../views/admin/announcement/AnnouncementContent'));
const SchoolList = React.lazy(() => import('../views/admin/school/SchoolList'));
const ContestList = React.lazy(() => import('../views/admin/contest/ContestList'));
const CourseList = React.lazy(() => import('../views/admin/course/CourseList'));
const ContestIntro = React.lazy(() => import('../views/admin/contest/ContestIntro'));
const ContestStatus = React.lazy(() => import('../views/admin/contest/ContestStatus'));
const HomeWorkList = React.lazy(() => import('../views/admin/homework/HomeWorkList'));
const ExamInfo = React.lazy(() => import('../views/admin/exam/ExamInfo'));
const UserAccountManage = React.lazy(() => import('../views/admin/UserAccountManage'));
const LanguageSupport = React.lazy(() => import('../views/admin/LanguageSupport'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/announcement/announcement', name: 'Announcement', component: Announcement },
  { path: '/announcement/announcementcontent', name: 'AnnouncementContent', component: AnnouncementContent },
  { path: '/school/schoollist', name: 'SchoolList', component: SchoolList },
  { path: '/contest/contestlist', name: 'ContestList', component: ContestList},
  { path: '/contest/contestintro', name: 'ContestIntro', component: ContestIntro},
  { path: '/contest/conteststatus', name: 'ContestStatus', component: ContestStatus},
  { path: '/course/courselist', name: 'CourseList', component: CourseList },
  { path: '/course/homeworklist', name: 'HomeWorkList', component: HomeWorkList },
  { path: '/course/examinfo', name: 'ExamInfo', component: ExamInfo },
  { path: '/useraccountmanage', name: 'UserAccountManage', component: UserAccountManage },
  { path: '/languagesupport', name: 'LanguageSupport', component: LanguageSupport },
];

export default routes;
