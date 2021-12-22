import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Effects = () => {
const[data,setData] = useState([])

//    useEffect(()=> {
//        fetch("https://reqres.in/api/users").then((res) => {
//            res.json().then((result) => {
//                const resp = result.data
//                console.log("....",resp)
//                setData(resp)
//            })
//        })
//    },[])



useEffect(() => {
    const result = async() => {
        try {
            const res =  await axios.get("https://fakestoreapi.com/users?limit=5")   
            console.log("res",res)
            // const resp = res.data[0].email;
            const resp = res.data
            console.log(">>>>>>>>>>",resp)
     setData(resp)
        } catch(err) {  
            console.log("err")
        }
        }
        result()
    }

,[])


    return(
        <div>
            {/* <h1>EmAIL: {data}</h1> */}
{
    data.map((item) => {
        return(
            <p>{item.email}</p>
        )
    })
}
        </div>
    )
}

export default Effects;