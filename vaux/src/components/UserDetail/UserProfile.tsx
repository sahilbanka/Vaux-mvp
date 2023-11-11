import { fetchUserDetailsById, updateUserDetails } from "actions/APIActions";
import { useCookie } from "hooks/useCookie";
import { useLocalStorage } from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";

const UserProfile = (props: any) => {
	const [userId, setUserId] = useLocalStorage("userId", JSON.stringify(null));
	const [token, setToken] = useLocalStorage("vaux-staff-token", JSON.stringify(null));
	const [UserDetail, setUserDetail] = useState<any>({});
	const [inputUserDetail, setInputUserDetail] = useState<any>({});
	const [disabledInput, setDisabledInput] = useState<any>({
		details: true,
		password: true,
	});
	const [inputValid, setInputValid] = useState<any>({
		first_name: true,
		last_name: true,
		email: true,
	});
	let { handleCloseModal } = props;

	const onEditClickHandler = () => {
		setDisabledInput((prev: any) => {
			return { ...prev, details: false };
		});
	};
	const handleEmailInput = (value: string) => {
		setInputUserDetail((prev: any) => {
			return { ...prev, email: value };
		});
		const validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (value.length === 0) {
			setInputValid((prev: any) => {
				return { ...prev, email: true };
			});
			return;
		}
		if (value.match(validRegex)) {
			setInputValid((prev: any) => {
				return { ...prev, email: true };
			});
		} else {
			setInputValid((prev: any) => {
				return { ...prev, email: false };
			});
		}
	};
	const handleNameInput = (value: string, type: string) => {
		setInputUserDetail((prev: any) => {
			return { ...prev, [type]: value };
		});
		if (value.length === 0) {
			setInputValid((prev: any) => {
				return { ...prev, [type]: false };
			});
			return;
		}
		if (value.length >= 0) {
			setInputValid((prev: any) => {
				return { ...prev, [type]: true };
			});
			return;
		}
	};
	const saveDetailsHandler = async () => {
		if (inputValid.first_name && inputValid.last_name && inputValid.email) {
			setDisabledInput((prev: any) => {
				return { ...prev, details: true };
			});
			const res = await updateUserDetails(token, {
				user_id: userId,
				first_name: inputUserDetail.first_name,
				last_name: inputUserDetail.last_name,
				email: inputUserDetail.email,
			});
			if (res) {
				//toaster msg
				handleCloseModal();
			}
		}
	};

	useEffect(() => {
		if (userId) {
			const getUserDetails = async () => {
				const res = await fetchUserDetailsById(userId, token.toString());
				if (res.id) {
					setUserDetail(res);
					setInputUserDetail(res);
				}
			};
			getUserDetails();
		}
	}, []);
	return (
		<div>
			<div className="flex items-center justify-between px-4 py-3 bg-white border-solid border-b-[1px] border-gray-300">
				<div className="flex flex-col">
					<h3 className="font-bold">My Profile</h3>
					<div className="text-gray-500 text-sm font-medium">
						Manage your profile
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<button
						className="text-primary font-semibold  border border-solid border-primary px-3 py-1 rounded-md"
						onClick={
							disabledInput.details ? onEditClickHandler : saveDetailsHandler
						}
					>
						{disabledInput.details ? "Edit" : "Save"}
					</button>
					<button onClick={handleCloseModal}>
						<svg data-icon="cross" width="16" height="16" viewBox="0 0 16 16">
							<path
								d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"
								fillRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="flex flex-col p-4">
				<div className="flex items-center">
					<div className="mr-2">
						<div className="w-full flex flex-col">
							<label className="mb-1 text-base font-semibold">First Name</label>
							<div className="">
								<input
									type="text"
									className={`min-w-[300px] max-w-[300px] text-sm font-medium  ${
										!inputValid.first_name
											? "border-red-500 focus-visible:border-red-500"
											: " border-gray-300 "
									} disabled:text-gray-500 disabled:bg-[rgba(209,213,221,.5)]  disabled:font-[rgba(92,112,128,.6)] disabled:cursor-not-allowed rounded px-2 py-1 border border-1 border-gray-300`}
									disabled={disabledInput.details}
									value={inputUserDetail["first_name"]}
									onChange={(event) => {
										handleNameInput(event.target.value, "first_name");
									}}
								/>
							</div>
							{/* <label className="text-red3 m-0" style="visibility: hidden;"></label> */}
						</div>
					</div>
					<div className="w-full flex flex-col">
						<label className="mb-1 text-base font-semibold">Last Name</label>
						<div className="">
							<input
								type="text"
								className={`min-w-[300px] max-w-[300px] font-medium text-sm  ${
									!inputValid.last_name
										? "border-red-500 focus-visible:border-red-500"
										: " border-gray-300 "
								} disabled:text-gray-500 disabled:bg-[rgba(209,213,221,.5)] disabled:cursor-not-allowed  rounded px-2 py-1 border border-1 border-gray-300`}
								disabled={disabledInput.details}
								value={inputUserDetail["last_name"]}
								onChange={(event) => {
									handleNameInput(event.target.value, "last_name");
								}}
							/>
							{/* {!inputValid.last_name && <div className='text-sm font-semibold mt-1 text-red-600'>{"Cannot be empty"}</div>} */}
						</div>
						{/* <label className="text-red3 m-0" style="visibility: hidden;"></label> */}
					</div>
				</div>
				<div
					className={`text-sm font-semibold mt-1 text-red-600 ${
						!inputValid.first_name || !inputValid.last_name ? "block" : "hidden"
					}`}
				>
					{"Field cannot be empty"}
				</div>

				<div className="flex items-center mb-3 mt-3 gap-2">
					<div className="w-full flex flex-col">
						<label className="text-base font-semibold ">Email </label>
						<div className="">
							<input
								type="email"
								className={`min-w-[300px] max-w-[300px]  ${
									!inputValid.email
										? "border-red-500 focus-visible:border-red-500"
										: " border-gray-300 "
								}  font-medium text-sm disabled:text-gray-500 disabled:bg-[rgba(209,213,221,.5)] disabled:cursor-not-allowed  rounded px-2 py-1 border border-1`}
								disabled={disabledInput.details}
								value={inputUserDetail["email"]}
								onChange={(event) => {
									handleEmailInput(event.target.value);
								}}
							/>
							{!inputValid.email && (
								<div className="text-sm font-semibold mt-1 text-red-600">
									{"Invalid Email"}
								</div>
							)}
						</div>
						{/* <label className="text-red3 m-0" style="visibility: hidden;"></label> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
