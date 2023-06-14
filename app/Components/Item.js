"use client";
import icons from './utils/icons.json';

export const Item = () => {



  return (
    <>
    
    <p className='text-2xl p-4 mt-5 text-black tex-center' id='habilidades'>Que puedo hacer?</p>
<div className='grid grid-cols-2  tablet:grid-cols-3' >
    
    {
        icons.map((icons, index) => {
          return(
    
          <div key={index}  className='m-auto mb-4 card w-10/12   bg-white  hover:scale-125 shadow-xl border-transparent  bordered-lg  text-2xl border transition hover:delay-150 duration-300 ease-in-out p-4 text-black gap-3' > 

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
