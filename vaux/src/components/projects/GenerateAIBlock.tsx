import { useEffect, useRef, useState } from "react";
import { ReactComponent as DownArrow } from "assets/dropdown_arrow.svg";
import { ReactComponent as GenerateButton } from "assets/generate.svg";
import { ReactComponent as DownloadButton } from "assets/download.svg";
import loadingGIF from "assets/smallLoader.svg";
import GlobalModal from "components/common/GlobalModal";
import ExploreAI from "components/exploreAI/ExploreAI";
import { VAUX_AI_VOICES } from "utils/APIResponseTypes";
import { generateTTS } from "actions/APIActions";
import { useCookie } from "hooks/useCookie";
import SliderDropdown from "components/common/SliderDropdown";
import {ReactComponent as UpArrow} from 'assets/up_arrow.svg';



function GenerateAIBlock({
	aiVoicesList,
}: {
	aiVoicesList: Array<VAUX_AI_VOICES>;
}) {
	const [selectedAIVoice, setSelectedAIVoice] = useState<VAUX_AI_VOICES>(
		aiVoicesList[0],
	);
	const [token] = useCookie("vaux-staff-token", JSON.stringify(null));
	const AIBoxInpRef = useRef<HTMLInputElement>(null);
	const ttsAudioRef = useRef<HTMLAudioElement>(null);
	const [AudioLink, setAudioLink] = useState<string>("");
	const [isLoading, setIsloading] = useState<boolean>(false);
	const downloadAudioRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		console.log(aiVoicesList);
		setSelectedAIVoice(aiVoicesList[0]);
	}, [aiVoicesList]);

	const [openExploreAIsModal, setOpenExploreAIsModal] = useState(false);
	const handleOpenExploreAIsModal = () => setOpenExploreAIsModal(true);
	const handleCloseExploreAIsModal = () => setOpenExploreAIsModal(false);
	const handleTTSListen = async () => {
		if (AIBoxInpRef?.current?.value && AIBoxInpRef?.current?.value.length > 0) {
			setIsloading(true);
			const link = await generateTTS(token, {
				text: AIBoxInpRef?.current?.value,
				speaker_id: selectedAIVoice.Id,
			});
			if (link) {
				setAudioLink(link);
				if (ttsAudioRef?.current?.paused) {
					ttsAudioRef.current.play();
				}
				setIsloading(false);
			}
		}
	};
	const handleDownloadTTS = async () => {
		try {
			if (!AudioLink) {
				throw new Error("Resource URL not provided! You need to provide one");
			}
			setIsloading(true);
			const response = await fetch(AudioLink);
			const blob = await response.blob();
			const blobURL = URL.createObjectURL(blob);
			if (downloadAudioRef?.current) {
				downloadAudioRef.current.href = blobURL;
				downloadAudioRef.current.click();
			}
			setIsloading(false);
		} catch (error) {
			console.log(error);
			setIsloading(false);
		}
	};
	return (
		<>
			{selectedAIVoice && (
				<div className="bg-white border border-transparent rounded-lg p-4 m-10">
					<div className="flex justify-between items-center">
						<div className="flex gap-4 items-center">
							<div
								className="flex rounded-3xl border border-gray-300 justify-center items-center px-1 py-0 text-xs cursor-pointer font-medium"
								onClick={handleOpenExploreAIsModal}
							>
								<img
									className={`w-[32px] h-[32px] border border-transparent rounded-circle mr-1`}
									src={selectedAIVoice?.Img_url}
									alt={selectedAIVoice?.Name}
								/>
								<span>{`${selectedAIVoice?.Name} (${selectedAIVoice?.Gender})`}</span>
								<DownArrow className="fill-primary mx-2" />
							</div>
							<div className="relative">
								<div className="flex rounded-3xl font-medium border border-gray-300 justify-center items-center px-2 py-1 text-xs cursor-pointer">
									<span>{`Pitch`}</span>
									<DownArrow className="fill-primary mx-1" />								
								</div>
								<div className='absolute top-[100%] left-[40%] w-[0px] h-[0px] border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px]'></div>
								<SliderDropdown />
							</div>
							<div className="flex rounded-3xl font-medium border border-gray-300 justify-center items-center px-2 py-1 text-xs cursor-pointer">
								<span>{`Speed`}</span>
								<DownArrow className="fill-primary mx-1" />
							</div>
						</div>

						<div className="float-right">
							{!isLoading && (
								<div className="flex gap-2  items-center">
									<GenerateButton
										className="w-[24px] font-medium h-[24px] cursor-pointer "
										onClick={handleTTSListen}
									/>
									{AudioLink && (
										<div>
											<DownloadButton
												className="w-[24px] font-medium h-[24px] cursor-pointer"
												onClick={handleDownloadTTS}
											/>
										</div>
									)}
								</div>
							)}
							<a
								href=""
								ref={downloadAudioRef}
								className="invisible"
								download={`VOAUX-${
									selectedAIVoice.Name + "-" + selectedAIVoice.Id
								}.wav`}
							></a>
							{isLoading && (
								<img
									src={loadingGIF}
									alt="loading"
									className={`cursor-pointer`}
									width={40}
								/>
							)}
						</div>
					</div>
					<div>
						<input
							ref={AIBoxInpRef}
							type="text"
							placeholder="Enter your text here"
							className="text-sm font-normal border border-gray-300 rounded-md w-full p-2 mt-4 focus-visible:outline-none"
						/>
					</div>
					{AudioLink && (
						<div className="mt-3 w-full">
							<audio
								autoPlay
								className="w-full h-[32px]"
								controls
								controlsList={"nofullscreen nodownload noremoteplayback"}
								src={AudioLink}
								ref={ttsAudioRef}
							/>
						</div>
					)}
				</div>
			)}
			<GlobalModal
				openState={openExploreAIsModal}
				onCloseHandler={handleCloseExploreAIsModal}
				MinWidth={"w-[70%]"}
				iskeepMounted={true}
			>
				<ExploreAI
					handleCloseModal={handleCloseExploreAIsModal}
					isSelectionRequired={true}
					SelectCallbackFunc={(voice) => setSelectedAIVoice({ ...voice })}
				/>
			</GlobalModal>
		</>
	);
}

export default GenerateAIBlock;
