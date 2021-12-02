import React from 'react';
import CIcon from '@coreui/icons-react'
const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: '首頁',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '公告管理',
    to: '/announcement/Announcement',
    icon: <CIcon name="cil-bullhorn" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '使用者介面',
    icon: <CIcon name="cil-contact" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '課程管理',
    to: '/course/courselist',
    icon: <CIcon name="cil-education" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '使用者帳號管理',
    to: '/useraccountmanage',
    icon: <CIcon name='cil-Address-book' customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '系統資訊',
    to: '/languagesupport',
    icon: <CIcon name="cil-info" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
]

export default _nav
