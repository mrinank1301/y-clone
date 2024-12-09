"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What are the advantages of using a points-based system?",
      answer: "A points-based system provides a transparent and objective way to evaluate immigration applications based on various factors such as age, education, work experience, and language proficiency."
    },
    {
      question: "What are the advantages of using a points-based system when evaluating immigration applicants?",
      answer: "The points-based system helps ensure fair and consistent evaluation of all applicants, making the immigration process more transparent and merit-based."
    },
    {
      question: "What are the general criteria for calculating points?",
      answer: "Points are typically calculated based on factors such as age, education level, work experience, language proficiency, adaptability, and arranged employment."
    },
    {
      question: "How many points do I need for Canada Express Entry?",
      answer: "For Canada Express Entry, you typically need a minimum of 67 points out of 100 to be eligible. However, the actual points needed for an invitation to apply may vary based on draw cutoffs."
    },
    {
      question: "Can I make profile with Express Entry of Canada if I score less than 67 points?",
      answer: "No, you need a minimum of 67 points to be eligible for Express Entry. However, you may explore other immigration programs or work on improving your score."
    },
    {
      question: "Is there an upper age limit for Express Entry for permanent residence in Canada?",
      answer: "While there's no strict upper age limit, the points awarded for age decrease after 35 years, which may affect your overall score."
    },
    {
      question: "How many points for Australia eligibility calculation?",
      answer: "For Australia's Skilled Migration program, you typically need a minimum of 65 points. The exact requirement may vary based on the visa subclass and occupation."
    },
    {
      question: "Can I make SkillSelect profile for Australia if I don't get 65 points?",
      answer: "No, 65 points is the minimum requirement for creating a SkillSelect profile. Consider improving your points score or exploring alternative visa options."
    },
    {
      question: "What's the difference between Canada's Express Entry and SkillSelect?",
      answer: "While both are points-based systems, Express Entry is for Canada and requires 67 points, while SkillSelect is for Australia and requires 65 points. They also have different criteria and evaluation methods."
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

