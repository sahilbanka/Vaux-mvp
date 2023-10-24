import { useState } from "react";
import OptionsDropdown from "./common/dropdown/OptionsDropdown";
import { optionDropdownDataProducts } from "../utils/constants";
import Button from "@mui/material/Button";
import GlobalModal from "./common/GlobalModal";
import ContactUs from "./ContactUs";

const MainHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [openContactUsModal, setOpenContactUsModal] = useState(false);
	const handleOpenContactUsModal = () => setOpenContactUsModal(true);
	const handleCloseContactUsModal = () => setOpenContactUsModal(false);

	return (
		<nav
			className=" fixed w-full z-20 top-0 left-0 border-b border-gray-600"
			style={{ backgroundColor: "#394689" }}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center">
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
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				{showMenu && (
					<div className="md:hidden w-full  md:w-auto" id="navbar-dropdown">
						<ul
							className="flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-gray-700"
							style={{ backgroundColor: "#394689" }}
						>
							<li>
								<OptionsDropdown
									DD_data={optionDropdownDataProducts}
									DD_label="Products"
								/>
							</li>

							<li>
								<Button
									variant="outlined"
									style={{ color: "white", border: "1px solid white" }}
								>
									Login
								</Button>
							</li>
							<li>
								<Button
									variant="contained"
									style={{
										color: "#394689",
										backgroundColor: "white",
										border: "1px solid #394689",
									}}
								>
									Sign Up
								</Button>
							</li>
						</ul>
					</div>
				)}
				<div className="w-full md:w-auto" id="navbar-dropdown">
					<ul
						className="flex items-center flex-col font-medium p-4 sm:gap-1 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 "
						style={{ backgroundColor: "#394689" }}
					>
						<li>
							<OptionsDropdown
								DD_data={optionDropdownDataProducts}
								DD_label="Products"
							/>
						</li>
						<li className="text-white" onClick={handleOpenContactUsModal}>
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
								variant="outlined"
								style={{ color: "white", border: "1px solid white" }}
							>
								Login
							</Button>
						</li>
						<li>
							<Button
								variant="contained"
								style={{
									color: "#394689",
									backgroundColor: "white",
									border: "1px solid #394689",
								}}
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
