import AIVoicesListHome from 'components/Home/AIVoicesListHome';
import { Constants } from 'utils/constants';
import mainImage from 'assets/main.png';
import voiceAi from 'assets/voice_ai.png';
import { Button } from '@mui/material';



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
      <Button type='button' className='my-10 rounded-md border bg-primary text-white py-4 px-8'>{Constants.Overview_Labels.btn_generate}</Button>
      <AIVoicesListHome />
      <div className='vaux-introduction overflow-x-auto'>
        <h1 className='w-full text-5xl font-semibold my-10 text-center'>{Constants.Overview_Labels.introduce_vaux}</h1>
        <div className='flex my-4'>
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
      <div className='vaux-trail my-6'>
        <h1 className='w-[54%] text-4xl font-bold'>Improve Your Projects with Incredibly <span className='text-6xl'>AI</span> Vocalizations</h1>
        <div className="flex">
          <img className='w-1/2' src={voiceAi} alt='voice-ai' />
          <div className="w-1/2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview