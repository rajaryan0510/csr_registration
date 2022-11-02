import React from 'react'
import { Button, Input } from '@material-tailwind/react'
const SpecialServiceMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Special Service Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Special Service ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Special Service Details" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Special Service Attributes" type={'text'} color='grey' className='w-full' />
            </div>
            <div className='my-2'>
              <Button color='red' className='w-full'>Save</Button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SpecialServiceMaster 