import React from 'react'
import './index.css'
import Education from '../Education'


const Index = () => {
    return (
        <div className='d-flex flex-column align-items-center flex-wrap' >
            <div className='border w-100 text-center'>
                <div>NavBar</div>
            </div>

            <div className='d-flex my-5' >
                <div className='flex-column profile m-2 text-center'>
                    <div className='mb-3 border'>Profile</div>
                    <div className='-3 border'>
                        <Education />
                    </div>
                </div>
                <div className='d-flex sidebar border  m-2 text-center' >
                    <div>Sidebar</div>
                </div>
            </div>



            <div className='border w-100 text-center fixed-bottom' >
                <div>Footer</div>
            </div>
        </div>
    )
}

export default Index
