import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { AccountCircle, ChatBubble, ExpandMore, ThumbUp } from '@mui/icons-material'

function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar 
                src={profilePic}
                className="post__avatar"
            />
            <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
        <div className='post__bottom'>
            <p>{message}</p>
        </div>
        <div className='post__image'>
            <img src={image} alt="" />
        </div>
        <div className='post__options'>
            <div className='post__option'>
                <ThumbUp />
                <p>Like</p>
            </div>
            <div className='post__option'>
                <ChatBubble />
                <p>Commment</p>
            </div>
            <div className='post__option'>
                <ThumbUp />
                <p>Share</p>
            </div>
            <div className='post__option'>
                <AccountCircle />
                <ExpandMore />
            </div>
        </div>
    </div>
  )
}

export default Post



