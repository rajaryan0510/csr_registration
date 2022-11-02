import React from 'react'
import { Button, Input } from '@material-tailwind/react'
const DeliveryMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Delivery Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Delivery Type ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Delivery Details" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Type of Delivery" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Transit Time" type={'time'} color='grey' className='w-full' />
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

export default DeliveryMaster 