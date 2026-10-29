'use client';

import { IconButton, chakra } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

const Video = chakra('video');

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Playback never starts from the markup: `autoPlay` would run before
  // hydration, so reduced-motion users would see the video until the effect
  // caught up.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const media = window.matchMedia(REDUCED_MOTION_QUERY);

    function syncPlayback() {
      if (!video) return;

      video.muted = true;

      if (media.matches) {
        video.pause();
        setIsPlaying(false);
        return;
      }

      setIsPlaying(true);
      void video.play().catch(() => setIsPlaying(false));
    }

    syncPlayback();
    media.addEventListener('change', syncPlayback);
    return () => media.removeEventListener('change', syncPlayback);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    void video.play().catch(() => setIsPlaying(false));
  }

  return (
    <>
      <Video
        ref={videoRef}
        aria-hidden="true"
        muted
        loop
        playsInline
        poster="/s-class.jpg"
        src="/background.mp4"
        position="absolute"
        inset="0"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      {/* WCAG 2.2.2: the loop runs longer than 5s, so it needs a control. */}
      <IconButton
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Video pauzeren' : 'Video afspelen'}
        aria-pressed={!isPlaying}
        size="sm"
        position="absolute"
        bottom={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        zIndex="1"
        borderRadius="0"
        bg="blackAlpha.600"
        color="white"
        border="1px solid"
        borderColor="whiteAlpha.500"
        _hover={{ bg: 'blackAlpha.800', borderColor: 'gold.400' }}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: 'gold.400',
          outlineOffset: '2px',
        }}
      >
        {isPlaying ?
          <BsPauseFill />
        : <BsPlayFill />}
      </IconButton>
    </>
  );
}
