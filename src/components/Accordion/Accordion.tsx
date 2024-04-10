import { useState } from 'preact/hooks'

interface AccordionProps {
    title: string
    links: { text: string; href: string }[]
}

const Accordion = ({ title, links }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)

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
                class={`overflow-hidden transition-all duration-1000 ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                } pl-4 mb-1 flex text-sm md:text-lg`}
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
