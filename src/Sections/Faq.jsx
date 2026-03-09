import React, { useState } from "react";
import "./Faq.css";
import { FaArrowCircleRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is web domain and hosting?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
  },
  {
    id: 2,
    question: "Which server is best for websites linux or windows?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
  },
  { 
    id: 3,
    question: "Google cloud or Amazon server which one is best and fast?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
  },
  {
    id: 4,
    question: "Why Organic SEO is important for all businesses?",
    answer:
      "Organic SEO helps businesses get long-term traffic from search engines without paying for ads."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Simple validation example
  if (!faqData || faqData.length === 0) {
    return <p className="error">No FAQs available</p>;
  }

  return (
    <div id="faqs" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>FAQ's</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={faq.id}>
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="left-icon">
                  <FaArrowCircleRight />
                </span>

                <span className="question-text">{faq.question}</span>

                <span className="right-icon">
                  {activeIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;