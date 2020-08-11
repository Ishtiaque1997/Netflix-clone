import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld}from 'react-icons-kit/ionicons/iosWorld/'
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';
import {generateMedia} from 'styled-media-query'
class Footer extends Component {
 state={
  langContent:false
 }
 handleToggle= e => {
  e.preventDefault();
  this.setState({
   langContent:!this.state.langContent
  });
 };
 render() {
  return (
   <FooterContainer>
    <span style={{marginLeft:'15%',fontSize:'1.125rem'}}>Questions? <Link>Call 1-877-742-1335</Link></span>
    <div className="footer-columns">
     <ul>
      <li>
       <Link>FAQ</Link>
      </li>
      <li>
       <Link>Investor relations</Link>
      </li>
      <li>
       <Link>Ways to watch</Link>
      </li>
      <li>
       <Link>Corporate information </Link>
      </li>
      <li>
       <Link>Netflix originals</Link>
      </li>
     </ul>
       <ul>
      <li>
       <Link>Help center</Link>
      </li>
      <li>
       <Link>Jobs</Link>
      </li>
      <li>
       <Link>Terms of use</Link>
      </li>
      <li>
       <Link>Contact us </Link>
      </li>
     </ul>
     <ul>
      <li>
       <Link>Account</Link>
      </li>
      <li>
       <Link>Redeem gift cards</Link>
      </li>
      <li>
       <Link>Privacy</Link>
      </li>
      <li>
       <Link>Speed test </Link>
      </li>
     </ul>
     <ul>
      <li>
       <Link>Media center</Link>
      </li>
      <li>
       <Link>Buy gift cards</Link>
      </li>
      <li>
       <Link>Cookie preferences</Link>
      </li>
      <li>
       <Link>Legal notices </Link>
      </li>
     </ul>
     <div className="lang-btn" onClick={this.handleToggle} style={{ marginBottom: '10px' }} >
     <Icon icon={iosWorld}size={20}/>
     &nbsp;&nbsp;English&nbsp;&nbsp;
     <Icon  icon={arrowSortedDown}/>
    </div>
    </div>
    {this.state.langContent &&(
   <div className="lang-toggle">
     <ul>
     <li>English </li>
    </ul>
     <ul>
      <li>French</li>
     </ul>
  </div>
    )}
  
   
    <span style={{marginLeft:'15%',fontSize:'0.9 rem',paddingTop:'20px'}}>Netflix Canada</span>
   </FooterContainer>
  );
 }
}

export default Footer;

const customMedia = generateMedia({
  tablet: '740px',

})

const FooterContainer=styled.footer`
  background: var(--main-deep-dark);
  padding-top:10rem;
  padding-bottom:3rem;
  color:#999;

  .footer-columns{
   width:70%;
   margin: 1rem auto 0;
   font-size: 0.9rem;
   overflow: auto;
  display:grid;
  grid-template-columns: repeat(4,1fr);
  ${customMedia.lessThan('tablet')`
  grid-template-columns: repeat(2,1fr);
  color:white
  
  
  `}


  }
  ul li{
   list-style: none;
   line-height:2.5;
  }
  a{
   color:#999;
  }
  a:hover{
   text-decoration:underline;
   cursor:pointer
  }
.lang-btn{
 background: transparent;
 border: 0.9px solid #333;
 padding:1rem;
 width:8rem;
 display:grid;
 grid-template-columns:repeat(3, 1fr);
 margin: 2rem 0 0;
 cursor:pointer;
}
.lang-toggle{
 margin-left:13.75%;
 position: relative;

}
.lang-toggle ul{
 background:var(--main-deep-dark);
 width:8.125rem;
 margin-left:10px;
 &:hover{
  background:#0085ff;
  color:#fff;
 }
}




`; 