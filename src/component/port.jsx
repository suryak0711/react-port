import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { FaTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../desing/view.css"

const Port=()=>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted Successfully!");
  };

    return(
        <>
        <div className="bg1">
      <div class="container">
      <header>
          <nav>
          <h2> <a href="#home" id="p1">Port<span>folio</span></a></h2>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#skill">Skills</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>
      </div>

      <div className='container a2' >
      <Container fluid>
      <Row xs={1} md={2} >
        <Col className='e1'>
        <div className='e2'>
        <h2>Surya <span>Kangaraj</span></h2>
        <h3><span><Typewriter onInit={(typewriter) => {typewriter.typeString("I Am a FullStack Developer")
                        .pauseFor(0)
                        .start();}}/></span></h3><br/>

        </div> 
            <br></br>
            <div id="logo1">
              <Nav.Link href="#action4" className='q2'><FaGithub /></Nav.Link>
              <Nav.Link href="#action3" className='q2'><FaTwitter /></Nav.Link>
              <Nav.Link href="#action3" className='q2'><BsFacebook /></Nav.Link>
              <Nav.Link href="#action3" className='q2'><FaInstagram /></Nav.Link>
              </div>
        </Col>
        <Col className='e1'>
        <img src="3.jpeg" alt="" width={250}/>
        </Col>
      </Row>
      </Container>

      </div>
      <section>
      <div id="about">
      <div class="container">
      <div  class="row">
      <h2>About <span>Us</span></h2>
  <div class="col-6">
  <h4>Fullstack <span>Developer</span></h4>
  <p>My Name is <strong>SURYA K</strong>,and I'm a Fullstack Developer.
  I am coming from K.Rasiyamangalam,Alangudi.I'm completed <span>B.Sc</span>(Computer Science) from Govt.Art.Science College,Karampabakkudi. </p>
  </div>
  <div class="col-6"><img src="surya2.jpeg" alt=""/></div>
</div>
</div>
</div>
</section>
<section>
  <div id="projects">

  <div>
  <div class="container">
  <h2>My <span>Projects</span></h2>
  
  <div class="row">
      <div class="col-4">
          <Card style={{ width: '18rem' }}>
      <img src="../surya2.jpeg" />
    </Card>

      </div>
      <div class="col-4">
      <Card style={{ width: '20rem' }}>
     <img src="../6.jpeg" height={430} />
      
    </Card>

      </div>
      <div class="col-4">
      <Card style={{ width: '18rem' }}>
      <img src="../5.jpeg" height={430} />
    </Card>
      </div>
    </div>

</div>
  </div>
  </div>
</section>
<section>
<div class="container">
<div id="skill">
  <h2>Skills</h2>
  <div class="skills">
<div class="skill">
  <div class="skill-name">HTML5</div>
  <div class="skill-bar">
    <div class="skill-level html">95%</div>
  </div>
</div>

<div class="skill">
  <div class="skill-name">CSS3</div>
  <div class="skill-bar">
    <div class="skill-level css">90%</div>
  </div>
</div>

<div class="skill">
  <div class="skill-name">Javascript</div>
  <div class="skill-bar">
    <div class="skill-level js">60%</div>
  </div>
</div>

<div class="skill">
  <div class="skill-name">React</div>
  <div class="skill-bar">
    <div class="skill-level react">70%</div>
  </div>
</div>
</div>
      
  </div>

</div>
 
</section>
<section id="contact">
<div class="container">
        <div className="contact">
        <h2 className="a3">Contact <span>Us</span></h2><br/>
            <div className="row">
                <div className="col-6 a5 a7">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <ToastContainer/>
                </div>
                <div className="ppp1">
                <ul> 
                    <li><a href="https://github.com/suryak0711"><FaGithub /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                    <li><a href=""><BsFacebook /></a></li>
                    <li><a href=""><FaInstagram /></a></li>   
                </ul>
                </div>
                </div>
                <div className="col-6 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15699.036533751512!2d78.96930024816645!3d10.36113429413323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b007492581efcd9%3A0xf4fd4eb4ac649925!2sAmbedkar%20Nagar%2C%20Alangudi%2C%20Tamil%20Nadu%20622301!5e0!3m2!1sen!2sin!4v1720440942089!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

</div>
        <hr style={{color:'azure',height:'50px'}} />
        <footer style={{textAlign:'center',color:'azure'}}>
            <h3>Design By <span>Surya</span></h3>
        </footer>
    </section>
    </div>
        </>
        
    )
}
export default Port