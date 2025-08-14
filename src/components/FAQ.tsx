import React from 'react'

// import {Accordion, AccordionItem} from "@heroui/react";
import {Accordion, AccordionItem} from "@heroui/accordion";
function FAQ() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className='w-full px-4 container mx-auto lg:max-w-[70%] inter-medium space-y-4 grid lg:grid-cols-3 grid-cols-1 justify-between'>
    <div>
        <img className='rounded-full w-full items-center justify-end px-0 relative -top-20' src="https://jsmastery.com/_next/image?url=%2Fassets%2Fgeneral%2Fimages%2Fcharacter-1.webp&w=640&q=75" alt="" />
    </div>
    <div className='col-span-2'>
    <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
        </AccordionItem>
    </Accordion>
    </div>
    
    </div>
  )
}

export default FAQ

