import clsx from 'clsx'
import { useState } from 'preact/hooks'

const MediaDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div class="flex flex-col my-4 md:my-0">
            <div class="flex relative cursor-pointer m-0 p-0 items-center text-gray-500 hover:text-black active:text-black">
                <span
                    class="mx-4 md:mx-6 z-50"
                    onClick={() => setIsOpen((prevValue) => !prevValue)}
                >
                    MEDIA
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class={clsx(
                            'transition-all duration-100 ease-in-out self-right inline-block my-auto h-4 mx-1',
                            {
                                '-rotate-90 md:rotate-180': isOpen,
                                'rotate-0': !isOpen,
                            }
                        )}
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="currentColor"
                                d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z"
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
            <div class="relative text-left left-2">
                <ul
                    class={clsx(
                        'absolute m-0 bg-white w-full px-4 py-2 -top-24 md:-top-8 left-12 md:left-0 flex flex-col transition-all duration-1000 ease-in-out',
                        {
                            'static flex z-100 bg-none opacity-100 z-50 pointer-events-auto':
                                isOpen,
                            'translate-x-12 md:translate-y-10 md:translate-x-0':
                                isOpen,
                            'pointer-events-none duration-1000 ease-in-out translate-x-0 md:translate-y-0 opacity-0 z-0':
                                !isOpen,
                        }
                    )}
                >
                    <li class="pl-1 text-gray-500 hover:text-black">
                        <a
                            href="https://drive.google.com/drive/folders/1H3ylnU-YObwLsxTl_6p0jx5q7CfF0Utp?usp=sharing"
                            target="_blank"
                        >
                            Meet Info
                        </a>
                    </li>
                    <li class="pl-1 text-gray-500 hover:text-black">
                        <a
                            href="http://moundsviewboyscrosscountry.shutterfly.com/"
                            target="_blank"
                        >
                            XC Photos
                        </a>
                    </li>
                    <li class="pl-1 text-gray-500 hover:text-black">
                        <a
                            href="https://moundsviewboystrack2017.shutterfly.com/#"
                            target="_blank"
                        >
                            TF Photos
                        </a>
                    </li>
                    <li class="pl-1 text-gray-500 hover:text-black">
                        <a
                            href="https://www.youtube.com/channel/UCg_Z3H_nyqWZvTqml7jGIwQ?view_as=subscriber"
                            target="_blank"
                        >
                            Videos
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MediaDropdown
