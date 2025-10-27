import React from 'react';
import MciContainer from '../components/MciContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Qs: { question: string; answer: string }[] = [
  {
    question: 'How can I report a problem on your website?',
    answer:
      'Our online team is working hard to make sure you have an excellent experience on Showitwithmackie.com Should you find an error or bug, please send us a message at info@showitwithmackie.com',
  },
  {
    question: 'How can I participate as an artist?',
    answer:
      'you will need to create and account as a singer, then upload your song',
  },
  {
    question: 'Who organizes Show it with Mackie?',
    answer: 'the mother company',
  },
];
function page() {
  return (
    <MciContainer className="relative z-0 bg-[url('/how-it-works.png')] bg-cover bg-center bg-no-repeat py-[120px] text-white">
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <Accordion type="single" collapsible className="w-full">
        {Qs.map((q, i) => (
          <AccordionItem key={`${i} - ${q.question}`} value={`${i + 1}`}>
            <AccordionTrigger className="group [&>svg]:hidden">
              <div className="flex w-full items-center">
                <span className="flex-1 text-left">{`${i + 1}. ${
                  q.question
                }`}</span>
                <div className="flex h-6 w-6 items-center justify-center">
                  <div className="h-5 w-5 group-data-[state=open]:hidden">
                    <PlusIcon />
                  </div>
                  <div className="h-5 w-5 group-data-[state=closed]:hidden">
                    <MinusIcon />
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MciContainer>
  );
}

export default page;

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3Z"
      fill="white"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.5 10.5H5.5C4.67157 10.5 4 11.1716 4 12C4 12.8284 4.67157 13.5 5.5 13.5H18.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5Z"
      fill="white"
    />
  </svg>
);
