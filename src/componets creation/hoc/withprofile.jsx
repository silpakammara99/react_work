import axios from "axios"
import { useEffect, useState } from "react"




export const WithProfile=(Component)=>{
    return()=>{
        const[profileData, setProfileData]=useState({})
        useEffect(()=>{
            fetchData()
        },[])

        const fetchData=async()=>{
            
            const userData=await axios.get('https://dummyjson.com/users/1')
          console.log(userData)
          
            if(userData.status===200){
                setProfileData(userData.data)
            }
            

        }
        return <Component profile={profileData}></Component>
    }
}

