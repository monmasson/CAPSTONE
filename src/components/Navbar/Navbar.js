import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>

         {/*} <NavLink to='/ExerciseList' activeStyle>
            Blogs
  </NavLink>*/}
         
         
         
          <NavLink to='/Blogs' activeStyle>
            Blogs
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Sign In/ Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;