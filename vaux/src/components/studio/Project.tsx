import { useContext, useEffect, useState } from 'react';
import { VAUX_GENERATE_TTS } from 'utils/APIResponseTypes';
import GenerateAIBlock from 'components/projects/GenerateAIBlock';
import {ReactComponent as AddCircle} from 'assets/add_circle.svg';
import { fetchProjectDetailsById } from 'actions/APIActions';
import { useCookie } from 'hooks/useCookie';
import { useParams } from 'react-router';
import { AiVoicesContext } from 'context/AiVoicesContext';



function Project() {

  const [token] = useCookie("vaux-staff-token", JSON.stringify(null));
  const { id } = useParams();
  const { aiVoices } = useContext(AiVoicesContext);
  const [generateVoiceBlocks, setGenerateVoiceBlocks] = useState<VAUX_GENERATE_TTS[]>([{ project_id: id ?? '', speaker_id: aiVoices[0]?.Id, text: '', language: 'en', emotion: 'neutral', duration: 0, pitch: 0, block_number: 1 }]);

  const addBlockHandler = () => {
    if (id && aiVoices?.length > 0) {
        setGenerateVoiceBlocks((prev: VAUX_GENERATE_TTS[]) => {
          return [ ...prev, { project_id: id, speaker_id: aiVoices[0]?.Id, text: '', language: 'en', emotion: 'neutral', duration: 0, pitch: 0, block_number: 1 } ];
        });
    }
  }

  useEffect(() => {
    if (id) {
      const fetchDetailsById = async () => {
        const { details } = await fetchProjectDetailsById(token, id ?? undefined);
        const result = Object.values(details);
        if (result.length > 0) {
          setGenerateVoiceBlocks([]);
          result.forEach((item: any) => {
            setGenerateVoiceBlocks((prev) => {
              return [...prev, {...item.tts_details, speaker_id: item.speaker_details?.id}]
            })
          })
        }
      }
      fetchDetailsById();
    }
  }, [id, token])

  return (
    <>
      <div className='mx-auto w-[70%]'>
        {
          generateVoiceBlocks.map((item, index) => {
            return <GenerateAIBlock key={`generate-block-` + index} blockDetail={item} />
          })
        }
        <div className='flex justify-center'>
          <div className='flex justify-center items-center rounded-3xl border border-gray-300 text-center px-2 py-1 text-xs cursor-pointer hover:bg-gray-200' onClick={addBlockHandler}>
            <AddCircle className='w-5 h-5 fill-black'/>
            <span className='text-gray-500 font-semibold'>{`Add a block`}</span>
          </div>
        </div>
      </div>

    </>

  )
}

export default Project