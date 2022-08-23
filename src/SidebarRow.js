import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />} 
      {/*we imported the Icon component as a prop*/}
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
 