import useOnClickOutside from '../../hooks/UseOnClickOutside'
import FadeIn from '../FadeIn/FadeIn'

import { useCallback, useEffect, useRef } from 'preact/hooks'

interface ModalProps {
    children: any
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    const backdropRef = useRef<HTMLDivElement>(null)
    const myRef = useRef<HTMLDivElement>(null)

    const handleClick = useCallback(() => {
        onClose()
    }, [onClose])

    useOnClickOutside(myRef, handleClick, backdropRef)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    useEffect(() => {
        const onKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Escape' && isOpen) {
                onClose()
            }
        }

        document.addEventListener('keyup', onKeyUp)

        return () => {
            document.removeEventListener('keyup', onKeyUp)
        }
    }, [isOpen, onClose])

    return isOpen ? (
        <FadeIn>
            <div
                id="backdrop"
                class="flex items-center bg-neutral-300 opacity-100 flex-1 h-full w-full justify-center fixed z-50 top-0 left-0 overflow-scroll"
            >
                {children && (
                    <>
                        <div
                            id="banner"
                            class="items-center bg-white border-2 border-solid border-slate-300 p-8"
                        >
                            {children}
                        </div>
                    </>
                )}
            </div>
        </FadeIn>
    ) : null
}

export default Modal
