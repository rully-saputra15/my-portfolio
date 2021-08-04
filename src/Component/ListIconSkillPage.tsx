import React from 'react'
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiLaravel } from "react-icons/di";
import { SiFirebase, SiFlutter, SiIonic, SiMysql, SiPython, SiReact, SiTensorflow, SiTypescript } from "react-icons/si"
import "./ListIconSkillPage.css"

const ListIconSkillPage = () => {
  return (
    <div className="main-container-icon">
      <div className="single-icon-wrapper">
        <AiFillHtml5 size={40} className="icon-html icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <DiCss3 size={40} className="icon-css icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiTypescript size={35} className="icon-typescript icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiReact size={35} className="icon-react icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <DiLaravel size={40} className="icon-laravel icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiFirebase size={35} className="icon-firebase icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiMysql size={35} className="icon-mysql icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiPython size={35} className="icon-python icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiTensorflow size={35} className="icon-tensorflow icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiFlutter size={35} className="icon-flutter icon-animation"/>
      </div>
      <div className="single-icon-wrapper">
        <SiIonic size={35} className="icon-ionic icon-animation"/>
      </div>
    </div>
  )
}

export default ListIconSkillPage
