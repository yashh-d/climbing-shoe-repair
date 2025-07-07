import '../framer/styles.css'
import React, { useEffect } from 'react'

import NavbarFramerComponent from '../framer/navbar'
import FooterFramerComponent from '../framer/footer'
import FaqAccordionFramerComponent from '../framer/faq-accordion'

export default function App() {
  // Smooth scroll function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Make smooth scroll function available globally for navbar
  if (typeof window !== 'undefined') {
    window.scrollToSection = scrollToSection
  }

  // Add click handlers for navigation links
  useEffect(() => {
    const handleNavigation = (e) => {
      const target = e.target
      const text = target.textContent?.toLowerCase() || ''
      
      // Check if it's a navigation link
      if (text.includes('works')) {
        e.preventDefault()
        scrollToSection('works')
      } else if (text.includes('repairs') || text.includes('home')) {
        e.preventDefault()
        scrollToSection('repairs')
      } else if (text.includes('contact')) {
        e.preventDefault()
        scrollToSection('contact')
      } else if (text.includes('faq')) {
        e.preventDefault()
        scrollToSection('faq')
      }
    }

    // Function to replace LOOMA with RRR
    const replaceLoomaText = () => {
      // Find all text elements that might contain LOOMA
      const textElements = document.querySelectorAll('*')
      textElements.forEach(element => {
        // Check if element contains LOOMA text
        if (element.childNodes) {
          element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('LOOMA')) {
              node.textContent = node.textContent.replace(/LOOMA/g, 'RRR')
            }
          })
        }
        
        // Also check direct text content
        if (element.textContent && element.textContent.trim() === 'LOOMA') {
          element.textContent = 'RRR'
        }
      })
    }

    // Replace text immediately and also set up observer for dynamic content
    const observer = new MutationObserver(() => {
      replaceLoomaText()
    })

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })

    // Replace text initially after a short delay to let Framer components load
    setTimeout(replaceLoomaText, 100)
    setTimeout(replaceLoomaText, 500)
    setTimeout(replaceLoomaText, 1000)

    // Add event listener to capture all clicks
    document.addEventListener('click', handleNavigation)
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleNavigation)
      observer.disconnect()
    }
  }, [])

  // Add global CSS reset and Gaya font with mobile responsiveness
  const globalStyles = `
    @font-face {
      font-family: 'Gaya';
      src: url('/fonts/Gaya.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Gaya', Arial, sans-serif !important;
    }
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow-x: hidden;
      font-family: 'Gaya', Arial, sans-serif;
      scroll-behavior: smooth;
    }
    #root {
      margin: 0;
      padding: 0;
      height: 100vh;
      font-family: 'Gaya', Arial, sans-serif;
    }
    
    /* Desktop Only - Block mobile/tablet access */
    .desktop-only-blocker {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #000;
      color: white;
      z-index: 99999;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 40px;
    }
    
    .desktop-only-blocker h1 {
      font-size: 48px !important;
      margin-bottom: 20px !important;
      font-family: 'Gaya', Arial, sans-serif !important;
    }
    
    .desktop-only-blocker p {
      font-size: 24px !important;
      margin-bottom: 10px !important;
      font-family: 'Gaya', Arial, sans-serif !important;
    }
    
    /* Show blocker on screens smaller than desktop (1024px) */
    @media (max-width: 1023px) {
      .desktop-only-blocker {
        display: flex !important;
      }
      
      .main-content {
        display: none !important;
      }
    }
    
    /* Hide LOOMA text and replace with RRR */
    [data-framer-component-type="Text"]:has-text("LOOMA"),
    .framer-text:contains("LOOMA"),
    .framer-Text:contains("LOOMA") {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
    
    /* Add RRR logo text to navbar */
    .framer-navbar::before,
    [data-framer-component-type*="navbar"]::before,
    [data-framer-name*="navbar"]::before {
      content: "RRR" !important;
      position: absolute !important;
      top: 50% !important;
      left: 20px !important;
      transform: translateY(-50%) !important;
      font-family: 'Gaya', Arial, sans-serif !important;
      font-size: 24px !important;
      font-weight: bold !important;
      color: white !important;
      z-index: 1000 !important;
    }
    
    /* Alternative approach - target the navbar container */
    nav::before,
    header::before {
      content: "RRR" !important;
      position: absolute !important;
      top: 50% !important;
      left: 20px !important;
      transform: translateY(-50%) !important;
      font-family: 'Gaya', Arial, sans-serif !important;
      font-size: 24px !important;
      font-weight: bold !important;
      color: white !important;
      z-index: 1000 !important;
    }
    
    /* Make FAQ content larger */
    .framer-text, .framer-Text {
      font-size: 24px !important;
      line-height: 1.6 !important;
    }
    
    /* Make FAQ questions larger */
    h1, h2, h3, h4, h5, h6 {
      font-size: 28px !important;
      font-family: 'Gaya', Arial, sans-serif !important;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .framer-text, .framer-Text {
        font-size: 18px !important;
        line-height: 1.5 !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-size: 20px !important;
      }
    }

    @media (max-width: 480px) {
      .framer-text, .framer-Text {
        font-size: 16px !important;
        line-height: 1.4 !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-size: 18px !important;
      }
    }

    /* Force footer to full width */
    .framer-footer, .framer-Footer {
      width: 100vw !important;
      max-width: 100vw !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Hide the pages navigation section in footer - comprehensive approach */
    div[data-framer-name*="pages"],
    div[data-framer-name*="Pages"],
    div[data-framer-name*="navigation"],
    div[data-framer-name*="nav"],
    [data-framer-component-type="Text"]:has-text("PAGES"),
    [data-framer-component-type="Text"]:has-text("HOME"),
    div:contains("PAGES"),
    div:contains("HOMEABOUTWORKSCONTACT"),
    .framer-text:contains("PAGES"),
    .framer-Text:contains("PAGES") {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
    }

    /* Hide footer sections containing navigation links */
    .framer-footer section,
    .framer-Footer section,
    .framer-footer nav,
    .framer-Footer nav,
    footer section:last-child,
    footer div:last-child {
      display: none !important;
    }

    /* Alternative: Hide the bottom section of footer */
    .framer-footer > div:last-child,
    .framer-Footer > div:last-child {
      display: none !important;
    }

    /* Target specific text content */
    *[style*="PAGES"] {
      display: none !important;
    }

    /* Hide any element that contains the text PAGES or navigation links */
    * {
      &:has-text("PAGES") {
        display: none !important;
      }
      &:has-text("HOMEABOUTWORKSCONTACT") {
        display: none !important;
      }
    }

    /* FAQ Component Width and Alignment Fixes */
    .framer-faq-accordion,
    .framer-FaqAccordion,
    [data-framer-component-type*="faq"],
    [data-framer-component-type*="accordion"] {
      width: 100% !important;
      max-width: none !important;
      margin: 0 auto !important;
      padding: 0 40px !important;
    }

    /* FAQ Questions - Make them wider and properly aligned */
    .framer-faq-accordion > div,
    .framer-FaqAccordion > div,
    [data-framer-component-type*="faq"] > div,
    [data-framer-component-type*="accordion"] > div {
      width: 100% !important;
      max-width: none !important;
      margin: 0 !important;
      padding: 20px 0 !important;
    }

    /* FAQ Text and Lines */
    .framer-faq-accordion h3,
    .framer-faq-accordion p,
    .framer-FaqAccordion h3,
    .framer-FaqAccordion p {
      width: 100% !important;
      text-align: left !important;
      margin: 0 !important;
    }

    @media (max-width: 768px) {
      .framer-faq-accordion,
      .framer-FaqAccordion,
      [data-framer-component-type*="faq"],
      [data-framer-component-type*="accordion"] {
        padding: 0 20px !important;
      }
    }

    @media (max-width: 480px) {
      .framer-faq-accordion,
      .framer-FaqAccordion,
      [data-framer-component-type*="faq"],
      [data-framer-component-type*="accordion"] {
        padding: 0 15px !important;
      }
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      
      {/* Desktop Only Blocker */}
      <div className="desktop-only-blocker">
        <h1>RRR</h1>
        <p>🖥️ DESKTOP ONLY</p>
        <p>This site is optimized for desktop viewing.</p>
        <p>Please visit us on a computer or laptop.</p>
        <br />
        <p style={{ fontSize: '18px', opacity: '0.8' }}>For inquiries: RATROCKREPAIR@GMAIL.COM</p>
      </div>
      
      {/* Main Content - Hidden on mobile/tablet */}
      <div className="main-content" style={{ 
        backgroundColor: '#000', 
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        fontFamily: "'Gaya', Arial, sans-serif"
      }}>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <NavbarFramerComponent.Responsive/>
        </div>
        
        {/* Full Width Rat Image - Cropped Bottom */}
        <div style={{ 
          width: '100%', 
          overflow: 'hidden',
          backgroundColor: '#000',
          padding: 0,
          margin: 0,
          position: 'relative'
        }}>
          <img 
            src="/images/rat.png" 
            alt="Rat Image" 
            style={{ 
              width: '100vw', 
              height: 'auto', 
              objectFit: 'cover',
              display: 'block',
              transform: 'translateY(-20px)',
              marginBottom: '-20px'
            }}
          />
        </div>

        {/* Repair Services Pricing - Responsive */}
        <div id="repairs" style={{ 
          width: '100%', 
          backgroundColor: '#000',
          color: 'white',
          padding: window.innerWidth <= 768 ? '30px 15px' : window.innerWidth <= 480 ? '20px 10px' : '60px 30px',
          textAlign: 'left',
          margin: 0,
          fontFamily: "'Gaya', Arial, sans-serif"
        }}>
          <h2 style={{ 
            fontSize: window.innerWidth <= 768 ? '36px' : window.innerWidth <= 480 ? '28px' : '64px',
            fontWeight: 'bold', 
            marginBottom: window.innerWidth <= 480 ? '20px' : '40px',
            letterSpacing: window.innerWidth <= 480 ? '1px' : '3px',
            fontFamily: "'Gaya', Arial, sans-serif"
          }}>
            PERFORMANCE REPAIRS
          </h2>
          
          <div style={{ 
            backgroundColor: 'white',
            color: 'black',
            padding: window.innerWidth <= 768 ? '30px' : window.innerWidth <= 480 ? '20px' : '60px',
            width: window.innerWidth <= 480 ? '100%' : '95%',
            fontSize: window.innerWidth <= 768 ? '24px' : window.innerWidth <= 480 ? '18px' : '36px',
            fontWeight: 'bold',
            lineHeight: '1.8',
            fontFamily: "'Gaya', Arial, sans-serif"
          }}>
            <div style={{ 
              borderBottom: '4px solid black', 
              paddingBottom: window.innerWidth <= 480 ? '10px' : '20px',
              marginBottom: window.innerWidth <= 480 ? '15px' : '30px',
              fontSize: window.innerWidth <= 768 ? '28px' : window.innerWidth <= 480 ? '20px' : '42px',
              fontFamily: "'Gaya', Arial, sans-serif"
            }}>
              ROCK CLIMBING REPAIRS
            </div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>SOLE RESOLE (NORMAL) - $70</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>RAND REPAIR - $45</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>FULL RESOLE - $85</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>TOE PATCH - $25</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>HEEL REPAIR - $35</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>STRAP REPLACEMENT - $20</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>VELCRO REPAIR - $15</div>
            <div style={{ fontFamily: "'Gaya', Arial, sans-serif", marginBottom: '8px' }}>FULL REBUILD - $120</div>
            
            <div style={{ 
              marginTop: window.innerWidth <= 480 ? '20px' : '35px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '24px',
              fontWeight: 'normal',
              borderTop: '2px solid black',
              paddingTop: window.innerWidth <= 480 ? '10px' : '20px',
              fontFamily: "'Gaya', Arial, sans-serif"
            }}>
              ** ONLY FOR VISUALIZATION PURPOSES.<br/>
              * WRITE WHAT REPAIR IS NEEDED IN A MESSAGE.
            </div>
          </div>
        </div>

        {/* Works Section - Centered */}
        <div id="works" style={{ 
          width: '100%', 
          backgroundColor: '#000',
          color: 'white',
          padding: window.innerWidth <= 768 ? '40px 15px' : window.innerWidth <= 480 ? '30px 10px' : '80px 30px',
          margin: 0,
          fontFamily: "'Gaya', Arial, sans-serif",
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Works Header */}
          <div style={{ marginBottom: '40px', maxWidth: '800px', width: '100%' }}>
            <div style={{ 
              fontSize: window.innerWidth <= 480 ? '14px' : '16px',
              color: '#D2A14A',
              marginBottom: '10px',
              fontFamily: "'Gaya', Arial, sans-serif"
            }}>
              [OUR WORK IN FOCUS]
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row', gap: window.innerWidth <= 768 ? '20px' : '40px' }}>
              <h2 style={{ 
                fontSize: window.innerWidth <= 768 ? '48px' : window.innerWidth <= 480 ? '36px' : '72px',
                fontWeight: 'bold',
                fontFamily: "'Gaya', Arial, sans-serif",
                margin: 0
              }}>
                WORKS
              </h2>
              
              <button style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                padding: window.innerWidth <= 480 ? '12px 20px' : '15px 30px',
                fontSize: window.innerWidth <= 480 ? '16px' : '18px',
                fontWeight: 'bold',
                fontFamily: "'Gaya', Arial, sans-serif",
                cursor: 'pointer'
              }}>
                VIEW ALL →
              </button>
            </div>
            
            <p style={{ 
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px',
              color: '#ccc',
              maxWidth: '600px',
              lineHeight: '1.6',
              fontFamily: "'Gaya', Arial, sans-serif",
              margin: '0 auto'
            }}>
              TAKE A LOOK AT THE HANDCRAFTED MOMENTS WE'VE CAPTURED. EACH PAIR REFLECTS OUR DEDICATION TO QUALITY AND DETAIL.
            </p>
          </div>

          {/* Image Placeholder - You'll add images later */}
          <div style={{ 
            backgroundColor: '#111',
            height: window.innerWidth <= 480 ? '200px' : '300px',
            marginBottom: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '18px',
            fontFamily: "'Gaya', Arial, sans-serif",
            maxWidth: '800px',
            width: '100%'
          }}>
            [IMAGES WILL BE ADDED HERE]
          </div>

          {/* Process Section */}
          <div style={{ maxWidth: '800px', width: '100%' }}>
            <div style={{ 
              fontSize: window.innerWidth <= 480 ? '14px' : '16px',
              color: '#D2A14A',
              marginBottom: '10px',
              fontFamily: "'Gaya', Arial, sans-serif"
            }}>
              [PROCESS]
            </div>
            
            <h3 style={{ 
              fontSize: window.innerWidth <= 768 ? '36px' : window.innerWidth <= 480 ? '28px' : '48px',
              fontWeight: 'bold',
              marginBottom: '20px',
              fontFamily: "'Gaya', Arial, sans-serif"
            }}>
              OUR SIMPLE PROCESS
            </h3>
            
            <p style={{ 
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px',
              color: '#ccc',
              maxWidth: '700px',
              marginBottom: '60px',
              lineHeight: '1.6',
              fontFamily: "'Gaya', Arial, sans-serif",
              margin: '0 auto 60px auto'
            }}>
              OUR STRAIGHTFORWARD PROCESS GUIDES YOU FROM INITIAL CONSULTATION THROUGH TO THE FINAL RESOLING, ENSURING CLEAR COMMUNICATION AND TOP-QUALITY CRAFTSMANSHIP EVERY STEP OF THE WAY.
            </p>

            {/* Process Timeline */}
            <div style={{ position: 'relative', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
              {/* Timeline Line */}
              <div style={{
                position: 'absolute',
                left: window.innerWidth <= 768 ? '20px' : '50px',
                top: '30px',
                bottom: '30px',
                width: '2px',
                backgroundColor: '#D2A14A'
              }}></div>

              {/* Process Steps */}
              {[
                {
                  number: '01',
                  title: 'CONSULTATION',
                  description: 'WE BEGIN BY UNDERSTANDING YOUR CLIMBING STYLE AND GOALS. THIS INITIAL DISCUSSION HELPS US TAILOR OUR RESOLING PROCESS AND ALIGN OUR CRAFTSMANSHIP WITH YOUR SPECIFIC NEEDS.'
                },
                {
                  number: '02',
                  title: 'CREATIVE PLANNING',
                  description: 'TOGETHER, WE DEVELOP A COMPREHENSIVE PLAN THAT OUTLINES THE RESOLING PROCESS, MATERIAL SELECTION, AND DESIRED PERFORMANCE ENHANCEMENTS. THIS ENSURES THAT WE ARE ALIGNED WITH YOUR NEEDS BEFORE MOVING FORWARD.'
                },
                {
                  number: '03',
                  title: 'STYLING',
                  description: 'OUR EXPERIENCED TEAM EXPERTLY RESOLES YOUR CLIMBING SHOES, PAYING CLOSE ATTENTION TO DETAIL, PRECISION, AND CRAFTSMANSHIP TO ENSURE A FINISH THAT ENHANCES PERFORMANCE AND DURABILITY WHILE MAINTAINING THEIR ORIGINAL STYLE.'
                },
                {
                  number: '04',
                  title: 'RESOLING',
                  description: 'AFTER THE RESOLING PROCESS, WE CAREFULLY INSPECT AND REFINE EACH PAIR TO ENHANCE THEIR QUALITY. ENSURING EVERY SHOE REFLECTS THE CRAFTSMANSHIP AND DURABILITY YOU NEED WHILE STAYING TRUE TO YOUR CLIMBING STYLE.'
                },
                {
                  number: '05',
                  title: 'FEEDBACK',
                  description: 'WE PROVIDE YOU WITH THE RESOLED CLIMBING SHOES FOR YOUR REVIEW. THIS COLLABORATIVE STEP ALLOWS YOU TO TEST THE FIT AND PERFORMANCE, GIVING FEEDBACK TO ENSURE THE FINAL PRODUCT MEETS YOUR EXPECTATIONS AND ALIGNS PERFECTLY WITH YOUR CLIMBING NEEDS.'
                },
                {
                  number: '06',
                  title: 'DELIVERY',
                  description: 'ONCE ALL ADJUSTMENTS ARE MADE, WE DELIVER YOUR NEWLY RESOLED CLIMBING SHOES PROMPTLY. YOU\'LL RECEIVE EXPERTLY CRAFTED SOLES READY FOR PEAK PERFORMANCE ON THE ROCK, HELPING YOU CLIMB HIGHER AND SHOWCASE YOUR SKILLS WITH CONFIDENCE.'
                }
              ].map((step, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  marginBottom: '80px',
                  position: 'relative'
                }}>
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'absolute',
                    left: window.innerWidth <= 768 ? '15px' : '45px',
                    top: '10px',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#D2A14A',
                    borderRadius: '50%'
                  }}></div>

                  <div style={{ 
                    marginLeft: window.innerWidth <= 768 ? '60px' : '100px',
                    flex: 1 
                  }}>
                    <div style={{ 
                      fontSize: window.innerWidth <= 480 ? '12px' : '14px',
                      color: '#D2A14A',
                      marginBottom: '5px',
                      fontFamily: "'Gaya', Arial, sans-serif"
                    }}>
                      {step.number}
                    </div>
                    
                    <h4 style={{ 
                      fontSize: window.innerWidth <= 768 ? '24px' : window.innerWidth <= 480 ? '20px' : '32px',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      fontFamily: "'Gaya', Arial, sans-serif"
                    }}>
                      {step.title}
                    </h4>
                    
                    <p style={{ 
                      fontSize: window.innerWidth <= 768 ? '14px' : window.innerWidth <= 480 ? '13px' : '16px',
                      color: '#ccc',
                      lineHeight: '1.6',
                      maxWidth: '500px',
                      fontFamily: "'Gaya', Arial, sans-serif"
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section with Orange Background - Responsive */}
        <div id="faq" style={{ 
          width: '100%', 
          flex: 1,
          backgroundColor: '#D2A14A',
          margin: 0,
          padding: window.innerWidth <= 768 ? '30px 15px' : window.innerWidth <= 480 ? '20px 10px' : '60px 30px',
          fontFamily: "'Gaya', Arial, sans-serif",
          fontSize: window.innerWidth <= 768 ? '18px' : window.innerWidth <= 480 ? '16px' : '24px'
        }}>
          <div style={{ 
            width: '100%',
            maxWidth: 'none',
            fontSize: window.innerWidth <= 768 ? '18px' : window.innerWidth <= 480 ? '16px' : '24px'
          }}>
            <FaqAccordionFramerComponent.Responsive
              variant1={"Pw1jujhvm"}
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div id="contact" style={{ 
          width: '100%', 
          backgroundColor: 'white',
          color: 'black',
          padding: window.innerWidth <= 768 ? '40px 15px' : window.innerWidth <= 480 ? '30px 10px' : '60px 30px',
          margin: 0,
          fontFamily: "'Gaya', Arial, sans-serif",
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: window.innerWidth <= 768 ? '36px' : window.innerWidth <= 480 ? '28px' : '48px',
            fontWeight: 'bold', 
            marginBottom: window.innerWidth <= 480 ? '20px' : '30px',
            fontFamily: "'Gaya', Arial, sans-serif"
          }}>
            RAT ROCK REPAIR
          </h2>
          
          <div style={{ 
            fontSize: window.innerWidth <= 768 ? '18px' : window.innerWidth <= 480 ? '16px' : '24px',
            fontWeight: 'bold',
            lineHeight: '1.8',
            fontFamily: "'Gaya', Arial, sans-serif",
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '15px' }}>
              COME SEE US AT THE SHOP,<br/>
              DROP THEM AT A GYM,<br/>
              OR MAIL US YOUR SHOES!
            </div>
            
            <div style={{ 
              marginBottom: '20px', 
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '20px',
              fontWeight: 'bold'
            }}>
              SHOP HOURS:
            </div>
            
            <div style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px'
            }}>
              SAT, SUN - 10AM-6PM
            </div>
            
            <div style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px'
            }}>
              1852 FLUSHING AVE, RIDGEWOOD, NY, 11385
            </div>
            
            <div style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px'
            }}>
              TURNAROUND TIME 2-3 WEEKS
            </div>
            
            <div style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px'
            }}>
              TAXES NOT INCLUDED
            </div>
            
            <div style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '16px' : window.innerWidth <= 480 ? '14px' : '18px'
            }}>
              FOR ANY QUESTIONS OR INQUIRIES ON REPAIRS,<br/>
              WRITE TO US AT:
            </div>
            
            <div style={{ 
              fontSize: window.innerWidth <= 768 ? '18px' : window.innerWidth <= 480 ? '16px' : '24px',
              fontWeight: 'bold',
              color: '#000',
              textDecoration: 'underline'
            }}>
              RATROCKREPAIR@GMAIL.COM
            </div>
            
            <div style={{ 
              marginTop: '20px',
              fontSize: window.innerWidth <= 768 ? '14px' : window.innerWidth <= 480 ? '12px' : '16px',
              fontStyle: 'italic'
            }}>
              [PLEASE ATTACH PHOTOS FOR INQUIRIES]
            </div>
          </div>
        </div>
        
        {/* Full Width Footer */}
        <div style={{ 
          width: '100vw', 
          margin: 0, 
          padding: 0,
          overflow: 'hidden',
          backgroundColor: '#000'
        }}>
          <div style={{
            width: '100vw',
            margin: 0,
            padding: 0,
            transform: 'translateX(0)',
            position: 'relative'
          }}>
            <FooterFramerComponent.Responsive/>
          </div>
        </div>
      </div>
    </>
  );
} 