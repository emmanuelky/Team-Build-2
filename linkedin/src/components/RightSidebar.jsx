import React, {useState} from 'react'
import '../index.css'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { fetchdata } from '../functions/fetches'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faInfoCircle, faPlus} from '@fortawesome/free-solid-svg-icons'

const RightSidebar = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 p-3">
                <div className="d-flex">
                    <div className="mr-5"><h6>Add to your feed</h6></div>
                    <div className="text-muted ml-5"><FontAwesomeIcon id="rightInfo2" icon={faInfoCircle} /></div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="rightbarImg" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height="65px" width="65px" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>W3Schools.com</h6>
                                <span className="followers">Company • E-Learning</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong><FontAwesomeIcon icon={faPlus} /> Follow</strong></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="rightbarImg" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height="65px" width="65px" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>freeCodeCamp</h6>
                                <span className="followers">Company • E-Learning</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong><FontAwesomeIcon icon={faPlus} /> Follow</strong></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                <div className='mt-3'>
                    <div className='d-flex'>
                        <img id="rightbarImg" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height="65px" width="65px" />
                        <div className='m-1 ml-4 d-flex flex-column text-left'>
                            <h6>GitHub</h6>
                            <span className="followers">Company • Computer Software</span>
                            <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong><FontAwesomeIcon icon={faPlus} /> Follow</strong></Button>
                        </div>
                    </div>
                </div>
                </div>
                <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <h6 className="text-muted mt-2">View all recommendations <FontAwesomeIcon icon={faArrowRight} /></h6>
                            </div>
                        </div>
            </div>
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mt-3 mx-1 p-3">
                <div className="text-right">
                    <span style={{ 'font-size': '12px' }}>Ad •••</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="text-muted "><span style={{ 'font-size': '13px' }} >Get the latest jobs and industry news</span></div>
                    <div className='d-flex mt-2'>
                        <div className='mr-3'>
                            <img id="educationImg" className="rounded-pill " src="data:image/png;base64,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" alt="" />

                        </div>
                        <div className="ml-3 align-self-center text-warning" style={{ 'font-size': '30px' }}>
                            <i class="fab fa-aws"></i>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <span className="text-center">Emmanuel, explore relevant opportunities with aws</span>
                    </div>
                    <Button className="rounded-pill mt-3" size="sm" variant="outline-primary"><strong className="p-1">Follow</strong></Button>

                </div>
            </div>

            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 mt-3 pl-3 pr-3 pb-1 pt-3">
                <div><h6>Today's Top Courses
                    <FontAwesomeIcon id="rightInfo" icon={faInfoCircle} /></h6>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-2'>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <h6>1. What is Graphic Design?</h6>
                                <span className="followers ml-3">Sean Addams</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <h6>2. Customer Service Foundations</h6>
                                <span className="followers ml-3">Jeff Toister</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <h6>3. Uncovering Your Authentic Self a...</h6>
                                <span className="followers ml-3">Kenji Yoshino</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <h6 className="text-muted mt-2">Show more on LinkedIn Learning <FontAwesomeIcon icon={faArrowRight} /></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}
export default RightSidebar
