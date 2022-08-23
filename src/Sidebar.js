import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, StorefrontOutlined, VideoLibrary } from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" /> 
      <SidebarRow Icon={Chat} title="Meesenger" /> 
      <SidebarRow Icon={StorefrontOutlined} title="Marketplace" /> 
      <SidebarRow Icon={VideoLibrary} title="videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar
