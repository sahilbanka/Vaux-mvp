import AIVoicesListHome from 'components/Home/AIVoicesListHome';
import { Constants } from 'utils/constants';
import mainImage from 'assets/main.svg';
import voiceAi from 'assets/voice_ai.svg';
import { useRef, useState } from 'react';
import playBtn from "assets/play.svg";
import pauseBtn from "assets/pause.svg";



function Overview() {
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

  return (
    <div className='overview-main bg-background w-full p-8 md:px-16 md:py-12'>
      <div className="overview-head md:flex">
        <div className='mt-6 md:w-[55%]'>
          <span className='text-30 leading-normal font-medium my-8'>{Constants.Overview_Labels.subtitle}</span>
          <h1 className='text-5xl md:text-6xl font-semibold my-10'>{Constants.Overview_Labels.description_heading}</h1>
        </div>
        <div className='mt-6 md:w-[45%] flex justify-center items-center mx-auto'>
          <img src={mainImage} alt="Main_Image" width={360} height={360} className="object-cover" />
        </div>
      </div>
        <div className="detail my-4 md:my-0 mx-2 md:w-[80%]">
            <span className='text-xl font-normal'>
              {Constants.Overview_Labels.detail_descripton}
            </span>
          </div>
      <button type='button' className='my-4 md:my-10 rounded-md border bg-primary text-white py-4 px-8'>{Constants.Overview_Labels.explore + ' >>'}</button>
      <div>
      <AIVoicesListHome />
      </div>
     
      <div className='vaux-introduction overflow-x-auto'>
        <h1 className='w-full text-5xl font-semibold my-10 md:text-center'>{Constants.Overview_Labels.introduce_vaux}</h1>
        <div className='flex mt-4 mb-8 md:justify-center'>
          {
            Constants.Overview_Labels.introduction_list.map((listItem) => {
              return (
                <div key={listItem.key} className='introduce-div flex flex-col items-center w-[25rem] mx-4 p-6 first:ml-0 last:mr-0 first:bg-light-blue first:rounded-2xl last:bg-light-blue last:rounded-2xl'>
                  <img src={listItem.img} className={`w-[15rem] h-[15rem] ${listItem.scale} `} alt={`introduce-${listItem.key}`} />
                  <h1 className='text-4xl font-semibold my-4'>{listItem.title}</h1>
                  <span className='px-12 text-center'>{listItem.description}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='vaux-trail'>
        <h1 className='w-full md:w-[55%] text-4xl font-bold mt-10'>Improve Your Projects with Incredibly <br></br><span className='text-5xl'>AI</span> Vocalizations</h1>
        <div className="md:flex w-full gap-6">
          <div className='md:w-1/2'>
            <img className='p-4 md:max-w-[350px] md:max-h-[350px] mx-auto' src={voiceAi} alt='voice-ai' />
          </div>
          <div className="flex flex-col items-center md:w-1/2 p-4">
            <textarea className='w-full p-6' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} name="convo" rows={10} maxLength={100}></textarea>
            <div>
              <button className='rounded-xmd bg-primary text-white font-semibold px-12 py-2 my-8'>Listen</button>
            </div>
          </div>
        </div>
      </div>
      <div className='vaux-narrate'>
        <h1 className='text-4xl font-bold mb-10'>Discover Voice Narrations Crafted by the VAux AI Voice Generator</h1>
        <span className='text-xl font-normal'>"Below, you'll find compelling instances of authentic voiceovers, all shaped by the remarkable AI voices of VAux."</span>
        <div className='md:flex my-6 gap-6'>
          <div className='md:w-1/3 my-6'>
            <h1 className='text-4xl font-semibold my-6'>Documentary</h1>
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