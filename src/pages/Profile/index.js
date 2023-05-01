import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const userData = useSelector((state) => state.userDetails.userData)

  const keywordStyle = "text-[1.1vw] text-[#b1b1b3] font-semibold mr-[2%] py-[0.3rem]"
  const valueStyle = "text-[1.1vw] text-[#787878] font-bold py-[0.3rem]"
  return (
    <article className='flex w-[100%] h-[100%] pl-[4%] pt-[2%]'>
      {/* ------Name and Company ------- */}
      <div className='w-[38%] h-[100%] pr-[2%]'>
        <div className='flex justify-center items-center'>
          <div className='rounded-[50%] overflow-hidden w-[40%]'>
            <img src={userData.profilepicture} alt={userData.name} />
          </div>
        </div>
        {/* Personal Details */}
        <p className='text-center text-[1.3vw] font-bold text-[#787878]'>{userData.name}</p>
        <div className='flex w-[100%] mb-[2%]' >
          <div className='w-[40%] text-right'>
            <p className={keywordStyle}>Username :</p>
            <p className={keywordStyle}>e-mail :</p>
            <p className={keywordStyle}>Phone :</p>
            <p className={keywordStyle}>Website :</p>
          </div>

          <div className='w-[60%] text-left'>
            <p className={valueStyle}>{userData?.username}</p>
            <p className={valueStyle}>{userData?.email}</p>
            <p className={valueStyle}>{userData?.phone}</p>
            <p className={valueStyle}>{userData?.website}</p>
          </div>
        </div>
        <div className='bg-[#b1b1b3] h-[0.2%] opacity-50 w-[65%] mx-auto mb-[1.5%]'></div>
        {/* Company */}
        <p className='text-center text-[1.3vw] font-bold text-[#b1b1b3]'>Company</p>
        <div className='flex w-[100%] mb-[2%]' >
          <div className='w-[40%] text-right'>
            <p className={keywordStyle}>Name :</p>
            <p className={keywordStyle}>Catchphrase :</p>
            <p className={keywordStyle+' mt-[17%]'}>bs :</p>
          </div>

          <div className='w-[60%] text-left'>
            <p className={valueStyle}>{userData?.company?.name}</p>
            <p className={valueStyle}>{userData?.company?.catchPhrase}</p>
            <p className={valueStyle+' mt-[1%]'}>{userData.company?.bs}</p>
          </div>
        </div>



      </div>
      {/* ------Address ------- */}
      <div className='w-[62%] h-[100%] pl-[6%] border-l-2 border-[#ebeced]'>
      <p className='text-left text-[1.3vw] font-bold text-[#b1b1b3] mb-[1%]'>Address:</p>
        <div className='flex w-[100%] mb-[2%]' >
          <div className='w-[15%] text-right'>
            <p className={keywordStyle}>Street :</p>
            <p className={keywordStyle}>Suite :</p>
            <p className={keywordStyle}>City :</p>
            <p className={keywordStyle}>Zipcode :</p>

          </div>

          <div className='w-[80%] text-left'>
            <p className={valueStyle}>{userData?.address?.street}</p>
            <p className={valueStyle}>{userData?.address?.suite}</p>
            <p className={valueStyle}>{userData?.address?.city}</p>
            <p className={valueStyle}>{userData?.address?.zipcode}</p>

          </div>
        </div>
        {/* Map */}
        <div className='w-[96%] rounded-[1.5vw] mr-0 ml-auto overflow-hidden'>
          <img src="/assets/profile/map.png" alt='map' content='fill'/>
        </div>
        <div>
          <div className='flex justify-end'>
            <p className={keywordStyle}>Lat : <span className={valueStyle}>{parseFloat(userData?.address?.geo?.lat)}</span></p>
            <p className={keywordStyle}>Long : <span className={valueStyle}>{parseFloat(userData?.address?.geo?.lat)}</span></p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Profile