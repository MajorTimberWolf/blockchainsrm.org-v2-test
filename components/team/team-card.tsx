import React from "react";
import Image from "next/image";

const TeamCard = ({ details }: any) => {
  const { name, position, socials, profile, cover } = details;
  return (
    <div className="flex flex-col bg-team-gradient p-4 rounded-xl relative text-white xl:max-w-[22%]">
      <Image
        src={cover}
        alt=""
        width={200}
        height={125}
        priority={true}
        unoptimized
        className="object-cover rounded-md"
      />
      <div className="w-20 h-20 -mt-[20%] ml-[8%] relative rounded-full">
        <Image
          src={profile}
          alt=""
          layout="fill"
          priority={true}
          unoptimized
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex my-8 justify-between items-center gap-1 flex-wrap">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h5 className=" text-[1rem]">{name}</h5>
            <Image
              src="/assets/teams/check.svg"
              width={15}
              height={15}
              priority={true}
              unoptimized
              alt=""
            />
          </div>
          <p className="text-gray-400">@{position}</p>
        </div>
        <button className="py-2 px-6 border-[#F81DFB] border-2 rounded-full">
          <a href={socials} target="_blank" rel="noopener noreferrer">
            Socials
          </a>
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
