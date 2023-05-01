import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OutsideAlerter } from '../index'
import { useNavigate } from 'react-router-dom'
import truncateString from '../../util/truncatestring'
import { updateUserData } from '../../redux/reducers/userSlice'

function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showProfle, setShowProfile] = useState(false)

  const userData = useSelector((state) => state.userDetails.userData)
  
  const userList = useSelector((state) => state.userDetails.userList)

  const rememberData = useSelector((state) => state.userDetails.rememberData)


  function showProfile(e) {
    if (e.target.id) {
      setShowProfile(true)
    }
  }

  function closeProfile() {
    setShowProfile(false)
  }

  function handleSignOut() {
    localStorage.setItem('rememberData', !rememberData.length? JSON.stringify([userData]) : JSON.stringify([userData, rememberData[0]]))
    localStorage.removeItem('userData')
    dispatch(updateUserData(''))
    navigate('/', { replace: true })
  }

  function changeProfile(e) {
    if (e.target.id) {
      dispatch(updateUserData(userList.find((item)=> item.id ===  parseInt(e.target.id))))
    }
  }

  return (
    <nav className='h-[100%] w-[100%] pl-[3.5%] relative'>
      <div className='flex items-center justify-between border-b-2 h-[100%] w-[100%]'>
        <p className='text-[1.4vw] font-bold opacity-60'>Profile</p>
        <div className='flex items-center w-[20%] justify-end' onClick={showProfile}>
          <div className='w-[15%] rounded-[50%] overflow-hidden mr-[5%] cursor-pointer'>
            <img src={userData.profilepicture} alt='profileImg' id={userData.id} />
          </div>
          <p className='text-[1.2vw] opacity-60 font-semibold cursor-pointer' id={userData.id}>{truncateString(userData.name, 15)}</p>
        </div>
      </div>

      {/* Pop Up */}
      {showProfle ?
        <OutsideAlerter callBackFunction={closeProfile}>
          <div className='bg-white absolute w-[20vw] right-0 transition-all duration-700 p-[3%] rounded-[2vw]' style={{
            boxShadow: '2px 1px 27px -10px rgba(0,0,0,0.75)'
          }}>
            <div className='w-[40%] rounded-[50%] overflow-hidden mx-auto mb-[5%]'>
              <img src={userData.profilepicture} alt={userData.name} />
            </div>
            <p className='text-center font-semibold opacity-70 text-[1.2vw]'>{userData.name}</p>
            <p className='text-center text-[#bdbdbd] mb-[4%]'>{userData.email}</p>
            <div className='mb-[6%]' onClick={changeProfile}>
              {rememberData && rememberData.map((item,index) =>
                <div className='flex items-center justify-center border-[#bdbdbd] border-t-[0.1vw] py-[4%]' key={index}>
                <div className='w-[13%] rounded-[50%] overflow-hidden mr-[5%] cursor-pointer'>
                  <img src={item.profilepicture} alt={item.name} id={item.id} content='fill' />
                </div>
                <p className='text-[1vw] cursor-pointer' id={item.id}>{item.name}</p>
              </div>
              )}
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#bd2837] text-[#fff] text-[1.3vw] px-[1vw] py-[0.3vw] rounded-[1.2vw]' type='button' onClick={handleSignOut}>Sign out</button>
            </div>
          </div>
        </OutsideAlerter>

        : null}
    </nav>
  )
}

export default Navbar