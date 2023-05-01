import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



function Sidebar() {

  const navigate = useNavigate()


  const [activeOption, setActiveOption] = useState('profile')
  const handleClick = (e) => {
    if (e.target.id) {
      setActiveOption(e.target.id)
      navigate(`/${e.target.id}`)
    }
  }

  const list = [
    {
      id: 'profile',
      content: 'Profile'
    },
    {
      id: 'posts',
      content: 'Posts'
    },
    {
      id: 'gallery',
      content: 'Gallery'
    },
    {
      id: 'todo',
      content: 'ToDo'
    },
  ]


  return (
    <aside className='w-[100%] h-[100%] flex justify-center items-center bg-gradient-to-b from-[#3b20b3] to-[#5d20b3] rounded-[2vw]'>
      <ul className='text-[1.2vw] font-semibold text-[#959acf] w-[68%]' onClick={handleClick} >
        {list.map((item, index) =>
          <li key={index} className={`${index !== list.length - 1 ? 'border-b-2 border-[#959acf]' : ''} py-[8%] relative`} >
            <p id={item.id} className={`${activeOption === item.id ? 'text-[#fff]' : ''} w-fit transition-colors cursor-pointer duration-300`}>
                {item.content}
            </p>

            {/* Notch */}
            {activeOption === item.id ?
              <>
               
                <div className={`absolute right-[-24%] bottom-[-34%] h-[50%] w-[10%] rounded-tr-[2.3vw]  `} style={{
                  boxShadow: '0px -10px 0px 0px #fff'
                }}>

                </div>
                <div className={`absolute right-[-24%] bottom-[74%] h-[50%] w-[10%] rounded-br-[2.3vw]`} style={{
                  boxShadow: '0px 12px 0px 0px #fff'
                }}>
                </div>
                 <div className={`absolute right-[-28%] bg-white bottom-[15%] h-[60%] w-[20%] rounded-l-[2vw] flex justify-center items-center`} >
                  <div className='w-[50%] opacity-50'>
                    <img src={'/assets/sidebar/rightArrow.png'} alt='arrow' />
                  </div>
                </div>
              </>
              : null}


          </li>
        )}
      </ul>
    </aside>
  )
}

export default Sidebar