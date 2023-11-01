import { fetchUserDetailsById } from 'actions/APIActions';
import { useCookie } from 'hooks/useCookie';
import React, { useEffect, useState } from 'react'
import { VAUX_USER_DETAIL_RESPONSE } from 'utils/APIResponseTypes';

const UserProfile = () => {
    const [userId, setUserId] = useCookie("userId","");
    const token = useCookie('vaux-staff-token',"");
    const [UserDetail, setUserDetail] = useState<object>({});
    useEffect(()=>{
        if(userId){
            const getUserDetails = async()=>{
                const res = await fetchUserDetailsById(userId,token.toString());
                console.log(res,"res");
                res.id  && setUserDetail(res);
            }
            getUserDetails();
        }
    },[])
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile