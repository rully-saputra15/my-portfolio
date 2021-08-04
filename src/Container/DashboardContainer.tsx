import React from 'react'
import DashboardPage from "../Component/DashboardPage";


const DashboardContainer = () => {
  const goToSelectedSocialMedia = (link: string) => {
    window.open(link,"_blank");
  }

  return (
    <DashboardPage goToSelectedSocialMedia={goToSelectedSocialMedia}/>
  )
}

export default DashboardContainer;
