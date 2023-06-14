"use client"
import {EmailCopy} from './utils/EmailCopy'

export const Contact = () => {
  return (
    <>
    <div className='tablet:grid gird-cols-2 text-black tablet:hidden'>
    <div id='contacto' className='py-10  '>
    <p className='p-8 text-center mt-24 text-2xl mt-10'>Ponte en contacto</p>
    <div className=' w-80 m-auto mt-2 grid grid-cols-1'>
    <form action='https://getform.io/f/82c66796-df04-4395-bc19-aecfd4b660c1' method='POST'>
<div className='form-control mb-4 gap-3'>
    <label >Nombre:</label>
    <input className='input ' name='name' placeholder='nombre' required/>
</div>
<div className='form-control mb-4 gap-3'>
    <label >Email:</label>
    <input className='input' placeholder='email@gmail.com' name='email' required/>
</div>
<div className='form-control mb-4 gap-3'>
    <label >Mensaje:</label>
    <textarea name='message' class="w-full input  h-40 p-2 border border-gray-300 rounded" placeholder="Escribe tu mensaje aquí"></textarea>
</div>

<button type='submit' className='h-10 w-24 rounded p-1 glass bg-sky-900 shadow-xl shadow-black hover:scale-125 transition duration-300 delay-150'>Enviar</button>

    </form>
    <div className='mt-20 w-80  p-4 text-black   rounded-lg shadow-xl'>
   <div className='grid grid-cols-1 gap-5 '><label>¡Gracias por visitar mi portafolio!</label>  
   <label>Si tiene alguna pregunta o está interesado en conocer más sobre mi experiencia y habilidades, no dude en ponerse en contacto conmigo.</label> 
      <label className=' mb-2  text-black'>Si quieres puedes copiar mi Gmail haciendo click en el boton que esta aqui abajo.</label></div> 
 <EmailCopy/>
 </div>
 
</div>
</div>


</div>


<div className='hidden tablet:block text-black' id='contacto'>
<div className='flex items-center justify-center space-x-24 p-8 mt-20 '>
<form action='https://getform.io/f/82c66796-df04-4395-bc19-aecfd4b660c1' method='POST'>
<div className='form-control mb-4 gap-3'>
    <label >Nombre:</label>
    <input className='input text-white ' name='name' placeholder='nombre' required/>
</div>
<div className='form-control mb-4 gap-3'>
    <label >Email:</label>
    <input className='input text-white' placeholder='email@gmail.com' name='email' required/>
</div>
<div className='form-control mb-4 gap-3'>
    <label >Mensaje:</label>
    <textarea name='message' class="w-full input text-white  h-40 p-2 border border-gray-300 rounded" placeholder="Escribe tu mensaje aquí"></textarea>
</div>

<button type='submit' className='h-10 w-24 rounded p-1 glass bg-sky-900 shadow-xl shadow-black hover:scale-125 transition duration-300 delay-150'>Enviar</button>

    </form>

<div className='mt-20 w-80  p-4 text-black   rounded-lg shadow-xl'>
   <div className='grid grid-cols-1 gap-5 '><label>¡Gracias por visitar mi portafolio!</label>  
   <label>Si tiene alguna pregunta o está interesado en conocer más sobre mi experiencia y habilidades, no dude en ponerse en contacto conmigo.</label> 
      <label className=' mb-2  text-black'>Si quieres puedes copiar mi Gmail haciendo click en el boton que esta aqui abajo.</label></div> 
 <EmailCopy/>
 </div>
 </div>
</div>
    
    </>
  )
}
