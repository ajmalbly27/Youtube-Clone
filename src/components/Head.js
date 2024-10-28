import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg items-center">
      <div className="flex col-span-1 items-center justify-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
        />
        <a href="/">
          <img
            className="h-16"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 text-center flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 px-5 py-1 border border-gray-400 rounded-l-full"
        />
        <button className="px-3 py-1 border border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-center">
        <img
          className="w-10 p-1 border border-gray-400 rounded-full"
          alt="profile-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s"
        />
      </div>
    </div>
  );
};

export default Head;
