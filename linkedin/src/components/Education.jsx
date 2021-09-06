import React from 'react'

const Education = () => {
    return (
        <div id="educationDiv" className='d-flex flex-column bg-white'>
            <div className='d-flex justify-content-between mx-3'>
                <div className='align-self-center'>
                    <h5>Education </h5>
                </div>
                <div className="align-self-center"><i class="fas fa-plus"></i></div>
            </div>

            <div className='d-flex justify-content-between mx-3 mb-4'>
                <div className='mt-3'>
                    <div className='d-flex'>
                        <img src="https://via.placeholder.com/50" alt="" />
                        <div className='m-1 d-flex flex-column text-left'>
                            <h4>Strive Schools</h4>
                            <span className='text-muted'>Frontend Developer</span>
                            <span className='text-muted'>2021 -2021</span>

                        </div>
                    </div>

                </div>
                <div className='mt-3'>
                    <div className="mb-4"> <i class="fas fa-pen"></i></div>
                    <div className="mb-4">  <i class="fas fa-bars"></i></div>
                </div>

            </div>
        </div >
    )
}

export default Education
