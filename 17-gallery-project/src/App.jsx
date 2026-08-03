import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [index, setIndex] = useState(1)

  const [userData, setUserData] = useState([])

  const url = `https://picsum.photos/v2/list?page=${index}&limit=30`;

  const getData = async()=>{
    let response = await fetch(url);
    let data = await  response.json()
   setUserData(data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1 '>Loading...</h3>

  if(userData.length>0){
    printUserData=userData.map((elem,idx)=>{
      return <div key={idx} >
       <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-y-scroll h-screen w-full p-4 text-white'>
    <div className='flex min-h-[75vh] flex-wrap gap-4 p-4'>
      {printUserData}
    </div>
    <div className='flex justify-center gap-6 items-center p-4'>
      <button className=' bg-amber-400 text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95'onClick={()=>{
        if(index>1){
          setUserData([])
          setIndex(index-1)
          
        }
      }}>Prev</button>
      <h4>Page{index}</h4>
      <button className=' bg-amber-400 text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95' onClick={()=>{
        setUserData([])
        setIndex(index+1)
        
      }}>Next</button>
    </div>
    </div>
  )
}

export default App



//React pagination library of react