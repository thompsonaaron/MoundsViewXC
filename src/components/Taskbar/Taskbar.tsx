import { useState } from 'preact/hooks'
import MediaDropdown from '../Dropdown/Dropdown'

const Taskbar = () => {
    const [showNav, setShowNav] = useState(false)

    const clickHandler = () => {
        setShowNav((prevValue) => !prevValue)
    }

    return (
        <>
            <div
                id="full width container"
                onClick={clickHandler}
                style={{ bottom: '-5' }}
                class="flex md:hidden fixed bottom-0 right-0 left-0 w-screen bg-neutral-700 justify-center shadow shadow-slate-400"
            >
                <div
                    id="toggle-component"
                    class="flex flex-col h-12 md:hidden w-12 sticky object-bottom justify-center items-center py-0.5"
                >
                    <div class="flex h-1 w-full my-1 bg-white">&nbsp;</div>
                    <div class="flex h-1 w-full my-1 bg-white">&nbsp;</div>
                    <div class="flex h-1 w-full my-1 bg-white">&nbsp;</div>
                </div>
            </div>
            {showNav && (
                <div class="flex flex-col fixed bottom-0 mb-12 py-4 transition-all h-fit max-h-[calc(100vh-24px)] w-full bg-white shadow shadow-slate-400">
                    <a href="/" class="z-10 m-4 text-gray-500 hover:text-black">
                        HOME
                    </a>
                    <a
                        href="/schedule"
                        class="z-10 m-4 text-gray-500 hover:text-black"
                    >
                        SCHEDULE
                    </a>
                    <a
                        href="/results"
                        class="z-10 m-4 text-gray-500 hover:text-black"
                    >
                        RESULTS
                    </a>
                    <a
                        href="/coaches"
                        class="z-10 m-4 text-gray-500 hover:text-black"
                    >
                        COACHES
                    </a>
                    <a
                        href="/athletes"
                        class="z-10 m-4 text-gray-500 hover:text-black"
                    >
                        ATHLETES
                    </a>
                    <MediaDropdown />
                </div>
            )}
        </>
    )
}

export default Taskbar
