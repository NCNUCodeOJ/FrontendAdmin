import React from 'react';
const Dashboard = React.lazy(() => import('../views/admin/dashboard/Dashboard'));
const CourseList = React.lazy(() => import('../views/admin/course/CourseList'));
const StudentList = React.lazy(() => import('../views/admin/student/StudentList'));
const HomeWorkStudentList = React.lazy(() => import('../views/admin/homework/HomeWorkStudentList'));
const HomeWorkInfo = React.lazy(() => import('../views/admin/homework/HomeWorkInfo'));
const CreateHomeWork = React.lazy(() => import('../views/admin/homework/CreateHomeWork'));
const UpdateHomeWork = React.lazy(() => import('../views/admin/homework/UpdateHomeWork'));
const ExamList = React.lazy(() => import('../views/admin/exam/ExamList'));
const ExamStudentList = React.lazy(() => import('../views/admin/exam/ExamStudentList'));
const CreateExam = React.lazy(() => import('../views/admin/exam/CreateExam'));
const UpdateExam = React.lazy(() => import('../views/admin/exam/UpdateExam'));
const CreateQuestion = React.lazy(() => import('../views/admin/exam/CreateQuestion'));
const Announcement = React.lazy(() => import('../views/admin/announcement/Announcement'));
const AnnouncementContent = React.lazy(() => import('../views/admin/announcement/AnnouncementContent'));
const SchoolList = React.lazy(() => import('../views/admin/school/SchoolList'));
const ContestList = React.lazy(() => import('../views/admin/contest/ContestList'));
const ContestIntro = React.lazy(() => import('../views/admin/contest/ContestIntro'));
const ContestStatus = React.lazy(() => import('../views/admin/contest/ContestStatus'));
const HomeWorkList = React.lazy(() => import('../views/admin/homework/HomeWorkList'));
const ExamInfo = React.lazy(() => import('../views/admin/exam/ExamInfo'));
const UserAccountManage = React.lazy(() => import('../views/admin/UserAccountManage'));
const LanguageSupport = React.lazy(() => import('../views/admin/LanguageSupport'));

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
  { path: '/course/updateexam', name: 'UpdateExam', component: UpdateExam },
  { path: '/course/createquestion', name: 'CreateQuestion', component: CreateQuestion },
  { path: '/announcement/announcementcontent/:id', name: 'AnnouncementContent', component: AnnouncementContent },
  { path: '/announcement', name: 'Announcement', component: Announcement },
  { path: '/school/schoollist', name: 'SchoolList', component: SchoolList },
  { path: '/contest/contestlist', name: 'ContestList', component: ContestList },
  { path: '/contest/contestintro', name: 'ContestIntro', component: ContestIntro },
  { path: '/contest/conteststatus', name: 'ContestStatus', component: ContestStatus },
  { path: '/useraccountmanage', name: 'UserAccountManage', component: UserAccountManage },
  { path: '/languagesupport', name: 'LanguageSupport', component: LanguageSupport },
];

export default routes;
