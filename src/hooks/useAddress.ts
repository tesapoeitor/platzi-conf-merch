import { useEffect, useState } from "react"
import axios from "axios"

import { Position } from "../Types/Position"

const useAddress = (address: string, city: string, country: string) => {
    const [map, setMap] = useState<[number, number] | undefined>()

    const API = `http://api.positionstack.com/v1/forward?access_key=edc05e7961f43e08ba70222f9625cc08&query=${address},${city},${country}`

    const fetchData = async() => {
        const response = await axios.get<Position>(API)
        const position = response.data
        setMap([position.data[0].latitude, position.data[0].longitude])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return map
}

export { useAddress }