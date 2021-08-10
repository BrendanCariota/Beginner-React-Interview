import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserInfo = () => {

    const BASE_URL = 'https://randomuser.me/api'

    const [userArr, setUserArr] = useState([])

    const fetchRandomUser = () => {
        return axios.get(BASE_URL)
        .then((res) => {
            return res.data.results
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchRandomUser()
            .then((info) => {
                setUserArr(info)
            })
    }, [])

    const addUser = () => {
        axios.get(`${BASE_URL}?page=2`)
            .then(({ data }) => {
                const newUser = data.results[0]
                setUserArr([ ...userArr, newUser ])
                console.log(userArr)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>User Info</h2>
            <button onClick={addUser}>Add User</button>
            {
                userArr.map((user, idx) => (
                    <div key={idx}>
                        <h2>{user.name.first} {user.name.last}</h2>
                        <img src={user.picture.medium} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default UserInfo
