import React from 'react';
import "./style/style.css";
import Header from "../Header";
import Footer from "../Footer";
import designer from"../../assets/pointer.svg";
import visionario from"../../assets/visionario.svg";
import lancamento from"../../assets/lancamento.svg";
import home from"../../assets/Home.png";
import border from"../../assets/border.png";
import squares from"../../assets/squares.png";
import squars from"../../assets/squars.png";
import mobile from"../../assets/mobile.png";
import skillhtml from"../../assets/html.png";
import skillcss from"../../assets/css.png";
import skilljs from"../../assets/js.png";
import skillreact from"../../assets/react.png";
import skillsass from"../../assets/sass.png";

function Home() {
  return(
   <>
   <Header/>
  <section className="hero">
     <div className="container">
        <div className="content">
          <h1 className="title">
            <span>Mateus</span>
            <span>Cudimuca.</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Eius mollitia ullam hic ipsam commodi .
          </p>
          <a href="/" className="btn btngit">download cv </a>
        </div>
      </div>
  </section>
    <section className="stacks">
     
      <div className="container">
      <header className="headersections">
        <h2 className="title">WHAT I DO</h2>
        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </header>
      <div className="grid-columns">
        <div className="cols"> 
        <img src={visionario} alt="" className="imgcols"/>
        <h3 className="title">
        UX/UI
        </h3>
        <p className="descriptioncols">
           sit amet consectetur adipisicing elit. Tempore cupiditate amet.
        </p>

        </div>
        <div className="cols"> 
        <img src={lancamento} alt="" className="imgcols"/>
        <h3 className="title">
        Developer
        
        </h3>
        <p className="descriptioncols">
          Lorem ipsum, sit consectetur elit adipisicing. Tempore cupiditate amet!
        </p>
        </div>
        <div className="cols"> 
        <img src={designer} alt="" className="imgcols"/>
        <h3 className="title">
        Designer
        </h3>
        <p className="descriptioncols">
         Tempore amet laborum rerum cumque, culpa sed qui laboriosam ad vel, error, est fugiat!
        </p>

      </div>
      </div>
      </div>
  </section>
  <section className="skill">

    <div className="container">
    <header className="headersections">
        <h2 className="title">skill</h2>
        <p className="description">dolor sit amet consectetur adipisicing.</p>
      </header>

      <ul className="listworks">
        <li className="listitem">
          <img src={skillhtml} alt="" srcset=""/>
          <div className="textitem">
            <h3 className="title">HTML5</h3>
            <p className="description">Eius mollitia ullam hic ipsam commodi .</p>
            </div>
        </li>
        <li className="listitem">
          <img src={skillcss} alt="" srcset=""/>
          <div className="textitem">
            <h3 className="title">CSS3</h3>
            <p className="description">Eius mollitia ullam hic ipsam commodi .</p>
            </div>
        </li><li className="listitem">
          <img src={skilljs} alt="" srcset=""/>
          <div className="textitem">
            <h3 className="title">Javascript</h3>
            <p className="description">Eius mollitia ullam hic ipsam commodi .</p>
            </div>
        </li>
        <li className="listitem">
          <img src={skillreact} alt="" srcset=""/>
          <div className="textitem">
            <h3 className="title">React  js</h3>
            <p className="description">Eius mollitia ullam hic ipsam commodi .</p>
            </div>
        </li>
        <li className="listitem">
          <img src={skillsass} alt="" srcset=""/>
          <div className="textitem">
            <h3 className="title">SASS</h3>
            <p className="description">Eius mollitia ullam hic ipsam commodi .</p>
            </div>
        </li>
      
      </ul>
      </div>
  </section>
  
  <section className="works">
    
  <div className="container">
    <header className="headersections">
        <h2 className="title">MY projects</h2>
        <p className="description">dolor sit amet consectetur adipisicing.</p>
      </header>
      <ul className="listworks">
        <li className="workitem">
        <img src={home} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
              01
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Repellat, beatae.
            </p>
          </span>
        </li>
        <li className="workitem">
          <img src={mobile} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
                02
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, beatae.
            </p>
          </span>
        </li>
        <li className="workitem">
        <img src={home} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
                03
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Repellat, beatae.
            </p>
          </span>
        </li>
        <li className="workitem">
        <img src={border} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
                04
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur,elit. Repellat, beatae.
            </p>
          </span>
        </li>
        <li className="workitem">
        <img src={squares} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
                05
            </h2>
            <p className="description">
            amet consectetur, adipisicing elit. Repellat, beatae.
            </p>
          </span>
        </li>
        <li className="workitem">
        <img src={squars} alt="" srcset=""/>
          <span className="hovertext">
            <h2 className="title">
                06
            </h2>
            <p className="description">
            amet consectetur, adipisicing elit. Repellat, beatae.
            </p>
          </span>
        </li>
       
      </ul>
</div>
  </section>
  
   <Footer/>
   </>
  )
}

export default Home;