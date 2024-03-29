import React from "react";
import { footerSocials } from "../utils/data";
import { mainMenu } from "../utils/data";
import { explores } from "../utils/data";
import { footerContacts } from "../utils/data";
import { payements } from "../utils/data";

const Footer = () => {
  return (
    <div className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
        <div>
          <div className="text-xl font-semibold mb-3">CityDelivery</div>
          <p className="text-[1rem] mb-3">
          Order your favourite foods at any time and we will deliver them to where you are.
          </p>
          <div className="flex items-center gap-4">
            <span className="">Follow Us</span>
            <div className="h-[2px] w-12 bg-black"></div>
            {footerSocials.map((footerSocial, index) => {
              return (
                <div className="" key={index}>
                  <a href="#">{footerSocial}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Main Menu</h3>
            {mainMenu.map((menu) => {
              return (
                <div className="text-[1rem] mb-2" key={menu.id}>
                  <a href={`${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          <div className="">
            <h3 className="font-semibold text-[1.1rem]  mb-4">Explore</h3>
            {explores.map((explore, index) => {
              return (
                <div className="text-[1rem] mb-2" key={index}>
                  <a href="/menu">{explore}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div
                className="flex items-center gap-4 mb-4"
                key={footerContact.id}
              >
                <div className="text-xl">{footerContact.icon}</div>
                <div>{footerContact.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div className="">
          Copyright &#169; <span className="font-bold">CityDelivery</span>.All
          rights deserved.
        </div>
        <div className="flex gap-2">
          {payements.map((payment, index) => {
            return (
              <div className="" key={index}>
                <img src={payment} alt="" className="w-10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;