const BannerSmall = './images/banner-small.webp'
const BannerMedium = './images/banner-medium.webp'
const BannerLarge = './images/banner-large.webp'
const BannerXLarge = './images/banner-xlarge.webp'

const Banner = () => {
    return (
        <div class="relative w-screen">
            <img
                srcset={`${BannerSmall} 400w, ${BannerMedium} 800w, ${BannerLarge} 1200w, ${BannerXLarge} 1600w`}
                sizes="(max-width: 401px) 400px, (max-width: 801px) 800px, (max-width: 1201px): 1200px, 1600px"
                src={BannerLarge}
                object-fit="cover"
                alt="homepage-background"
                width="100%"
                style={{ maxHeight: '400px' }}
            />
            <h1 class="absolute text-xs md:text-xl right-10 bottom-4 md:bottom-6 font-bold">
                A tradition of Excellence
            </h1>
        </div>
    )
}

export default Banner
