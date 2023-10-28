import AIVoicesListHome from 'components/Home/AIVoicesListHome';
import { Constants } from 'utils/constants';
import mainImage from 'assets/main.png';
import voiceAi from 'assets/voice_ai.png';



function Overview() {
  return (
    <div className='overview-main bg-background w-full px-16 py-12'>
      <div className="overview-head flex">
        <div className='mt-6 w-[55%] py-6'>
          <span className='text-30 leading-normal font-medium my-8'>{Constants.Overview_Labels.subtitle}</span>
          <h1 className='text-7xl font-semibold my-10'>{Constants.Overview_Labels.description_heading}</h1>
        </div>
        <div className='mt-6 w-[45%] flex justify-center items-center'>
          <img src={mainImage} alt="Main_Image" width={360} height={360} className="object-cover" />
        </div>
      </div>
      <div className="detail w-[80%]">
        <span className='text-xl font-normal'>
          {Constants.Overview_Labels.detail_descripton}
        </span>
      </div>
      <button type='button' className='my-10 rounded-md border bg-primary text-white py-4 px-8'>{Constants.Overview_Labels.btn_generate}</button>
      <AIVoicesListHome />
      <div className='vaux-introduction overflow-x-auto'>
        <h1 className='w-full text-5xl font-semibold my-10 text-center'>{Constants.Overview_Labels.introduce_vaux}</h1>
        <div className='flex mt-4 mb-8'>
          {
            Constants.Overview_Labels.introduction_list.map((listItem) => {
              return (
                <div key={listItem.key} className='introduce-div flex flex-col items-center w-[25rem] mx-4 p-6 first:ml-0 last:mr-0 first:bg-light-blue first:rounded-2xl last:bg-light-blue last:rounded-2xl'>
                  <img src={listItem.img} className={`w-[15rem] h-[15rem] ${listItem.scale} `} alt={`introduce-${listItem.key}`} />
                  <h1 className='text-4xl font-semibold mt-6 mb-4'>{listItem.title}</h1>
                  <span className='px-12 text-center'>{listItem.description}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='vaux-trail'>
        <h1 className='w-[54%] text-4xl font-bold mt-10'>Improve Your Projects with Incredibly <span className='text-6xl'>AI</span> Vocalizations</h1>
        <div className="flex w-full gap-6 my-2">
          <img className='p-4 w-1/2 scale-85' src={voiceAi} alt='voice-ai' />
          <div className="flex flex-col items-center">
            <textarea className='p-6' name="convo" id="" cols={60} rows={10} maxLength={100}></textarea>
            <div>
              <button className='rounded-xmd bg-primary text-white font-semibold px-12 py-2 my-8'>Listen</button>
            </div>
          </div>
        </div>
      </div>
      <div className='vaux-narrate'>
        <h1 className='text-4xl font-bold mb-10'>Discover Voice Narrations Crafted by the VAux AI Voice Generator</h1>
        <span className='text-xl font-normal'>"Below, you'll find compelling instances of authentic voiceovers, all shaped by the remarkable AI voices of VAux."</span>
        <div className='flex my-6'>
          <div className='w-1/3'>
            <h1 className='text-4xl font-semibold my-6'>Documentary</h1>
            <span>Expand your storytelling reach and global content accessibility by entrusting VAux to generate engaging, lifelike voiceovers for your documentary films, available in multiple languages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview