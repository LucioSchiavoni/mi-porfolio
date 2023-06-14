"use client";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Files } from "./Files";


export const Header = () => {
       
         const [theme, setTheme] = useState("theme", localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
        
         const handleToggle = (e) => {
          if(e.target.checked){
            setTheme("dark");
          }else{
            setTheme("light")
          }
         }
         useEffect(() => {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");
            document.querySelector("html").setAttribute("data-theme", localTheme);
         }, [theme]);
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
          <li><a  target="_blank">Fullstack</a></li>
          <li><a  target="_blank">Backend</a></li>
          <li><a  target="_blank">Frontend</a></li>
          <li><a  target="_blank">React</a></li>
          <li><a  target="_blank">Javascript</a></li>
          <li><a  target="_blank">Desarrollo web</a></li>
        </ul>
      </div>
      </li> 
     
          </ul>
          
        </div>
        <label className="swap swap-rotate mt-4 text-black">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} checked={theme == "light" ? false : true } />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
      </div>
      </div>


         <div className="hidden tablet:block w-full navbar  flex  items-center justify-center text-center bg-base-100 fixed z-50 text-black shadow-xl  ">
         <li> <a href='#inicio' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">INICIO</a></li>
         <li> <a href='#sobremi' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">SOBRE MI</a></li>
         <li> <a href='#proyecto' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">PROYECTOS</a></li>
         <li> <a href='#habilidades' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">HABILIDADES</a></li>
         <li> <a href='#contacto' className="btn m-auto btn-ghost normal-case text-sm smooth-scroll">CONTACTO</a></li>
  <li>  <div className="dropdown dropdown-bottom  ">
        <label tabIndex={0} className="btn btn-ghost normal-case text-sm m-1">CERTIFICADOS</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 text-black shadow bg-white rounded-box w-52">
          <li><a  target="_blank">Fullstack</a></li>
          <li><a  target="_blank">Backend</a></li>
          <li><a  target="_blank">Frontend</a></li>
          <li><a  target="_blank">React</a></li>
          <li><a  target="_blank">Javascript</a></li>
          <li><a  target="_blank">Desarrollo web</a></li>
        </ul>
      </div>
      </li> 
      <div className="dropdown dropdown-bottom">
  <a tabIndex={0} className="btn btn-ghost normal-case text-sm m-1">CARPETAS</a>
  <ul tabIndex={0} className="dropdown-content w-auto">
    <li><Files/></li>
    
  </ul>
</div>


<label className="swap swap-rotate ">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} checked={theme == "light" ? false : true } />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>

</div>

    </>
      
    )
}


