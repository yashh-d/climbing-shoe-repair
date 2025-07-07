"use client"

import React, { useState } from "react"

export default function AndysOutdoors() {
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setShowMobileMenu(false) // Close mobile menu after navigation
  }

  const ClimberLogo = () => (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-2">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="10,90 50,10 90,90" fill="black" />
          <g transform="translate(35,25) scale(0.3)">
            <path d="M20,20 L30,15 L35,25 L40,20 L45,30 L35,35 L30,45 L25,35 L15,30 Z" fill="white" />
            <circle cx="25" cy="15" r="3" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  )

  const InfoBox = ({ title, content }: { title: string; content: string }) => (
    <div className="bg-orange-400 border-2 border-black p-4 mb-2">
      <h3 className="font-black text-sm mb-2 tracking-wide">{title}</h3>
      <p className="text-xs font-bold leading-tight">{content}</p>
    </div>
  )

  const MobileHeader = () => (
    <header className="flex items-center justify-between p-4 bg-white border-b sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-sm font-medium">← Messages</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-bold">CART : 0 ITEMS</span>
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowMobileMenu(false)}>
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4">
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="float-right text-xl font-bold"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8 px-4">
              <button 
                onClick={() => scrollToSection("repairs")} 
                className="text-left text-lg font-bold hover:underline"
              >
                Performance Repairs
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-lg font-bold hover:underline"
              >
                Repair Services
              </button>
              <button 
                onClick={() => scrollToSection("works")} 
                className="text-left text-lg font-bold hover:underline"
              >
                Works
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-left text-lg font-bold hover:underline"
              >
                About
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )

  const RepairsSection = () => (
    <section id="repairs" className="p-4 min-h-screen">
      <div className="flex items-start mb-6">
        <ClimberLogo />
      </div>

      {/* Replace the promotional graphic with individual components */}
      <div className="mb-8 space-y-0">
        <InfoBox
          title="NEW YORK CITY CLIMBING COMMUNITY"
          content="WE WORK CLOSELY WITH THE NYC CLIMBING COMMUNITY TO ENSURE EVERY PAIR REFLECTS THE CITY'S DIVERSE CLIMBERS AND VISION"
        />
        <InfoBox
          title="PROVEN EXPERTISE"
          content="WITH OVER 1 YEAR OF EXPERTISE IN CLIMBING SHOE RESOLING, WE BRING YOUR GEAR BACK TO LIFE AND ENHANCE YOUR CLIMBING EXPERIENCE."
        />
        <InfoBox
          title="HIGH-QUALITY COBBLERY"
          content="OUR ATTENTION TO DETAIL GUARANTEES THAT EACH RESOLED CLIMBING SHOE SHOWCASES THE CRAFTSMANSHIP AND QUALITY YOU CAN RELY ON."
        />
        <InfoBox
          title="ON TIME, EVERY TIME"
          content="WE UNDERSTAND THE FAST-PACED DEMANDS OF CLIMBING ADVENTURES AND DELIVER YOUR RESOLED SHOES PROMPTLY, SO YOU'RE READY FOR YOUR NEXT ASCENT."
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2 tracking-tight">
          PERFORMANCE
          <br />
          REPAIRS
        </h1>
        <div className="w-full h-1 bg-black mb-6"></div>
      </div>

      <div>
        <div className="space-y-4 text-lg font-bold">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>POINTE (NORMAL REPAIR)</span>
            <span>$70</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>FULL SOLE SPLIT</span>
            <span>$85</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>FULL SOLE</span>
            <span>$120</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>RAND REPAIR</span>
            <span>$15</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>RAND REPLACE</span>
            <span>$30</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>HEEL BAND REPLACE</span>
            <span>$40</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span>SCUM PATCH</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span className="text-sm leading-tight">
              TOE PATCH + POINTE
              <br />
              (TROU DANS LE CUIR)
            </span>
            <span>$90</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <span className="text-sm leading-tight">
              TOE STITCH (CUIR INTACT,
              <br />
              COUTURE MANQUANTE)
            </span>
            <span>$10</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs font-bold space-y-1">
        <p>** ONLY FOR VISUALIZATION PURPOSES.</p>
        <p>* WRITE WHAT REPAIR IS NEEDED IN A MESSAGE.</p>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section id="services" className="p-4 min-h-screen">
      <div className="flex items-start mb-6">
        <ClimberLogo />
      </div>

      {/* Replace the promotional graphic with individual components */}
      <div className="mb-8 space-y-0">
        <InfoBox
          title="NEW YORK CITY CLIMBING COMMUNITY"
          content="WE WORK CLOSELY WITH THE NYC CLIMBING COMMUNITY TO ENSURE EVERY PAIR REFLECTS THE CITY'S DIVERSE CLIMBERS AND VISION"
        />
        <InfoBox
          title="PROVEN EXPERTISE"
          content="WITH OVER 1 YEAR OF EXPERTISE IN CLIMBING SHOE RESOLING, WE BRING YOUR GEAR BACK TO LIFE AND ENHANCE YOUR CLIMBING EXPERIENCE."
        />
        <InfoBox
          title="HIGH-QUALITY COBBLERY"
          content="OUR ATTENTION TO DETAIL GUARANTEES THAT EACH RESOLED CLIMBING SHOE SHOWCASES THE CRAFTSMANSHIP AND QUALITY YOU CAN RELY ON."
        />
        <InfoBox
          title="ON TIME, EVERY TIME"
          content="WE UNDERSTAND THE FAST-PACED DEMANDS OF CLIMBING ADVENTURES AND DELIVER YOUR RESOLED SHOES PROMPTLY, SO YOU'RE READY FOR YOUR NEXT ASCENT."
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-4 tracking-tight">
          ANDY'S
          <br />
          REPAIR SERVICES
        </h1>

        <div className="space-y-4 text-lg font-bold">
          <p>COME SEE US AT THE SHOP,</p>
          <p>DROP THEM AT A GYM,</p>
          <p>or MAIL US YOUR SHOES!</p>
        </div>
      </div>

      <div className="space-y-6 text-center">
        <div>
          <h2 className="text-xl font-black mb-2">SHOP HOURS:</h2>
          <p className="font-bold">MON, WED, THURS, FRI -11/5</p>
          <p className="font-bold">TUES - 11/7 SAT,SUN - CLOSED</p>
        </div>

        <div>
          <h2 className="text-xl font-black mb-2">REPAIRS BY MAIL, please send to:</h2>
          <p className="font-bold">ANDY'S OUTDOORS</p>
          <p className="font-bold text-sm">2025 RUE PARTHENAIS #304 BUZZER 62 MONTREAL,</p>
          <p className="font-bold">QC H2K 3T2</p>
        </div>

        <div>
          <h2 className="text-xl font-black mb-2">DROP BOXES:</h2>
          <p className="font-bold">CANYON ESCALADE & ZERO GRAVITE</p>
        </div>

        <div className="space-y-2">
          <p className="font-bold text-lg">TURNAROUND TIME 7-10 DAYS</p>
          <p className="font-bold text-lg">TAXES NOT INCLUDED</p>
          <p className="font-bold text-sm">FOR ANY QUESTIONS OR INQUIRIES ON REPAIRS,</p>
          <p className="font-bold text-sm">WRITE TO US AT:</p>
        </div>

        <div className="bg-black text-white p-4 rounded">
          <p className="text-xl font-black">INFO@ANDYSOUTDOORS.CA</p>
          <p className="text-sm font-bold mt-2">[PLEASE ATTACH PHOTOS FOR INQUIRIES]</p>
        </div>
      </div>
    </section>
  )

  const WorksSection = () => (
    <section id="works" className="p-4 min-h-screen bg-gray-50">
      <div className="flex items-start mb-6">
        <ClimberLogo />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2 tracking-tight">
          OUR
          <br />
          WORKS
        </h1>
        <div className="w-full h-1 bg-black mb-6"></div>
      </div>

      <div className="space-y-8">
        {/* Gallery of repair work */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border-2 border-black p-4 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-2"></div>
              <p className="font-bold text-sm">BEFORE</p>
              <p className="text-xs">Worn sole</p>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-4 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full mx-auto mb-2"></div>
              <p className="font-bold text-sm">AFTER</p>
              <p className="text-xs">Fresh resoled</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-400 border-2 border-black p-6">
          <h2 className="font-black text-xl mb-4 text-center">RECENT PROJECTS</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 border border-black">
              <h3 className="font-bold">LA SPORTIVA SOLUTIONS</h3>
              <p className="text-sm">Full sole + rand repair</p>
              <p className="text-xs text-gray-600">Completed: Dec 2024</p>
            </div>
            <div className="bg-white p-4 border border-black">
              <h3 className="font-bold">SCARPA INSTINCTS</h3>
              <p className="text-sm">Toe patch + pointe repair</p>
              <p className="text-xs text-gray-600">Completed: Dec 2024</p>
            </div>
            <div className="bg-white p-4 border border-black">
              <h3 className="font-bold">5.10 DRAGONS</h3>
              <p className="text-sm">Full sole replacement</p>
              <p className="text-xs text-gray-600">Completed: Nov 2024</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-black text-xl mb-4">QUALITY GUARANTEE</h2>
          <div className="space-y-4 text-sm font-bold">
            <p>✓ PROFESSIONAL GRADE MATERIALS</p>
            <p>✓ PRECISION CRAFTSMANSHIP</p>
            <p>✓ PERFORMANCE TESTED</p>
            <p>✓ SATISFACTION GUARANTEED</p>
          </div>
        </div>
      </div>
    </section>
  )

  const AboutSection = () => (
    <section id="about" className="p-4 min-h-screen">
      <div className="flex items-start mb-6">
        <ClimberLogo />
      </div>

      {/* Replace the promotional graphic with individual components */}
      <div className="mb-8 space-y-0">
        <InfoBox
          title="NEW YORK CITY CLIMBING COMMUNITY"
          content="WE WORK CLOSELY WITH THE NYC CLIMBING COMMUNITY TO ENSURE EVERY PAIR REFLECTS THE CITY'S DIVERSE CLIMBERS AND VISION"
        />
        <InfoBox
          title="PROVEN EXPERTISE"
          content="WITH OVER 1 YEAR OF EXPERTISE IN CLIMBING SHOE RESOLING, WE BRING YOUR GEAR BACK TO LIFE AND ENHANCE YOUR CLIMBING EXPERIENCE."
        />
        <InfoBox
          title="HIGH-QUALITY COBBLERY"
          content="OUR ATTENTION TO DETAIL GUARANTEES THAT EACH RESOLED CLIMBING SHOE SHOWCASES THE CRAFTSMANSHIP AND QUALITY YOU CAN RELY ON."
        />
        <InfoBox
          title="ON TIME, EVERY TIME"
          content="WE UNDERSTAND THE FAST-PACED DEMANDS OF CLIMBING ADVENTURES AND DELIVER YOUR RESOLED SHOES PROMPTLY, SO YOU'RE READY FOR YOUR NEXT ASCENT."
        />
      </div>

      <div className="mb-8">
        <div className="w-full h-64 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center">
          <span className="text-gray-500 font-bold">About Photo Placeholder</span>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-black mb-4">About</h2>
        <h1 className="text-4xl font-black mb-6 tracking-tight">
          ANDY'S
          <br />
          OUTDOORS
        </h1>

        <div className="text-left space-y-4 font-bold">
          <p>ANDY'S IS A CLIMBING SHOE REPAIR SHOP AND OUTDOOR PRODUCT COMPANY.</p>
          <p>OUR PRODUCT IS DESIGNED AND DEVELOPED IN MONTREAL, CANADA.</p>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold bg-white">
        <span>8:03</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <span className="text-xs">5G</span>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-full bg-black rounded-sm"></div>
          </div>
        </div>
      </div>

      <MobileHeader />

      <main>
        <RepairsSection />
        <ServicesSection />
        <WorksSection />
        <AboutSection />
      </main>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 bg-white border-2 border-black p-4 rounded z-50">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold flex-1 mr-4">
              BY NAVIGATING THIS SITE, YOU CONSENT TO THE USE OF COOKIES TO IMPROVE YOUR BROWSING EXPERIENCE.
            </p>
            <button onClick={() => setShowCookieBanner(false)} className="text-xl font-bold">
              X
            </button>
          </div>
        </div>
      )}

      {/* Browser Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 rounded-t-lg">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span>🔒</span>
          <span>andysoutdoors.ca</span>
          <span className="text-gray-400">— Private</span>
        </div>
        <div className="w-1/2 h-1 bg-white rounded-full mx-auto mt-2"></div>
      </div>
    </div>
  )
}
