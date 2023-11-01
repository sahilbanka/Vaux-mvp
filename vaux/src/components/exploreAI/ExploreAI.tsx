import { useEffect, useState } from "react";
import { getAllAIVoiceSample } from "actions/APIActions";
import { formatAIVoicesResponseForLanding } from "utils/common.utils";
import ExploreAIVoiceItem from "./ExploreAIItem";
import { List_all_voicesMockData } from "MockData";
import { VAUX_AI_VOICES } from "utils/APIResponseTypes";
interface ExploreAIProps {
	isSelectionRequired?: boolean;
	SelectCallbackFunc?: () => void;
	handleCloseModal: () => void;
}
const ExploreAI = (props: ExploreAIProps) => {
	const { isSelectionRequired, SelectCallbackFunc, handleCloseModal } = props;
	const [AIVoices, setAIVoices] = useState<Array<VAUX_AI_VOICES>>([]);
	const [filteredVoices, setFilteredVoices] = useState<Array<VAUX_AI_VOICES>>(
		[],
	);
	const [isAudioPlaying, setIsAudioPlaying] = useState("");
	const [isAnyAudioSelected, setIsAnyAudioSelected] = useState("");
	const [filterAIVoices, setFilterAIVoices] = useState({
		gender: "ALL",
	});

	useEffect(() => {
		const getAllAIVoices = async () => {
			// const voices = await getAllAIVoiceSample(false);
			const voices = List_all_voicesMockData;
			if (voices?.length) {
				setAIVoices(voices);
				setFilteredVoices(voices);
			}
		};
		getAllAIVoices();
	}, []);

	const filterAiVoicesHandler = (field: string, value: string) => {
		switch (field) {
			case "gender":
				setFilterAIVoices((prev) => {
					return { ...prev, gender: value };
				});
				if (value.length && value == "ALL") {
					setFilteredVoices(AIVoices);
				} else {
					const filteredVoiceListBygender = AIVoices.filter(
						(item) =>
							item.Gender.toLocaleUpperCase().trim() ===
							value.toLocaleUpperCase().trim(),
					);
					setFilteredVoices(filteredVoiceListBygender);
				}

				break;
		}
	};

	return (
		<div>
			<div className="flex items-center justify-between px-4 py-3 bg-white border-solid border-b-[1px] border-gray-300">
				<div className="flex flex-col">
					<h3 className="font-bold">Select a Voice</h3>
					<div className="text-gray-500 text-sm font-medium">
						Choose from 100+ voices
					</div>
				</div>
				<button onClick={handleCloseModal}>
					<svg data-icon="cross" width="16" height="16" viewBox="0 0 16 16">
						<path
							d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"
							fillRule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div className="grid grid-cols-[240px_auto]">
				<div className="w-[240px] flex flex-col items-center p-5 border-solid border-gray-300 border-r-[1px]">
					<div className="flex">
						<div className="inline-flex shadow-sm rounded-[40px] border-solid border-[1px] border-[rgba(25, 118, 210, 0.5)]" >
							<button type="button"
								className={`${
									filterAIVoices.gender === "ALL"
										? "text-white bg-primary"
										: "text-primary"
								} rounded-l-[40px] px-4 py-2`}
								onClick={() => filterAiVoicesHandler("gender", "ALL")}
							>
								All
							</button>
							<button type="button"
								className={`${
									filterAIVoices.gender === "M"
										? "text-white bg-primary"
										: "text-primary"
								} px-4 py-2`}
								onClick={() => filterAiVoicesHandler("gender", "M")}
							>
								Male
							</button>
							<button type="button"
								className={`${
									filterAIVoices.gender === "F"
										? "text-white bg-primary"
										: "text-primary"
								} rounded-r-[40px] px-4 py-2`}
								onClick={() => filterAiVoicesHandler("gender", "F")}
							>
								Female
							</button>
						</div>
					</div>
				</div>
				{filteredVoices && (
					<div className="flex m-auto gap-3 flex-wrap  bg-gray-100 p-5 justify-center max-h-[70vh] overflow-y-scroll ">
						{filteredVoices.map((voice: any) => {
							return (
								<ExploreAIVoiceItem
									key={voice.Id}
									SelectCallbackFunc={SelectCallbackFunc}
									isSelectionRequired={isSelectionRequired}
									AIVoiceItem={voice}
									isAudioPlaying={isAudioPlaying}
									setIsAudioPlaying={setIsAudioPlaying}
									isAnyAudioSelected={isAnyAudioSelected}
									setIsAnyAudioSelected={setIsAnyAudioSelected}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};
export default ExploreAI;
