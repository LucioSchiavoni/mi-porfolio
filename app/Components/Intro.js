import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Intro = () => {
  return (
    <div className=''>
        <div className='w-auto  text-center text-black py-52' id='inicio'>
  <div className='w-full h-96'>
    
    <h1  className='  text-3xl'>Hola, soy
      <span className=' text-3xl '> < b className='text-[#153153]'  >Lucio Schiavoni</b></span>
      <br />
      <span className=' text-3xl  '  >Desarrollador Full Stack</span>
    </h1> <div className='text-4xl space-x-6 flex items-center justify-center mt-20'>
      <a target='_blank' href='https://github.com/LucioSchiavoni'>
<FontAwesomeIcon icon={faGithub} className='text-black w-14 hover:scale-125 duration-300 delay-150' /> 
</a>
<a target='_blank' href='https://www.linkedin.com/in/lucio-schiavoni-a67a82238/'>
      <FontAwesomeIcon icon={faLinkedin} className='text-[#153153] w-14 hover:scale-125 duration-300 delay-150'/>
      </a>
     
    </div>
  </div>
  </div>
    </div>
  )
}
