# MoundsViewXC

Google API: this was an option to allow others to post updates

# Fontaine vs fontsource

Both appear to have minimal content layout shift with Montserrat and Quattrocento Sans. Fontsource downloads fonts from npm via package.json ("@fontsource/montserrat": "^4.5.14", "@fontsource/quattrocento-sans": "^4.5.10") whereas fontaine requires that you download fonts directly. Both work and reduce an extra XHR request.
