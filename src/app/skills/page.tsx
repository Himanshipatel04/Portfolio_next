import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Nav from "@/components/Nav";

function page() {
  return (
    <div className="flex items-center justify-center">
      <Nav />

      <div className="py-20 px-28 mt-20 max-w-screen items-center justify-center gap-10 md:gap-32 grid grid-cols-1 md:grid-cols-3">
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
        <div className=" outline grid grid-cols-2 w-80 h-80 items-center justify-center">
          <div className="  mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className=" flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
          <div className="flex flex-col items-start mx-auto p-4 relative h-[6rem] w-[6rem]">
            <EvervaultCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
