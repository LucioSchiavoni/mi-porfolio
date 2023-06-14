import React from 'react'
import Image from 'next/image'
import { Files } from './Files'

export const About = () => {
  return (
    <>
    <div className='tablet:hidden'  id='sobremi'>
  <div className=' mt-20' >
    <div className='p-4  border-white mb-24 mt-24' >
    <div  className='text-black shadow-xl  shadow-gray rounded '>
    <div className="card card-side glass text-white shadow-xl ">
  <figure className=''><Image src='/fotocv.jpg' alt='perfil' className='' width={5000} height={3000}/></figure>
  <div className="card-body text-black">

    <p>Mi nombre es Lucio, tengo 24 años y curso mi ultimo año de Informatica en UTU Arias Balparda de la ciudad de Montevideo. Me especializo en la orientación de desarrollo de Software y desarrollador Fullstack, esto ultimo en una academia virtual llamada Coderhouse.</p>
  
  </div>
</div>
        
        </div>
        </div>
        </div>
        </div>

<div className='hidden tablet:block flex'>

   <div className=" w-4/12 m-auto rounded-xl shadow-xl shadow-black  flex text-black">
<div className=''>
    <Image src="/fotocv.jpg" alt="perfilcv" width={300} height={300} />
   </div>
    <p className="mb-4 w-96 mt-4  p-4  ">Mi nombre es Lucio, tengo 24 años y curso mi último año de Informática en UTU Arias Balparda de la ciudad de Montevideo. Me especializo en la orientación de desarrollo de Software y desarrollador Fullstack, esto último en una academia virtual llamada Coderhouse.</p>
 
</div>
</div>
       



        </>
  )
}
