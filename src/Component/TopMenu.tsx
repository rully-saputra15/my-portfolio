import React from 'react'
import './TopMenu.css'

interface TopMenuComponentInterface {
  goToHome: () => void;
  goToPortfolio: () => void;
}

const TopMenu: React.FC<TopMenuComponentInterface> = (props) => {
  return (
    <div className="main-top-menu-container">
      <div className="top-menu-wrapper">
        <span className="top-menu-title">
          Rully Saputra
        </span>
        <div className="top-menu-list">
          <span className="top-menu-item" onClick={props.goToHome}>HOME</span>
          <span className="top-menu-item" onClick={props.goToPortfolio}>PORTFOLIO</span>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
