import axios from 'axios'
import { useEffect, useState } from 'preact/hooks'
import { API_BASE_URL } from './StravaAuth'

interface RunnerTotal {
    name: string
    miles: number
}

const StravaMileageDashboard = () => {
    const [runnerMileage, setRunnerMileage] = useState([])

    const getRunnerTotals = async () => {
        try {
            const { data } = await axios.get<RunnerTotal[]>(
                `${API_BASE_URL}/strava/totals`
            )
            setRunnerMileage(data)
        } catch (e) {
            console.error('Error retrieving mileage totals')
            console.error(e)
        }
    }

    useEffect(() => {
        getRunnerTotals()
    }, [])

    return (
        <div class="grid grid-cols-4 gap-0 md:gap-1 auto-cols-auto">
            {runnerMileage.map((runner, index) => (
                <>
                    <div class="col-span-3">
                        {index + 1}. &nbsp; {runner.name}
                    </div>
                    <div>{runner.miles}</div>
                </>
            ))}
        </div>
    )
}

export default StravaMileageDashboard
