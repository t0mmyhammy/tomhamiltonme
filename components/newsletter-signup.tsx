"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      {isSuccess ? (
        <div className="p-6 bg-green-900/20 rounded-lg flex items-center space-x-3 transition-all duration-300 animate-fadeIn">
          <CheckCircle className="h-6 w-6 text-green-300" />
          <p className="text-green-300 font-medium">Thanks for subscribing! Check your inbox to confirm your email.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
          />
          {error && <p className="text-red-300 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-slate-900 hover:bg-gray-200 h-12 transition-all duration-200"
          >
            {isSubmitting ? "Subscribing..." : "Get Updates"}
          </Button>
        </form>
      )}
    </div>
  )
}
