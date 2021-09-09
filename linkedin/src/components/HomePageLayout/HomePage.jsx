import React from 'react'
import MyNavbar from '../MyNavbar'
import MyFooter from '../MyFooter'
import RightSidebar from '../RightSidebar'
import Feeds from '../Feeds'

import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center flex-wrap' >
                <div className='d-flex flex-wrap border text-center mb-4' style={{ 'width': '100vw' }}>
                    <MyNavbar />
                    <h2>navbar</h2>
                </div>

                <div className='d-flex flex-wrap my-5' >

                    <div className='border flex-column flex-wrap home-sidebar-2 m-1'>
                        <div className=' mb-3'>
                            <h3>Sidebar1</h3>
                        </div>

                    </div>
                    <div className='flex-column flex-wrap feeds'>
                        <div className=''>

                            <Feeds />
                        </div>

                    </div>
                    <div className='border home-sidebar-1 ml-3' >

                        <RightSidebar />
                    </div>
                </div>



                <div className=' border w-100' >
                    <div><MyFooter /></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
