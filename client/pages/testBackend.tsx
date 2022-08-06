import { stringify } from 'querystring';
import React, {useEffect, useState} from 'react'

export default function testBackEnd() {
    // interface test {
    //     value: string[]
    // }
    const [backendData, setBackEndData] = useState<string[]>()

    useEffect(() => {
        fetch("http://localhost:8080/api", )
        .then(
            response => 
                // console.log(response);
                response.json()
            )
        .then(
            data => {
                setBackEndData(data)
            }
        )
    }, [])
    // const users = {
    //     backendData: number;
    // }

    return(
        <div style={{color:'black', backgroundColor:'white'}}>
            {(backendData!==undefined)?
                (<p>{backendData.map((value:string)=>value)}</p>):(<p>Loading...</p>)
                // backendData.users.map((user: string, i : number) => {
                //     <p key={i}>{user}</p>
                // })
            }
        </div>
    )
}