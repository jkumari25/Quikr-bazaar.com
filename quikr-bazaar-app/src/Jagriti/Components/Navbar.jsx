import React from 'react';
import styled from 'styled-components';
import {BiSearch} from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
     <div className="title">
      <h4>Hi Jagriti</h4>
      <h1>Welcome to <span>RAPID GRAB DASHBOARD</span></h1>
    </div>
     <div className="search">
      <BiSearch />
      <input type="text" placeholder="Search" />
     </div>
     
    </Nav>
  )
}

export default Navbar

const Nav= styled.nav`
display: flex;
justify-content: space-between;
color:white;
.title{
  h1{
    span{
      margin-left: 0.5rem;
      color: #1B5692;
      letter-spacing:0.2rem;
    }
  }
}
.search{
  background-color: #212121;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 8rem 1rem 1rem;
  border-radius: 1rem;
  svg{
    color: #1B5692;
  }
  input{
    background-color: transparent;
    border: none;
    color: #1B5692;
    letter-spacing: 0.3rem;
    font-family: 'Indie Flower', cursive;
    font-size: 1.2rem;
    FontWeight: bold;
    &::placeholder{
      color: #1B5692;
    }
    &:focus{
      outline: none;
    }
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  flex-direction: column;
  .title{
    h1{
      span{
        display: block;
        margin: 1rem 0;
        
      }
    }
  }
}
`