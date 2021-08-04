import React from 'react'
import './AboutMePage.css'
import profile from "../asset/profile.png"
const AboutMePage = () => {
  return(
    <div className="main-container-about-me">
      <div className="image-wrapper-about-me">
        <img src={profile} className="image-about-me" alt="profile"/>
      </div>
      <div className="content-about-me">
        <span className="title-about-me">About Me</span>
        <span className="subtitle-about-me">Mobile and Web Developer</span>
        <p className="paragraph-about-me">I'm a passionate programmer who
          uses the programming language to
          solve any problems. Develop a
          software not just make it works, but it
          must have scalability and efficiency. I
          love learning new technology
          because I need to stay update and
          develop a better software.
          Stay Hungry, Stay Foolish
          -Steve Jobs</p>
      </div>

    </div>
  )

}

export default AboutMePage
