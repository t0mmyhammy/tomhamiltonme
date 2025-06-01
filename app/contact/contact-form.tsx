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
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Start the Conversation</h1>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="lead">
          Ready to bridge strategy and execution? Let's start with a 60-minute diagnostic call where we'll identify your
          biggest leverage points and create a clear path forward.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-green-800 mb-2">Message received. Let's get going.</h2>
          <p className="text-green-700">
            Thanks for reaching out—I'll be in touch within a day or two so we can start making progress.
          </p>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-6 rounded-lg">
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
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input id="company" name="company" />
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn (optional)
              </label>
              <Input id="linkedin" name="linkedin" type="url" />
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium">
                I'm interested in
              </label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gtm">Go-to-Market / Sales</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                  <SelectItem value="fundraising">Fundraising</SelectItem>
                  <SelectItem value="career">Career Transition / Negotiation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Tell me about your situation
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What challenges are you facing? What outcomes are you looking for?"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div className="text-center">
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
