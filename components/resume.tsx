"use client"

import { useState, useRef } from "react"
import { Menu, Download, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"
import ProfileSection from "@/components/profile-section"
import Sidebar from "@/components/sidebar"

export default function Resume() {
  const [expandedSections, setExpandedSections] = useState({
    education: true,
    experience: true,
    skills: true,
    activities: true,
  })

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
  }

  const printResume = () => {
    window.print()
  }

  // Images for the carousel
  const carouselImages = [
    "/placeholder.svg?height=200&width=800",
    "/placeholder.svg?height=200&width=800",
    "/placeholder.svg?height=200&width=800",
  ]

  return (
    <div className="flex min-h-screen bg-gray-100 print:bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Hamburger Menu - Hidden when printing */}
        <div className="print:hidden fixed top-4 left-4 z-50">
          <Button
            onClick={() => setSidebarOpen(true)}
            variant="outline"
            size="icon"
            className="bg-black text-white hover:bg-gray-800 border-none"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Main Resume Content */}
        <div ref={resumeRef} className="flex-1 max-w-[850px] mx-auto w-full bg-white shadow-lg print:shadow-none">
          {/* Image Carousel */}
          <div className="w-full h-[200px] bg-black print:hidden">
            <ImageCarousel images={carouselImages} />
          </div>

          {/* Print Button - Hidden when printing */}
          <div className="print:hidden p-4 flex justify-end">
            <Button onClick={printResume} className="bg-black hover:bg-gray-800 text-white">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <div className="p-8">
            {/* Profile Section with Picture */}
            <ProfileSection />

            {/* Education Section */}
            <section id="education" className="mb-8 bg-white p-6 border-l-4 border-black rounded shadow-sm">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("education")}
              >
                <h2 className="text-xl font-bold text-black">EDUCATION</h2>
                {expandedSections.education ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {expandedSections.education && (
                <div className="mt-4">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Lincoln High School</h3>
                      <span className="text-gray-600">Expected Graduation: June 2024</span>
                    </div>
                    <p className="text-gray-700">GPA: 3.95/4.0</p>
                    <p className="text-gray-700">
                      Relevant Coursework: AP Computer Science, AP Calculus BC, AP Physics, AP Statistics
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-8 bg-white p-6 border-l-4 border-black rounded shadow-sm">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("experience")}
              >
                <h2 className="text-xl font-bold text-black">EXPERIENCE</h2>
                {expandedSections.experience ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {expandedSections.experience && (
                <div className="mt-4">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Web Development Intern</h3>
                      <span className="text-gray-600">June 2023 - August 2023</span>
                    </div>
                    <p className="text-gray-600 italic mb-2">TechStart Solutions</p>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>
                        Assisted in developing responsive websites for small businesses using HTML, CSS, and JavaScript
                      </li>
                      <li>Collaborated with a team of 5 developers to implement new features and fix bugs</li>
                      <li>Participated in daily stand-up meetings and weekly code reviews</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-semibold">Math Tutor</h3>
                      <span className="text-gray-600">September 2022 - Present</span>
                    </div>
                    <p className="text-gray-600 italic mb-2">Lincoln High School Math Center</p>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Provide one-on-one and small group tutoring in Algebra, Geometry, and Calculus</li>
                      <li>Develop personalized study plans for students struggling with mathematical concepts</li>
                      <li>Improved average student test scores by 15% over one semester</li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-8 bg-white p-6 border-l-4 border-black rounded shadow-sm">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection("skills")}>
                <h2 className="text-xl font-bold text-black">SKILLS</h2>
                {expandedSections.skills ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {expandedSections.skills && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h3 className="font-semibold mb-2">Technical Skills</h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Programming Languages: Java, Python, JavaScript</li>
                      <li>Web Development: HTML, CSS, React</li>
                      <li>Tools: Git, VS Code, Adobe Creative Suite</li>
                      <li>Data Analysis: Excel, Basic SQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Soft Skills</h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Leadership & Team Collaboration</li>
                      <li>Problem Solving & Critical Thinking</li>
                      <li>Time Management & Organization</li>
                      <li>Public Speaking & Presentation</li>
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* Activities & Awards Section */}
            <section id="activities" className="mb-8 bg-white p-6 border-l-4 border-black rounded shadow-sm">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("activities")}
              >
                <h2 className="text-xl font-bold text-black">ACTIVITIES & AWARDS</h2>
                {expandedSections.activities ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {expandedSections.activities && (
                <div className="mt-4">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Extracurricular Activities</h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>President, Computer Science Club (2022-Present)</li>
                      <li>Member, Math Competition Team (2021-Present)</li>
                      <li>Volunteer, Community Tech Workshop (2022-Present)</li>
                      <li>Editor, School Newspaper (2021-2023)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Awards & Achievements</h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>National Merit Scholarship Finalist (2023)</li>
                      <li>1st Place, Regional Coding Competition (2022)</li>
                      <li>AP Scholar with Distinction (2022)</li>
                      <li>Perfect Attendance Award (2020-2023)</li>
                    </ul>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            font-size: 12pt;
            background-color: white;
          }
          
          section {
            break-inside: avoid;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          /* Always show all sections when printing */
          section > div:last-child {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}

