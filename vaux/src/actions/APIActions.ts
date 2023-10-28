import { VAUX_LOGIN, VAUX_VOICE_LIST_TYPE, VAUX_VOICE_PREVIEW_TYPE } from "utils/APITypes";
import { vauxAPI } from "utils/NetworkInstance";
import { VAUX_AI_VOICES_PREVIEW_RESPONSE, VAUX_AI_VOICES_RESPONSE } from "utils/APIResponseTypes";

export const getAllAIVoiceSample = async () => {
	const token = "";
	try {
		const response = await vauxAPI(token).get<VAUX_AI_VOICES_RESPONSE>(VAUX_VOICE_LIST_TYPE);
		const { data } = response;
		if (response.status == 200 && data) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};
export const fetchAIVoicePreview = async (id:string , name:string) =>{
	const token = "";
	try {
		const response = await vauxAPI(token).get<VAUX_AI_VOICES_PREVIEW_RESPONSE>(VAUX_VOICE_PREVIEW_TYPE + `${id}/${name}`);
		const {data} = response;
		if(response.status==200 && data){
			return data?.S3_link;
		}
	} catch (error) {
		console.log(error);
		return "";
	}
}

export const login = async (loginForm: any) => {
	try {
		const response = await vauxAPI().post<VAUX_AI_VOICES_PREVIEW_RESPONSE>(VAUX_LOGIN, loginForm)
	}
	catch (error) {
		console.log(error);
		return '';
	}
}
