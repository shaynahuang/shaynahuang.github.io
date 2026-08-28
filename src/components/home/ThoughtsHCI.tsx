import React from "react";

export default function ThoughtsHCI() {
  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 display-script">Thoughts on HCI</h2>
      <div className="space-y-4 text-lg text-gray-900 leading-relaxed">
        <p>
          I see HCI as a river that shapes how people live and produce. HCI researchers navigate its rocky terrain, exploring where the current might lead, how its course might expand, and how it can nourish the world around it.
        </p>
        
          My current research spans Extended Reality (XR), Human–AI Interaction, and the study of human needs and behavior. My ultimate research vision is to develop elegant approaches that enable people to live and work effortlessly with emerging technologies.
        <p>
          As a junior researcher, I am trying to observe and absorb as much as possible at the current stage. As an 'overthinker', I really enjoy exchanging thoughts with independent minds. If my work resonates with you, I would be delighted to connect and have a conversation.
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="https://scholar.google.com/citations?user=r40YVWsAAAAJ&hl=zh-CN&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white text-accent rounded-lg shadow-soft hover:bg-accent/5 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
          Google Scholar
        </a>
        <a
          href="/pdfs/CV_Huang.pdf"
          className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg shadow-soft hover:bg-accent-dark transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </div>
    </section>
  )
}


