import { useEffect, useRef, useState } from 'preact/hooks'

interface AccordionProps {
    title: string
    links: { text: string; href: string }[]
}

const Accordion = ({ title, links }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>()

    // const resize = () => {
    //     setIsOpen((prevState) => !prevState)
    // }

    useEffect(() => {
        const resultsList = ref.current
        if (resultsList) {
            resultsList.style.maxHeight = isOpen
                ? `${resultsList.scrollHeight}px`
                : '0px'

            resultsList.style.transitionTimingFunction = isOpen
                ? `ease-out`
                : 'ease-in'

            resultsList.style.transitionDuration = isOpen ? `500ms` : '250ms'
        }
    }, [isOpen])

    return (
        <div>
            <div
                class="flex flex-row justify-between items-center cursor-pointer active:text-green-500"
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <div class="text-md md:text-xl">{title}</div>
                <div class="text-xl">{isOpen ? '-' : '+'}</div>
            </div>
            <div
                aria-hidden={isOpen}
                class={`overflow-hidden transition-all max-h-0 pl-4 mb-1 flex text-sm md:text-lg`}
                ref={ref}
            >
                <ul class={`mx-2`}>
                    {links.map((link) => (
                        <li class="my-1">
                            <a
                                href={link.href}
                                target="_blank"
                                class="hover:text-green-500"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Accordion
