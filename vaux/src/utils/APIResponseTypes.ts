// add the API response interfaces 
export interface VAUX_LOGIN_RESPONSE {
    Token: string;
    Id:string;
    Error?:string;
}
export interface VAUX_AI_VOICES {
    Gender:string;
    Name:string;
    Id: string;
    Img_url: string;
    Language: string;
    Emotion: Array<string>;
    Country: string;
};


export interface VAUX_AI_VOICES_RESPONSE extends Array<VAUX_AI_VOICES>{}
export interface VAUX_AI_VOICES_PREVIEW_RESPONSE {
    Preview_link:string;
    Status:boolean;
}

export interface VAUX_TTS_RESPONSE {
    speech_s3_link: string;
    status: boolean;
}
export interface VAUX_USER_DETAIL_RESPONSE {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string | null;
}