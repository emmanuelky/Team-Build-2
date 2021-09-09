
import React from 'react'
import './MyFooter.css'
import { Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap"
export default function MyFooter(){

    return (
      <Container className="Footer d-flex justify-content-center mx-auto" style={{ fontWeight: "bold" }}>
          <Row>
            <Col md={12}><img className="ml-4 mb-2" id="footerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png" /></Col>
            <Col md={2} className="p-0" >
              
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
            <Col md={2} className="p-0">
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
            <Col  md={2} className="p-0" >
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
            <Col  md={4} className="p-0">
              <ul>
                <li>
                  <a className= "text-muted" href="#home"><i className="fas fa-question-circle mr-2"></i> <span style={{ fontSize: "14px" }}>Questions?</span> <br/> <span className="ml-4" style={{ fontWeight: "normal" }}>Visit our Help Center.</span></a>
                </li>
                <li>
                  <a className= "text-muted" href="#home"><i className="fas fa-cog mr-2"></i> <span style={{ color: "#a380ce", fontSize: "14px" }}>Manage your account and privacy</span> <br/> <span className="ml-4" style={{ fontWeight: "normal" }}>Go to your Settings.</span></a>
                </li>
              </ul>
            </Col>
                <Col  md={2} style={{ fontWeight: "normal" }} className="dropup-language p-0">
                    Select Language
                    <DropdownButton 
                    id="footerFontSize"
                    title="English (English)" 
                    variant="outline-secondary" 
                    drop="down"
                    >
                        <Dropdown.Item href="#">German</Dropdown.Item>
                        <Dropdown.Item href="#" active>English (English)</Dropdown.Item>
                        <Dropdown.Item href="#">Swedish</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col md={12} className="p-0 copyright">
                  <Button className= "copyright ml-4 text-muted" variant="link" id="footerFontSize">LinkedIn Corporation © 2021</Button>
                </Col>       
          </Row>
        </Container>
        
      
    )
  }
