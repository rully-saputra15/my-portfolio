import React from 'react'
import "./SinglePortfolioItem.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub"; // requires a loader

export interface SingleListItemProps {
  title: string;
  role: string;
  isImagePositionLeft: boolean;
  goToSelectedLinkGithub: () => void;
  description: string;
  tech: string[];
  images: string[];
}

const SinglePortfolioItem: React.FC<SingleListItemProps> = (props: SingleListItemProps) => {
  const renderCarousel = () => {
    return <Carousel showArrows={true} showThumbs={false} className="main-carousel"
                     showStatus={false}>
      {
        props.images.map((image) => {
          return <div>
            <img
              className="image-carousel"
              src={image}
              alt={image}/>
          </div>
        })
      }
    </Carousel>
  }

  const renderContent = () => {
    return (
      <>
        <span className="single-list-title">{props.title}</span>
        <span className="single-list-label">Description</span>
        <span className="single-list-value">{props.description}</span>
        <span className="single-list-label">Role</span>
        <span className="single-list-value">{props.role}</span>
        <div className="single-list-techs">
          {
            props.tech.map((item) => {
              return <span className="tech-item">{item}</span>
            })
          }
        </div>
        <AiOutlineGithub size={40} className="single-list-github" onClick={props.goToSelectedLinkGithub}/>
      </>
    )
  }

  const renderItemImagePositionLeft = () => {
    return <>

      {renderCarousel()}
      <div className="single-list-content content-border-left">
        {renderContent()}
      </div>
    </>
  }
  const renderItemImagePositionRight = () => {
    return <>
      <div className="single-list-content content-border-right">
        {renderContent()}
      </div>
      {renderCarousel()}
    </>
  }
  return (
    <div className="single-list-item-container">
      {
        props.isImagePositionLeft
          ?
          renderItemImagePositionLeft()
          :
          renderItemImagePositionRight()
      }
    </div>

  )
}

export default SinglePortfolioItem;
