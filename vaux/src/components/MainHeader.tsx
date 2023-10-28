import { useState } from "react";
import OptionsDropdown from "components/common/dropdown/OptionsDropdown";
import { Constants } from "utils/constants";
import GlobalModal from "components/common/GlobalModal";
import ContactUs from "components/ContactUs";
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
		<nav className="sticky top-0 flex flex-wrap items-center justify-between z-20 w-full py-4 md:py-0 px-4 border-b border-gray-600 bg-primary text-white">
			<div>
				<a href="/#">
					<div className="flex">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							VAux
						</span>
					</div>
				</a>
			</div>
			<div className="cursor-pointer md:hidden block" onClick={() => setShowMenu(!showMenu)}>
				<svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</div>
			<div className={`${!showMenu ? 'hidden' : ''} w-full md:flex md:items-center md:w-auto`} id="menu">
				<ul className="pt-4 text-base text-white md:flex md:items-center md:justify-between md:pt-0 ">
					<li className="md:p-4 py-2 block">
						<OptionsDropdown
							DD_data={Constants.optionDropdownDataProducts}
							DD_label="Products"
						/>
					</li>
					<li className="cursor-pointer md:p-4 py-2 block" onClick={handleOpenContactUsModal}>
						Contact Us
					</li>
					<GlobalModal
						openState={openContactUsModal}
						onCloseHandler={handleCloseContactUsModal}
						MinWidth={400}
					>
						<ContactUs />
					</GlobalModal>

					<li className="md:p-4 py-2 block">
						<button className="text-white border border-solid border-white px-4 py-2 rounded-xmd" onClick={() => routeChange('/login', { type: 'login' })}>
							Login
						</button>
					</li>
					<li className="md:p-4 py-2 block">
						<button className="text-primary bg-white border border-solid border-primary px-4 py-2 rounded-xmd" onClick={() => routeChange('/signup', { type: 'signup' })}>
							Sign Up
						</button>
					</li>
				</ul>
			</div>
		</nav>
		// <nav
		// 	className="sticky w-full z-20 top-0 left-0 border-b border-gray-600 bg-primary text-white"
		// >
		// 	<div className="flex items-center justify-between mx-auto px-16 py-4">
		// 		<a href="/#" className="flex items-center">
		// <img
		// 	src="https://flowbite.com/docs/images/logo.svg"
		// 	className="h-8 mr-3"
		// 	alt="Flowbite Logo"
		// />
		// <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
		// 	VAux
		// </span>
		// 		</a>
		// 		<button
		// 			data-collapse-toggle="navbar-dropdown"
		// 			type="button"
		// 			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
		// 			aria-controls="navbar-dropdown"
		// 			aria-expanded="false"
		// 			onClick={() => setShowMenu((prev) => !prev)}
		// 		>
		// 			<span className="sr-only">Open main menu</span>
		// 			<svg
		// 				className="w-5 h-5"
		// 				aria-hidden="true"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 				fill="none"
		// 				viewBox="0 0 17 14"
		// 			>
		// 				<path
		// 					stroke="currentColor"
		// 					strokeLinecap="round"
		// 					strokeLinejoin="round"
		// 					strokeWidth="2"
		// 					d="M1 1h15M1 7h15M1 13h15"
		// 				/>
		// 			</svg>
		// 		</button>
		// 		{/* {showMenu && (
		// 			<div className="md:hidden" id="navbar-dropdown">
		// 				<ul
		// 					className="flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-gray-700"
		// 				>
		// 					<li>
		// 						<OptionsDropdown
		// 							DD_data={Constants.optionDropdownDataProducts}
		// 							DD_label="Products"
		// 						/>
		// 					</li>

		// 					<li>
		// 						<button type="button" className="text-white border border-white border-solid px-4 py-2 rounded-xmd" onClick={() => routeChange('/login', {type: 'login'})} >
		// 							Login
		// 						</button>
		// 					</li>
		// 					<li>
		// 						<button className="text-primary bg-white border border-solid border-primary px-4 py-2 rounded-xmd" onClick={() => routeChange('/signup', {type: 'signup'})}>
		// 							Sign Up
		// 						</button>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		)} */}
		// 		<div className="hidden md:block" id="navbar-dropdown">
		// 			<ul
		// 				className="flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 bg-primary"
		// 			>
		// 				<li>
		// 					<OptionsDropdown
		// 						DD_data={Constants.optionDropdownDataProducts}
		// 						DD_label="Products"
		// 					/>
		// 				</li>
		// 				<li className="cursor-pointer" onClick={handleOpenContactUsModal}>
		// 					Contact Us
		// 				</li>
		// 				<GlobalModal
		// 					openState={openContactUsModal}
		// 					onCloseHandler={handleCloseContactUsModal}
		// 					MinWidth={400}
		// 				>
		// 					<ContactUs />
		// 				</GlobalModal>

		// 				<li>
		// 					<button className="text-white border border-solid border-white px-4 py-2 rounded-xmd" onClick={() => routeChange('/login', {type: 'login'})}>
		// 						Login
		// 					</button>
		// 				</li>
		// 				<li>
		// 					<button className="text-primary bg-white border border-solid border-primary px-4 py-2 rounded-xmd" onClick={() => routeChange('/signup', {type: 'signup'})}>
		// 						Sign Up
		// 					</button>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default MainHeader;
