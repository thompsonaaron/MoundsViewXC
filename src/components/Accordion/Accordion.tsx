import { useState } from "preact/hooks";

interface AccordionProps {
  title: string;
  children: any;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        class="flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div class="text-md md:text-xl">{title}</div>
        <div class="text-xl">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div class="pl-4 flex text-sm md:text-lg">{children}</div>}
    </div>
  );
};

export default Accordion;
