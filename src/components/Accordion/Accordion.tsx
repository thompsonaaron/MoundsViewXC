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
        class="flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div class="text-md md:text-xl">{title}</div>
        <div class="text-xl">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div class={"transition ease-in-out delay-150 pl-4 mb-1 flex text-sm md:text-lg"}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
