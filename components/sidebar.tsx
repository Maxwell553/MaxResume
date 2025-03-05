"use client"

import { X, User, BookOpen, Briefcase, Code, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  scrollToSection: (sectionId: string) => void
}

export default function Sidebar({ isOpen, onClose, scrollToSection }: SidebarProps) {
  const navItems = [
    { id: "profile", label: "Profile", icon: <User className="h-5 w-5 mr-2" /> },
    { id: "education", label: "Education", icon: <BookOpen className="h-5 w-5 mr-2" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-5 w-5 mr-2" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-5 w-5 mr-2" /> },
    { id: "activities", label: "Activities & Awards", icon: <Award className="h-5 w-5 mr-2" /> },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden print:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out print:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:h-auto md:w-64
      `}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <Button onClick={onClose} variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors text-left"
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

