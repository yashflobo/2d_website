import SectionWrapper from '../layout/SectionWrapper'
import { faqs } from '../../data/content'
import { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper id='faq' eyebrow='FAQ' headline='Answers for parents and schools'>
      <div className='space-y-4'>
        {faqs.general.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <button
              key={faq.question}
              className='w-full rounded-3xl border border-white/10 bg-white/[0.02] p-5 text-left text-white transition hover:border-white/30'
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className='flex items-center justify-between gap-4'>
                <p className='font-display text-lg'>{faq.question}</p>
                <span className='text-2xl text-aurora-200'>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && <p className='mt-3 text-ink-200'>{faq.answer}</p>}
            </button>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default FAQSection

