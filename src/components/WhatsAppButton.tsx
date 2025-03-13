"use client"

import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34952667095"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-50"
    >
      <WhatsAppIcon sx={{ fontSize: 32 }} />
    </a>
  )
} 