import { useEffect, useState } from "react";

const useSeller=email=>{
    const [seller,setSeller]=useState(false);
    const [sellerLoading,setSellerLoading] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/alluser/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSeller(data.seller)
            setSellerLoading(false)
        })
    },[email])
    return [seller,sellerLoading]
}
export default useSeller;