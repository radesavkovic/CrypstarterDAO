import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as RoadmapIcon } from "../../assets/icons/roadmap.png";
import { ReactComponent as FeedbackIcon } from "../../assets/icons/feedback.svg";
import {  SvgIcon } from "@material-ui/core";
import styled from "styled-components";
import RoadmapPNG from "../../assets/icons/roadmap.png";
import FaqPNG from "../../assets/icons/faq.png";
const externalUrls = [
  // {
  //   title: "Feedback",
  //   url: "",
  //   icon: <SvgIcon color="primary" component={ForumIcon} />,
  // },

  {
    title: "Docs",
    url: "https://docs.xodus.finance/xodus-finance/introduction",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
  {
    title: "Roadmap",
    url: "https://docs.xodus.finance/xodus-finance/roadmap",
    icon: <img src={RoadmapPNG} alt="" className="bottomImgs2" style={{width:30,height:30}}/>,
  },
  {
    title: " Faqs",
    url: " https://docs.xodus.finance/basics/faqs",
    icon: <img src={FaqPNG} alt="" className="bottomImgs2" style={{width:30,height:30}}/>,
  },
];

export default externalUrls;

const IconImg1 = styled.img`

`
const IconImg2 = styled.img`

`
const IconImg3 = styled.img`

`