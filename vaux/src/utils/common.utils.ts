import { VAUX_AI_VOICES_RESPONSE } from "./APIResponseTypes";

export const formatAIVoicesResponseForLanding = (
	voices: VAUX_AI_VOICES_RESPONSE,
	MaleCount: number = 2,
	FemaleCount: number = 2,
) => {
	if (!voices?.length) {
		return [];
	}
	let result = [];
	let limit = {
		M: 0,
		F: 0,
		total: 0,
	};
	for (let voice of voices) {
		if (limit.total === MaleCount + FemaleCount) {
			break;
		}
		if (
			(voice?.Gender == "M" && limit[voice.Gender] < MaleCount) ||
			(voice?.Gender == "F" && limit[voice.Gender] < FemaleCount)
		) {
			limit[voice.Gender] = limit[voice.Gender] + 1;
			result.push({ ...voice, img_id: voice.Gender + limit[voice.Gender] });
			limit.total = limit.total + 1;
		}
	}
	return result;
};
