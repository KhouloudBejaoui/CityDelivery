import { BiMap } from "react-icons/bi";
import { GiBowlOfRice } from "react-icons/gi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";

import payment1 from "../img/payment1.png";
import payment2 from "../img/payment2.png";
import payment3 from "../img/payment3.png";
import payment4 from "../img/payment4.png";

export const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+216 55 511 323",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "City@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Ariana, Tunis",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About Us",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "menu",
    text: "Menu",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "service",
    text: "Service",
    icon: <MdContactPage />,
  },
];

export const explores = ["Soft Drinks", "Rice", "Curry", "Fruits", "IceCreams"];

export const payements = [payment1, payment2, payment3, payment4];