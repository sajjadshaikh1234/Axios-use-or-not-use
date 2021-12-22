import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Navbar, NavLink, Nav, Container } from 'react-bootstrap'


const Effects = () => {
    const [data, setData] = useState([])

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
        const result = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/users?limit=5")
                console.log("res", res)
                // const resp = res.data[0].email;
                const resp = res.data
                console.log(">>>>>>>>>>", resp)
                setData(resp)
            } catch (err) {
                console.log("err")
            }
        }
        result()
    }

        , [])
const selector  = 
    data.map((item,id) => {
        console.log("item..",item.address
        )
        return (
            <>
            <tr>
            <th scope="row"> {item.id}  </th>
                <td>  {item.email}</td>
                <td> {item.password}</td>
                <td> {item.username}</td>
                <td>{item.address.city} </td>
                <td> {item.address.number}</td>
                <td> {item.address.geolocation.lat}</td>
                <td> {item.address.geolocation.long}</td>
                <td> {item.address.street}</td>
                <td> {item.address.zipcode}</td>
                </tr>
            </>
        )
    })


    return (
        <div>

<table className='table table-dark'>
                            <thead>
                                <tr>
                                <th scope='col' style={{color:"blueviolet"}}>id</th>
                                    <th scope='col' style={{color:"blueviolet"}}>email</th>
                                    <th scope='col' style={{color:"blueviolet"}} >password</th>
                                    <th scope='col' style={{color:"blueviolet"}}>username</th>
                                    <th scope='col' style={{color:"blueviolet"}}>city</th>
                                    <th scope='col' style={{color:"blueviolet"}}>number</th>
                                    <th scope='col' style={{color:"blueviolet"}}>latitude</th>
                                    <th scope='col' style={{color:"blueviolet"}}>longitude</th>

                                    <th scope='col' style={{color:"blueviolet"}}>street</th>
                                    <th scope='col' style={{color:"blueviolet"}}>zipcode</th>



                                </tr>
                            </thead>
                            <tbody>{selector}</tbody>
                        </table>


          
        </div>
    )
}

export default Effects;