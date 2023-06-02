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

const SEC2015Small = './images/conf-walking-small.webp'
const SEC2015Medium = './images/conf-walking-medium.webp'
const SEC2015Large = './images/conf-walking-large.webp'

const ThreePeatSmall = './images/three-peat-small.webp'
const ThreePeatMedium = './images/three-peat-medium.webp'
const ThreePeatLarge = './images/three-peat-large.webp'

const WillSmall = './images/will-small.webp'
const WillMedium = './images/will-medium.webp'
const WillLarge = './images/will-large.webp'

const NxrChampsSmall = './images/nxr-champions-small.webp'
const NxrChampsMedium = './images/nxr-champions-medium.webp'
const NxrChampsLarge = './images/nxr-champions-large.webp'

const Section2022WarmupSmall = '/images/2022-section-warmup-small.webp'
const Section2022WarmupMedium = './images/2022-section-warmup-medium.webp'
const Section2022WarmupLarge = './images/2022-section-warmup-large.webp'

import clsx from 'clsx'

// resize images to 16:9 here: https://www.xconvert.com/crop-webp
// compress here: https://tinypng.com/

const imageList = [
    {
        small: Rosemount2015Small,
        medium: Rosemount2015Medium,
        large: Rosemount2015Large,
    },
    {
        small: Section2022WarmupSmall,
        medium: Section2022WarmupMedium,
        large: Section2022WarmupLarge,
    },
    { small: SEC2015Small, medium: SEC2015Medium, large: SEC2015Large },
    {
        small: HerbertHugsSmall,
        medium: HerbertHugsMedium,
        large: HerbertHugsLarge,
    },
    { small: WillSmall, medium: WillMedium, large: WillLarge },
    {
        small: AlexandriaPodiumSmall,
        medium: AlexandriaPodiumMedium,
        large: AlexandriaPodiumLarge,
    },
    { small: ThreePeatSmall, medium: ThreePeatMedium, large: ThreePeatLarge },
    { small: NxrChampsSmall, medium: NxrChampsMedium, large: NxrChampsLarge },
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
            {/* Doesn't seem to look great on an iphone */}
            <source
                media="(max-width: 425px)"
                type="image/webp"
                srcset={img.medium}
                width="400"
                height="225"
            />
            <source
                media="(max-width: 800px)"
                type="image/webp"
                srcset={img.medium}
                width="800"
                height="450"
            />
            <source
                media="(min-width: 801px)"
                type="image/webp"
                srcset={img.large}
                width="1200"
                height="675"
            />
            <img src={img.medium} alt="Team photo" />
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
            5000
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
