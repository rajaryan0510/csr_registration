import React from 'react'
import { Button, Input } from '@material-tailwind/react'
const EquipmentMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Equipment Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Equipment ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Equipment Deatils" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Equipment Type" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Load Type" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Equipment Capacity" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Weight & Volume" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Equipment Feature ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Equipment Feature Detail" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Feature Type" type={'text'} color='grey' className='w-full' />
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

export default EquipmentMaster 