import { useEffect, useState } from 'preact/hooks'

import Alexandria from '../../assets/img-4530_orig.jpg'
import Hugs from '../../assets/img-7128_orig.jpg'
import Rosemount2015 from '../../assets/img-2015-rosemount-start.jpg'
import SEC2015 from '../../assets/img-2015-cc-conference-walking.jpg'
import SectionsFourPeat from '../../assets/img-8187_orig.jpg'
import SectionsTeam from '../../assets/img-3485_orig.jpg'
import clsx from 'clsx'

const imageList = [
    Rosemount2015,
    SectionsFourPeat,
    SEC2015,
    Hugs,
    Alexandria,
    SectionsTeam,
]

const Carousel = () => {
    const [imageNum, setImageNum] = useState(0)

    const imageSrcs = imageList.map((img, index) => (
        <img
            src={img}
            // style={{ maxWidth: '50%' }}
            height="100%"
            //@ts-ignore
            objectFit="contain"
            alt="team photo"
            class={clsx(
                'transition-opacity duration-1000 ease-in-out h-fit max-w-full md:max-w-3xl',
                {
                    'opacity-100': index === imageNum,
                    'opacity-0': index !== imageNum,
                    invisible: index !== imageNum,
                    visible: index === imageNum,
                }
            )}
        />
    ))

    useEffect(() => {
        const interval = setInterval(
            () =>
                setImageNum((currNum) => {
                    return currNum === imageSrcs.length - 1 ? 0 : currNum + 1
                }),
            2000
        )
        return () => clearInterval(interval)
    }, [])

    return (
        <div class="relative w-full">
            {imageSrcs.map((img, index) => (
                <div
                    class={clsx(
                        'flex justify-center w-full absolute top-0 left-0',
                        {
                            relative: index === 0,
                            absolute: index !== 0,
                        }
                    )}
                >
                    {img}
                </div>
            ))}
        </div>
    )
}

export default Carousel
