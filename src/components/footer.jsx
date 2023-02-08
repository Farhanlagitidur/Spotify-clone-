import React from "react";
import { Instagram, Twitter, Facebook } from "../assets/svg/svg";

const Footer = () => {
  const company = ["Company", "About", "Jobs", "For the Record"];
  const communities = [
    "Communities",
    "For Artists",
    "Developers",
    "Advertising",
    "Investors",
    "Vendors",
  ];
  const usefullink = ["Useful links", "Support", "Free Mobile App"];

  const styles = {
    wrapper: "h-60 mt-20 justify-between flex",
    iconwrapper: "flex flex-row items-center justify-end",
    icon: "bg-[#292929] m-2 rounded-full p-2 h-9 cursor-pointer",
    rowfooterwrapper:"h-32 w-full border-t-[1px] border-[#414040] text-[#B3B3B3] flex justify-between items-center font-spotifylight text-[13px]",
    rowfooter: "m-2 cursor-pointer",
  };
  
  const List = ({ item, id }) => {
    return (
      <ul className=" font-spotifylight text-[14px] text-[#B3B3B3] ">
        <li
          className={`m-3 cursor-pointer ${
            id === 0 && "text-white cursor-default"
          }`}
        >
          {item}
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className=" w-2/5 h-full flex flex-row">
          <div className=" w-1/3">
            {company.map((item, id) => (
              <List item={item} id={id} />
            ))}
          </div>

          <div className=" w-1/3">
            {communities.map((item, id) => (
              <List item={item} id={id} />
            ))}
          </div>

          <div className=" w-1/3">
            {usefullink.map((item, id) => (
              <List item={item} id={id} />
            ))}
          </div>
        </div>

        <div className=" w-3/5 h-full">
          <div className={styles.iconwrapper}>
            <div className={styles.icon}>
              <Instagram />
            </div>

            <div className={styles.icon}>
              <Twitter />
            </div>

            <div className={styles.icon}>
              <Facebook />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rowfooterwrapper}>
        <ul className="flex flex-row w-1/2">
          <li className={styles.rowfooter}>Legal</li>
          <li className={styles.rowfooter}>Privacy Center</li>
          <li className={styles.rowfooter}>Privacy Policy</li>
          <li className={styles.rowfooter}>Cookies</li>
          <li className={styles.rowfooter}>About Ads</li>
        </ul>
        <div className="  w-1/2">
          <p className=" float-right mr-4">© 2023 Spotify AB</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
