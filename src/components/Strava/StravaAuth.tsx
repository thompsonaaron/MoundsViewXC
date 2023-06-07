import axios from 'axios'
import { useEffect } from 'preact/hooks'

export const API_BASE_URL = 'https://strava-app-qddph.ondigitalocean.app'

// Redirected back to here from Strava auth
const StravaAuth = () => {
    const getAuthCallback = async () => {
        console.log(JSON.stringify(window.location))
        const searchParams = window.location.search
        const response = await axios.get(
            `${API_BASE_URL}/auth/callback${searchParams}`
        )
        // console.log(`auth callback respone is ${JSON.stringify(response.data)}`)
        window.location.href = '/'
    }

    useEffect(() => {
        getAuthCallback()
    }, [])

    return <div></div>
}

export default StravaAuth
