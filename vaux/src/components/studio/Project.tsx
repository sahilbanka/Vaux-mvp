import { useEffect, useState } from 'react';
import { VAUX_AI_VOICES } from 'utils/APIResponseTypes';
import GenerateAIBlock from 'components/projects/GenerateAIBlock';
import {ReactComponent as AddCircle} from 'assets/add_circle.svg';
import { fetchProjectDetailsById, getAllAIVoiceSample } from 'actions/APIActions';
import { useCookie } from 'hooks/useCookie';
import { useParams } from 'react-router';


function Project() {

  const [token] = useCookie("vaux-staff-token", JSON.stringify(null));
  const params = useParams();
  const [generateVoiceBlocks, setGenerateVoiceBlocks] = useState([1]);
  const [aiVoicesList, setAiVoiceList] = useState<Array<VAUX_AI_VOICES>>([]);

  const addBlockHandler = () => {
    setGenerateVoiceBlocks((prev) => {
      return [...prev, (prev.length ? prev.length + 1 : 1)];
    })
  }

	useEffect(() => {
		const getAllAIVoices = async () => {
			const voices = await getAllAIVoiceSample(token, false);
			// const voices = List_all_voicesMockData;
      setAiVoiceList(voices?.length ? [...voices] : []);
		};
		getAllAIVoices();
	}, [token]);

  useEffect(() => {
    if (params && params.id) {
      const fetchDetailsById = async () => {
        const details = await fetchProjectDetailsById(token, params.id ?? undefined);
        console.log(details);
      }
      fetchDetailsById();
    }
  }, [params, token])

  return (
    <>
      <div className='mx-auto w-[70%]'>
        {
          generateVoiceBlocks.map((item) => {
            return <GenerateAIBlock key={item} aiVoicesList={aiVoicesList} />
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