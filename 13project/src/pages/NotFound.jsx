import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div style={{display :"flex", flexDirection :"column"}}>
        <img src="https://imgs.search.brave.com/e4C9Dvmx4S98hmSY3eE-8Jks3vSuXDDQ8cMFnFyN9dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY3/NTU2ODkzMC92ZWN0/b3IvYS00MDQtZXJy/b3Itb2NjdXJyZWQt/b24tdGhlLWNvbXB1/dGVyLXdlYi1wYWdl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1IdkF5TnhubVNX/VEZEYjVYVnhNVlV0/OTNaUWhRbTE3ODRr/UUVMRnZzUUQwPQ" alt="" />
        <button onClick={()=>{
            navigate("/")
        }}>Go back to Home Page</button>
    </div>
  )
}

export default NotFound