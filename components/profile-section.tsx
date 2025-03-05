"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Globe, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function ProfileSection() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section id="profile" className="mb-8">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-black">
            <img src="placeholder.svg?height=160&width=160" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <Button
            onClick={() => setShowInfo(true)}
            className="absolute -bottom-2 -right-2 rounded-full bg-black hover:bg-gray-800 p-2 h-auto w-auto"
            aria-label="Show more information"
          >
            <Info className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2">JANE DOE</h1>
          <p className="text-lg text-gray-700 mb-4">Aspiring Computer Science Student</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>jane.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>portfolio.example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Objective Statement */}
      <div className="mt-6 p-4 bg-gray-100 border-l-4 border-black rounded">
        <p className="text-gray-700 leading-relaxed">
          Dedicated and ambitious high school senior with a passion for computer science and mathematics, seeking
          admission to your university's Computer Science program. Bringing strong analytical skills, leadership
          experience, and a proven track record of academic excellence.
        </p>
      </div>

      {/* Info Dialog */}
      <Dialog open={showInfo} onOpenChange={setShowInfo}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>About Jane Doe</DialogTitle>
            <DialogDescription>Personal information and background</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold mb-1">Personal Statement</h3>
              <p className="text-sm text-gray-700">
                I am a passionate and dedicated student with a strong interest in computer science and mathematics. My
                goal is to pursue a degree in Computer Science and eventually work in artificial intelligence research.
                I believe that technology can be used to solve some of the world's most pressing problems, and I am
                excited to be part of that solution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Interests</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Web Development and Design</li>
                <li>Competitive Programming</li>
                <li>Mathematics and Problem Solving</li>
                <li>Playing Chess and Piano</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Languages</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                <li>English (Native)</li>
                <li>Spanish (Intermediate)</li>
                <li>French (Basic)</li>
              </ul>
            </div>
          </div>

          <DialogClose asChild>
            <Button className="mt-4 bg-black hover:bg-gray-800 text-white">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  )
}

