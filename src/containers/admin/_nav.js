import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: '首頁',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: '公告管理',
    // to: '/course/courselist',
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
    _tag: 'CSidebarNavDropdown',
    name: '基本設定',
    // to: '/course/homeworklist',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
    }
  },
]

export default _nav
