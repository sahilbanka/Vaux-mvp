import { useEffect, useRef, useState } from "react";
import playBtn from "assets/play.svg";
import { fetchAIVoicePreview } from "actions/APIActions";
import Avatar_male_1 from "assets/M1.png";
import Avatar_male_2 from "assets/M2.png";
import Avatar_female_1 from "assets/F1.png";
import Avatar_female_2 from "assets/F2.png";
import pauseBtn from "assets/pause.svg";
interface AIVoiceItemHomePropsInterface {
	AIVoiceItem: {
		Gender: string;
		Name: string;
		Id: string;
		img_urL: string;
		img_id: string;
	};
	isAudioPlaying: string;
	setIsAudioPlaying: React.Dispatch<React.SetStateAction<string>>;
}

const AIVoiceItemHome = (props: AIVoiceItemHomePropsInterface) => {
	let { AIVoiceItem, setIsAudioPlaying, isAudioPlaying } = props;
	const [AIAudioLink, setAiAudioLink] = useState<string>("");
	const [playControls, setPlayControls] = useState<{
		playMode: boolean;
		pauseMode: boolean;
	}>({
		playMode: true,
		pauseMode: false,
	});
	const ref = useRef<HTMLAudioElement>(null);
	const imageObj = {
		M1: Avatar_male_1,
		M2: Avatar_male_2,
		F1: Avatar_female_1,
		F2: Avatar_female_2,
	};
	const fetchAIVoiceAudioLink = async (VoiceId: string, name: string) => {
		// const url = await fetchAIVoicePreview(VoiceId, name);
		const url = await fetchAIVoicePreview("55", "Timothy");
		if (url) {
			setAiAudioLink(url);
		}
	};
	const audioPlayHandler = async () => {
		setIsAudioPlaying(AIVoiceItem.Id);
		ref.current?.play();
		if (!AIAudioLink?.length) {
			await fetchAIVoiceAudioLink(AIVoiceItem.Id, AIVoiceItem.Name);
		}
	};
	const audioPauseHandler = () => {
		ref.current?.pause();
	};
	useEffect(() => {
		if (isAudioPlaying !== AIVoiceItem.Id && !ref.current?.paused) {
			ref.current?.pause();
		}
	}, [AIVoiceItem.Id, isAudioPlaying]);
	return (
		<div className="flex flex-col w-[250px] justify-center items-center gap-2 relative">
			<div
				className=" w-[206px] h-[206px] rounded-[50%]"
				style={{ backgroundColor: "#394689" }}
			>
				<img
					src={imageObj[AIVoiceItem.img_id as keyof typeof imageObj]}
					alt="AI voice Avatar"
					className="absolute z-[1] left-[50%] top-[-85px] min-w-[260px]"
					width={260}
					style={{ transform: "translate(-50%, 0%)" }}
				/>
			</div>
			<div className="flex gap-2 font-medium">
				<span>{AIVoiceItem.Name}</span>
				<span>{AIVoiceItem.Gender}</span>
			</div>
			<div>English: Us & canada</div>
			<div>
				{playControls.playMode && (
					<img
						src={playBtn}
						alt="play"
						className="cursor-pointer"
						onClick={() => {
							audioPlayHandler();
						}}
					/>
				)}
				{playControls.pauseMode && (
					<img
						src={pauseBtn}
						alt="pause"
						className="cursor-pointer"
						onClick={() => {
							audioPauseHandler();
						}}
					/>
				)}
				{AIAudioLink && (
					<audio
						autoPlay
						src={AIAudioLink}
						ref={ref}
						id={`${AIVoiceItem.Id}_${AIVoiceItem.Name}_${AIVoiceItem.Gender}`}
						onPause={() => {
							setPlayControls((prev) => {
								return { ...prev, pauseMode: false, playMode: true };
							});
						}}
						onPlay={() => {
							setPlayControls((prev) => {
								return { ...prev, pauseMode: true, playMode: false };
							});
						}}
					/>
				)}
				{/* <source src={AIAudioLink} type="audio/wav" />
				</audio> */}
			</div>
		</div>
	);
};
export default AIVoiceItemHome;
