import { useEffect, useState } from "react";
import { getAllAIVoiceSample } from "actions/APIActions";
import { formatAIVoicesResponseForLanding } from "utils/common.utils";
import AIVoiceItemHome from "components/Home/AIVoiceItemHome";

const AIVoicesListHome = () => {
	const [AIVoices, setAIVoices] = useState<any>([]);
    const[isAudioPlaying ,  setIsAudioPlaying] = useState("");

	useEffect(() => {
		const getAllAIVoices = async () => {
			const voices = await getAllAIVoiceSample();
			if (voices?.length) {
				const formatedVoices = formatAIVoicesResponseForLanding(voices, 2, 2);
				setAIVoices(formatedVoices);
			}
		};
		getAllAIVoices();
	}, []);

	return (
		<div className="flex m-auto gap-3 overflow-x-auto">
			{AIVoices.map(
				(voice: {
					Gender: string;
					Name: string;
					Id: string;
					img_urL: string;
                    img_id:string;
				}) => {
					return <AIVoiceItemHome key={voice.Id} AIVoiceItem={voice} isAudioPlaying={isAudioPlaying} setIsAudioPlaying={setIsAudioPlaying} />;
				},
			)}
		</div>
	);
};
export default AIVoicesListHome;
