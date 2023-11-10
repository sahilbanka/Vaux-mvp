import React, { useEffect, useState } from 'react';
import { ReactComponent as DownArrow } from 'assets/dropdown_arrow.svg';
import { ReactComponent as GenerateButton } from 'assets/generate.svg';
import GlobalModal from 'components/common/GlobalModal';
import ExploreAI from 'components/exploreAI/ExploreAI';
import { VAUX_AI_VOICES } from 'utils/APIResponseTypes';

function GenerateAIBlock({ aiVoicesList }: { aiVoicesList: Array<VAUX_AI_VOICES> }) {
    const [selectedAIVoice, setSelectedAIVoice] = useState<VAUX_AI_VOICES>(aiVoicesList[0]);

    useEffect(() => {
        console.log(aiVoicesList);
        setSelectedAIVoice(aiVoicesList[0])
    }, [aiVoicesList])

    const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
    const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
    const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);

    return (
        <>
            {selectedAIVoice && <div className='bg-white border border-transparent rounded-lg p-4 m-10'>
                <div className="flex justify-between items-center">
                    <div className='flex gap-4'>
                        <div className='flex rounded-3xl border border-gray-300 justify-center items-center px-1 py-0 text-xs cursor-pointer font-medium' onClick={handleOpenExploreAIsModal}>
                            <img className={`w-[32px] h-[32px] border border-transparent rounded-circle mr-1`} src={selectedAIVoice?.Img_url} alt={selectedAIVoice?.Name} />
                            <span>{`${selectedAIVoice?.Name} (${selectedAIVoice?.Gender})`}</span>
                            <DownArrow className='fill-primary mx-2' />
                        </div>
                        <div className='flex rounded-3xl font-medium border border-gray-300 justify-center items-center px-2 py-1 text-xs cursor-pointer'>
                            <span>{`Pitch`}</span>
                            <DownArrow className='fill-primary mx-1' />
                        </div>
                        <div className='flex rounded-3xl font-medium border border-gray-300 justify-center items-center px-2 py-1 text-xs cursor-pointer'>
                            <span>{`Speed`}</span>
                            <DownArrow className='fill-primary mx-1' />
                        </div>
                    </div>
                    <GenerateButton className='w-[24px] font-medium h-[24px] cursor-pointer float-right' />
                </div>
                <div>
                    <input type="text" placeholder='Enter your text here' className='text-sm font-normal border border-gray-300 rounded-md w-full p-2 mt-4 focus-visible:outline-none' />
                </div>
            </div>}
            <GlobalModal openState={openExploreAIsModal} onCloseHandler={handleCloseExploreAIsModal} MinWidth={"w-[70%]"} iskeepMounted={true} >
                <ExploreAI handleCloseModal={handleCloseExploreAIsModal} isSelectionRequired={true} SelectCallbackFunc={(voice) => setSelectedAIVoice({...voice})} />
            </GlobalModal>
        </>
    )
}

export default GenerateAIBlock