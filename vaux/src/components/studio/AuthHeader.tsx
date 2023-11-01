import UserIcon from 'assets/user_icon.svg';
// import UpArrow from 'assets/up_arrow.svg';
import OptionsDropdown from '../common/dropdown/OptionsDropdown'
import { Constants } from 'utils/constants'
import { useNavigate } from 'react-router';

function AuthHeader() {

    const navigate = useNavigate();

    const routeChange = (path: string, params?: any) => {
        navigate(path, { state: params });
    }

    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between z-20 w-full px-2 py-4 md:py-0 md:px-8 border-b border-indigo bg-primary">
            <div>
                <a href="/studio">
                    <div className="flex">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="VAux Logo"
                        />
                        <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
                            VAux
                        </span>
                    </div>
                </a>
            </div>
            <div className={`flex items-center w-auto`} id="menu">
                <ul className="flex items-center justify-between pt-0 gap-4 md:gap-0">
                    <li className="cursor-pointer md:px-6 md:py-4 block">
                        <button className="text-primary bg-white border border-solid border-primary px-4 py-2 rounded-xmd" onClick={() => routeChange('/')}>
                            Create Project
                        </button>
                    </li>
                    <li className="cursor-pointer md:px-4 md:py-4 block">
                        <OptionsDropdown options_classes='absolute top-[50px] right-0 p-0 block max-h-[60vh] min-h-[50px] shadow-md bg-white block'
                            DD_data={Constants.optionDropdownDataProfile} DD_Item_classes='text-[14px] px-2 text-primary' itemTextColor='text-primary'
                            arrowStyles={`top-[-15%] right-[10px]`}>
                            <div className='flex items-center text-primary gap-1 border border-solid border-primary bg-gray-200 p-2 rounded-circle'>
                                <img width={20} height={20} src={UserIcon} alt="user-icon" />
                            </div>
                        </OptionsDropdown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AuthHeader