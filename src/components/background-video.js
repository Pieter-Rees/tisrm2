'use client'

import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

function syncPlayback(video) {
  if (!video) return

  video.muted = true
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (reduceMotion) {
    video.pause()
    return
  }

  video.play().catch(() => {})
}

export default function BackgroundVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    function handleMotionChange() {
      syncPlayback(video)
    }

    handleMotionChange()
    media.addEventListener('change', handleMotionChange)
    return () => media.removeEventListener('change', handleMotionChange)
  }, [])

  return (
    <Box
      as='video'
      ref={videoRef}
      aria-hidden='true'
      muted
      loop
      playsInline
      autoPlay
      poster='/s-class.jpg'
      src='/background.mp4?v=5'
      position='absolute'
      inset='0'
      width='100%'
      height='100%'
      objectFit='cover'
    />
  )
}
