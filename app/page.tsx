"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(1.0) // 100% is the default size

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[280px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ 
                fontSize: `${3.5 * headerSize}rem`,
                lineHeight: '1.2',
                letterSpacing: '2px',
                fontFamily: 'serif'
              }}
            >
              Conflux
              <br />
              Exclusive
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  An innovative team that blends technology with humanity, focusing on future trends, digital content management, multidisciplinary media marketing, and everyday software development. Through poetic design and system integration, 
                  <br></br>
                  <br></br>
                  we connect online and offline resources to promote environmental sustainability and heart-driven ventures, striving to create a digital future with warmth and meaningful value.
                </p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.oneone.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="https://conflux-tech.com/wp-content/uploads/2025/04/milkshake.png"
                  alt="Oneone Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                    backgroundColor: 'wheat'
                  }}
                />
              </Link>
              <a
                href="https://www.oneone.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm hover:text-white transition-colors underline decoration-white/50 hover:decoration-white"
              >
                oneone.global
              </a>
            </div>
          </div>
          <a
            href="https://conflux-tech.com/"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}

