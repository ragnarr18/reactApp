import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default class Navbar extends React.Component {
    render(){
        
        return (
        // <ul className="Navbar">
        //     <li><a href="default.ssssssssssss">Home</a></li>
        //     <li><a href="news.asp">News</a></li>
        //     <li><a href="contact.asp">Contact</a></li>
        //     <li><a href="about.asp">About</a></li>
        // </ul>
        <Nav
  activeKey="/home"
//   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        )
    }
}