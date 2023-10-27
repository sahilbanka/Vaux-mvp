import { useState } from "react";
import OptionsDropdown from "components/common/dropdown/OptionsDropdown";
import { Constants } from "utils/constants";
import Button from "@mui/material/Button";
import GlobalModal from "components/common/GlobalModal";
import ContactUs from "components/ContactUs";
import { useNavigate } from "react-router";

const MainHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [openContactUsModal, setOpenContactUsModal] = useState(false);
	const handleOpenContactUsModal = () => setOpenContactUsModal(true);
	const handleCloseContactUsModal = () => setOpenContactUsModal(false);
	const navigate = useNavigate();

	const routeChange = (path: string) => {
		navigate(path);
	}

	return (
		<nav
			className="sticky w-full z-20 top-0 left-0 border-b border-gray-600 bg-primary text-white"
		>
			<div className="flex items-center justify-between mx-auto px-16 py-4">
				<a href="/#" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						VAux
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-dropdown"
					aria-expanded="false"
					onClick={() => setShowMenu((prev) => !prev)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				{showMenu && (
					<div className="md:hidden" id="navbar-dropdown">
						<ul
							className="bg-primary flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-gray-700"
						>
							<li>
								<OptionsDropdown
									DD_data={Constants.optionDropdownDataProducts}
									DD_label="Products"
								/>
							</li>

							<li>
								<Button type="button"
									variant="outlined" className="text-white border border-white border-solid"
									onClick={() => routeChange('/login')}
								>
									Login
								</Button>
							</li>
							<li>
								<Button
									variant="contained" className="text-primary bg-white border border-solid border-primary"
								>
									Sign Up
								</Button>
							</li>
						</ul>
					</div>
				)}
				<div className="hidden md:block" id="navbar-dropdown">
					<ul
						className="flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 bg-primary"
					>
						<li>
							<OptionsDropdown
								DD_data={Constants.optionDropdownDataProducts}
								DD_label="Products"
							/>
						</li>
						<li className="cursor-pointer" onClick={handleOpenContactUsModal}>
							Contact Us
						</li>
						<GlobalModal
							openState={openContactUsModal}
							onCloseHandler={handleCloseContactUsModal}
							MinWidth={400}
						>
							<ContactUs />
						</GlobalModal>

						<li>
							<Button
								variant="outlined" className="text-white border border-solid border-white"
								onClick={() => routeChange('/login')}>
								Login
							</Button>
						</li>
						<li>
							<Button
								variant="contained" className="text-primary bg-white border border-solid border-primary"
							>
								Sign Up
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MainHeader;
