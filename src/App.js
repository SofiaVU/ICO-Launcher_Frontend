import React, { Component } from 'react';
//import {Col, Navbar, NavItem, Row, Button} from 'react-bootstrap';
import './App.css';
import "./css/normalize.min.css"
import "./css/bootstrap.min.css"
import "./css/jquery.fancybox.css"
import "./css/flexslider.css"
import "./css/styles.css"
import "./css/queries.css"
import "./css/etline-font.css"
import "./bower_components/animate.css/animate.min.css"
//import "http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
import logo from "./img/paperPlane.png"
import devices from "./img/devices.png"
import macbook from "./img/macbook-pro.png"
import img1 from  "./img/blog-img-01.jpg"
import img2 from  "./img/blog-img-02.jpg"
import img3 from  "./img/blog-img-03.jpg"
import sketch from "./img/sketch-logo.png"



class App extends React.Component {
  render() {
    return (
      <div>
        {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]*/}
        {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]*/}
        {/*[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]*/}
        {/*[if gt IE 8]><!*/}  {/*<![endif]*/}
        <meta charSet="utf-8" />
        {/*<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">*/}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>ICO-LAuncher by Sofía Vidal</title>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
        {/* script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script */}
        <section className="hero">
          <section className="navigation fixed">
            <header>
              <div className="header-content">
                {/*div class="logo"><a href="#"><img src="img/sedna-logo.png" alt="Sedna logo"></a></div*/}
                <div className="header-nav">
                  <nav>
                    <ul className="primary-nav">                                
                      <li><a href="#">Home</a></li>
                      <li><a href="#Blockchain">Blockchain</a></li>
                      <li><a href="#icos">ICOs</a></li>
                      <li><a href="#features">Create</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#download">Contact</a></li>
                    </ul>
                    <ul className="member-actions">
                      <li><a className="myTitle"><h4><img width={35} height={35} src={logo}/>    ICO-Launcher</h4></a></li>   
                    </ul>
                  </nav>
                </div>
                {/*div class="navicon">
                        <a class="nav-toggle" href="#"><span></span></a>
                    </div*/}
              </div>
            </header>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="hero-content text-center">
                  <h1>INNOVATE!</h1>
                  <p className="intro">Deploy&nbsp;your startup and be an&nbsp;entrepreneur.</p>
                  <a href="#" className="btn btn-fill btn-large btn-margin-right"><strong>Create ICO</strong></a>
                  <a href="#" className="btn btn-accent btn-large"><strong>Learn more</strong></a>
                </div>
              </div>
            </div>
          </div>
          <div className="down-arrow floating-arrow"><a href="#"><i className="fa fa-angle-down" /></a></div>
          {/* FIN DE SECCION*/}
        </section>
        <section className="intro section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4 intro-feature">
                <div className="intro-icon">
                  <span data-icon="" className="icon" />
                </div>
                <div className="intro-content">
                  <h5>INNOVATE</h5>
                  <p>Make your dreams come true finding the help and the funds you need to make your idea become a business                            
                  </p>
                </div>
              </div>
              <div className="col-md-4 intro-feature">
                <div className="intro-icon">
                  <span data-icon="" className="icon" />
                </div>
                <div className="intro-content">
                  <h5>CHOOSE SAFETY</h5>
                  <p>ICO-Launcher is based on Blockchain Technologies what ensures all transactions and gives investors an easy way to  finance new projects </p>
                </div>
              </div>
              <div className="col-md-4 intro-feature">
                <div className="intro-icon">
                  <span data-icon="" className="icon" />
                </div>
                <div className="intro-content last">
                  <h5>JUST FEW MINUTES</h5>
                  <p>ICO-Launcher provides a platform where the Startups can create an Initial Coin offering to find founds just in a few minutes, only completing a form in this webpage</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features section-padding" id="Blockchain">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-md-offset-7">
                <div className="feature-list">
                  <h3></h3>
                  <h3>Blockchain will provide a safe environment to deploy your ICO</h3>
                  <p>Some of its most powerful characteristics are</p>
                  <ul className="features-stack">
                    <li className="feature-item">
                      <div className="feature-icon">
                        <span data-icon="" className="icon" />
                      </div>
                      <div className="feature-content">
                        <h5>No need of intermediaries</h5>
                        <p>Customer experience disintermediation by removing the middle man (such as a bank or a broker)</p>
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-icon">
                        <span data-icon="" className="icon" />
                      </div>
                      <div className="feature-content">
                        <h5>Save</h5>
                        <p>There are not Single Points Of Failure (SPOF), every node keeps a copy of the chain, and prevents malicuos situations</p>
                      </div>
                    </li>
                    <li className="feature-item">
                      <div className="feature-icon">
                        <span data-icon="" className="icon" />
                      </div>
                      <div className="feature-content">
                        <h5>Transparent</h5>
                        <p>Because all information is kept in all nodes, every personson in the chain has access to the data.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="device-showcase">
            <div className="devices">
              <div className="ipad-wrap wp1" />
              <div className="iphone-wrap wp2" />
            </div>
          </div>
          <div className="responsive-feature-img"><img src={devices} alt="responsive devices" /></div>
        </section>
        <section className="features-extra section-padding" id="icos">
          <div className="container">
            <div className="row">
              <div className="col-md-5">              
                <div className="feature-list">
                  <h3>Initial Coin Offering</h3>
                  <p>An Initial Coins Offer (ICO) is a financing model for a company that, based on blockchain technology, creates its own new tokens and then puts them up for sale. </p>
                  <p>If you have a Startup, using ICO-Louncher your company can find funds, you only need to fill a short form. Trust Us and let us deploy your own company tokens!
                  </p>
                  <p>If you want to help society encouraging innovation and entrepreneurship, you've came to the right place! Invest in one of the ICO listed in this page!</p>
                  <a href="#Blockchain" className="btn btn-ghost btn-accent btn-large">ICO List</a>
                </div>
              </div>
            </div>
          </div>
          <div className="macbook-wrap wp3" />
          <div className="responsive-feature-img"><img src={macbook} alt="responsive devices" style={{marginLeft: '790px', marginTop: '60px'}}  /></div>
        </section>
        <section className="hero-strip section-padding">
          <div className="container">
            <div className="col-md-12 text-center">
              <h2>
                Customise Sedna with the included <span className="sketch">Sketch <i className="version">3</i></span> file
              </h2>
              <p>Change/swap/edit every aspect of Sedna before you hit development with the included Sketch file.</p>
              <a href="#" className="btn btn-ghost btn-accent btn-large">Download now!</a>
              <div className="logo-placeholder floating-logo"><img src={sketch} alt="Sketch Logo" /></div>
            </div>
          </div>
        </section>
        <section className="blog-intro section-padding" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>Showcase your smashing product with Sedna</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                <h5>EXCLUSIVE TO CODROPS</h5>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                <h5>SPREADING PIXELS AROUND THE WORLD</h5>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="blog text-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <article className="blog-post">
                  <figure>
                    <a href="img/blog-img-01.jpg" className="single_image">
                      <div className="blog-img-wrap">
                        <div className="overlay">
                          <i className="fa fa-search" />
                        </div>
                        <img src={img1} alt="Sedna blog image" />
                      </div>
                    </a>
                    <figcaption>
                      <h2><a href="#" className="blog-category" data-toggle="tooltip" data-placement="top" data-original-title="See more posts">Product</a></h2>
                      <p><a href="#" className="blog-post-title">Getting started with Sedna <i className="fa fa-angle-right" /></a></p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-md-4">
                <article className="blog-post">
                  <figure>
                    <a href="img/blog-img-02.jpg" className="single_image">
                      <div className="blog-img-wrap">
                        <div className="overlay">
                          <i className="fa fa-search" />
                        </div>
                        <img src={img2} alt="Sedna blog image" />
                      </div>
                    </a>
                    <figcaption>
                      <h2><a href="#" className="blog-category" data-toggle="tooltip" data-placement="top" data-original-title="See more posts">Technology</a></h2>
                      <p><a href="#" className="blog-post-title">Why IE8 support is deminishing <i className="fa fa-angle-right" /></a></p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-md-4">
                <article className="blog-post">
                  <figure>
                    <a href="img/blog-img-03.jpg" className="single_image">
                      <div className="blog-img-wrap">
                        <div className="overlay">
                          <i className="fa fa-search" />
                        </div>
                        <img src={img3} className="single_image" alt="Sedna blog image" />
                      </div>
                    </a>
                    <figcaption>
                      <h2><a href="#" className="blog-category" data-toggle="tooltip" data-placement="top" data-original-title="See more posts">Product</a></h2>
                      <p><a href="#" className="blog-post-title">Sedna tutorial: How to begin your <i className="fa fa-angle-right" /></a></p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <a href="#" className="btn btn-ghost btn-accent btn-small">More news</a>
            </div>
          </div>
        </section>
        <section className="testimonial-slider section-padding text-center" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <div className="avatar"><img src="./img/sofia.jpg" alt="Sedna Testimonial Avatar" /></div>
                      <h2>Sofía Vidal Urriza</h2>
                      <p className="author">Estudiante de Ingeniería de telecomunicaciones</p>
                    </li>
                    <li>
                      <div className="avatar"><img src="img/pavon.jpg" alt="Sedna Testimonial Avatar" /></div>
                      <h2>Tutor: Santiago Pavón Gómez</h2>
                      <p className="author">Departamento de Ingeniería de Sistemas Telemáticos</p>
                    </li>                            
                    <li>
                      <div className="avatar"><img src="img/etsit.png" alt="Sedna Testimonial Avatar" /></div>
                      <h2>Escuela Técnica Superior de Ingenieros de Telecomunicación</h2>
                      <p className="author">Universidad Politécnica de Madrid</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*section class="sign-up section-padding text-center" id="download">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h3>Get started with Sedna, absolutely free</h3>
                    <p>Grab your copy today, exclusively from Codrops</p>
                    <form class="signup-form" action="#" method="POST" role="form">
                        <div class="form-input-group">
                            <i class="fa fa-envelope"></i><input type="text" class="" placeholder="Enter your email" required>
                        </div>
                        <div class="form-input-group">
                            <i class="fa fa-lock"></i><input type="text" class="" placeholder="Enter your password" required>
                        </div>
                        <button type="submit" class="btn-fill sign-up-btn">Sign up for free</button>
                    </form>
                </div>
            </div>
        </div>
    </section*/}
        <section className="to-top">
          <div className="container">
            <div className="row">
              <div className="to-top-wrap">
                <a href="#top" className="top"><i className="fa fa-angle-up" /></a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="footer-links">
                  <ul className="footer-group">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Sign up</a></li>
                    <li><a href="http://tympanus.net/codrops/licensing/">Licence</a></li>
                    <li><a href="http://tympanus.net/codrops/">Codrops</a></li>
                    <li><a href="http://www.peterfinlan.com/">Peter Finlan</a></li>
                  </ul>
                  <h2>Contact Info</h2>
                  <p>Av. Complutense, 30, 28040 Madrid, SPAIN<br />+34 608 103 083<br /> sofia.vidal.urriza@alumnos.upm.es</p>
                </div>
              </div> 
              {/*div class="social-share">
                    <p>Share Sedna with your friends</p>
                    <a href="https://twitter.com/peterfinlan" class="twitter-share"><i class="fa fa-twitter"></i></a> <a href="#" class="facebook-share"><i class="fa fa-facebook"></i></a>
                </div*/}
            </div>
          </div>
        </footer>    
      </div>
    );
  }
}

export default App;
