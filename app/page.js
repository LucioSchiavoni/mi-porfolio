
import { About } from './Components/About'
import { Header } from './Components/Header'
import { Intro } from './Components/Intro'
import { Item } from './Components/Item'
import { Contact } from './Components/Contact'
import { Proyects } from './Components/Proyects'

export default function Home() {

   
  return (
 <div className='bg-white'>
  <div className='fixed z-50 '>
<Header/>
</div>
<div className='h-screen'>
 <Intro/>

 </div>


 <div>
    <svg class="animate-bounce w-6 h-6">
<a href='#sobremi' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll"/>
</svg>
 <div className=' mb-96 ' id='sobremi'>
 <About/>
 </div>
 </div>
 <div id='proyecto'>
 <div className='h-screen mb-64' id='proyectos' >
 <Proyects/>
 </div>
 </div>
 <div className='mb-96'>
 <Item/>
 </div>
 <div className='' id='contacto' >
  <h3 className='text-black text-center font-bold text-2xl'>Contacta conmigo</h3>
<Contact/>
</div>
</div>

  )
}
