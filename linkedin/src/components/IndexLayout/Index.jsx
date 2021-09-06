import React from 'react'
import './index.css'
import Education from '../Education'
import ProfileSummary from '../ProfileSummary/ProfileSummary'
import MyNavbar from '../MyNavbar'
import MyFooter from '../MyFooter'
import SideBar from '../SideBar'



const Index = () => {
    return (
        <div className='d-flex flex-column align-items-center flex-wrap' >
            <div className='border w-100 text-center'>
                <div><MyNavbar /></div>
            </div>

            <div className='d-flex my-5' >
                <div className='flex-column profile m-2'>
                    <div className='mb-3'>
                        <ProfileSummary />
                    </div>
                    <div className=''>
                        <Education />
                    </div>
                </div>
                <div className='sidebar m-2' >
                    <div><SideBar /></div>
                </div>
            </div>



            <div className='border w-100' >
                <div><MyFooter /></div>
            </div>
        </div>
    )
}

export default Index
