import React, { useState } from 'react'
import '../index.css'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { fetchdata } from '../functions/fetches'

const SideBar = () => {
    const [users, setUsers] = useState([])
    const [usersYouMayKnow, setUsersYouMayKnow] = useState([])

    useEffect(async () => {
        let data = await fetchdata()
        let randomUsers = []
        let randomUsersYouMayKnow = []
        for (let i = 0; i < 6; i++) {
            let randomInt = Math.random() * data.length
            let floored = Math.floor(randomInt)
            randomUsers.push(data[floored])
        }
        for (let i = 0; i < 6; i++) {
            let randomInt = Math.random() * data.length
            let floored = Math.floor(randomInt)
            randomUsersYouMayKnow.push(data[floored])
        }
        setUsers(randomUsers)
        setUsersYouMayKnow(randomUsersYouMayKnow)
    }, [])

    return (
        <div className="d-flex flex-column align-items-center sticky-top">
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 p-3">
                <div className="d-flex ">
                    <div className="text-muted mr-5 ml-2"><span style={{ 'font-size': '14px' }}>Edit public profile & url</span></div>
                    <div className="text-muted ml-5"><i class="fas fa-question-circle"></i></div>
                </div>
                <div className="border my-4 text-muted"></div>
                <div className="d-flex">
                    <div className="text-muted mr-4 ml-2"><span style={{ 'font-size': '14px' }}>Add profile in another language</span></div>
                    <div className="text-muted ml-3"><i class="fas fa-question-circle"></i></div>
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
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 mt-3 p-3">
                <h6>People also viewed</h6>
                {users.map(user => {
                    return (
                        <div className="d-flex mt-2">
                            {/* <div className="rounded-pill p-4"><i class="fas fa-user-tie"></i></div> */}
                            <img id="educationImg" className="rounded-pill" src={user.image} alt="" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>{user.name} {user.surname}<span className="text-muted"> • 2nd</span> </h6>
                                <span id="eduFontSize" className="text-muted">{user.title}</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong>Connect</strong></Button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 mt-3 p-3">
                <h6>People you may know</h6>
                {usersYouMayKnow.map(user => {
                    return (
                        <div className="d-flex mt-2">
                            <img id="educationImg" className="rounded-pill" src={user.image} alt="" />
                            {/* <img id="educationImg" className="rounded-pill" src="https://via.placeholder.com/300.png" alt="" /> */}
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>{user.name} {user.surname}</h6>
                                <span id="eduFontSize">{user.title}</span>
                                <Button className="rounded-pill mt-2 btn-width" size="sm" variant="outline-secondary"><strong>Connect</strong></Button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div id="sideBorderRadius" className="d-flex flex-column border sidebar bg-white mx-1 mt-3 p-3">
                < div className="d-flex">
                    <i class="fab fa-linkedin text-primary"></i>
                    <div className="d-flex align-self-center">
                        <h6 className="text-monospace  ml-3" style={{ 'font-size': '13px' }}> <strong>Learning</strong> </h6>
                    </div>
                </div>
                <div><h6>Add new skills with these courses, free for 24 hours</h6></div>

                <div className='d-flex justify-content-between mb-4'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="interest-Img" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height="65px" width="65px" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>Essentials of CSS for React Developers</h6>
                                <span className="followers">10,478 viewers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-4'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="interest-Img" src="data:image/png;base64,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" alt="" height="65px" width="65px" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>React: TypeScript</h6>
                                <span className="followers">37,945 viewers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-4'>
                    <div className='mt-3'>
                        <div className='d-flex'>
                            <img id="interest-Img" src="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1639008000&v=beta&t=tjnRMCLvfo0LOMI2k-GL5_N85fUwcYCCBMqugOLZ0TQ" alt="" height="65px" width="65px" />
                            <div className='m-1 ml-4 d-flex flex-column text-left'>
                                <h6>React: Creating and Hosting a Full-Stack Site</h6>
                                <span className="followers">49,371 viewers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}
export default SideBar
