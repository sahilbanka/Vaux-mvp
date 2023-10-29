import { useRef, useState } from "react";
import DropdownItem from "components/common/dropdown/DropdownItems";
import downArrow from "assets/dropdown_arrow.svg";
import upArrow from "assets/up_arrow.svg";
const OptionsDropdown = (props:any) => {
	/**
	 ** Initially, setting hardcoded values for Option Dropdown, once the preferences changes, we can update it in the success of data call
	 */
  const{ DD_label="",disabled = false, DD_data=[] } = props;
	const [optionsDropdownData, setOptionsDropdownData] = useState(DD_data);
	const [optionDropdownOpen, setOptionDropdownOpen] = useState<boolean>(false);
	const optionDropdown = useRef<HTMLDivElement>(null);

	/**
	 ** Toggling options menu open and close on click on nav options button
	 */
	const toggleOptionDropdown = () => {
		setOptionDropdownOpen(prev=>!prev);
	};

	/**
	 ** Checking click on document and closing the dropdown
	 */
	const closeOptionsDropdown = (e: any) => {
		if (
			optionDropdown.current &&
			optionDropdownOpen &&
			!optionDropdown.current.contains(e.target)
		) {
			setOptionDropdownOpen(false);
		}
	};
	document.addEventListener("mousedown", closeOptionsDropdown);

	/**
	 ** On click of the dropdown option take the user to close the dropdown and respective page
	 */
	const optionDropdownItemClickHandler = (link: string) => {
		setOptionDropdownOpen(false);
		 if (link.length)
     {
				window.location.href = link;
			};
	};

	return (
		<div
			className={
				"cursor-pointer flex flex-col relative"
			}
			onClick={() => {
				if (!disabled) toggleOptionDropdown();
			}}
		>
			<div className="text-0 flex items-center text-white gap-1">
				{DD_label}
				{!optionDropdownOpen && <img src={downArrow} alt="down-arrow" />}
				{optionDropdownOpen && <img src={upArrow} alt="down-arrow" />}
				
			</div>
			<div
				ref={optionDropdown}
				className={`absolute top-[100%] left-4 md:top-[43px] md:left-0 block text-Gray-700 mt-2 md:mt-0
        border-1 border-Gray-300  max-h-[60vh] min-h[50px] shadow-md bg-primary border border-solid border-white md:border-transparent
       ${optionDropdownOpen ? "block" : "hidden"}`}
			>
				{optionsDropdownData.map(
					(d: { label: string; link: string }, i: number) => {
						return (
							<DropdownItem
								key={i}
								className={`text-[14px] px-[12px] py-[24px] hover:bg-Gray-200`}
								onSelect={() => optionDropdownItemClickHandler(d.link)}
								label={d.label}
							/>
						);
					},
				)}
			</div>
		</div>
	);
};

export default OptionsDropdown;
