import React, { useEffect, useState } from 'react'
import DashboardPage from "../Component/DashboardPage";


const DashboardContainer = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }
  const [windowsDimensions, setWindowsDimensions] = useState(getWindowDimensions());
  const [isAlerted, setIsAlerted] = useState(false);
  useEffect(() => {
    if (windowsDimensions.width >= 480 && windowsDimensions.width <= 720 && !isAlerted) {
      alert('For your best experience\nPlease open the website from desktop\nThe mobile version is under development\nSorry!')
      setIsAlerted(true)
    }
    setWindowsDimensions(getWindowDimensions());
  }, [windowsDimensions, isAlerted])
  const goToSelectedSocialMedia = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <DashboardPage goToSelectedSocialMedia={goToSelectedSocialMedia}/>
  )
}

export default DashboardContainer;
