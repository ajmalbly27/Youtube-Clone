import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    {
      name: "All",
      id: 1,
    },
    {
      name: "News",
      id: 2,
    },
    {
      name: "Politics",
      id: 3,
    },
    {
      name: "Sports",
      id: 4,
    },
    {
      name: "Education",
      id: 5,
    },
    {
      name: "Cinema",
      id: 6,
    },
    {
      name: "React",
      id: 7,
    },
    {
      name: "Javascript",
      id: 8,
    },
    {
      name: "Frontend",
      id: 9,
    },
  ];
  return (
    <div className="flex mt-5">
      {list.map((item) => (
        <Button key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default ButtonList;
