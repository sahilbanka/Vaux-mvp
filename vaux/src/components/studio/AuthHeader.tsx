import { ReactComponent as AddCircle } from 'assets/add_circle.svg';
import OptionsDropdown from '../common/dropdown/OptionsDropdown'
import { Constants } from 'utils/constants'
import CreateProject from 'components/common/CreateProject';
import GlobalModal from 'components/common/GlobalModal';
import { useState } from 'react';


function AuthHeader() {

    const [openCreateProject, setOpenCreateProject] = useState(false);

    const handleProjectCloseModal = () => setOpenCreateProject(false);

    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between z-20 w-full p-0 border-b border-gray-300 bg-white">
            <div className='flex bg-primary w-[90px] h-[67px] items-center justify-center'>
                <a href="/studio">
                    <div className="flex">
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="VAux Logo"
                        /> */}
                        <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
                            VAUX
                        </span>
                    </div>
                </a>
            </div>
            <div className={`flex items-center w-auto`} id="menu">
                <ul className="flex items-center justify-between pt-0 px-2 gap-4 md:gap-0">
                    <li className="cursor-pointer md:px-6 md:py-3 block">
                        <button className="text-primary bg-white border border-solid border-primary px-4 py-2 rounded-xmd font-medium hover:bg-primary hover:text-white" onClick={() => setOpenCreateProject(true)}>
                            {/* <AddCircle className='fill-white inline w-[20px] h-[20px] mx-1' /> */}
                            Create Project
                        </button>
                    </li>
                    <li className="cursor-pointer md:px-4 md:py-3 block">
                        <OptionsDropdown options_classes='absolute top-[50px] right-0 py-2 block max-h-[60vh] min-h-[50px] shadow-md bg-primary block'
                            DD_data={Constants.optionDropdownDataProfile} DD_Item_classes='text-[14px] px-2 text-white' itemTextColor='text-white'
                            arrowStyles={`top-[-15%] right-[10px] fill-primary`}>
                            <div className='flex items-center text-white gap-1 border border-solid border-white bg-primary p-2 rounded-circle font-semibold'>
                                {/* <img width={20} height={20} src={UserIcon} alt="user-icon" /> */}
                                {'OR'}
                            </div>
                        </OptionsDropdown>
                    </li>
                </ul>
            </div>
            <GlobalModal
                openState={openCreateProject}
                onCloseHandler={handleProjectCloseModal}
                MinWidth={'400'}
            >
                <CreateProject handleCloseModal={handleProjectCloseModal}/>
            </GlobalModal>
        </nav>
    )
}

export default AuthHeader