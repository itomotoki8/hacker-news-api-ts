import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Nav.css";


const Nav = () => {
  type navdata = 
  {
    title:string,
    path:string,
    key:number,
  };


const navDatas:navdata[] = [
    {
        title:"TOP",
        path:"/",
        key:1,
    },
    {
        title:"NEW",
        path:"/new",
        key:2,
    },
    {
        title:"BEST",
        path:"/best",
        key:3,
    },
];

  return (
    <nav>
      <ul>
        {navDatas.map(e => (
          <li key={e.key}><NavLink to ={e.path}>{e.title}</NavLink></li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;
