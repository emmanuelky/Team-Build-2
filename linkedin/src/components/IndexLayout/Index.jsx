import React from 'react'
import './index.css'
import Education from '../Education'
import Experience from '../Experience'
import ProfileSummary from '../ProfileSummary/ProfileSummary'
import MyNavbar from '../MyNavbar'
import MyFooter from '../MyFooter'
import SideBar from '../SideBar'
import Dashboard from '../Dashboard'
import Interest from '../Interest'



const Index = () => {
    return (
        <div className='d-flex flex-column align-items-center flex-wrap' >
            <div className='d-flex flex-wrap border text-center mb-5' style={{ 'width': '100vw' }}>
                <MyNavbar />
            </div>

            <div className='d-flex flex-wrap my-5' >
                <div className='flex-column flex-wrap profile m-2'>
                    <div className='mb-3'>
                        <ProfileSummary />
                    </div>
                    <div id="dashboardDiv" className=''>
                        <Dashboard />
                    </div>
                    <div className=''>
                        <Experience />
                    </div>
                    <div className='mb-3'>
                        <Education />
                    </div>
                    <div className='mb-3'>
                        <Interest />
                    </div>
                </div>
                <div className='sidebar m-2' >
                    <div><SideBar /></div>
                </div>
            </div>



            <div className='w-100' >
                <div><MyFooter /></div>
            </div>
        </div>
    )
}

export default Index
