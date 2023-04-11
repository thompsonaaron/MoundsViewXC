import { useEffect, useState } from 'preact/hooks'

import AlexandriaPodiumSmall from '../../assets/alexandria-win-small.webp'
import AlexandriaPodiumMedium from '../../assets/alexandria-win-medium.webp'
import AlexandriaPodiumLarge from '../../assets/alexandria-win-large.webp'

import HerbertHugsSmall from '../../assets/herbert-hugs-small.webp'
import HerbertHugsMedium from '../../assets/herbert-hugs-medium.webp'
import HerbertHugsLarge from '../../assets/herbert-hugs-large.webp'

import Rosemount2015Small from '../../assets/rosemount-start-small.webp'
import Rosemount2015Medium from '../../assets/rosemount-start-medium.webp'
import Rosemount2015Large from '../../assets/rosemount-start-large.webp'

import SEC2015Small from '../../assets/2015-cc-conference-walking-small.webp'
import SEC2015Medium from '../../assets/2015-cc-conference-walking-medium.webp'
import SEC2015Large from '../../assets/2015-cc-conference-walking-large.webp'

import FourPeatSmall from '../../assets/four-peat-small.webp'
import FourPeatMedium from '../../assets/four-peat-medium.webp'
import FourPeatLarge from '../../assets/four-peat-large.webp'

import ThreePeatSmall from '../../assets/three-peat-small.webp'
import ThreePeatMedium from '../../assets/three-peat-medium.webp'
import ThreePeatLarge from '../../assets/three-peat-large.webp'

import clsx from 'clsx'

// note missing rosemoutn tshirts, five-peat files

const imageList = [
    {
        small: Rosemount2015Small,
        medium: Rosemount2015Medium,
        large: Rosemount2015Large,
    },
    { small: FourPeatSmall, medium: FourPeatMedium, large: FourPeatLarge },
    { small: SEC2015Small, medium: SEC2015Medium, large: SEC2015Large },
    {
        small: HerbertHugsSmall,
        medium: HerbertHugsMedium,
        large: HerbertHugsLarge,
    },
    {
        small: AlexandriaPodiumSmall,
        medium: AlexandriaPodiumMedium,
        large: AlexandriaPodiumLarge,
    },
    { small: ThreePeatSmall, medium: ThreePeatMedium, large: ThreePeatLarge },
]

const Carousel = () => {
    const [imageNum, setImageNum] = useState(0)

    const imageSrcs = imageList.map((img, index) => (
        <img
            srcset={`${img.small} 300w, ${img.medium} 800w, ${img.large} 1200w`}
            sizes="(max-width: 400px) 300px, (max-width: 900px) 800px, 1200px"
            src={img.medium}
            object-fit="contain"
            alt="team photo"
            class={clsx(
                'transition-opacity duration-1000 ease-in-out max-w-full md:max-w-3xl',
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
            8000
        )
        return () => clearInterval(interval)
    }, [])

    return (
        <div class="relative w-full">
            {imageSrcs.map((img, index) => (
                <div
                    class={clsx(
                        'flex justify-center w-full h-fit absolute top-0 left-0 items-start',
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
