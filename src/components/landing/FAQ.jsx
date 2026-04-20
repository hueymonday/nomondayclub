import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "I've never run before. Can I still join?",
      answer:
        "Yes. NMC has no requirements for speed or experience. Walk, jog, or run — it's all fine. The only goal is to get outside and move.",
    },
    {
      id: 2,
      question: "I'm not great with new people. Is that okay?",
      answer:
        'Completely fine. NMC doesn\'t have a "be social immediately" culture — everyone joins at their own pace. Some members run and head straight home. Others stop for a few minutes to chat. No pressure either way.',
    },
    {
      id: 3,
      question: "Is there a membership fee?",
      answer:
        "Free. NMC is a community, not a service. All you need is a pair of shoes.",
    },
    {
      id: 4,
      question: "Can I run solo and still be a member?",
      answer:
        "Absolutely. NMC members don't have to run with the group every session. Sometimes just knowing there are people on the same schedule, feeling the same things — is enough.",
    },
    {
      id: 5,
      question: "How do I become a member?",
      answer:
        "Fill in the registration form on this page, it takes about a minute. Once registered, you'll receive the run schedule and updates from NMC.",
    },
  ];
  return (
    <section className="w-full h-fit flex flex-col gap-16 py-40 px-8">
      {/* heading */}
      <div className="w-full h-fit flex flex-col font-Manrope ">
        <span className="text-base text-[#555] font-light leading-[1.5em]">
          FAQ
        </span>
        <span className="text-[52px] font-medium leading-[1.3em] tracking-[-0.03em]">
          Everything you need to know
        </span>
      </div>

      {/* FAQs */}
      <div className="w-166 mx-auto h-fit flex items-center justify-center">
        <Accordion
          type="multiple"
          collapsible
          defaultValue="item-1"
          className="max-w-186 font-Manrope"
        >
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
