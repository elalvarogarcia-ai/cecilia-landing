import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cecilia AI — Tu agente inmobiliaria inteligente',
  description: 'Cecilia atiende clientes por WhatsApp, presenta propiedades y agenda citas automáticamente.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className="h-full antialiased">{children}</body>
    </html>
  )
}
