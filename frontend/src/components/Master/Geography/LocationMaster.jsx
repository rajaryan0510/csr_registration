import React from 'react'
import { Button, Textarea, Input } from '@material-tailwind/react'

const LocationMaster = () => {
  return (
    <div>
      <div className=' md:w-1/2 mx-auto my-8 '>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Location Master </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Location ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Location Detail" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className='my-2'>
              <Textarea label="Company Detail" color='grey' />
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

export default LocationMaster