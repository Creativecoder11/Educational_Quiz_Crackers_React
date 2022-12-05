import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Profile from '../../profile.jpg'
import './Blog.css'

const Blog = () => {
  return (
    <section className=" my-5">
    <div className="border-5 rounded-4">
        <img className="border rounded-5" src={Profile} alt=""/>
        <h2 >Nur Mohammad Kawser</h2>
        <h4>Junior Web Developer</h4>
        <p><small>creativecoderpro@gmail.com</small></p>
    </div>    
    <div className="container">
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the perpous of React Router?
          </Accordion.Header>
          <Accordion.Body>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does Context API works?</Accordion.Header>
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>React useRef Hook</Accordion.Header>
          <Accordion.Body>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </section>
  );
};

export default Blog;
