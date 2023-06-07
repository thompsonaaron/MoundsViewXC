import axios from 'axios'
import { useEffect } from 'preact/hooks'

// export const API_BASE_URL = 'https://strava-app-qddph.ondigitalocean.app'
export const API_BASE_URL = 'http://localhost:3001'

// Redirected back to here from Strava auth
const StravaAuth = () => {
    const getAuthCallback = async () => {
        const searchParams = window.location.search
        try {
            await axios.get(`${API_BASE_URL}/auth/callback${searchParams}`)
        } catch (e) {
            console.error('Error callings Strava auth callback')
            console.error(e)
        } finally {
            window.location.href = '/'
        }
    }

    useEffect(() => {
        getAuthCallback()
    }, [])

    return <div></div>
}

export default StravaAuth
