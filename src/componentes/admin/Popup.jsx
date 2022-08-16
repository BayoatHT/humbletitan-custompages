import React from 'react'

const Popup = () => {
    const closePopup =()=>{
        document.querySelector('.popup-container').classList.remove('active')
    }
  return (
    <div className='pos-fixed popup-container top-0 left-0 w-full min-h-100 flex row-gap-1 justify-center align-center dir-col'>
    <div className="popup flex row-gap-1 justify-center align-center dir-col">

            <div className="popup_haeder">
                <span className="text-24">Are You Sure You Want to Refresh?</span>
            </div>
            <div className="popup_actions flex justify-end col-gap-1 ">
                <button onClick={closePopup} className="btn">No, I Don't</button>
                <button className="btn btn-primary" data-text='Yes, I Want'></button>
            </div>
    </div>
 
    </div>
  )
}

export default Popup