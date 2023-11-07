import { useEffect, useState } from 'react';
import { VAUX_AI_VOICES } from 'utils/APIResponseTypes';
import { List_all_voicesMockData } from "MockData";
import { ReactComponent as DownArrow } from 'assets/dropdown_arrow.svg';
import GlobalModal from 'components/common/GlobalModal';
import ExploreAI from 'components/exploreAI/ExploreAI';


function Project({ aiList }: { aiList: Array<VAUX_AI_VOICES> }) {

  const [aiVoicesList, setAiVoiceList] = useState<Array<VAUX_AI_VOICES>>(aiList);
  const [selectedAIVoice, setSelectedAIVoice] = useState<VAUX_AI_VOICES>(aiList[0]);

  const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
  const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
  const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);

  useEffect(() => {
    setAiVoiceList(List_all_voicesMockData);
    setSelectedAIVoice(List_all_voicesMockData[0]);
  }, [aiList]);

  return (
    <>
      <div className='mx-auto'>
        <div className='bg-white border border-transparent rounded-lg py-4 px-2'>
          <div className="flex">
            <div className='flex rounded-3xl border border-gray-300 justify-center items-center px-1 py-0 text-xs' onClick={handleOpenExploreAIsModal}>
              <img className={`w-[32px] h-[32px] border border-transparent rounded-circle mr-1`} src={selectedAIVoice?.Img_url} alt={selectedAIVoice?.Name} />
              <span>{`${selectedAIVoice?.Name} (${selectedAIVoice?.Gender})`}</span>
              <DownArrow className='fill-primary mx-2' />
            </div>
          </div>
        </div>
      </div>
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

export default Project