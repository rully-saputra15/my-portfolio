import React from 'react'
import SinglePortfolioItem from "./SinglePortfolioItem";
import "./PortfolioPage.css";

interface PortfolioPageProps {
  imagesForAdminEcommerce: string[];
  imagesForEcommerce: string[];
  imagesForBookBook: string[];
  imagesForRoyong: string[];
  imagesForNews: string[];
  imagesForEbazaarImages: string[];
  imagesForLstmRnnResearch: string[];
  imagesForPanelAdminEcommerce: string[];
  goToLinkGithub: (link: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = (props) => {
  return (
    <div className="project-container">
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="Admin Ecommerce"
                             role="Full Stack Dev"
                             isImagePositionLeft={true}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/ionic-ecommerce-admin")}
                             description="Mobile App to manage information of item and warehouse stock"
                             tech={["Ionic", "MySql"]}
                             images={props.imagesForAdminEcommerce}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="Ecommerce"
                             role="Back End + List View Front End Dev"
                             isImagePositionLeft={false}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/ecommerce")}
                             description="Mobile App for Customer to Order Stuff from Store"
                             tech={["Ionic", "MySql"]}
                             images={props.imagesForEcommerce}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="BookBook"
                             role="Full Stack Dev"
                             isImagePositionLeft={true}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/bookbook")}
                             description="The Prototype of Mobile App to Sell Your Books!"
                             tech={["Ionic", "Firebase"]}
                             images={props.imagesForBookBook}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="Royong"
                             role="Full Stack Dev"
                             isImagePositionLeft={false}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/royong/tree/master")}
                             description="Social Media App for people to help each other maintain their environment"
                             tech={["Ionic", "Firebase"]}
                             images={props.imagesForRoyong}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="News"
                             role="Full Stack Dev"
                             isImagePositionLeft={true}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/flutter-news.git")}
                             description="I want to read news and i made an app, just for fun!"
                             tech={["flutter"]}
                             images={props.imagesForNews}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="E-Bazaar"
                             role="Full Stack Dev"
                             isImagePositionLeft={false}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/e-bazaar")}
                             description="E-Bazaar Web App to help elevate your bazaar!"
                             tech={["Laravel", "Firebase"]}
                             images={props.imagesForEbazaarImages}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="Admin E-Commerce Panel"
                             role="Full Stack Dev"
                             isImagePositionLeft={true}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/ecommerceadmin")}
                             description="Web Apps to organize your E-commerce"
                             tech={["Codeigniter", "Bootstrap", "MySQL"]}
                             images={props.imagesForPanelAdminEcommerce}/>
      </div>
      <div className="single-project-wrapper">
        <SinglePortfolioItem title="Implementation LSTM-RNN Method For Classifying Category of Indonesian News"
                             role="Researcher"
                             isImagePositionLeft={false}
                             goToSelectedLinkGithub={() => props.goToLinkGithub("https://github.com/rully-saputra15/news-classification")}
                             description="My Past Research about NLP and Machine Learning"
                             tech={["Python", "TensorFlow", "Flask", "Laravel", "Jquery"]}
                             images={props.imagesForLstmRnnResearch}/>
      </div>
    </div>
  )
}

export default PortfolioPage
