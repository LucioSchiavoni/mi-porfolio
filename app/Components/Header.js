"use client";
import Link from "next/link";

import { Files } from "./Files";


export const Header = () => {
       
     
    return( 
        <>
        <div className=" w-full px-2 p-2 tablet:hidden"> 
        <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content tablet:block">
         
          <label htmlFor="my-drawer-4" className="drawer-button btn bg-gray-300 text-black shadow-lg border-white hover:bg-white hover:scale-125 transition-all delay-150 duration-300 shadow-black ">Menu</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64  shadow-xl shadow-black bg-gray-400 bg-opacity-40 text-white rounded-lg text-black">
            
            <li> <a href='#inicio' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">INICIO</a></li>
            <li> <a href='#sobremi' className="btn btn-ghost normal-case text-sm smooth-scroll">SOBRE MI</a></li>
            <li> <a href='#proyectos' className="btn btn-ghost normal-case text-sm smooth-scroll">PROYECTOS</a></li>
            <li> <a href='#habilidades' className="btn btn-ghost normal-case text-sm smooth-scroll">HABILIDADES</a></li>
            <li>  <a href='#contacto' className="btn btn-ghost normal-case text-sm smooth-scroll">CONTACTO</a></li>
            
            <li>  <div className="dropdown dropdown-bottom flex items-center justify-center ">
        <label tabIndex={0} className="btn btn-ghost normal-case text-sm m-1">CERTIFICADOS</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-white rounded-box w-52">
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/Fullstack+certificado.jpg" target="_blank">Fullstack</a></li>
          
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/backend.png" target="_blank">Backend</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/frontend.png"  target="_blank">Frontend</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/react.png" target="_blank">React</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/javascript.png" target="_blank">Javascript</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/desarrolloweb.png" target="_blank">Desarrollo web</a></li>
        </ul>
      </div>
      </li> 
     
          </ul>
          
        </div>
        
      </div>
      </div>


         <div className="hidden tablet:block w-full navbar  flex  items-center justify-center text-center bg-white fixed z-50 text-black shadow-xl  ">
         <li> <a href='#inicio' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">INICIO</a></li>
         <li> <a href='#sobremi' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">SOBRE MI</a></li>
         <li> <a href='#proyecto' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">PROYECTOS</a></li>
         <li> <a href='#habilidades' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">HABILIDADES</a></li>
         <li> <a href='#contacto' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">CONTACTO</a></li>
  <li>  <div className="dropdown dropdown-bottom  ">
        <label tabIndex={0} className="btn btn-ghost normal-case text-sm m-1">CERTIFICADOS</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-white rounded-box w-52">
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/Fullstack+certificado.jpg"  target="_blank">Fullstack</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/backend.png" target="_blank">Backend</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/frontend.png" target="_blank">Frontend</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/react.png" target="_blank">React</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/javascript.png"  target="_blank">Javascript</a></li>
          <li><a href="https://brenofotos.s3.sa-east-1.amazonaws.com/desarrolloweb.png" target="_blank">Desarrollo web</a></li>
        </ul>
      </div>
      </li> 
      <div className="dropdown dropdown-bottom">
  <a tabIndex={0} className="btn btn-ghost normal-case text-sm m-1">CARPETAS</a>
  <ul tabIndex={0} className="dropdown-content w-auto">
    <li><Files/></li>
    
  </ul>
</div>



</div>

    </>
      
    )
}


