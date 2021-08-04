import React from 'react'
import './DashboardPage.css'
import ListIconSkillPage from "./ListIconSkillPage";
import AboutMePage from "./AboutMePage";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
interface DashboardPageProps{
  goToSelectedSocialMedia: (link: string) => void;
}
const DashboardPage:React.FC<DashboardPageProps> = (props) => {


  return (
    <div className="main-container">
      <div className="title-dashboard">
        <div className="title-dashboard-wrapper">
          <span className="main-dashboard-single-span">Hi! &#128513;</span>
          <span className="main-dashboard-single-span">I'm a <span
            className="block-title">Full Stack Developer</span></span>
        </div>

        <div className="social-media-wrapper">
          <AiOutlineGithub className="social-media-github-dashboard social-media-animation"
                           onClick={() => props.goToSelectedSocialMedia("https://github.com/rully-saputra15")}/>
          <AiOutlineLinkedin className="social-media-linkedin-dashboard social-media-animation"
                             onClick={() => props.goToSelectedSocialMedia("https://www.linkedin.com/in/rully-saputra-7554a7138/")}
                             />
          <AiOutlineInstagram className="social-media-instagram-dashboard social-media-animation"
                              onClick={() => props.goToSelectedSocialMedia("https://www.instagram.com/rully.saputra15/")}/>
        </div>
      </div>
      <div className="section-divider"/>
      <ListIconSkillPage/>
      <AboutMePage/>
    </div>
  )
}

export default DashboardPage
