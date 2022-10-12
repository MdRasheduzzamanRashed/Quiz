import React from "react";

const NewBlog = ({ blog }) => {
  const { que, details, picture } = blog;
  return (
    <div className="text-center border-2 m-3 rounded-xl">
      <div>
        <h2 className="text-2xl font-medium bg-lime-400 py-3 rounded-t-xl">
          {que}
        </h2>
      </div>
      <div className="grid grid-cols-3 items-center">
        <p className="text-justify col-span-2 p-4">{details}</p>
        <img className="rounded-xl" src={picture} alt="" />
      </div>
    </div>
  );
};

export default NewBlog;
