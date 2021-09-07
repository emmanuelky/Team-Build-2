import React from 'react'
import "./Interest.css";

const Interest = () => {
    return (
        <div id="interestDiv" className='d-flex flex-column bg-white border'>
            <div className='d-flex justify-content-between ml-4 mx-3'>
                <div className='align-self-center mt-4 mt-3'>
                    <h5>Interests </h5>
                </div>
                
            </div>

            <div className='d-flex justify-content-between mx-3 ml-4 mb-4'>
                <div className='mt-3'>
                    <div className='d-flex'>
                        <img id="interest-Img" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height = "65px"  width = "65px"/>
                        <div className='m-1 ml-4 d-flex flex-column text-left'>
                            <h6>The Walt Disney Company</h6>
                            <span className= "followers">4,521,577 followers</span>
                            

                        </div>
                        
                    </div>
                    

                </div>
                
                
            </div>
            
        </div >
    )
}

export default Interest