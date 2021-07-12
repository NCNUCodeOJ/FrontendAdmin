import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'


// sidebar nav config
import navigation from './_nav'
const LoginItem = () => {
  const CustomNavBar = useSelector(state => state.customNavBar);

  if (CustomNavBar !== null)
    return <CustomNavBar />
  return (
    <>
      <CCreateElement
        items={navigation}
        components={{
          CSidebarNavDivider,
          CSidebarNavDropdown,
          CSidebarNavItem,
          CSidebarNavTitle
        }}
      />
    </>
  )
}

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none">
      </CSidebarBrand>
      <CSidebarNav>
        <LoginItem />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
