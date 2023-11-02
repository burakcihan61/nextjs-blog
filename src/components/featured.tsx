import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const Featured = () => {
  return (
    <div className="mt-[30px]">
      <h1 className="text-[96px] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <div className="mt-[60px] flex items-center gap-[50px]">
        <div className="relative h-[500px] flex-1">
          <Image src="/p1.jpeg" alt="p1" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col gap-7">
          <h1 className="text-[40px]">Lorem ipsun</h1>
          <p className="text-[20px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button className="w-36">Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Featured
