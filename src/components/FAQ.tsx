import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
      question: "What is WildGrowthHair oil?",  
      answer:"Wild Growth Hair Oil is a natural blend of oils and botanicals formulated to promote hair growth, reduce breakage, and improve hair texture."
    },
    {
        question: "How often should I use WildGrowthHair oil?",
        answer: "For best results, we recommend using WildGrowthHair oil 1-2 times per week intially, gradually increaseing 3 times per week as disired for best results. Apply it to your scalp and hair, then massage gently to promote absorption and hydration, leaving it on for at least 30 minutes or overnight before washing."
    },
    {
        question: "Is WildGrowthHair oil suitable for all hair types?",
        answer: "Yes! Our oil is specially formulated to work with all hair types and textures. Whether you have straight, wavy, curly, or coily hair, our natural ingredients will help nourish and strengthen your hair."
    },
    {
        question: "How long until I see results?",
        answer: "Most customers start seeing improvements in hair texture and shine within 2-3 weeks of regular use. For significant growth results, consistent use for 2-3 months is recommended."
    },
    {
        question: "Can I use the oil on color-treated hair?",
        answer: "Yes, our oil is safe for color-treated hair. In fact, the natural ingredients help protect and maintain your hair color while providing nourishment."
    },
    {
        question: "Can Wild Growth Hair Oil make my hair grow faster?",
        answer: "While it may not drastically speed up growth, consistent use can strengthen hair, reduce breakage, and create healthier growth conditions. Individual results vary."
    },
    {
        question: "Does Wild Growth Hair Oil work for thinning hair or bald spots?",
        answer: "It can help improve the appearance of thinning hair by nourishing the scalp and hair follicles, though results depend on the underlying cause of hair loss."
    },
    {
        question: "Can I use Wild Growth Hair Oil with other products?",
        answer: "Yes, it can be combined with other hair care products. Just avoid overloading your hair with oils to prevent buildup."
    },
    {
        question: "Is it safe for children?",
        answer: "Consult a pediatrician before using Wild Growth Hair Oil on young children to ensure safety for their sensitive scalps."
    }
   
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to common questions about WildGrowthOils products
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openItems.includes(index) ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}