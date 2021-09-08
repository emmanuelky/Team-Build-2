import React from 'react'
import MyNavbar from '../MyNavbar'
import MyFooter from '../MyFooter'

const HomePage = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center flex-wrap' >
                <div className='d-flex flex-wrap border text-center mb-5' style={{ 'width': '100vw' }}>
                    <MyNavbar />
                    <h2>navbar</h2>
                </div>

                <div className='d-flex flex-wrap my-5' >
                    <div className='flex-column flex-wrap profile m-2'>
                        <div className='mb-3'>

                        </div>

                    </div>
                    <div className='sidebar m-2' >

                        <h2>sidebar</h2>
                    </div>
                </div>



                <div className='w-100' >
                    <div><MyFooter /></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
