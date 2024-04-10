import { useCallback, useEffect, useState } from 'preact/hooks'
import axios from 'axios'
import * as parser from 'preact-parser'
import styles from './updates.module.css'

const { parse } = parser

const Updates = ({ numUpdates = 2, urlPath }) => {
    const [updates, setUpdates] = useState<[string, string][]>([])

    const [updateOne, setUpdateOne] = useState<string[]>([])
    const [updateTwo, setUpdateTwo] = useState<string[]>([])

    const getUpdates = useCallback(async () => {
        const spreadsheetId = '1n8WHWVgXppwqlQ45p7yTO1HfM0G8wLNT_pYj2OUmITg'
        const apiKey = 'AIzaSyAX_xTy8OiuIDOU8ksMjQ4mCkRzrOqhpYI'
        const range = 'Sheet1!A2:B500'

        try {
            const { data } = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
            )

            const updates = []
            for (let update of data.values) {
                if (updates.length < numUpdates) {
                    updates.push([update[0], parse(update[1])])
                }
            }

            setUpdates(updates)
        } catch (e) {
            console.error('Error retrieving updates')
            console.error(e)
        }
    }, [])

    useEffect(() => {
        getUpdates()
    }, [getUpdates])

    return (
        <section class="flex justify-center my-8">
            <div class="flex flex-col w-screen md:w-10/12 lg:w-8/12 xl:w-6/12 border-2 border-white rounded px-4 py-2 m-1">
                <h1 class="text-xl self-center pb-2">
                    <span>
                        Updates
                        {urlPath === '/' && (
                            <a href="/updates" target="_blank">
                                <svg
                                    class="ml-2 inline"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    height="15"
                                >
                                    <path
                                        class="fill-white"
                                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                                    ></path>
                                </svg>
                            </a>
                        )}
                    </span>
                </h1>
                <div class="grid grid-cols-4 gap-4 auto-cols-auto">
                    {!updates.length && (
                        <>
                            <div
                                class={`text-sm ${styles['react-loading-skeleton']} col-span-1`}
                            ></div>
                            <div
                                class={`text-sm ${styles['react-loading-skeleton']} col-span-3`}
                            ></div>
                            <div
                                class={`text-sm ${styles['react-loading-skeleton']} col-span-1`}
                            ></div>
                            <div
                                class={`text-sm ${styles['react-loading-skeleton']} col-span-3`}
                            ></div>
                        </>
                    )}
                    {updates.length > 0 &&
                        updates.map((update) => (
                            <>
                                <div
                                    class={`text-sm ${
                                        update.length
                                            ? ''
                                            : styles['react-loading-skeleton']
                                    }`}
                                >
                                    {update[0]}
                                </div>
                                <div
                                    class={`col-span-3 text-sm ${
                                        update.length
                                            ? ''
                                            : styles['react-loading-skeleton']
                                    }`}
                                >
                                    {update[1]}
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Updates
