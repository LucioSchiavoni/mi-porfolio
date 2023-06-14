
import { About } from './Components/About'
import { Header } from './Components/Header'
import { Intro } from './Components/Intro'
import { Item } from './Components/Item'
import { Contact } from './Components/Contact'
import { Proyects } from './Components/Proyects'

export default function Home() {
  return (
 <div className='bg-base-100'>
  <div className='fixed z-50 '>
<Header/>
</div>
<div className=''>
 <Intro/>
 </div>
 <div>
 <div className='h-screen mb-64' id='sobremi'>
 <About/>
 </div>
 </div>
 <div id='proyecto'>
 <div className='h-screen mb-64' id='proyectos' >
 <Proyects/>
 </div>
 </div>
 <div>
 <Item/>
 </div>
 <div id='contacto'>
<Contact/>
</div>
</div>

  )
}
