"use client"
import { useSession } from 'next-auth/react'
import { SignOut } from '@/components/signout-button'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetPostByIdQuery, useGetPostsQuery } from '@/redux/services/userApi'

import React from 'react'
import { increment, decrement } from '@/redux/features/counterSlice'

export default function Home() {
 
  const count = useAppSelector(state => state.counterReducer.value)
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isFetching } = useGetPostsQuery(null)
  const session = useSession()

  if (isLoading || isFetching) return <div>Loading...</div>
  if (error) return <p>error</p>

  
  return (
    <div className='flex flex-col'>
    <h1>Welcome {session.data?.user && session.data.user.name}</h1>

    <SignOut />
     
      <div className='mt-10 flex flex-col'>
     <h1>
      Number: {count}
     </h1>
     <button className='bg-blue-500'
     onClick={() => {
      dispatch(increment())
     }}
     >
      suma
     </button>
     <button className='bg-red-500'
     onClick={() => {
      dispatch(decrement())
     }}
     >
      resta
     </button>
     </div>


     {
        data?.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        })
     }
    </div>
  )
}

