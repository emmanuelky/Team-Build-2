import React from 'react'
import './index.css'
import Education from '../Education'
import ProfileSummary from '../ProfileInfo/ProfileSummary'
import MyNavbar from '../MyNavbar'
import MyFooter from '../MyFooter'


const Index = () => {
    return (
        <div className='d-flex flex-column align-items-center flex-wrap' >
            <div className='border w-100 text-center'>
                <div><MyNavbar /></div>
            </div>

            <div className='d-flex my-5' >
<<<<<<< Updated upstream
                <div className='flex-column profile m-2'>
                    <div className='mb-3 border'><ProfileSummary /></div>
=======
                <div className='flex-column profile m-2 text-center'>
                    <div className='mb-3 border'>
                        <ProfileSummary />
                    </div>
>>>>>>> Stashed changes
                    <div className='-3 border'>
                        <Education />
                    </div>
                </div>
                <div className='d-flex sidebar border  m-2 text-center' >
                    <div>Sidebar</div>
                </div>
            </div>



            <div className='border w-100 text-center' >
                <div><MyFooter /></div>
            </div>
        </div>
    )
}

export default Index
