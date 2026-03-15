"use client"

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface LottieIconProps {
  className?: string
}

export function LottieIcon({ className }: LottieIconProps) {
  return (
    <div className={className}>
      <DotLottieReact
        src="https://lottie.host/83ade379-150d-47b2-8597-f783fabff880/sCRzs7aaxb.lottie"
        loop
        autoplay
      />
    </div>
  )
}
