"use client";
import { Files } from './Files';
import projects from './utils/projects.json'


//mapeado de items de lenguajes
export const Proyects = () => {
  return (
    <>
    <div  className='h-96 text-black tablet:hidden ' >
    <div >
    <p className='text-center text-2xl mb-2'>Proyectos</p>
    <div className='h-full grid grid-cols-2 p-2 gap-5 ' >

{
  projects.map((item, index) => (
    <div key={index} className='grid grid-cols-1 mb-2 p-2 glass  '>
      <label className='text-center mb-2 '>{item.nombre}</label>
     <a href={item.link}> <img src={item.img} alt='projects' className='rounded shadow-lg'/></a>
    </div>
  ) )
}
    </div>
    </div>
    </div>

    <div  className='h-full p-4 text-black   hidden tablet:block' >
    <div >
    <p className='text-center text-4xl font-bold font-mono  mb-10'>Proyectos</p>
    <div className='h-full  w-7/12 grid gap-24 grid-cols-2 p-2 gap-5 m-auto ' >

{
  projects.map((item, index) => (
    <div key={index} className='grid border gap-5 grid-cols-1 mb-2   p-2.5 glass hover:scale-125 transition-all duration-300 delay-150 '>
      <label className='text-center mb-2 '>{item.nombre}</label>
     <a href={item.link}> <img src={item.img} alt='projects' className='rounded shadow-lg h-auto '/></a>
    </div>
  ) )
}
    </div>
    </div>
    </div>
    </>
  )
}
