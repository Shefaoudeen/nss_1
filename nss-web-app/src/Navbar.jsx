import { useState } from 'react'
import './input.css'

function App() {
  const navbar_ele = [{title:'Home',color:'red-400'},{title:'Events',color:'yellow-400'},{title:'About Us',color:'blue-400'},{title:'Office Bearers',color:'orange-400'},{title:'Contact Us',color:'green-400'}]
  /* const [navbar , updatenavbar] = useState(navbar_ele) */



  return (
    <div className=' font-serif'>
      <nav className=' m-4 flex flex-row flex-wrap justify-between items-center'>
        <div className=' ml-3 pl-8'>
          <a className=' inline-flex' style={{textDecoration: 'none'}} href="">
            <div className=' inline-flex'>
              <img className=' p-2' style={{width : '90px' , height : '90px'}} src="NSS1.png" alt="" />
            </div>
            <div className=' pt-6 p-3 inline-flex align-middle flex-col' >
              <p className=' text-3xl' style={{unicodeBidi: 'isolate'} }>National Service Scheme</p>
              <p className='text-sm ' style={{unicodeBidi: 'isolate'}}>Puducherry Technological University, Puducherry</p>
            </div>

          </a>
  
        </div>
        <div className=' text-lg'>
        {navbar_ele.map((ele)=>(          
        <span className=' p-3' >
            <button className={`p-3  rounded-xl hover:bg-${ele.color} active:bg-${ele.color}  focus:outline-none  focus:ring-2  focus:ring-${ele.color} `}style={{textDecoration: 'none', color: 'black'}} >{ele.title}</button>
          </span>
        ))}
        </div>


      </nav>
    </div>
  )
}

export default App
