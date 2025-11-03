import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] font-sans">
      <main className="mx-auto max-w-3xl px-8 py-16">
        <div className="mb-12 flex items-start gap-8">
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={112}
              height={112}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="mb-2 text-5xl font-bold text-[#E0E0E0]">
              Hello, I&apos;m Farish Jamal
            </h1>
            <p className="mb-3 text-2xl text-[#E0E0E0]">I&apos;m a software engineer</p>
            <p className="mb-2 text-sm text-[#E0E0E0]">
               farishjamal98@gmail.com
            </p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/farish-jamal/" className="text-sm text-[#E0E0E0] underline hover:text-[#B0B0B0]">LinkedIn</a>
              <span className="text-[#404040]">•</span>
              <a href="https://leetcode.com/u/shutupfarish/" className="text-sm text-[#E0E0E0] underline hover:text-[#B0B0B0]">Leetcode</a>
              <span className="text-[#404040]">•</span>
              <a href="https://github.com/farish-jamal" className="text-sm text-[#E0E0E0] underline hover:text-[#B0B0B0]">Github</a>
              <span className="text-[#404040]">•</span>
              <a href="https://x.com/shutupfarish" className="text-sm text-[#E0E0E0] underline hover:text-[#B0B0B0]">Twitter</a>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-[#2A2A2A]" />
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-[#E0E0E0]">About</h2>
          <div className="mb-4 h-px w-full bg-[#2A2A2A]" />
          <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
            <p className="mb-4 text-sm leading-6 text-[#CFCFCF]">
              I am a full‑stack engineer with 1.5+ years of experience building performant, scalable web applications in high‑velocity startup environments. I specialize in translating ambiguous product goals into clean, production‑ready systems that are resilient, observable, and easy to evolve.
            </p>
            <p className="mb-4 text-sm leading-6 text-[#CFCFCF]">
              My toolkit centers on JavaScript, React, Node.js, Express.js, and MongoDB, complemented by RESTful API design and real‑time systems with Socket.IO. I’ve delivered end‑to‑end features—owning schema design, API ergonomics, UI architecture, and developer tooling—consistently improving latency, reliability, and user experience.
            </p>
            <p className="text-sm leading-6 text-[#CFCFCF]">
              I thrive in collaborative, iterative teams and take pride in writing code that balances clarity with pragmatism. I’m relentlessly curious, exploring new technologies and patterns to reduce complexity, enhance performance, and accelerate delivery. If you’re seeking a results‑driven engineer who can navigate complexity and create meaningful impact across the stack, I’d be glad to connect.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-[#E0E0E0]">Education</h2>
          <div className="mb-4 h-px w-full bg-[#2A2A2A]" />
          <div className="space-y-4">
            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#E0E0E0]">MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY</h3>
                  <p className="text-[#E0E0E0]">BTech Electronics and Communication Engineering</p>
                  <p className="text-sm text-[#B0B0B0]">New Delhi, India</p>
                </div>
                <span className="rounded-full border border-[#2A2A2A] bg-[#121212] px-2 py-0.5 text-xs text-[#B0B0B0]">Sept. 2023 – Present</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#E0E0E0]">JAMIA MILLIA ISLAMIA</h3>
                  <p className="text-[#E0E0E0]">Diploma, Computer Science Engineering</p>
                  <p className="text-sm text-[#B0B0B0]">New Delhi, India</p>
                </div>
                <span className="rounded-full border border-[#2A2A2A] bg-[#121212] px-2 py-0.5 text-xs text-[#B0B0B0]">Dec. 2019 – Feb 2023</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-[#E0E0E0]">Skills</h2>
          <div className="mb-4 h-px w-full bg-[#2A2A2A]" />
          <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {["JavaScript (ES6+)", "HTML5", "CSS3", "C++", "Python", "React.js", "React Native", "Next.js", "Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth", "Socket.IO", "Prisma", "Agenda", "fastAPI", "MongoDB", "Mongoose", "Firebase", "Amazon S3", "Redis", "Git", "GitHub", "Swagger", "Multer", "Cloudinary"].map((skill) => (
                  <div key={skill} className="rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-2.5 py-1 text-xs text-[#CFCFCF]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-[#E0E0E0]">Experience</h2>
          <div className="mb-4 h-px w-full bg-[#2A2A2A]" />
          <div className="space-y-4">
            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-[#E0E0E0]">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-[#E0E0E0]">NajCode Pvt. Ltd.</h3>
                    <p className="text-[#E0E0E0]">
                      Backend Developer Intern
                    </p>
                    <p className="text-sm text-[#B0B0B0]">Remote — India</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#2A2A2A] bg-[#121212] px-2 py-0.5 text-xs text-[#B0B0B0]">Apr 2025 – Present</span>
              </div>
              <ul className="ml-12 space-y-2 text-sm text-[#CFCFCF]">
                <li>• Architected and deployed scalable backend systems using Node.js, Express.js, and MongoDB, reducing API latency by 40% through optimized query design and caching.</li>
                <li>• Integrated third-party services like Razorpay, Shiprocket, and Cloudinary, automating 90% of payment, logistics, and media workflows.</li>
                <li>• Built AI-powered content automation using OpenAI and Gemini APIs to generate hyperrealistic product visuals, reducing manual design effort by 70%.</li>
                <li>• Implemented secure authentication, referral wallet logic, and modular RESTful APIs, improving system reliability and code maintainability by 35%.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center text-[#E0E0E0]">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-[#E0E0E0]">Sewzee</h3>
                    <p className="text-[#E0E0E0]">Full Stack Developer (Internship)</p>
                    <p className="text-sm text-[#B0B0B0]">Remote — Noida, India</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#2A2A2A] bg-[#121212] px-2 py-0.5 text-xs text-[#B0B0B0]">Mar 2024 – Mar 2025</span>
              </div>
              <ul className="ml-12 space-y-2 text-sm text-[#CFCFCF]">
                <li>• Boosted backend efficiency by 40% through optimized MongoDB schema design, query refactoring, and caching strategies.</li>
                <li>• Configured real-time chat, presence tracking, and push notifications using Socket.IO, increasing user engagement by 30%.</li>
                <li>• Accelerated development velocity by 50% by building modular REST APIs and reusable React components for scalable feature rollouts.</li>
                <li>• Streamlined data workflows and API interactions, reducing server response times and improving overall system reliability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-2 text-2xl font-bold text-[#E0E0E0]">Projects</h2>
          <div className="mb-4 h-px w-full bg-[#2A2A2A]" />
          <div className="space-y-4">
            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-bold text-[#E0E0E0]">Cove — Real-Time Chat App</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/ragOp/cove-BE" className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 text-xs text-[#CFCFCF] hover:bg-[#222]" title="GitHub">
                    View Code ↗
                  </a>
                </div>
              </div>
              <p className="mb-3 text-sm text-[#B0B0B0]">Mar 2025 – Present</p>
              <ul className="mb-3 space-y-1 text-sm text-[#CFCFCF]">
                <li>• Designed and developed a scalable backend using Node.js, Express.js, and Socket.IO enabling real-time chat, typing indicators, read receipts, and presence tracking.</li>
                <li>• Enabled secure authentication and access control via JWT with end-to-end message encryption.</li>
                <li>• Structured and optimized data models in MongoDB with Mongoose, handling users, chats, messages, and friend requests efficiently.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "Socket.IO", "MongoDB", "Mongoose", "JWT", "Amazon S3", "Redis", "Encryption"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#CFCFCF]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-bold text-[#E0E0E0]">Full Stack E-Commerce Platform for Pet Products</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/ragOp/pet-caart-BE" className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 text-xs text-[#CFCFCF] hover:bg-[#222]" title="GitHub">
                    View Code ↗
                  </a>
                  <a href="https://petcaart.com/" className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 text-xs text-[#CFCFCF] hover:bg-[#222]" title="GitHub">
                    Live Demo ↗
                  </a>
                </div>
              </div>
              <p className="mb-3 text-sm text-[#B0B0B0]">Jul 2024 – Sep 2024</p>
              <ul className="mb-3 space-y-1 text-sm text-[#CFCFCF]">
                <li>• Engineered a scalable e-commerce platform with end-to-end features including authentication, product management, coupons, and order tracking.</li>
                <li>• Implemented an OTP-based login and referral wallet system, rewarding users for successful referrals on their first purchase.</li>
                <li>• Built a dynamic, CMS-driven admin dashboard to manage homepage content, categories, coupons, and inventory in real-time and implemented sales analytics using MongoDB aggregation pipelines for business insights.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "React.js", "TailwindCSS", "Razorpay", "Shiprocket API", "Cloudinary"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#CFCFCF]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-bold text-[#E0E0E0]">Clip AI (Backend)</h3>
                <div className="flex gap-2">
                  <a href="https://github.com/farish-jamal/ClipAI-BE" className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1 text-xs text-[#CFCFCF] hover:bg-[#222]" title="GitHub">
                    View Code ↗
                  </a>
                </div>
              </div>
              <p className="mb-3 text-sm text-[#B0B0B0]">2025</p>
              <ul className="mb-3 space-y-1 text-sm text-[#CFCFCF]">
                <li>• Developed the backend for an AI‑powered video clipping system using Gemini API and ElevenLabs to auto‑generate highlights from long‑form videos.</li>
                <li>• Designed and implemented RESTful APIs for video upload, transcription, summarization, and AI‑driven clip generation.</li>
                <li>• Integrated speech‑to‑text and voice synthesis workflows with scalable, asynchronous processing pipelines.</li>
                <li>• Optimized performance and response times via queue‑based job handling and cloud‑first optimization.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["ElevenLabs APIs", "MongoDB", "TypeScript", "Prisma", "Express.js", "Gemini 2.5 Flash", "Zod"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#CFCFCF]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-bold text-[#E0E0E0]">AI Fitness Coach App</h3>
                <div className="flex gap-2" />
              </div>
              <p className="mb-3 text-sm text-[#B0B0B0]">2025</p>
              <ul className="mb-3 space-y-1 text-sm text-[#CFCFCF]">
                <li>• Built an AI‑powered fitness assistant that generates personalized workout and diet plans using Google Gemini API.</li>
                <li>• Designed backend APIs for AI chat awareness enabling contextual responses and persistent conversation history in MongoDB.</li>
                <li>• Integrated ElevenLabs narration, image generation, and PDF export for an enhanced user experience.</li>
                <li>• Implemented a ChatGPT‑like conversational UI with dark/light mode and smooth Framer Motion animations.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Next.js 16", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Google Gemini API", "ElevenLabs", "Tailwind CSS", "Framer Motion", "jsPDF", "React Markdown"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#2A2A2A] bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#CFCFCF]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#E0E0E0]">
          Made with ❤️ by Farish Jamal
        </footer>
      </main>
    </div>
  );
}
