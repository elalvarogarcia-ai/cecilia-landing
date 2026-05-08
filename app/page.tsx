import Image from 'next/image'

const CHAT_MESSAGES = [
  { from: 'client', text: 'Hola! Me interesa una casa en Zapopan, presupuesto $5M MXN' },
  { from: 'cecilia', text: '¡Hola! Soy Cecilia 👋 Con gusto te ayudo. ¿Buscas casa o departamento?' },
  { from: 'client', text: 'Casa, mínimo 3 recámaras' },
  { from: 'cecilia', text: 'Perfecto. Encontré 3 opciones que se ajustan a tu búsqueda 🏠' },
  {
    from: 'cecilia',
    card: {
      title: 'Casa Valle Real',
      detail: '4 rec · 3 baños · 320 m²',
      price: '$4,850,000 MXN',
      tag: 'Disponible',
    },
  },
  { from: 'client', text: 'Me interesa esa! ¿Puedo verla?' },
  { from: 'cecilia', text: '¡Claro! ¿Te parece el jueves 15 a las 11am? Agendo tu visita ahora 📅' },
]

const BENEFITS = [
  {
    icon: '⚡',
    title: 'Respuesta inmediata',
    desc: 'Cecilia atiende a tus clientes en segundos, las 24 horas del día.',
  },
  {
    icon: '🏠',
    title: 'Presenta propiedades',
    desc: 'Filtra y muestra las propiedades más relevantes para cada cliente.',
  },
  {
    icon: '📅',
    title: 'Agenda citas automáticamente',
    desc: 'Coordina visitas y las registra en tu calendario sin intervención.',
  },
]

export default function LandingPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(135deg, #0C6489 0%, #44CACB 100%)' }}
    >
      {/* Hero */}
      <div className="flex-1 flex items-center px-6 py-12 lg:px-16 lg:py-0">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-8">

            {/* Logo */}
            <div>
              <Image src="/fyn_original.png" alt="ForgeYourNext" width={140} height={40} />
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Agente IA en producción
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Tu agente<br />
                inmobiliaria<br />
                <span className="text-white/70">que nunca duerme</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-md">
                Cecilia atiende a tus clientes por WhatsApp, presenta propiedades,
                filtra interesados y agenda citas — de forma completamente automática.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{b.title}</p>
                    <p className="text-white/70 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#0C6489] font-bold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all shadow-lg text-sm"
              >
                <WhatsAppIcon />
                Habla con Cecilia
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/25 transition-all border border-white/30 text-sm"
              >
                Ver demo en video →
              </a>
            </div>
          </div>

          {/* Columna derecha — mockup WhatsApp */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl scale-110" />

              {/* Phone frame */}
              <div
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-72 lg:w-80"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}
              >
                {/* WhatsApp header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    C
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">Cecilia IA</p>
                    <p className="text-green-300 text-xs mt-0.5">en línea</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-white/20" />
                    <div className="w-4 h-4 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Chat area */}
                <div
                  className="px-3 py-3 flex flex-col gap-2"
                  style={{ background: '#ECE5DD', minHeight: 420 }}
                >
                  {CHAT_MESSAGES.map((msg, i) => {
                    if (msg.card) {
                      return (
                        <div key={i} className="self-start max-w-[85%]">
                          <div className="bg-white rounded-xl overflow-hidden shadow-sm text-xs">
                            <div className="h-20 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                              <span className="text-white text-3xl">🏠</span>
                            </div>
                            <div className="p-2.5">
                              <p className="font-bold text-gray-800">{msg.card.title}</p>
                              <p className="text-gray-500 mt-0.5">{msg.card.detail}</p>
                              <div className="flex items-center justify-between mt-2">
                                <p className="font-bold text-[#0C6489] text-xs">{msg.card.price}</p>
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                                  {msg.card.tag}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    const isClient = msg.from === 'client'
                    return (
                      <div key={i} className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`px-3 py-2 rounded-xl text-xs leading-relaxed max-w-[80%] shadow-sm ${
                            isClient
                              ? 'bg-[#DCF8C6] text-gray-800 rounded-br-sm'
                              : 'bg-white text-gray-800 rounded-bl-sm'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    )
                  })}

                  {/* Typing indicator */}
                  <div className="self-start">
                    <div className="bg-white px-3 py-2 rounded-xl rounded-bl-sm shadow-sm flex gap-1 items-center h-8 w-14">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400">
                    Escribe un mensaje...
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating stat — citas */}
              <div className="absolute -left-12 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 hidden lg:flex">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-xs text-gray-500">Citas agendadas</p>
                  <p className="text-lg font-bold text-gray-800">+1,240</p>
                </div>
              </div>

              {/* Floating stat — respuesta */}
              <div className="absolute -right-10 bottom-24 bg-white rounded-2xl shadow-xl px-4 py-3 items-center gap-3 hidden lg:flex">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-xs text-gray-500">Tiempo de respuesta</p>
                  <p className="text-lg font-bold text-gray-800">&lt; 3 seg</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer mínimo */}
      <div className="text-center py-4 text-white/40 text-xs">
        © {new Date().getFullYear()} ForgeYourNext · Todos los derechos reservados
      </div>
    </main>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
