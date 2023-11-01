import React from 'react';
import VoiceImg from 'assets/M1.png';

function SideNav() {
  return (
    <aside className='w-[90px] fixed h-full py-4 border-r border-r-indigo'>
      <div className='side-badge m-2 group'>
        <div className="flex flex-col items-center py-2 px-[0.2rem] cursor-pointer group-hover:bg-light-grey group-hover:rounded-[10px]">
          <img src={VoiceImg} alt="voice" width={40} height={40} className='bg-black-second rounded-circle my-1' />
          <div className='text-xs text-black-second text-center mt-1'>{'Explore AI Voices'}</div>
        </div>
      </div>
      <div className="border-b border-b-indigo m-2"></div>
      <div className='side-badge m-2 group'>
        <div className="flex flex-col items-center py-2 px-[0.2rem] cursor-pointer group-hover:bg-light-grey group-hover:rounded-[10px]">
          <img src={VoiceImg} alt="voice" width={40} height={40} />
          <div className='text-xs text-black-second text-center'>{'My Projects'}</div>
        </div>
      </div>
      <div className="border-b border-b-indigo m-2"></div>
    </aside>
  )
}

export default SideNav