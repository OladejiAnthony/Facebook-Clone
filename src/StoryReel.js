import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        profileSrc='https://avatars.githubusercontent.com/u/89644137?v=4' 
        image='https://static.vecteezy.com/system/resources/thumbnails/003/467/246/small/nature-landscape-background-cute-simple-cartoon-style-free-vector.jpg'
        title='Anthony'
       />
      <Story
        profileSrc='https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/Amazon-Founder-and-CEO-Jeff-Bezos/960x0.jpg?format=jpg&width=960' 
        image='https://www.how-to-draw-funny-cartoons.com/images/cartoon-background-002.jpg'
        title='Jeff'
      />
      <Story 
        profileSrc='https://i.scdn.co/image/ab6761610000e5eb11de9e26d17433c5d960c15f' 
        image='https://videohive.img.customer.envatousercontent.com/files/2f13b2b5-6f6c-472a-a165-a457d6c22468/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=02895ac053fb8df0ddae2e49eb7f9f77'
        title='Nathaniel'
      />
      <Story 
        profileSrc='https://guardian.ng/wp-content/uploads/2021/07/mercychinwo_186852469_314502376704257_3787816253684871105_n.jpg' 
        image='https://cdn2.vectorstock.com/i/1000x1000/47/91/blue-background-cartoon-summer-forest-vector-26374791.jpg'
        title='Chinwo'
      />
      <Story
        profileSrc='https://www.toolshero.com/wp-content/uploads/2016/10/robert-kiyosaki-toolshero.jpg' 
        image='https://img.freepik.com/free-vector/diagonal-halftone-detailed-background_1409-1445.jpg'
        title='Robert'
      />
      <Story 
        profileSrc='https://avatars.githubusercontent.com/u/89644137?v=4' 
        image='https://i.pinimg.com/originals/3d/19/b4/3d19b46a224cf72cb4c7a9fc86c0355c.jpg'
        title='Anthony'
      />
    </div>
  )
}

export default StoryReel
