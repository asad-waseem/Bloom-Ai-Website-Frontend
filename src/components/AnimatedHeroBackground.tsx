"use client"

import React, { useEffect, useRef } from 'react'

export const AnimatedHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouse = { x: -100, y: -100 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.15
        this.vy = (Math.random() - 0.5) * 0.15
        this.size = Math.random() * 1.2 + 0.4
        this.color = Math.random() > 0.5 ? '#3B82F6' : '#8B5CF6'
        this.opacity = Math.random() * 0.4 + 0.15
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = w
        if (this.x > w) this.x = 0
        if (this.y < 0) this.y = h
        if (this.y > h) this.y = 0

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distSq = dx * dx + dy * dy
        if (distSq < 10000) { // 100 * 100
          this.x -= dx * 0.005
          this.y -= dy * 0.005
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      // Optimized count for better performance on all devices
      const count = Math.min(Math.floor(window.innerWidth / 40), 45)
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const maxDistSq = 120 * 120 // Pre-calculate for speed

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distSq = dx * dx + dy * dy
          
          if (distSq < maxDistSq) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.color
            ctx.globalAlpha = (1 - Math.sqrt(distSq) / 120) * 0.08
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-50"
      style={{ zIndex: 0, willChange: 'transform' }}
    />
  )
}
