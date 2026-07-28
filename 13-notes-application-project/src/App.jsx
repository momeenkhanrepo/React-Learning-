import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])



  const submitHandler=(el)=>{
    el.preventDefault()
    
    const copyTask = [...task];
    
    copyTask.push({title,details})

    settask(copyTask)
    
    

    settitle('')
    setdetails('')
  }


  const deleteNote = (idx)=>{
    const copyTask =[...task];
    copyTask.splice(idx,1)
    settask(copyTask)
  }


  return (
    <div className='h-screen lg:flex  bg-black text-white '>
      <form onSubmit={(el)=>{
        submitHandler(el)
      }} className='flex lg:w-1/2 flex-col items-start  gap-4 p-18'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* pehla input */}
          <input
           type="text"
           placeholder='Enter Notes Heading'
           className='px-5 w-full py-2 border-2 outline-none rounded ' 
           value={title}
           onChange={(el)=>{
            settitle(el.target.value)
           }}
          />

          {/* detail input */}
          <textarea
           type="text"
           className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded ' 
           placeholder='Write Details' 
           value={details}
           onChange={(el)=>{
            setdetails(el.target.value)
           }}
          />
          <button className='bg-white active:bg-gray-200 font-medium w-full text-black px-5 py-2 border-2 outline-none rounded'>Add Notes</button>
      </form>
      <div className='lg:w-1/2  p-18'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map((elem,idx)=>{
            return <div key={idx} className='h-62 w-40 flex justify-between  flex-col relative bg-cover  rounded-2xl text-black pt-18 px-4 bg-[url("https://freesvg.org/img/1526827878.png")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-red-500 cursor-pointer active:scale-95 py-1 text-xs font-bold rounded text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
