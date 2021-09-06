import React from 'react'
import '../index.css'

const SideBar = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column border sidebar rounded bg-white mx-1 p-3">
                <div className="d-flex">
                    <div className="text-muted mr-5"><span >Edit public profile & url</span></div>
                    <div className="text-muted ml-5"><i class="fas fa-question-circle"></i></div>
                </div>
                <div className="border my-4 text-muted"></div>
                <div className="d-flex">
                    <div className="text-muted mr-3 "><span >Add profile in another language</span></div>
                    <div className="text-muted ml-3"><i class="fas fa-question-circle"></i></div>
                </div>
            </div>
            <div className="d-flex flex-column border sidebar rounded bg-white mx-1 mt-4 p-3">
                <h6>People also viewed</h6>
                <div className="d-flex">
                    <div className="text-muted mr-5"><span >CDX GmbH</span></div>

                </div>
            </div>
            <div className="d-flex flex-column border sidebar rounded bg-white mx-1 mt-4 p-3">
                <h6>People you may know</h6>
                <div className="d-flex">
                    <div className="text-muted mr-5"><span >Diego Lucas</span></div>

                </div>
            </div>



        </div>
    )
}
export default SideBar
