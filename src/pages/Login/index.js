import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Style from "./login.module.css"
import { updateUserData } from "../../redux/reducers/userSlice"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userList = useSelector((state) => state.userDetails.userList)


  const handleClick = (e) => {
    if (e.target.id) {
      const userData = userList.find((item) => item.id === parseInt(e.target.id))
      if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData))
        dispatch(updateUserData(userData))
        navigate('/profile')
      } else {
        toast('Something went wrong')
      }
    }
  }

  return (
    <div className='relative'>

      <img src="/assets/login/wave.svg" alt='' content='fill' />

      <div className='bg-[#fff] absolute top-[25%] left-[50%] pb-[1.5%] translate-x-[-50%] w-[40%] h-[78vh] mx-auto rounded-[2vw] overflow-hidden shadow-xl'>
        <div className='bg-[#e8eaeb] h-[20%] flex items-center justify-center'>
          <p className='text-center text-[#000] font-semibold text-[1.5vw] tracking-wide opacity-70'>Select an account</p>
        </div>
        <div className={`bg-[#fff] h-[80%] mt-[1%] mr-[1%] pl-[0.5vw] overflow-y-auto ${Style.customScroll}`}>
          <div className='h-[100%] px-[6%]' onClick={handleClick}>
            {userList.length ? userList.map((item) => (
              <div className='flex items-center py-[1.8%] border-b-2' key={item.id}>
                <div className='w-[6.5%] rounded-[100%] overflow-hidden mr-[2%] cursor-pointer' >
                  <img src={item?.profilepicture} alt={item.username} id={item.id} content='fill' />
                </div>
                <p className='text-[1.2vw] opacity-80 cursor-pointer' id={item.id} >{item.name}</p>
              </div>
            )) : <div className='font-semibold text-[2vw] h-[100%] flex items-center justify-center tracking-widest opacity-50'>{"Loading..."}</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login