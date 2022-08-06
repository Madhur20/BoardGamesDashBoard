import { stringify } from 'querystring';
import React, {useEffect, useState} from 'react'

export default function testBackEnd() {

    const [backendData, setBackEndData] = useState<string>()

    useEffect(() => {
        fetch("http://localhost:8080/api", )
        .then(
            response => 
                response.json()
            )
        .then(
            data => {
                setBackEndData(data)
            }
        )
    }, [])

    return(
        <div style={{color:'black', backgroundColor:'white'}}>
                {backendData}
        </div>
    )
}