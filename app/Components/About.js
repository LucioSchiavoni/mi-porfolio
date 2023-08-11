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

  <div className="card-body text-black">

    <p>Hola! Mi nombre es Lucio Schiavoni y soy estudiante de informática en la orientación de desarrollo de software en la UTU Arias balparda. Actualmente me encuentro cursando mi último año en esta institución, donde he adquirido sódilos conocimientos en programación desarrollo de aplicaciones.

Además de mi formación académica, he complementado mis habilidades con un curso de desarrollador fullstack en la academia Coderhouse finalizando dentro del top 10 de estudiantes. 

También estoy involucrado en un proyecto de software en colaboración con compañeros de mi último año en la UTU. 
Este proyecto nos ha brindado la oportunidad de aplicar los conocimientos adquiridos en nuestras clases y trabajar en equipo para desarrollar una solución de software completa y funcional.

Como parte de mi formación, he adquirido experiencia en la implementación de metodologías ágiles como Scrum y Kanban. Tambien trabajamos con Jira junto con mi grupo de proyecto.

Me considero una persona apasionada por el desarrollo de software, siempre dispuesto a aprender nuevas tecnologías y enfrentar desafíos. Mi objetivo es seguir creciendo profesionalmente y contribuir con mis habilidades en un entorno dinámico y colaborativo
</p>
  
  </div>
</div>
        
        </div>
        </div>
        </div>
        </div>

<div className='hidden tablet:block flex '>

   <div className=" w-11/12 m-auto p-9 flex items-center justify-center  text-black border rounded shadow-xl">
<div className=" ml-10">
    <Image src="/fotocv.jpg" alt="perfilcv" className='rounded-lg shadow-lg shadow-black' width={300} height={300} />
   </div>
    <div className="mb-4 w-9/12  mt-4 p-16 grid grid-cols-2 ">
      <div>
        <h2 className='mb-4 font-bold text-2xl'>Sobre mi</h2>
      <p className="mb-4"> Hola! Mi nombre es Lucio Schiavoni y soy estudiante de informática en la orientación de desarrollo de software en la UTU Arias balparda. Actualmente me encuentro cursando mi último año en esta institución, donde he adquirido sódilos conocimientos en programación desarrollo de aplicaciones.</p>
<p className='mb-4'>
Además de mi formación académica, he complementado mis habilidades con un curso de desarrollador fullstack en la academia Coderhouse finalizando dentro del top 10 de estudiantes. </p>
<p >
También estoy involucrado en un proyecto de software en colaboración con compañeros de mi último año en la UTU. 
Este proyecto nos ha brindado la oportunidad de aplicar los conocimientos adquiridos en nuestras clases y trabajar en equipo para desarrollar una solución de software completa y funcional.</p>
</div>
<div>
<p className='mb-4 mt-11'>
Como parte de mi formación, he adquirido experiencia en la implementación de metodologías ágiles como Scrum y Kanban. Tambien trabajamos con Jira junto con mi grupo de proyecto.
</p>
<p className='mb-4'>
Me considero una persona apasionada por el desarrollo de software, siempre dispuesto a aprender nuevas tecnologías y enfrentar desafíos. Mi objetivo es seguir creciendo profesionalmente y contribuir con mis habilidades en un entorno dinámico y colaborativo</p>
</div>
</div>
 
</div>
</div>
       



        </>
  )
}
