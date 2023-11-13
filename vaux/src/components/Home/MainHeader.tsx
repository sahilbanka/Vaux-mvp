import { useState } from "react";
import OptionsDropdown from "components/common/dropdown/OptionsDropdown";
import { Constants } from "utils/constants";
import GlobalModal from "components/common/GlobalModal";
import ContactUs from "components/common/ContactUs";
import { useNavigate } from "react-router";

const MainHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [openContactUsModal, setOpenContactUsModal] = useState(false);
	const handleOpenContactUsModal = () => setOpenContactUsModal(true);
	const handleCloseContactUsModal = () => setOpenContactUsModal(false);
	const navigate = useNavigate();

	const routeChange = (path: string, params?: any) => {
		navigate(path, { state: params });
	}

	return (
		<nav className="sticky top-0 flex flex-wrap items-center justify-between z-20 w-full py-4 md:py-0 px-8 border-b border-gray-600 bg-primary text-white">
			<div>
				<a href="/#">
					<div className="flex">
						{/* <img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/> */}
						<span className="self-center text-2xl font-semibold whitespace-nowrap">
							VOAUX
						</span>
					</div>
				</a>
			</div>
			<div className="cursor-pointer md:hidden block" onClick={() => setShowMenu(!showMenu)}>
				<svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</div>
			<div className={`${!showMenu ? 'hidden' : ''} w-full md:flex md:items-center md:w-auto`} id="menu">
				<ul className="pt-4 text-base text-white md:flex md:items-center md:justify-between md:pt-0 ">
					<li className="cursor-pointer px-4 py-4 block group">
						<OptionsDropdown options_classes='absolute top-[42px] right-0 p-2 block max-h-[60vh] min-h-[50px] shadow-md bg-white block'
							DD_data={Constants.optionDropdownDataProducts} DD_Item_classes='text-[14px] px-2 text-primary' itemTextColor='text-primary'
							arrowStyles={`top-[-20%] right-[10px]`}>
							<div className={`text-0 flex items-center text-white font-medium group-hover:font-bold gap-1`}>
								{'Products'}
								{/* {!optionDropdownOpen && <img src={downArrow} alt="down-arrow" />}
								{optionDropdownOpen && <img src={upArrow} alt="down-arrow" />} */}
							</div>
						</OptionsDropdown>
					</li>
					<li className="cursor-pointer px-4 py-4 block font-medium hover:font-bold" onClick={handleOpenContactUsModal}>
						Contact Us
					</li>
					<GlobalModal
						openState={openContactUsModal}
						onCloseHandler={handleCloseContactUsModal}
						MinWidth={'400'}
					>
						<ContactUs />
					</GlobalModal>

					<li className="md:p-4 px-2 block py-3">
						<button className="text-white font-medium hover:font-bold border-0 p-0 rounded-none md:border md:border-solid md:border-white md:px-4 md:py-2 md:rounded-xmd" onClick={() => routeChange('/login', { type: 'login' })}>
							Login
						</button>
					</li>
					<li className="md:p-4 px-2 block py-3">
						<button className="text-white font-medium hover:font-bold border-0 p-0 rounded-none md:text-primary md:bg-white md:border md:border-solid md:border-primary md:px-4 md:py-2 md:rounded-xmd" onClick={() => routeChange('/signup', { type: 'signup' })}>
							Sign Up
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MainHeader;
