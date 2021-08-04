import React from 'react'
import PortfolioPage from "../Component/PortfolioPage";
import AdminEcommerce1 from "../asset/admin-ecommerce/admin ecommerce 1.jpg"
import AdminEcommerce2 from "../asset/admin-ecommerce/admin ecommerce 2.jpg";
import AdminEcommerce3 from "../asset/admin-ecommerce/admin ecommerce 3.jpg";
import Ecommerce1 from "../asset/ecommerce/ecommerce 1.jpg";
import Ecommerce2 from "../asset/ecommerce/ecommerce 2.jpg";
import Ecommerce3 from "../asset/ecommerce/ecommerce 3.jpg";
import Ecommerce4 from "../asset/ecommerce/ecommerce 4.jpg";
import BookBook1 from "../asset/BookBook/bookbook1.jpg";
import BookBook2 from "../asset/BookBook/bookbook2.jpg";
import BookBook3 from "../asset/BookBook/bookbook3.jpg";
import BookBook4 from "../asset/BookBook/bookbook4.jpg";
import BookBook5 from "../asset/BookBook/bookbook5.jpg";
import BookBook6 from "../asset/BookBook/bookbook6.jpg";
import Royong1 from "../asset/Royong/royong 1.jpeg";
import Royong2 from "../asset/Royong/royong 2.jpeg";
import Royong3 from "../asset/Royong/royong 3.jpeg";
import Royong4 from "../asset/Royong/royong 4.jpeg";
import Royong5 from "../asset/Royong/royong 5.jpeg";
import News1 from "../asset/News/news 1.jpg";
import News2 from "../asset/News/news 2.jpg";
import News3 from "../asset/News/news 3.jpg";
import PanelAdminEcommerce1 from "../asset/panel-admin-ecommerce/panel admin ecommerce 1.jpg";
import PanelAdminEcommerce2 from "../asset/panel-admin-ecommerce/panel admin ecommerce 2.jpg";
import PanelAdminEcommerce3 from "../asset/panel-admin-ecommerce/panel admin ecommerce 3.jpg";
import PanelAdminEcommerce4 from "../asset/panel-admin-ecommerce/panel admin ecommerce 4.jpg";
import PanelAdminEcommerce5 from "../asset/panel-admin-ecommerce/panel admin ecommerce 5.jpg";
import Ebazaar1 from "../asset/ebazaar/ebazaar-dki2-1.jpg";
import Ebazaar2 from "../asset/ebazaar/ebazaar-dki2-2.jpg";
import Ebazaar3 from "../asset/ebazaar/ebazaar-dki2-3.jpg";
import Ebazaar4 from "../asset/ebazaar/ebazaar-dki2-4.jpg";
import lstmRnnResearch from "../asset/lstm-rnn-past-research/lstm-rnn-past-research.jpg";
const PortfolioContainer = () => {
  const adminEcommerceImages = [AdminEcommerce1,AdminEcommerce2,AdminEcommerce3];
  const ecommerceImages = [Ecommerce1,Ecommerce2,Ecommerce3,Ecommerce4];
  const bookBookImages = [BookBook1,BookBook2, BookBook3, BookBook4, BookBook5,BookBook6];
  const royongImages = [Royong1,Royong2,Royong3,Royong4,Royong5];
  const newsImages = [News1,News2,News3];
  const panelAdminEcommerceImages = [PanelAdminEcommerce1,PanelAdminEcommerce2, PanelAdminEcommerce3, PanelAdminEcommerce4, PanelAdminEcommerce5];
  const eBazaarImages = [Ebazaar1,Ebazaar2, Ebazaar3, Ebazaar4];
  const lstmRnnResearchImages=[lstmRnnResearch];
  const goToLinkGithub = (link: string) => {
    window.open(link,"_blank");
  }
  return (
    <PortfolioPage imagesForAdminEcommerce={adminEcommerceImages}
                   imagesForEcommerce={ecommerceImages}
                   imagesForBookBook={bookBookImages}
                   imagesForRoyong={royongImages} imagesForNews={newsImages}
                   imagesForEbazaarImages={eBazaarImages}
                   imagesForLstmRnnResearch={lstmRnnResearchImages}
                   goToLinkGithub={goToLinkGithub}
                   imagesForPanelAdminEcommerce={panelAdminEcommerceImages}/>
  )
}

export default PortfolioContainer;
