import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimationOptions {
  x?: number
  y?: number
  scale?: number
  opacity?: number
  duration?: number
  delay?: number
  ease?: string
}

const DEFAULTS: Required<
  Pick<AnimationOptions, 'duration' | 'delay' | 'ease' | 'opacity'>
> = {
  duration: 0.5,
  delay: 0,
  ease: 'power2.out',
  opacity: 0,
}

/**
 * Animate an element when it scrolls into view (replaces framer-motion `whileInView`).
 * Fires once by default.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { x, y, scale, duration, delay, ease, opacity } = {
      ...DEFAULTS,
      ...options,
    }

    const fromVars: gsap.TweenVars = { opacity }
    if (x !== undefined) fromVars.x = x
    if (y !== undefined) fromVars.y = y
    if (scale !== undefined) fromVars.scale = scale

    gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none', // play once
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
    // Options are static per mount, so we intentionally omit them from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

/**
 * Animate an element immediately on component mount (replaces framer-motion `initial` + `animate`).
 */
export function useMountAnimation<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { x, y, scale, duration, delay, ease, opacity } = {
      ...DEFAULTS,
      ...options,
    }

    const fromVars: gsap.TweenVars = { opacity }
    if (x !== undefined) fromVars.x = x
    if (y !== undefined) fromVars.y = y
    if (scale !== undefined) fromVars.scale = scale

    gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
