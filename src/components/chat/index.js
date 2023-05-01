import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Style from '../../pages/Login/login.module.css'


function Chat() {
  const [showChatList, setShowChatList] = useState(false)
  const [showChat, setShowChat] = useState(true)
  const [chatProfile,setChatProfile] = useState('')
  const userList = useSelector((state) => state.userDetails.userList)

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  function randomBoolean() {
    return Math.random() >= 0.5;
  }

  function handleShowChatList() {
    setShowChatList((prev) => !prev)
  }

  function handleClick(e) {
    if (e.target.id) {
      setChatProfile(userList.find((item)=>item.id === parseInt(e.target.id)))
    }
  }

  function handleCloseChat() {
    setShowChat(false)
    setChatProfile('')
  }

  function handleHideChat(e) {
    e.stopPropagation()
    setShowChat((prev)=>!prev)
  }


  const chatClass = `bg-[#d9d9d9] text-[0.75vw] p-[4%] rounded-[0.3vw] max-w-[70%] mb-[3%]`

  return (
    <>
      <div className={`w-[15vw] rounded-[0.6vw] border-[0.1vw] border-[#2b65c7] overflow-hidden absolute transition-all duration-500 ${showChatList ? 'bottom-[-1%]' : 'bottom-[-20.8vw]'} right-[10%]`} >
        {/* Chat header */}
        <div className='bg-[#2b65c7] flex justify-around items-center py-[3%] px-[6%] cursor-pointer' onClick={handleShowChatList}>
          <div className='flex items-center'>
            <div className='w-[12%] mr-[4%]'>
              <img src='/assets/chat/chat.png' alt='chat' content='fill' />
            </div>
            <p className='text-[#fff] text-[1.2vw]'>Chats</p>
          </div>
          <div className={`${showChatList ? '' : 'rotate-180'} w-[13%]`}>
            <img src='/assets/chat/arrow.png' alt='arrow-chat' content='fill' />
          </div>
        </div>
        {/* Chat Body */}
        <div className='bg-[#fff] pr-[2%] pb-[3%] pt-[2%]'>
          <div className={`h-[20vw] overflow-y-auto ${Style.customScroll}`} onClick={handleClick}>
            <div>
              {userList.length ?
                userList.map((item, index) => (
                  <div key={index} className='flex py-[3%] items-center justify-between px-[5%]'>
                    <div className='flex items-center'>
                      <div className='w-[12.5%] overflow-hidden rounded-[50%] mr-[4%] cursor-pointer' id={item.id}>
                        <img src={item.profilepicture} alt={item.name} content='fill' />
                      </div>
                      <p className='text-[0.9vw] cursor-pointer' id={item.id}>{truncateString(item.name, 20)}</p>
                    </div>

                    <div className={`${randomBoolean() ? 'bg-[#34ad54]' : 'bg-[#dedede]'} w-[20%] rounded-[50%] aspect-square`}></div>
                  </div>
                ))
                : <div className='text-[1.2vw] text-center tracking-wider font-semibold text-[#878787]'>{"Loading..."}</div>}
            </div>
          </div>
        </div>

      </div>

      {chatProfile?<div className={`w-[15vw] rounded-[0.6vw] border-[0.1vw] border-[#2b65c7] overflow-hidden absolute transition-all duration-500 ${showChat ? 'bottom-0' : 'bottom-[-12.5vw]'} right-[27%]`}  >
        {/* Chat header */}
        <div className='bg-[#2b65c7] flex justify-around items-center py-[3%] px-[6%] cursor-pointer' onClick={handleHideChat}>
          <div className='flex items-center'>
            <div className='w-[12%] mr-[4%] rounded-[50%] overflow-hidden'>
              <img src={chatProfile?.profilepicture} alt='chat' content='fill' />
            </div>
            <p className='text-[#fff] text-[0.8vw]'>{truncateString(chatProfile.name,18)}</p>
          </div>
          <div className={`${showChat ? '' : 'rotate-180'} w-[40%]`}>
            <img src='/assets/chat/arrow.png' alt='arrow-chat' content='fill' />
          </div>
          <div className={`w-[40%] ml-[3%]`} onClick={handleCloseChat}>
            <img src='/assets/chat/close.png' alt='arrow-chat' content='fill' />
          </div>
        </div>
        {/* Chat Body */}
        <div className='bg-[#fff] pr-[2%] pb-[3%] pt-[2%]'>
          <div className={`h-[10vw] overflow-y-auto ${Style.customScroll}`}>
            <div className='pl-[10%] pr-[6%]'>
              <p className={chatClass + ' mr-0 ml-auto'}>Lorem ipsum dolor sit amet. Duis fermentum elementum faucibus.</p>
              <p className={chatClass + ' ml-0 mr-auto'} >Lorem ipsum dolor .</p>
              <p className={chatClass + ' ml-0 mr-auto'}>Duis fermentum elementum faucibus.</p>
              <p className={chatClass + ' mr-0 ml-auto'}>fermentum.</p>
              <p className={chatClass}>consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className='flex border-t-[0.1vw] border-[#b1b1b3] pt-[2%]'>
            <input className='px-[5%] outline-none text-[0.7vw] w-[100%]' autoFocus={true} />
            <div className='w-[10%] mr-[2%] cursor-pointer'>
              <img src='/assets/chat/send.png' alt='send' />
            </div>
          </div>
        </div>

      </div>:null}
    </>

  )
}

export default Chat