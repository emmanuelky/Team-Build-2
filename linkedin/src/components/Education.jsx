import React from 'react'

const Education = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between mx-3'>
                <div>
                    <div className='text-left'>
                        <h2>Eduction </h2>
                    </div>

                    <div className='d-flex'>
                        <img src="https://via.placeholder.com/50" alt="" />
                        <div className='m-1 d-flex flex-column text-left'>
                            <h4>Strive Schools</h4>
                            <span className='text-muted'>Frontend Developer</span>
                            <span className='text-muted'>2021 -2021</span>

                        </div>
                    </div>

                </div>
                <div>
                    <div>+</div>
                </div>
            </div>
        </div>
    )
}

export default Education
