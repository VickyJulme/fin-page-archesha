import React from 'react'
import React, { useState } from "react";


const FAQ2 = () => {


    const FAQ = () => {
        const [openIndex, setOpenIndex] = useState(null);
      
        const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
    
  
  return (
    


    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "A basic understanding of organizational structures, employee management, and basic HR functions is helpful. Familiarity with human resources practices, labor laws, and communication skills will enhance your learning. An interest in people management and organizational behavior is beneficial.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
              "Yes, the HR workshop is designed to accommodate beginners. It covers fundamental concepts and practices, providing a solid foundation in human resources. The content is tailored to introduce key HR principles and practices in a comprehensive and accessible manner.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },
          {
            question: "Can I cancel my enrollment and get a refund?",
            answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500 underline hover:text-blue-700">click here</a>.',
          },
        ].map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-blue-600 font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>

    </div>
    
    }
}

export default FAQ2