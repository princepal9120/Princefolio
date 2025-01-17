import React from 'react'
import './ProfileImage.scss'
import LogoP from '../../assets/images/pakseverything.png'

const ProfileImage = () => {
  return (
    <div className='profile-img'>
      <img src={LogoP} alt="P" className="image" />
    </div>
  )
}

export default ProfileImage