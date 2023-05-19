import { RefObject } from 'preact'
import { useEffect } from 'preact/hooks'

export const useOnClickOutside = (
    refProp: RefObject<HTMLElement>,
    handler: (event: any) => void,
    listenerObject?: RefObject<HTMLElement>
) => {
    useEffect(() => {
        const el = refProp?.current

        const listener = (e: any) => {
            e.preventDefault

            if (!el || el.contains(e.target)) {
                return
            } else {
                handler(e)
            }
        }

        if (listenerObject) {
            listenerObject.current?.addEventListener('click', listener)
        } else {
            document.addEventListener('click', listener)
        }

        return () => {
            if (listenerObject) {
                listenerObject.current?.removeEventListener('click', listener)
            } else {
                document.removeEventListener('click', listener)
            }
        }
    }, [refProp, listenerObject, handler])
}

export default useOnClickOutside
