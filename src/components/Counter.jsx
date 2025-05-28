import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/slices/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="counterBody w-4/10 h-7/10 flex flex-col jutify-center items-center">
        <h1 className="text-5xl">{count}</h1>
        <div className="flex gap-x-2">
          <button className='px-4 py-1.5 rounded text-white bg-red-500' onClick={() => dispatch(decrement())}>Decrement</button>
          <button className='px-4 py-1.5 rounded text-white bg-green-500' onClick={() => dispatch(increment())}>Increment</button>
          <button className='px-4 py-1.5 rounded text-white bg-blue-500' onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
