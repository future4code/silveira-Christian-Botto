import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    const getData = async () => {
        await axios
            .get(url, {
                headers: {
                    auth: window.localStorage.getItem('token')
                }
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert('Error')
            })
    }

    useEffect(() => {
        getData()
    }, [])



    return [data]
}

