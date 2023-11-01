import { VAUX_SAMPLE_VOICE_LIST_TYPE, VAUX_LOGIN, VAUX_SIGNUP, VAUX_VOICE_LIST_TYPE, VAUX_VOICE_PREVIEW_TYPE, VAUX_PROCESS_TTS, VAUX_USER_DETAIL_TYPE } from "utils/APITypes";
import { vauxAPI } from "utils/NetworkInstance";
import { VAUX_AI_VOICES_PREVIEW_RESPONSE, VAUX_AI_VOICES_RESPONSE, VAUX_LOGIN_RESPONSE, VAUX_TTS_RESPONSE, VAUX_USER_DETAIL_RESPONSE } from "utils/APIResponseTypes";
import { useCookie } from "hooks/useCookie";

export const getAllAIVoiceSample = async (sample:boolean=false) => {
	const token = "";
	let endPoint = VAUX_VOICE_LIST_TYPE;
	if(sample){
		endPoint = VAUX_SAMPLE_VOICE_LIST_TYPE;
	}
	try {
		const response = await vauxAPI(token).get<VAUX_AI_VOICES_RESPONSE>(endPoint);
		const { data } = response;
		if (response.status === 200 && data) {
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
		if(response.status ===200 && data){
			return data?.Preview_link;
		}
	} catch (error) {
		console.log(error);
		return "";
	}
}

export const fetchLandingTTS = async (ttsBody: any) => {
	try {
		const response = await vauxAPI('None').post<VAUX_TTS_RESPONSE>(VAUX_PROCESS_TTS, { ttsBody });
		const {data} = response;
		if(response.status ===200 && data){
			return data?.speech_s3_link;
		}
	} catch (error) {
		console.log(error);
		return "";
	}
}

export const login = async (loginForm: any) => {
	try {
		const response = await vauxAPI().post<VAUX_LOGIN_RESPONSE>(VAUX_LOGIN, loginForm);
		const { data } = response || {};
		if (data) {
			return data;
		}
		
	}
	catch (error:any) {
		console.log(error.data);
		return error.data
	}
}

export const userSignup = async (signupForm: any) => {
	try {
		const response = await vauxAPI().post<VAUX_LOGIN_RESPONSE>(VAUX_SIGNUP, signupForm);
		const { data } = response;
		if (response.status === 200 && data) {
			return data;
		}
	}
	catch (error: any) {
		console.log(error);
		return error.data;
	}
}
export const fetchUserDetailsById = async (userID:string,token:string = "") =>{

	try {
		if(!userID.length){
			throw new Error("Invalid User");
		}
		// const token = useCookie('vaux-staff-token',JSON.stringify(null));
		const response = await vauxAPI(token).get<VAUX_USER_DETAIL_RESPONSE>(VAUX_USER_DETAIL_TYPE + userID);
		const { data } = response;
		if (response.status === 200 && data) {
			return data;
		}
	}
	catch (error: any) {
		console.log(error);
		return error.data;
	}
}
