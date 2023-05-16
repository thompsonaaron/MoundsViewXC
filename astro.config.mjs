import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import { FontaineTransform } from 'fontaine'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [preact(), tailwind()],
    site: 'https://thompsonaaron.github.io',
    // vite: {
    //     plugins: [
    //         FontaineTransform.vite({
    //             fallbacks: ['Arial'],
    //             resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
    //         }),
    //     ],
    // },
})
