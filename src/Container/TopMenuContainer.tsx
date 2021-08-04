import React from 'react'
import TopMenu from "../Component/TopMenu";
import { RouteComponentProps, withRouter } from "react-router";

interface TopMenuContainerProps extends RouteComponentProps<any> {

}

const TopMenuContainer: React.FC<TopMenuContainerProps> = (props) => {
  const goToHome = () => {
    props.history.push("/")
  }
  const goToPortfolio = () => {
    props.history.push("/portfolio")
  }
  return (
    <TopMenu goToHome={goToHome}
             goToPortfolio={goToPortfolio}/>
  )
}

export default withRouter(TopMenuContainer);
