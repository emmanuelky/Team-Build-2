
import React from 'react'
import './MyFooter.css'
import { Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap"
export default function MyFooter(){

    return (
      <Container className= "Footer d-flex justify-content-center mx-auto">
          <Row>
            <Col md={12}><img className="ml-4 mb-2" id="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png" /></Col>
            <Col xs={12} sm={6} lg={2} className="p-0" >
              
              <ul>
                <li>
                  <a className= "text-muted" href="#home">About</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Community Guidelines</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Privacy & Terms  </a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Sales Solutions</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Safety Center</a>
                </li>
               
                
              </ul>
              
             
            </Col>
            <Col xs={12} sm={6} lg={2} className="p-0">
              <ul>
                <li>
                  <a className= "text-muted" href="#home">Accessibility</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Careers</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Ad Choices</a>
                </li>
                <li>
                  <a className= "text-muted"href="#home">Mobile</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} lg={2} className="p-0" >
              <ul>
                <li>
                  <a className= "text-muted" href="#home">Talent Solutions</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Marketing Solutions</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Advertising</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Small Business</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} lg={2} className="p-0">
                    <Button className="text-muted" variant="link"><i className="fas fa-question-circle"></i><span id="footerFontSize"> Questions?</span> <br /><span className="text-left Questions">Visit our help center</span></Button>
                    <Button className="text-muted" variant="link"><i className="fas fa-cog"></i> <span id="footerFontSize">Manage your account and privacy</span> <br /> <span className="Manage"> Go to your settings</span></Button>
                </Col>
                <Col xs={12} lg={4} className="dropup-language p-0">
                    Select Language
                    <DropdownButton 
                    id="footerFontSize"
                    title="English (English)" 
                    variant="outline-secondary" 
                    drop="down">
                        <Dropdown.Item href="#">German</Dropdown.Item>
                        <Dropdown.Item href="#" active>English (English)</Dropdown.Item>
                        <Dropdown.Item href="#">Swedish</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={12} className="p-0 copyright">
                <Button className= "copyright ml-4 text-muted" variant="link" id="footerFontSize">LinkedIn Corporation © 2021</Button>
                </Col>       
          </Row>
        </Container>
        
      
    )
  }
