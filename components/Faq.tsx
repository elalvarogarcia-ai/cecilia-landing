'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FAQS = [
  {
    q: '¿Qué es Cecilia y cómo funciona?',
    a: 'Cecilia es una agente inmobiliaria con inteligencia artificial que atiende a tus clientes por WhatsApp de forma automática. Responde preguntas, presenta propiedades según los filtros del cliente, califica su intención de compra y agenda citas en tu calendario — todo sin intervención humana.',
  },
  {
    q: '¿En qué se diferencia de un chatbot normal?',
    a: 'A diferencia de un chatbot con respuestas predefinidas, Cecilia entiende el lenguaje natural, aprende el catálogo de propiedades y adapta sus respuestas a cada conversación. Es capaz de manejar objeciones, comparar propiedades y guiar al cliente hasta agendar una visita.',
  },
  {
    q: '¿Necesito conocimientos técnicos para configurarla?',
    a: 'No. Nosotros nos encargamos de toda la configuración e integración con tu catálogo de propiedades y tu calendario. En menos de 48 horas Cecilia está lista para atender a tus clientes.',
  },
  {
    q: '¿Qué pasa si el cliente tiene una pregunta que Cecilia no puede responder?',
    a: 'Cecilia identifica cuándo una conversación necesita atención humana y transfiere el caso a un asesor con todo el contexto de la conversación. Así nunca pierdes a un cliente por falta de respuesta.',
  },
  {
    q: '¿Funciona fuera del horario de oficina?',
    a: 'Sí, Cecilia trabaja 24 horas al día, los 7 días de la semana, incluyendo fines de semana y días festivos. Responde en segundos sin importar la hora.',
  },
  {
    q: '¿Puedo ver los resultados y métricas?',
    a: 'Sí. Tienes acceso a un panel administrador donde puedes ver todas las conversaciones, el estatus de cada lead, las citas agendadas y métricas de conversión en tiempo real.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          >
            <span className="font-semibold text-gray-800 text-sm lg:text-base">{faq.q}</span>
            <span
              className="text-2xl text-[#0C6489] flex-shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
