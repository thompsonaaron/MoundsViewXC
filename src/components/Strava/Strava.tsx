import axios from 'axios'
import { useEffect } from 'preact/hooks'
import { API_BASE_URL } from './StravaAuth'

// when use hits this page, call API. API should redirect to strava
const Strava = () => {
    const getAuthURL = async () => {
        const response = await axios.get(`${API_BASE_URL}/auth`)
        window.location.href = response.data
    }

    useEffect(() => {
        getAuthURL()
    }, [])

    return <div></div>
}

export default Strava
