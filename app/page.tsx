'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeUp, FadeIn, ScaleIn, SlideLeft, SlideRight, StaggerGrid } from '@/components/animations/FadeUp'
import Faq from '@/components/Faq'

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/* ─── Data ─────────────────────────────────────────────────── */

const CHAT_MESSAGES = [
  { from: 'client', text: 'Hola! Me interesa una casa en Zapopan, presupuesto $5M MXN' },
  { from: 'cecilia', text: '¡Hola! Soy Cecilia 👋 Con gusto te ayudo. ¿Buscas casa o departamento?' },
  { from: 'client', text: 'Casa, mínimo 3 recámaras' },
  { from: 'cecilia', text: 'Encontré 3 opciones que se ajustan a tu búsqueda 🏠' },
  { from: 'cecilia', card: { title: 'Casa Valle Real', detail: '4 rec · 3 baños · 320 m²', price: '$4,850,000 MXN', tag: 'Disponible' } },
  { from: 'client', text: 'Me interesa esa! ¿Puedo verla?' },
  { from: 'cecilia', text: '¡Claro! ¿Te parece el jueves 15 a las 11am? Agendo tu visita ahora 📅' },
]

const STATS_BAR = [
  { value: '∞', label: 'Clientes en simultáneo' },
  { value: '< 20 seg', label: 'Tiempo de respuesta' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '4×', label: 'Más visitas agendadas' },
]

const STEPS = [
  { num: '1', icon: '💬', title: 'El cliente escribe por WhatsApp', desc: 'El cliente inicia la conversación con cualquier pregunta. Cecilia responde de inmediato, en cualquier horario, sin tiempo de espera.' },
  { num: '2', icon: '🏠', title: 'Cecilia presenta propiedades', desc: 'Filtra el catálogo según el presupuesto, zona y preferencias del cliente, y presenta las opciones más relevantes con fotos y detalles.' },
  { num: '3', icon: '📅', title: 'Agenda la cita automáticamente', desc: 'Cuando el cliente muestra interés, Cecilia coordina la visita y la registra en el calendario del asesor sin ninguna intervención.' },
]

