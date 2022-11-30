import { useEffect, useState } from "react";

const useUser=email=>{
    const [userCheck,setUserCheck]=useState(false);
    const [userCheckLoading,setUserCheckLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/alluser/user/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUserCheck(data.userCheck)
            setUserCheckLoading(false)
        })
    },[email])
    return [userCheck,userCheckLoading]
}
export default useUser;