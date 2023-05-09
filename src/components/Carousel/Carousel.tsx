import { useEffect, useState } from 'preact/hooks'

const AlexandriaPodiumSmall = './images/alexandria-win-small.webp'
const AlexandriaPodiumMedium = './images/alexandria-win-medium.webp'
const AlexandriaPodiumLarge = './images/alexandria-win-large.webp'

const HerbertHugsSmall = './images/herbert-hugs-small.webp'
const HerbertHugsMedium = './images/herbert-hugs-medium.webp'
const HerbertHugsLarge = './images/herbert-hugs-large.webp'

const Rosemount2015Small = './images/rosemount-start-small.webp'
const Rosemount2015Medium = './images/rosemount-start-medium.webp'
const Rosemount2015Large = './images/rosemount-start-large.webp'

const SEC2015Small = './images/2015-cc-conference-walking-small.webp'
const SEC2015Medium = './images/2015-cc-conference-walking-medium.webp'
const SEC2015Large = './images/2015-cc-conference-walking-large.webp'

const FourPeatSmall = './images/four-peat-small.webp'
const FourPeatMedium = './images/four-peat-medium.webp'
const FourPeatLarge = './images/four-peat-large.webp'

const ThreePeatSmall = './images/three-peat-small.webp'
const ThreePeatMedium = './images/three-peat-medium.webp'
const ThreePeatLarge = './images/three-peat-large.webp'

import clsx from 'clsx'

// note missing rosemoutn tshirts, five-peat files
// resize images to 16:9 here: https://www.xconvert.com/crop-webp
// compress here: https://tinypng.com/

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
        <picture
            class={clsx(
                'transition-opacity duration-1000 ease-in-out max-w-full md:max-w-3xl',
                {
                    'opacity-100': index === imageNum,
                    'opacity-0': index !== imageNum,
                    invisible: index !== imageNum,
                    visible: index === imageNum,
                }
            )}
        >
            <source
                media="(max-width: 425px)"
                srcset={img.small}
                width="400"
                height="225"
            />
            <source
                media="(min-width: 800px)"
                srcset={img.medium}
                width="800"
                height="450"
            />
            <source
                media="(min-width: 801px)"
                srcset={img.large}
                width="1200"
                height="675"
            />
            <img src={img.medium} alt="Team photo" width="800" height="450" />
        </picture>
        // <img
        //     srcset={`${img.small} 400w, ${img.medium} 800w, ${img.large} 1200w`}
        //     sizes="(max-width:425px) 400px, (max-width:800px) 800px"
        //     src={img.medium}
        //     width="auto"
        //     // width="100%"
        //     object-fit="contain"
        //     alt="team photo"
        // class={clsx(
        //     'transition-opacity duration-1000 ease-in-out max-w-full md:max-w-3xl',
        //     {
        //         'opacity-100': index === imageNum,
        //         'opacity-0': index !== imageNum,
        //         invisible: index !== imageNum,
        //         visible: index === imageNum,
        //     }
        // )}
        // />
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
