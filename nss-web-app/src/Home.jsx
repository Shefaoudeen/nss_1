import { useState } from 'react'
import './input.css'
import Navbar from './Navbar'
'logo.png','classroom.svg','bloodconnect.svg','projects.svg','workshop.svg','innova.png'
const Home = ()=>{
    const img=[{img:'logo.png',title: 'Domains'},{img:'classroom.svg' , title: 'Education'},{img: 'bloodconnect.svg',title:'Health'},{img: 'projects.svg',title: 'Environment'},{img:'workshop.svg',title: 'Society'},{img: 'innova.png',title:'Innovations'}]
    const [logo,updateLogo] = useState(img)

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div style={{width: 'auto',height:'650px' }} className='bg-img'>
                    <div className=' p-3 inline-block absolute z-10' style={{paddingTop: '6.15rem'}}>
                        {logo.map((logo,index)=>(
                            <a title={logo.title} href =''>
                                <img style={{width: '70px', height: '70px', padding: '12px'}} src={logo.img} alt="" />
                            </a>
                        ))}
                    </div>
                    <div className=' w-full h-full text-white relative flex justify-center items-center flex-col'>
                        <div className=' box-border border-b-4 border-white'>
                            <h1 className='  font-semibold font-mono text-5xl leading-loose'>NSS Puducherry Technological University</h1>
                        </div>
                        <div className=' p-3 font-mono font-medium' style={{fontSize:'1.75rem'}}>
                            <h3 >Not me but you</h3>
                        </div>
                        
                    </div>
                    
            </div>
        </div>
    )
}

export default Home;