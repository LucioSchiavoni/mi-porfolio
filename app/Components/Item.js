"use client";
import icons from './utils/icons.json';

export const Item = () => {



  return (
    <>
    
    <p className='text-2xl p-4 text-center mt-5 text-black font-bold m-16' id='habilidades'>Que puedo hacer?</p>
<div className='grid grid-cols-2  tablet:grid-cols-3' >
    
    {
        icons.map((icons, index) => {
          return(
    
          <div key={index}  className='m-auto mb-4 card w-6/12   bg-white  hover:scale-125 shadow-xl border-transparent  bordered-lg  text-2xl border transition hover:delay-150 duration-300 ease-in-out p-4 text-black ' > 

          <img className='w-20' src={icons.foto} alt="foto" />
             <p className='font-mono font-bold' >{icons.nombre} </p>  
              </div>
          )
        })
    }
    </div>
    </>
  )
}
