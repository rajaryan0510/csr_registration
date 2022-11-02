import React from 'react'
import { Button, Input } from '@material-tailwind/react'
const RateVersionMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Rate Version Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Rate Version ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Rate Version Details" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Effective Date" type={'date'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Expiration Date" type={'date'} color='grey' className='w-full' />
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

export default RateVersionMaster 