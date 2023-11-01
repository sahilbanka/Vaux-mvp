import { useState } from 'react';
import ExploreAI from 'components/exploreAI/ExploreAI';
import GlobalModal from 'components/common/GlobalModal';
import VoiceImg from 'assets/M2.png';
import ProjectsList from 'assets/projects_list.svg';

function SideNav() {

  const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
  const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
  const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);

  return (
    <>
      <aside className='w-[90px] fixed h-full border-r border-r-gray-300'>
        <div className='side-badge m-2 group' onClick={handleOpenExploreAIsModal}>
          <div className="flex flex-col items-center py-2 px-[0.2rem] cursor-pointer group-hover:bg-light-grey group-hover:rounded-[10px]">
            <img src={VoiceImg} alt="voice" width={40} height={40} className='border border-primary bg-white rounded-circle my-1 p-1' />
            <div className='text-xs font-semibold text-black-second text-center mt-1'>{'Explore AI Voices'}</div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 m-2"></div>
        <div className='side-badge m-2 group'>
          <div className="flex flex-col items-center py-2 px-[0.2rem] cursor-pointer group-hover:bg-light-grey group-hover:rounded-[10px]">
            <img src={ProjectsList} alt="voice" width={40} height={40} className='bg-primary rounded-circle my-1 p-1' />
            <div className='text-xs font-semibold text-black-second text-center'>{'My Projects'}</div>
          </div>
        </div>
        <div className="border-b border-b-gray-300 m-2"></div>
      </aside>
      <GlobalModal
        openState={openExploreAIsModal}
        onCloseHandler={handleCloseExploreAIsModal}
        MinWidth={"700px"}
        iskeepMounted={true}
      >
        <ExploreAI
          handleCloseModal={handleCloseExploreAIsModal}
          isSelectionRequired={false}
        />
      </GlobalModal>
    </>
  )
}

export default SideNav