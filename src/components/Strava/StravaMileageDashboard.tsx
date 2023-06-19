import axios from 'axios'
import { useEffect, useState } from 'preact/hooks'
import { API_BASE_URL } from './StravaAuth'

interface APIResponse {
    cumulative: RunnerTotal[]
    week: WeeklyTotal[]
}

interface WeeklyTotal {
    name: string
    miles: number
}

interface RunnerTotal extends WeeklyTotal {
    minutes: number
    averagePace: string
    isOnTrack300: boolean
    isOnTrack325: boolean
    isOnTrack350: boolean
}

const StravaMileageDashboard = () => {
    const [cumulativeData, setCumulativeData] = useState<RunnerTotal[]>([])
    const [weekData, setWeekData] = useState<WeeklyTotal[]>([])

    const getRunnerTotals = async () => {
        try {
            const { data } = await axios.get<APIResponse>(
                `${API_BASE_URL}/strava/totals`
            )
            const { cumulative, week } = data
            setCumulativeData(cumulative)
            setWeekData(week)
        } catch (e) {
            console.error('Error retrieving mileage totals')
            console.error(e)
        }
    }

    useEffect(() => {
        getRunnerTotals()
    }, [])

    return (
        <div class="w-screen flex flex-col md:flex-row md:w-10/12 h-[100% + 48px] pb-12 md:pb-0 items-center md:items-start">
            <div class="flex flex-col w-full md:w-4/12 p-2 md:p-4 border-2 rounded border-gray-50 my-1 md:mx-4">
                <h3 class="text-xl font-semibold pb-1">
                    <div
                        class="flex flex-row items-baseline"
                        title="Based on miles run and 1/3 of all miles biked"
                    >
                        Current Week
                    </div>
                </h3>
                <div class="grid grid-cols-9 gap-0 md:gap-1 auto-cols-auto px-2 text-sm md:text-lg">
                    {weekData.map((runner, index) => (
                        <>
                            <div class="col-span-1 text-right pr-4">
                                {index + 1}.
                            </div>
                            <div class="col-span-6">{runner.name}</div>
                            <div class="col-span-2">
                                {runner.miles.toFixed(2)}
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div class="flex flex-col w-full md:w-6/12 p-2 md:p-4 border-2 rounded border-gray-50 my-1 md:mx-4">
                <h3 class="text-xl font-semibold pb-1">
                    <div
                        class="flex flex-row items-baseline"
                        title="Based on miles run and 10:3 biking to running conversion"
                    >
                        Total Miles
                    </div>
                </h3>
                <div class="grid grid-cols-12 gap-0 md:gap-1 auto-cols-auto px-2 text-sm md:text-lg">
                    {cumulativeData.map((runner, index) => (
                        <>
                            <div class="col-span-1 text-right pr-4">
                                {index + 1}.
                            </div>
                            <div class="col-span-6">
                                {runner.name}{' '}
                                {runner.isOnTrack350
                                    ? '🤩'
                                    : runner.isOnTrack325
                                    ? '😎'
                                    : runner.isOnTrack300
                                    ? '😀'
                                    : ''}
                            </div>
                            <div class="col-span-2">
                                {runner.miles.toFixed(2)}
                            </div>
                            <div class="col-span-3">({runner.averagePace})</div>
                        </>
                    ))}
                </div>
            </div>
            <div class="flex flex-row justify-center w-11/12 md:w-5/12 py-4 md:py-0 md:self-start">
                <a
                    href="https://drive.google.com/drive/folders/1Lqt_gB01CgFz0gVaOpNcn7co0Jx5ESDS?usp=drive_link"
                    target="_blank"
                    style={{ color: 'rgb(34 197 94)' }}
                    class="md:pt-4"
                >
                    Google Drive Resources
                </a>
            </div>
        </div>
    )
}

export default StravaMileageDashboard