/* ─── Calendar Mockup (Agenda feature visual) ───────────────── */
function CalendarMockup() {
  const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
  // Mayo 2025: starts on Thursday (offset 3 from Monday=0)
  const offset = 3
  const totalDays = 31
  const cells: (number | null)[] = Array(offset).fill(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  const apptDays = new Set([7, 9, 12, 15, 19, 22, 26])
  const today = 15

  const appts = [
    { day: 9,  time: '10:00', label: 'Casa Valle Real',    status: 'Confirmada',  dot: '#44CACB' },
    { day: 12, time: '12:30', label: 'Depto Ventura',      status: 'Confirmada',  dot: '#0C6489' },
    { day: 15, time: '11:00', label: 'Fracc. Solares',     status: 'Hoy',         dot: '#44CACB' },
    { day: 19, time: '09:30', label: 'Casa Valle Real',    status: 'Pendiente',   dot: '#0C6489' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
        <div>
          <p className="font-bold text-gray-900 text-sm">Mayo 2025</p>
          <p className="text-xs text-gray-400 mt-0.5">Citas agendadas automáticamente</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs cursor-pointer">‹</div>
          <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs cursor-pointer">›</div>
        </div>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 px-4 pt-3 pb-1">
        {weekDays.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-gray-300">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 px-4 gap-y-0.5">
        {cells.map((day, i) => (
          <div key={i} className="flex flex-col items-center py-1">
            {day && (
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all
                    ${day === today ? 'text-white font-bold' : apptDays.has(day) ? 'text-gray-800 font-semibold' : 'text-gray-400'}`}
                  style={day === today ? { background: 'linear-gradient(135deg, #0C6489, #44CACB)' } : {}}
                >
                  {day}
                </div>
                {apptDays.has(day) && day !== today && (
                  <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: '#44CACB' }} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mx-4 my-3 border-t border-gray-100" />

      {/* Upcoming appointments */}
      <div className="px-4 pb-4 flex flex-col gap-2 overflow-hidden">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Próximas citas</p>
        {appts.map(a => (
          <div key={`${a.day}-${a.time}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-gray-50">
            <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: a.dot }} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate leading-snug">{a.label}</p>
              <p className="text-xs text-gray-400 leading-snug">Mayo {a.day} · {a.time}</p>
            </div>
            <span className={`text-xs rounded-full px-2 py-0.5 font-medium flex-shrink-0 whitespace-nowrap
              ${a.status === 'Confirmada' ? 'bg-teal-50 text-teal-600' :
                a.status === 'Hoy'        ? 'bg-blue-50 text-blue-600' :
                                            'bg-amber-50 text-amber-600'}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const FEATURES: Array<{
  tag: string; title: string; desc: string; bullets: string[]
  img?: string; imgAlt?: string; visual?: React.ReactNode
}> = [
  {
    tag: 'Atención al cliente',
    title: 'Responde como un asesor experto',
    desc: 'Cecilia entiende el lenguaje natural y adapta cada respuesta al contexto del cliente. Maneja objeciones, compara propiedades y mantiene la conversación fluida hasta generar interés real.',
    bullets: ['Responde preguntas sobre precios, zonas y amenidades', 'Compara propiedades según los filtros del cliente', 'Detecta el nivel de intención de compra', 'Transfiere a un asesor cuando es necesario'],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',
    imgAlt: 'Asesor inmobiliario',
  },
  {
    tag: 'Calificación de leads',
    title: 'Filtra y califica a tus prospectos',
    desc: 'No todos los leads son iguales. Cecilia identifica a los clientes con mayor intención de compra para que tus asesores enfoquen su tiempo donde más importa.',
    bullets: ['Clasifica leads por nivel de interés', 'Recopila datos clave: presupuesto, zona, urgencia', 'Genera perfiles detallados de cada prospecto', 'Sincroniza la información con tu panel en tiempo real'],
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80',
    imgAlt: 'Dashboard métricas',
  },
  {
    tag: 'Agenda inteligente',
    title: 'Citas confirmadas sin esfuerzo',
    desc: 'Cecilia coordina horarios, confirma disponibilidad y registra cada visita directamente en el calendario. Tus asesores llegan a las citas, no a negociar horarios.',
    bullets: ['Agenda visitas según disponibilidad del asesor', 'Envía confirmaciones y recordatorios automáticos', 'Reagenda si el cliente cancela', 'Registra el resultado de cada visita'],
    visual: <CalendarMockup />,
  },
]

const BIG_STATS = [
  { value: '< 20 seg', label: 'Tiempo promedio de respuesta al primer mensaje' },
  { value: '4×', label: 'Más visitas agendadas vs. atención manual' },
  { value: '3×', label: 'Más cierres de venta reportados por agentes' },
]

const CHARACTERISTICS = [
  { icon: '🗣️', title: 'Habla de forma natural', desc: 'Se comunica como un asesor humano, sin respuestas robóticas ni menús de opciones.' },
  { icon: '🧠', title: 'Aprende tu catálogo', desc: 'Conoce cada propiedad, sus precios, amenidades y disponibilidad en tiempo real.' },
  { icon: '🌙', title: 'Siempre disponible', desc: 'Atiende a tus clientes a las 3am del domingo si hace falta. Sin días de descanso.' },
  { icon: '⚡', title: 'Respuesta instantánea', desc: 'Contesta en menos de 20 segundos, antes de que el cliente pierda el interés o contacte a la competencia.' },
  { icon: '🎯', title: 'Califica con precisión', desc: 'Identifica quién está listo para comprar y quién solo está explorando.' },
  { icon: '🔄', title: 'Nunca se cansa', desc: 'Maneja cientos de conversaciones simultáneas sin perder calidad ni contexto.' },
]


const PROPERTIES = [
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80', name: 'Casa Valle Real', zone: 'Zapopan', price: '$4,850,000', beds: 4, baths: 3 },
  { img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80', name: 'Depto Ventura Vertical', zone: 'Guadalajara', price: '$2,300,000', beds: 2, baths: 2 },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80', name: 'Fracc. Solares', zone: 'Tlajomulco', price: '$3,600,000', beds: 3, baths: 3 },
]

/* ─── WhatsApp Mockup ──────────────────────────────────────── */

function WhatsAppMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl scale-110" />
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-72 lg:w-80" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}>
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">C</div>
          <div>
            <p className="text-white text-sm font-semibold leading-none">Cecilia IA</p>
            <p className="text-green-300 text-xs mt-0.5">en línea</p>
          </div>
          <div className="ml-auto flex gap-2">
            <div className="w-4 h-4 rounded-full bg-white/20" />
            <div className="w-4 h-4 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="px-3 py-3 flex flex-col gap-2" style={{ background: '#ECE5DD', minHeight: 420 }}>
          {CHAT_MESSAGES.map((msg, i) => {
            if (msg.card) {
              return (
                <div key={i} className="self-start max-w-[85%]">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm text-xs">
                    <div className="h-20 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-3xl">🏠</span>
                    </div>
                    <div className="p-2.5">
                      <p className="font-bold text-gray-800">{msg.card!.title}</p>
                      <p className="text-gray-500 mt-0.5">{msg.card!.detail}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-[#0C6489] text-xs">{msg.card!.price}</p>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">{msg.card!.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            const isClient = msg.from === 'client'
            return (
              <div key={i} className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-xl text-xs leading-relaxed max-w-[80%] shadow-sm ${isClient ? 'bg-[#DCF8C6] text-gray-800 rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            )
          })}
          <div className="self-start">
            <div className="bg-white px-3 py-2 rounded-xl rounded-bl-sm shadow-sm flex gap-1 items-center h-8 w-14">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
        <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">Escribe un mensaje...</div>
          <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: APPLE_EASE, delay: 1.2 }}
        className="absolute -left-12 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 hidden lg:flex">
        <span className="text-2xl">👥</span>
        <div>
          <p className="text-xs text-gray-500">Clientes en simultáneo</p>
          <p className="text-2xl font-black bg-gradient-to-r from-[#0C6489] to-[#44CACB] bg-clip-text text-transparent leading-tight">∞</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: APPLE_EASE, delay: 1.4 }}
        className="absolute -right-10 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 hidden lg:flex">
        <span className="text-2xl">⚡</span>
        <div><p className="text-xs text-gray-500">Tiempo de respuesta</p><p className="text-lg font-bold text-gray-800">&lt; 20 seg</p></div>
      </motion.div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ─── Section Label ────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <FadeUp>
      <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#44CACB' }}>{children}</span>
    </FadeUp>
  )
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0C6489 0%, #44CACB 100%)' }}>
        <div className="flex-1 flex items-center px-6 py-16 lg:px-16">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <div className="flex flex-col gap-8">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: APPLE_EASE }}>
                <a href="https://fyn.com.mx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <span className="text-white/70 text-sm font-medium whitespace-nowrap">Una creación de</span>
                  <Image src="/fyn_white.png" alt="ForgeYourNext" width={180} height={52} />
                </a>
              </motion.div>

              <div className="flex flex-col gap-4">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.15 }}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Agente IA en producción
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: APPLE_EASE, delay: 0.25 }}
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Tu agente<br />inmobiliaria<br />
                  <span className="text-white/70">que nunca duerme</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: APPLE_EASE, delay: 0.4 }}
                  className="text-lg text-white/80 leading-relaxed max-w-md">
                  Introduciendo a Cecilia, la agente IA que atiende a tus clientes por WhatsApp, presenta propiedades, filtra interesados y agenda citas — de forma completamente automática.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.55 }}
                className="flex flex-col gap-3">
                {[
                  { icon: '⚡', t: 'Respuesta inmediata', d: 'Contesta en menos de 20 segundos, las 24 horas del día.' },
                  { icon: '🏠', t: 'Presenta propiedades', d: 'Filtra y muestra las opciones más relevantes.' },
                  { icon: '📸', t: 'Envía imágenes y planos', d: 'Comparte fotos y planos directamente en el chat.' },
                  { icon: '🧮', t: 'Precálculo hipotecario', d: 'Estima mensualidades y capacidad de crédito al instante.' },
                  { icon: '📅', t: 'Agenda citas automáticamente', d: 'Coordina visitas sin intervención humana.' },
                ].map((b, i) => (
                  <motion.div key={b.t} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: APPLE_EASE, delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-3">
                    <span className="text-2xl">{b.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{b.t}</p>
                      <p className="text-white/70 text-sm">{b.d}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: APPLE_EASE, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="https://wa.me/525561222531" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-[#0C6489] font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all shadow-lg text-sm">
                  <WhatsAppIcon />Solicita una demo
                </a>
                <a href="#demo"
                  className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/25 transition-all border border-white/30 text-sm">
                  Ver cómo funciona →
                </a>
              </motion.div>
            </div>

            {/* Right — phone */}
            <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: APPLE_EASE, delay: 0.3 }}
              className="flex justify-center lg:justify-end">
              <WhatsAppMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS BAR ════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-12 px-6">
        <StaggerGrid className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.12}>
          {STATS_BAR.map(s => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1">
              <span className="text-3xl lg:text-4xl font-bold" style={{ color: '#0C6489' }}>{s.value}</span>
              <span className="text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </StaggerGrid>
      </section>

      {/* ══ 3. CÓMO FUNCIONA ════════════════════════════════════ */}
      <section id="demo" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-3">
            <SectionLabel>Proceso</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">¿Cómo funciona Cecilia?</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 max-w-xl mx-auto">En tres pasos simples, Cecilia convierte una conversación de WhatsApp en una cita confirmada.</p>
            </FadeUp>
          </div>
          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.15}>
            {STEPS.map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4 relative hover:shadow-md transition-shadow">
                <span className="absolute top-6 right-6 text-5xl font-black text-gray-200 select-none">{step.num}</span>
                <span className="text-4xl">{step.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ 4. PROPIEDADES ══════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-3">
            <SectionLabel>Catálogo inteligente</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Así presenta Cecilia tus propiedades</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 max-w-xl mx-auto">Cecilia conoce tu inventario completo y selecciona automáticamente las opciones más relevantes para cada cliente.</p>
            </FadeUp>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.15}>
            {PROPERTIES.map(p => (
              <div key={p.name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="relative h-52">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Disponible</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">📍 {p.zone}</p>
                  <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
                    <span>🛏 {p.beds} rec</span><span>🚿 {p.baths} baños</span>
                  </div>
                  <p className="mt-3 text-lg font-bold" style={{ color: '#0C6489' }}>{p.price} MXN</p>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ 5. FEATURES DETALLADAS ══════════════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col gap-28">
          {FEATURES.map((f, i) => (
            <div key={f.tag} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <SlideRight delay={0.1}>
                  <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#44CACB' }}>{f.tag}</span>
                </SlideRight>
                <SlideRight delay={0.2}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{f.title}</h3>
                </SlideRight>
                <SlideRight delay={0.3}>
                  <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </SlideRight>
                <SlideRight delay={0.35}>
                  <ul className="flex flex-col gap-2.5">
                    {f.bullets.map((b, bi) => (
                      <motion.li key={b}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: APPLE_EASE, delay: 0.4 + bi * 0.08 }}
                        className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </SlideRight>
              </div>
              <ScaleIn delay={0.15} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {f.visual ? (
                  <div className="h-72 lg:h-[420px]">
                    {f.visual}
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 lg:h-96">
                    <Image src={f.img!} alt={f.imgAlt!} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,100,137,0.35), transparent)' }} />
                  </div>
                )}
              </ScaleIn>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 6. BIG STATS ════════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0C6489 0%, #44CACB 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-3">
            <FadeUp>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Resultados que hablan por sí solos</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-white/70">Lo que Cecilia puede hacer para tu negocio.</p>
            </FadeUp>
          </div>
          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.15}>
            {BIG_STATS.map(s => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/20 hover:bg-white/15 transition-colors">
                <p className="text-5xl font-black text-white mb-4">{s.value}</p>
                <p className="text-white/80 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ 7. CARACTERÍSTICAS ══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-3">
            <SectionLabel>Tu nueva asistente</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cecilia, la asistente que nunca descansa</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 max-w-xl mx-auto">Diseñada específicamente para el mercado inmobiliario mexicano, con la inteligencia de un asesor experto.</p>
            </FadeUp>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {CHARACTERISTICS.map(c => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-teal-200 hover:shadow-sm transition-all">
                <span className="text-3xl">{c.icon}</span>
                <h4 className="font-bold text-gray-900">{c.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ══ 8. PANEL DE ADMINISTRACIÓN ══════════════════════════ */}
      <section className="py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #e8f4f8 100%)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 flex flex-col gap-3">
            <SectionLabel>Panel de administración</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Monitorea y administra a Cecilia,<br className="hidden sm:block" />
                <span style={{ color: '#0C6489' }}> desde donde sea</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Desde el panel de administración tienes visibilidad total de lo que Cecilia hace en tiempo real. Revisa cada conversación, gestiona tu catálogo de propiedades, supervisa las citas agendadas y mide el rendimiento de tu equipo — todo desde una sola pantalla, en cualquier dispositivo.
              </p>
            </FadeUp>
          </div>

          {/* Mobile: teléfono arriba + desktop abajo, apilados */}
          <div className="sm:hidden flex flex-col items-center gap-6 mb-12">
            <ScaleIn delay={0.15}>
              <div className="relative w-48 drop-shadow-2xl">
                <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-25"
                  style={{ background: 'linear-gradient(135deg, #0C6489, #44CACB)' }} />
                <Image
                  src="/panel-mobile.png"
                  alt="Panel de administración — dashboard móvil"
                  width={400}
                  height={780}
                  className="relative w-full"
                />
              </div>
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <div className="relative w-full drop-shadow-xl">
                <div className="absolute -inset-3 rounded-2xl blur-2xl opacity-20"
                  style={{ background: 'linear-gradient(135deg, #0C6489, #44CACB)' }} />
                <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <div className="flex items-center gap-1 px-3 py-2 bg-gray-800">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="mx-2 flex-1 bg-gray-700 rounded h-3.5 flex items-center px-2">
                      <span className="text-gray-400 text-[9px]">admin.ceciliarealestate.cloud</span>
                    </div>
                  </div>
                  <Image
                    src="/panel-desktop.png"
                    alt="Panel de administración — módulo de citas"
                    width={1200}
                    height={700}
                    className="w-full"
                  />
                </div>
              </div>
            </ScaleIn>
          </div>

          {/* sm+: desktop + mobile solapados, centrados como bloque */}
          <div className="hidden sm:flex justify-center mb-20">
            {/*
              Contenedor de ancho fijo centrado con mx-auto.
              Desktop ocupa el ancho menos el espacio del teléfono (mr-X).
              Teléfono en absolute right-0 dentro del mismo contenedor.
              El bloque completo queda simétrico: igual margen izquierdo y derecho.
            */}
            <div className="relative flex items-end w-full max-w-[820px] lg:max-w-[960px] xl:max-w-[1060px]">

              {/* Desktop screenshot */}
              <SlideRight delay={0.15} className="w-full mr-28 lg:mr-32 xl:mr-36">
                <div className="relative">
                  {/* Glow detrás */}
                  <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                    style={{ background: 'linear-gradient(135deg, #0C6489, #44CACB)' }} />
                  {/* Marco de browser */}
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-800">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="mx-3 flex-1 bg-gray-700 rounded-md h-5 flex items-center px-3">
                        <span className="text-gray-400 text-xs">admin.ceciliarealestate.cloud</span>
                      </div>
                    </div>
                    <Image
                      src="/panel-desktop.png"
                      alt="Panel de administración — módulo de citas"
                      width={1200}
                      height={700}
                      className="w-full"
                    />
                  </div>
                </div>
              </SlideRight>

              {/* Mobile screenshot superpuesta */}
              <SlideLeft delay={0.3} className="absolute right-0 bottom-0 w-36 lg:w-40 xl:w-44 drop-shadow-2xl">
                <Image
                  src="/panel-mobile.png"
                  alt="Panel de administración — dashboard móvil"
                  width={400}
                  height={780}
                  className="w-full"
                />
              </SlideLeft>
            </div>
          </div>

          {/* Feature pills */}
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
            stagger={0.12}
            baseDelay={0.2}
          >
            {[
              { icon: '📅', title: 'Citas en tabla o calendario', desc: 'Visualiza la agenda de visitas por día, semana o mes con código de color por estatus.' },
              { icon: '📊', title: 'Métricas en tiempo real', desc: 'Leads, citas, tasa de conversión y propiedades más buscadas de un vistazo.' },
              { icon: '💬', title: 'Historial de conversaciones', desc: 'Accede a cada chat que Cecilia tuvo con tus clientes, con el contexto completo.' },
            ].map(f => (
              <div key={f.title}
                className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm border border-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-snug mb-1">{f.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ══ 9. FAQ ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-3">
            <SectionLabel>FAQ</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Preguntas frecuentes</h2>
            </FadeUp>
          </div>
          <FadeIn delay={0.15}>
            <Faq />
          </FadeIn>
        </div>
      </section>

      {/* ══ 10. CTA FINAL ════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: 'linear-gradient(135deg, #0C6489 0%, #44CACB 100%)' }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <FadeUp>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              ¿Listo para conocer<br />a Cecilia en acción?
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-white/80 text-lg">Agenda una demo y ve cómo Cecilia puede transformar la atención al cliente de tu agencia inmobiliaria.</p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/525561222531" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#0C6489] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg">
                <WhatsAppIcon />Solicita una demo
              </a>
            </div>
            <p className="text-white/50 text-sm mt-3">Sin compromiso · Respuesta inmediata</p>
          </FadeUp>
        </div>
      </section>

      {/* ══ 11. FOOTER ══════════════════════════════════════════ */}
      <footer className="bg-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="https://fyn.com.mx" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-gray-400 text-xs">Una creación de</span>
            <Image src="/fyn_white.png" alt="ForgeYourNext" width={120} height={34} />
          </a>
          <p className="text-gray-500 text-sm text-center">© {new Date().getFullYear()} ForgeYourNext · Todos los derechos reservados</p>
          <div className="flex gap-5 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos</a>
            <a href="https://wa.me/525561222531" className="hover:text-gray-300 transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
