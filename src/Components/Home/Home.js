import React, { useEffect, useState } from 'react'
import './Home.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
// import ProfileImage from '../ProfileImage/ProfileImage'
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'P', 'r', 'i', 'n', 'c', 'e', ' ', 'P', 'a', 'l']
  const jobArray1 = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
  const jobArray2 = ['C', 'o', 'm', 'p', 'e', 't', 'i', 't', 'i', 'v', 'e', ' ', 'P', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={22} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={14} />
          </h1>
          <h2>Frontend Developer /Fullstack Developer/Backend Developer/Gen Ai Developer</h2>

          <div className="hire-me">
            <a href={`https://drive.google.com/file/d/1QmV5lqYrRxuhlP28wp4uZrf56HXrV_uN/view?usp=drive_link`} className='flat-button'>View Resume</a>
          </div>
        </div>

        {/* <ProfileImage/> */}
      </div>
      <Loader type='pacman' />
    </>

  )
}

export default Home 