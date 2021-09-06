
import React from 'react'
import './MyFooter.css'
import { Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap"
export default function MyFooter(){

    return (
      <Container className= "Footer d-flex justify-content-center mx-auto">
        
         
          <Row>
          
            <Col xs={12} sm={6} lg={2} className="p-0" >
              <ul>
              <li>
                  <a href="#home"><span className= "linked"><b>Linked</b></span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a>
                </li>
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
                    variant="link" 
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
