import {
  IoHomeOutline,
  IoLogoJavascript,
  IoLogoReact,
  IoSchoolSharp,
  IoGameControllerOutline,
  IoBasketball,
  IoDiamondOutline,
} from "react-icons/io5";
import { FaGripfire, FaCode, FaMusic, FaPodcast } from "react-icons/fa";
import { MdLocalMovies, MdLiveTv } from "react-icons/md";
import { WiStars } from "react-icons/wi";

const links = [
  {
    svg: <IoHomeOutline></IoHomeOutline>,
    name: "Home",
  },
  {
    svg: <FaGripfire></FaGripfire>,
    name: "Trending",
  },
  {
    svg: <FaCode></FaCode>,
    name: "Coding",
  },
  {
    svg: <IoLogoJavascript></IoLogoJavascript>,
    name: "Javascript",
  },
  {
    svg: <IoLogoReact></IoLogoReact>,
    name: "ReactJS",
  },
  {
    svg: <FaMusic></FaMusic>,
    name: "Music",
  },
  {
    svg: <IoSchoolSharp></IoSchoolSharp>,
    name: "Education",
  },
  {
    svg: <FaPodcast></FaPodcast>,
    name: "Podcast",
  },
  {
    svg: <MdLocalMovies></MdLocalMovies>,
    name: "Movie",
  },
  {
    svg: <IoGameControllerOutline></IoGameControllerOutline>,
    name: "Gaming",
  },
  {
    svg: <MdLiveTv></MdLiveTv>,
    name: "Live",
  },

  {
    svg: <IoBasketball></IoBasketball>,
    name: "Sport",
  },
  {
    svg: <WiStars></WiStars>,
    name: "Fashion",
  },
  {
    svg: <IoDiamondOutline></IoDiamondOutline>,
    name: "Beauty",
  },
];

export default links;
