import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { EMAIL } from '@/constants'
import { Check, Copy, Mail } from 'lucide-react'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const ContactExperience = React.lazy(
  () => import('../models/ContactExperience')
)

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [load3D, setLoad3D] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad3D(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="contact" ref={sectionRef} className="py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
        <div
          ref={containerRef}
          className="contact-item bg-[#cd7c2e] w-full h-100 lg:h-auto hover:cursor-grab rounded-3xl overflow-hidden lg:col-span-3"
        >
          {load3D ? (
            <Suspense
              fallback={
                <div className="flex h-[300px] items-center justify-center text-muted-foreground">
                  Loading 3D Environment...
                </div>
              }
            >
              <ContactExperience />
            </Suspense>
          ) : (
            <div className="flex h-[300px] items-center justify-center text-muted-foreground">
              Waiting to load 3D...
            </div>
          )}
        </div>

        <div className="contact-item flex flex-col space-y-6 justify-center lg:col-span-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities. Whether you have a
                question, a potential role, or just want to say hi, I'll try my
                best to get back to you!
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p>Email</p>
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus:outline-none hover:cursor-pointer"
                  aria-label="Copy email address"
                >
                  {EMAIL}
                  {copied ? (
                    <Check
                      className={`h-4 w-4 ${copied ? 'text-green-500' : ''}`}
                    />
                  ) : (
                    <Copy className="h-4 w-4 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Card>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="What's your name?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="What's your email?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    className="min-h-25"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
