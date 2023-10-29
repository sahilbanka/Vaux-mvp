import AIVoicesListHome from 'components/home/AIVoicesListHome';
import { Constants } from 'utils/constants';
import mainImage from 'assets/main.svg';
import voiceAi from 'assets/voice_ai.svg';
import { useRef, useState } from 'react';
import playBtn from "assets/play.svg";
import pauseBtn from "assets/pause.svg";
import { useNavigate } from 'react-router';
import { fetchLandingTTS } from 'actions/APIActions';



function Overview() {

  const navigate = useNavigate();
  const voicesDivRef = useRef<HTMLDivElement>(null);
  const generateRef = useRef<HTMLTextAreaElement>(null);
  const ttsAudioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playControls, setPlayControls] = useState<{
    playMode: boolean;
    pauseMode: boolean;
  }>({
    playMode: true,
    pauseMode: false,
  });

  const videoPlayHandler = async () => {
    videoRef.current?.play();
  };

  const videoPauseHandler = () => {
    videoRef.current?.pause();
  };

  const handleExplore = () => {
    if (voicesDivRef && voicesDivRef.current) {
      voicesDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleTTSListen = async () => {
    if (generateRef?.current?.value && generateRef?.current?.value.length <= 100) {
      const link = await fetchLandingTTS({ text: generateRef?.current?.value });
      if (ttsAudioRef.current) {
        ttsAudioRef.current.src = link ?? '';
        if (ttsAudioRef.current.paused) {
          ttsAudioRef.current.play();
        }
      }
    }
  }

  const routeChange = (path: string, params?: any) => {
    navigate(path, { state: params });
  }

  return (
    <div className='overview-main bg-background w-full p-8 md:px-16 md:py-12'>
      <div className="overview-head md:flex">
        <div className='mt-6 md:w-[55%] text-center md:text-left'>
          <span className='text-20 md:text-30 leading-normal font-medium my-8'>{Constants.Overview_Labels.subtitle}</span>
          <h1 className='text-3xl md:text-6xl font-semibold my-10'>{Constants.Overview_Labels.description_heading}</h1>
          <div className="detail my-4 md:my-0 mx-2 md:w-[80%]">
            <span className='text-lg md:text-xl font-normal'>
              {Constants.Overview_Labels.detail_descripton}
            </span>
          </div>
        </div>
        <div className='mt-6 md:w-[45%] flex justify-center items-center mx-auto'>
          <img src={mainImage} alt="Main_Image" width={360} height={360} className="object-cover" />
        </div>
      </div>
      <div className="detail my-4 md:my-0 mx-2 md:w-[80%] md:hidden">
        <span className='text-lg md:text-xl font-normal whitespace-pre-wrap'>
          {Constants.Overview_Labels.detail_descripton}
        </span>
      </div>
      <div className='text-center md:text-left my-4'>
        <button type='button' className='my-4 mx-2 md:my-10 rounded-md border bg-primary text-white py-4 px-8'
          onClick={handleExplore}>{Constants.Overview_Labels.explore + ' >>'}</button>
      </div>

      <div ref={voicesDivRef}>
        <div className="voices-list border border-solid border-grey-white bg-grey-white rounded-[25px] p-8">
          <AIVoicesListHome />
          <div className='flex flex-col items-center my-8'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-6'>{'Every necessity has a corresponding voice'}</h1>
            <span className='text-xl md:text-3xl font-normal font-ink-free mb-6'>{"It's as if you've spoken without uttering a word."}</span>
            <div>
              <button className='rounded-xmd bg-primary text-white font-semibold px-12 py-3 mt-4' onClick={() => routeChange('/login')}>Start Now Free</button>
            </div>
          </div>
        </div>
      </div>

      <div className='vaux-introduction overflow-x-auto mb-8'>
        <h1 className='w-full text-3xl md:text-5xl font-semibold my-10 text-center'>{Constants.Overview_Labels.introduce_vaux}</h1>
        <div className='flex flex-col mb-8 md:flex-row md:justify-center md:overflow-x-auto'>
          {
            Constants.Overview_Labels.introduction_list.map((listItem) => {
              return (
                <div key={listItem.key} className='introduce-div flex flex-col items-center md:w-[28rem] mx-4 my-4 md:m-0 first:bg-light-blue first:rounded-2xl last:bg-light-blue last:rounded-2xl px-2'>
                  <img src={listItem.img} className={`w-[15rem] h-[15rem] ${listItem.scale} `} alt={`introduce-${listItem.key}`} />
                  <h1 className='text-2xl md:text-4xl font-semibold my-4'>{listItem.title}</h1>
                  <span className='p-4 md:px-12 text-center whitespace-pre-wrap'>{listItem.description}</span>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='vaux-trail'>
        <h1 className='w-full md:w-[55%] text-3xl md:text-4xl font-semibold mb-6'>Improve Your Projects with Incredibly <br></br><span className='text-4xl md:text-5xl'>AI</span> Vocalizations</h1>
        <div className="md:flex w-full gap-6">
          <div className='md:w-1/2'>
            <img className='p-4 md:max-w-[350px] md:max-h-[350px] mx-auto' src={voiceAi} alt='voice-ai' />
          </div>
          <div className="flex flex-col items-center md:w-1/2 p-4">
            <textarea ref={generateRef} className='w-full p-6' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
              name="convo" rows={10} maxLength={100} defaultValue={Constants.Overview_Labels.listen_tts_text}></textarea>
            <audio src={''} ref={ttsAudioRef} />
            <div>
              <button className='rounded-xmd bg-primary text-white font-semibold px-12 py-2 my-8' onClick={handleTTSListen}>Listen</button>
            </div>
          </div>
        </div>
      </div>

      <div className='vaux-narrate'>
        <h1 className='text-2xl md:text-4xl font-bold mb-10'>Discover Voice Narrations Crafted by the VAux AI Voice Generator</h1>
        <span className='text-[1rem] md:text-xl font-normal'>"Below, you'll find compelling instances of authentic voiceovers, all shaped by the remarkable AI voices of VAux."</span>
        <div className='md:flex mt-10 mb-4 gap-6'>
          <div className='md:w-1/3 my-6'>
            <h1 className='text-2xl md:text-4xl font-semibold my-6'>Documentary</h1>
            <span className='block md:w-[60%] lg:w-[50%]'>Expand your storytelling reach and global content accessibility by entrusting VAux to generate engaging, lifelike voiceovers for your documentary films, available in multiple languages</span>
          </div>
          <div className='md:w-2/3 m-auto group relative'>
            <video ref={videoRef} className='border border-primary rounded-xl' src="dynamic_assets/merc_voice_over.mp4"
              onPause={() => {
                setPlayControls((prev: any) => {
                  return { ...prev, pauseMode: false, playMode: true };
                });
              }}
              onPlay={() => {
                setPlayControls((prev: any) => {
                  return { ...prev, pauseMode: true, playMode: false };
                });
              }}></video>
            <div className='absolute top-[50%] left-[50%]' style={{ transform: 'translate(-50%, -50%)' }}>
              {playControls.playMode && (
                <img
                  src={playBtn}
                  alt="play"
                  className="cursor-pointer"
                  onClick={() => {
                    videoPlayHandler();
                  }}
                />
              )}
              {playControls.pauseMode && (
                <img
                  src={pauseBtn}
                  alt="pause"
                  className="cursor-pointer hidden group-hover:block"
                  onClick={() => {
                    videoPauseHandler();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Overview