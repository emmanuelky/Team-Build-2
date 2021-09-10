import React, { useState } from 'react'
import '../index.css'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { fetchdata } from '../functions/fetches'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

const RightSidebar = () => {

    return (
        <div className="d-flex flex-column align-items-center ml-3" id="makeItStick">
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 pt-3 pl-3 pr-3 pb-1">
                <div className="d-flex">
                    <div className="mr-5"><h6>Add to your feed</h6></div>
                    <div className="text-muted ml-5"><FontAwesomeIcon id="rightInfo2" icon={faInfoCircle} /></div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="rightbarImg" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHF7HLEYX6LSQ/company-logo_200_200/0/1607800000814?e=2159024400&v=beta&t=GhDf2E1ixnXHT2c4bQQE58T---2Mw86d6mi3lHAnzyA" alt="" />
                            <div className='ml-3 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>W3Schools.com</strong></span>
                                <span className="followers text-muted">Company • E-Learning</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong><FontAwesomeIcon icon={faPlus} /> Follow</strong></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="rightbarImg" src="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Fproviders%2Ffreecodecamp-sq.png?auto=format&cs=strip&fit=&h=120&ixlib=php-3.3.0&w=120&s=1898b8b8f099b64783c3ef348bb64d16" alt="" />
                            <div className='ml-3 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>freeCodeCamp</strong></span>
                                <span className="followers text-muted">Company • E-Learning</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong><FontAwesomeIcon icon={faPlus} /> Follow</strong></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="rightbarImg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            <div className='ml-3 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>GitHub</strong></span>
                                <span className="followers text-muted">Company • Computer Software</span>
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

            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 mt-2 pl-3 pr-3 pb-1 pt-3">
                <div><h6>Today's Top Courses
                    <FontAwesomeIcon id="rightInfo" className="text-muted" icon={faInfoCircle} /></h6>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='mt-2'>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>1. What is Graphic Design?</strong></span>
                                <span className="followers ml-3 text-muted">Sean Addams</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>2. Customer Service Foundations</strong></span>
                                <span className="followers ml-3 text-muted">Jeff Toister</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <div className='d-flex'>
                            <div className='m-1 d-flex flex-column text-left'>
                                <span style={{ 'font-size': '14px' }}><strong>3. Uncovering Your Authentic Self a...</strong></span>
                                <span className="followers ml-3 text-muted">Kenji Yoshino</span>
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

            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mt-2 mx-1 pl-2 pr-2">
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" />
            </div>

        </div >

    )
}
export default RightSidebar
