"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { toast } from "sonner"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SpotlightCard } from "@/components/spotlight-card"

const labelClass = "font-mono text-[11px] uppercase tracking-widest text-stone-500"
const fieldClass =
  "border-white/10 bg-black/40 font-mono text-sm text-white placeholder:text-stone-600 focus-visible:border-acid-400/60 focus-visible:ring-2 focus-visible:ring-acid-400/20 focus-visible:ring-offset-0"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      const responseData = await response.json()
      console.log('Response data:', responseData)

      if (response.ok) {
        // Clear the form using ref
        if (formRef.current) {
          formRef.current.reset()
        }
        
        // Show success toast
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
      } else {
        throw new Error(`Server error: ${responseData.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      // Show error toast
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SpotlightCard corners className="p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-white">Send a Message</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid-300/70">secure channel</span>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className={labelClass}>{"// name"}</span>
              <Input name="name" placeholder="Your Name" required className={fieldClass} />
            </label>
            <label className="block space-y-2">
              <span className={labelClass}>{"// email"}</span>
              <Input name="email" type="email" placeholder="Your Email" required className={fieldClass} />
            </label>
          </div>
          <label className="block space-y-2">
            <span className={labelClass}>{"// subject"}</span>
            <Input name="subject" placeholder="Subject" required className={fieldClass} />
          </label>
          <label className="block space-y-2">
            <span className={labelClass}>{"// message"}</span>
            <Textarea name="message" placeholder="Your Message" rows={5} required className={fieldClass} />
          </label>
          <button type="submit" className="btn-holo w-full disabled:opacity-60" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Transmitting...</>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </SpotlightCard>
    </motion.div>
  )
}