"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [interest, setInterest] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      formData.set("interest", interest)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.")
      }

      setIsSuccess(true)
      e.currentTarget.reset()
      setInterest("")
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-opentee-off-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-opentee-heading mb-6 font-gilroy">Let's Connect</h1>
              <p className="text-lg text-opentee-body mb-6 leading-relaxed">
                Interested in selling your business? Want to learn more about what a partnership would look like? I'd love to connect.
              </p>
              <p className="text-base text-opentee-body leading-relaxed">
                We love meeting successful business owners, hearing your stories and helping you think through your succession plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-opentee-accent">
              <p className="text-lg font-semibold text-opentee-heading mb-4">Prefer to schedule directly?</p>
              <a 
                href="https://calendly.com/tom_hamilton/15-min-meet-greet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-opentee-accent text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
              >
                Click Here to Schedule an Intro Call
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-opentee-heading">What to Expect</h3>
              <ul className="space-y-2 text-opentee-body">
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>15-minute, no-pressure conversation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Learn about your business and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Discuss potential partnership opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Explore if we're a good fit for each other</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:sticky lg:top-8">

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-green-800 mb-2">Message received. Let's get going.</h2>
                <p className="text-green-700">
                  Thanks for reaching out—I'll be in touch within a day or two so we can start making progress.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-opentee-heading mb-6 font-gilroy">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border-2 border-opentee-off-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First name
                </label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last name
                </label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone (optional)
              </label>
              <Input id="phone" name="phone" type="tel" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Share Your Interests
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share why you're interested in connecting and what you'd like to explore together."
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

                  <div className="text-center">
                    <Button type="submit" className="bg-opentee-black text-white hover:bg-opentee-slate px-8 py-3 text-lg font-medium" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
