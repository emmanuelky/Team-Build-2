import React from 'react'
import './index.css'

const Index = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <div className='border w-100 text-center'>
                <div>NavBar</div>
            </div>

            <div className='d-flex my-5' >
                <div className='border profile m-2 text-center'>
                    <div>Profile</div>
                </div>
                <div className='sidebar border  m-2 text-center' >
                    <div>Sidebar</div>
                </div>
            </div>



            <div className='border text-center fixed-bottom' style={{ 'margin-left': '200px', 'margin-right': '200px' }}>
                <div>Footer</div>
            </div>
        </div>
    )
}

export default Index
