import React from 'react'
import { Button, Input, Select, Option } from '@material-tailwind/react'

const TransportModeMaster = () => {
  return (
    <div>
      <div className='md:w-1/2 mx-auto my-8'>


        <form className='flex flex-col bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Transport Mode Master </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Transport Mode Group ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Transport Mode Group Name" type={'text'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Transport Mode ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2 mx-1">
              <Select label="Transport Mode Name" color='grey'>
                <Option>Sea</Option>
                <Option>Water</Option>
                <Option>Road</Option>
                <Option>Rail</Option>
              </Select>
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

export default TransportModeMaster