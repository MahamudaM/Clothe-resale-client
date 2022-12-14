import { useEffect, useState } from "react";

const useAdmin=email=>{
    const [admin,setadmin]=useState(false);
    const [adminLoading,setAdminLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://y-five-cyan.vercel.app/alluser/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setadmin(data.admin)
            setAdminLoading(false)
        })
    },[email])
    return [admin,adminLoading]
}
export default useAdmin;