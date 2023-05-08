import { useCallback, useEffect, useState } from 'preact/hooks'
import axios from 'axios'
import * as parser from 'preact-parser'
import styles from './updates.module.css'

const { parse } = parser

const Updates = () => {
    const [updateOne, setUpdateOne] = useState<string[]>([])
    const [updateTwo, setUpdateTwo] = useState<string[]>([])

    const getUpdates = useCallback(async () => {
        console.log('calling get updates')
        const spreadsheetId = '1n8WHWVgXppwqlQ45p7yTO1HfM0G8wLNT_pYj2OUmITg'
        const apiKey = 'AIzaSyAX_xTy8OiuIDOU8ksMjQ4mCkRzrOqhpYI'
        const range = 'Sheet1!A2:B3'
        try {
            const { data } = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
            )
            const [one, two] = data.values
            setUpdateOne([one[0], parse(one[1])])
            setUpdateTwo([two[0] || '', parse(two[1]) || ''])
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
            <div class="flex flex-col md:w-10/12 lg:w-8/12 xl:w-6/12 border-2 border-white rounded px-4 py-2 m-1">
                <h1 class="text-xl self-center pb-2">Updates</h1>
                <div class="grid grid-cols-4 gap-4 auto-cols-auto">
                    {/* Update 1 */}
                    <div
                        class={`text-sm ${
                            updateOne.length
                                ? ''
                                : styles.update +
                                  ' ' +
                                  styles['react-loading-skeleton']
                        }`}
                    >
                        {updateOne[0]}
                    </div>
                    <div
                        class={`col-span-3 text-sm ${
                            updateOne.length
                                ? ''
                                : styles.update +
                                  ' ' +
                                  styles['react-loading-skeleton']
                        }`}
                    >
                        {updateOne[1]}
                    </div>
                    {/* Update 2 */}
                    <div
                        class={`text-sm ${
                            updateTwo.length
                                ? ''
                                : styles.update +
                                  ' ' +
                                  styles['react-loading-skeleton']
                        }`}
                    >
                        {updateTwo[0]}
                    </div>
                    <div
                        class={`col-span-3 text-sm ${
                            updateTwo.length
                                ? ''
                                : styles.update +
                                  ' ' +
                                  styles['react-loading-skeleton']
                        }`}
                    >
                        {updateTwo[1]}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Updates
