import React from 'react'

const WhatsAppCTA = () => {
  const phoneNumber = '919876543210' // Replace with actual number
  const message = encodeURIComponent('Hi! I'd like to know more about Eira Bistro & Cafe.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-cta"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" className="whatsapp-icon">
        <path
          d="M16.004 2.667C8.64 2.667 2.67 8.637 2.67 16c0 2.347.613 4.64 1.78 6.66L2.667 29.333l6.84-1.793A13.28 13.28 0 0016.004 29.333c7.363 0 13.333-5.97 13.333-13.333S23.367 2.667 16.004 2.667zm0 24.4a11.03 11.03 0 01-5.623-1.54l-.403-.24-4.18 1.096 1.116-4.073-.263-.42A11.01 11.01 0 014.937 16c0-6.1 4.967-11.067 11.067-11.067S27.07 9.9 27.07 16 22.104 27.067 16.004 27.067zm6.067-8.28c-.333-.167-1.967-.97-2.273-1.08-.307-.113-.53-.167-.753.167-.223.333-.867 1.08-1.063 1.303-.197.223-.393.25-.727.083-.333-.167-1.407-.517-2.68-1.65-.99-.883-1.66-1.973-1.853-2.307-.193-.333-.02-.513.147-.68.15-.15.333-.39.5-.583.167-.197.223-.333.333-.557.113-.223.057-.417-.027-.583-.083-.167-.753-1.817-1.033-2.487-.273-.653-.55-.563-.753-.577l-.643-.01c-.223 0-.583.083-.89.417-.307.333-1.17 1.143-1.17 2.787s1.197 3.233 1.363 3.457c.167.223 2.357 3.597 5.71 5.043.797.347 1.42.553 1.903.707.8.253 1.527.217 2.103.133.643-.097 1.967-.803 2.247-1.58.277-.777.277-1.443.193-1.58-.083-.14-.307-.223-.64-.39z"
          fill="currentColor"
        />
      </svg>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  )
}

export default WhatsAppCTA
