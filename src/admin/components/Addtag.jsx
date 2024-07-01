import React from 'react'
import {Input, Button} from "@nextui-org/react";

export const Addtag = () => {
  return (
    <>
    <div className='pt-24 px-4'>
      <div className='font-semibold text-xl'>
        Add Category
      </div>
      <div className='p-7 shadow-2xl rounded-2xl border-black border-b-2'>    
     <form action="#">
     <Input
          isReadOnly
          type="Text"
          label="Add Category"
          variant="bordered"
          className="w-full"
        />
        
        <Button className='hover:bg-black border-black font-semibold hover:text-white mt-2 flex ms-auto' variant="bordered">
        Submit
      </Button>  
     </form>
      </div>
    </div>
    {/* view tag */}
    <div className="grid-cols-6 grid gap-5">
      <div>
        img
      </div>

    </div>
    </>
  )
}
