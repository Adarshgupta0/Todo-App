"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([])
  const sumbithandle = (e) => {
    e.preventDefault()
    setMaintask([...Maintask, { title, desc }]);
    settitle("")
    setdesc("")
  }
  const deletehandle = (i) => {
    let copytask = [...Maintask]
    copytask.splice(i, 1)
    setMaintask(copytask)
  }
  let render = "No Task Available"
  if (Maintask.length > 0) {
    render = Maintask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between items-center my-3'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-medium'> {t.desc}</h6>
          </div>
          <button onClick={() => {
            deletehandle(i)
          }} className='delete'>Delete</button>
        </li>
      )
    });
  }
  return (
    <>
      <h1 className='bg-black text-white text-4xl p-3 font-bold text-center'>Todo List</h1>
      <form className='text-center' onSubmit={sumbithandle}>
        <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" placeholder='Enter Task Here' className='tital' />
        <input value={desc} onChange={(e) => { setdesc(e.target.value) }} type="text" placeholder='Enter Description Here' className='tital' />
        <button className='btn'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300 '>
        <ul>
          {render}
        </ul>
      </div>
    </>
  )
}

export default page

