import React from 'react';

function Project({ title, description, url, img }) {
  return (
    <>
      <div clasName="mb-4">
        <div className="border-2 border-gray-300 p-3 w-full rounded">
          <img src={img} alt={title} className="rounded w-full h-80" />
        </div>

        <div className="border-b-2 border-gray-300 p-4 mb-6 w-full">
          <p className="font-bold mb-2">{title}</p>
          <p>{description}</p>
        </div>

        <a href={url} target="_blank" className="cursor-pointer transition-all bg-white px-6 py-2 rounded-lg
          border-black
          border-[1px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Learn More
        </a>
      </div>
    </>
  );
}

export default Project;
