import React from 'react';
import "./style/style.css";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {
  return(
    <>
    <Header/>
   <div className="herocontact">
      <div className="container">
          <div className="content">
            <h1 className="title">contact</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> At doloremque labore non voluptates totam natus <br/> voluptatibus fugit ut quis enim?</p>
              <a href="/" className="btn btngit">Contact </a>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Contact;