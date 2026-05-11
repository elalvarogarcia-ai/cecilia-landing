import type { Metadata } from 'next'
import './globals.css'

/* ─── SEO / Metadata ────────────────────────────────────────── */
export const metadata: Metadata = {
  /* Título principal (≤ 60 chars recomendado) */
  title: {
    default: 'Cecilia AI — Agente IA Inmobiliaria para WhatsApp 24/7',
    template: '%s | Cecilia AI',
  },

  /* Descripción (150–160 chars) */
  description:
    'Cecilia atiende a tus clientes por WhatsApp, presenta propiedades, filtra leads y agenda citas automáticamente. Más visitas, menos trabajo manual. Disponible 24/7.',

  /* Palabras clave orientadas a búsquedas en español (México) */
  keywords: [
    'agente IA inmobiliaria',
    'chatbot WhatsApp inmobiliaria',
    'inteligencia artificial inmobiliaria',
    'automatizar citas inmobiliaria',
    'chatbot inmobiliario México',
    'leads inmobiliarios automatización',
    'software inmobiliaria inteligencia artificial',
    'atención clientes WhatsApp inmobiliaria',
    'agente virtual inmobiliaria',
    'Cecilia AI',
    'agenda citas inmobiliaria automática',
    'calificación leads inmobiliaria',
    'inmobiliaria Guadalajara',
    'WhatsApp Business inmobiliaria',
    'asistente IA ventas inmuebles',
  ],

  /* Autor / publicador */
  authors: [{ name: 'FYN', url: 'https://fyn.com.mx' }],
  creator:   'FYN',
  publisher: 'FYN',

  /* Canonical URL */
  alternates: {
    canonical: 'https://ceciliarealestate.cloud',
  },

  /* Directivas para Googlebot */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
      'max-video-preview': -1,
    },
  },

  /* Open Graph — redes sociales (Facebook, LinkedIn, WhatsApp…) */
  openGraph: {
    type:     'website',
    locale:   'es_MX',
    url:      'https://ceciliarealestate.cloud',
    siteName: 'Cecilia AI',
    title:       'Cecilia AI — Agente IA Inmobiliaria para WhatsApp',
    description: 'Atiende a tus clientes por WhatsApp, presenta propiedades, filtra leads y agenda citas automáticamente. Resultados reales: 4× más visitas agendadas.',
    images: [
      {
        url:    'https://ceciliarealestate.cloud/og-image.png',
        width:  1200,
        height: 630,
        alt:    'Cecilia AI — Agente IA Inmobiliaria para WhatsApp',
      },
    ],
  },

  /* Twitter / X Cards */
  twitter: {
    card:        'summary_large_image',
    title:       'Cecilia AI — Agente IA Inmobiliaria para WhatsApp',
    description: 'Atiende a tus clientes por WhatsApp, presenta propiedades, filtra leads y agenda citas automáticamente. 24/7, sin intervención humana.',
    images:      ['https://ceciliarealestate.cloud/og-image.png'],
  },

  /* Verificación (agrega el código que te dé Google Search Console) */
  // verification: { google: 'TU_CODIGO_AQUI' },
}

/* ─── JSON-LD Structured Data ───────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* Organización */
    {
      '@type': 'Organization',
      '@id':   'https://ceciliarealestate.cloud/#organization',
      name:    'FYN',
      url:     'https://fyn.com.mx',
      logo: {
        '@type': 'ImageObject',
        url:     'https://ceciliarealestate.cloud/fyn_original.png',
      },
    },
    /* Producto / Software */
    {
      '@type':               'SoftwareApplication',
      '@id':                 'https://ceciliarealestate.cloud/#software',
      name:                  'Cecilia AI',
      url:                   'https://ceciliarealestate.cloud',
      description:
        'Agente de inteligencia artificial para inmobiliarias que atiende clientes por WhatsApp, presenta propiedades, califica leads y agenda citas de forma completamente automática.',
      applicationCategory:   'BusinessApplication',
      operatingSystem:       'Web, WhatsApp',
      inLanguage:            'es-MX',
      offers: {
        '@type':        'Offer',
        availability:   'https://schema.org/InStock',
        priceCurrency:  'MXN',
      },
      featureList: [
        'Atención al cliente por WhatsApp 24/7',
        'Presentación automática de propiedades',
        'Calificación de leads con inteligencia artificial',
        'Agendado automático de citas',
        'Envío de imágenes y planos de propiedades',
        'Precálculo de crédito hipotecario',
        'Panel de administración en tiempo real',
        'Historial de conversaciones',
      ],
      creator: { '@id': 'https://ceciliarealestate.cloud/#organization' },
    },
    /* Servicio */
    {
      '@type':       'Service',
      '@id':         'https://ceciliarealestate.cloud/#service',
      name:          'Cecilia AI — Agente IA Inmobiliaria',
      serviceType:   'Agente de Inteligencia Artificial Inmobiliaria',
      description:
        'Servicio de automatización inmobiliaria mediante IA conversacional en WhatsApp. Atiende, califica y agenda citas con tus prospectos sin intervención humana.',
      provider:  { '@id': 'https://ceciliarealestate.cloud/#organization' },
      areaServed: {
        '@type': 'Country',
        name:    'México',
      },
      audience: {
        '@type':       'BusinessAudience',
        audienceType:  'Agencias inmobiliarias, brokers y asesores independientes',
      },
    },
    /* FAQPage — Google puede mostrar las respuestas en los resultados */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type':          'Question',
          name:             '¿Qué es Cecilia AI y cómo funciona?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Cecilia es una agente inmobiliaria con inteligencia artificial que atiende a tus clientes por WhatsApp de forma automática. Responde preguntas, presenta propiedades según los filtros del cliente, califica su intención de compra y agenda citas en tu calendario, todo sin intervención humana.',
          },
        },
        {
          '@type':          'Question',
          name:             '¿En qué se diferencia Cecilia de un chatbot normal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'A diferencia de un chatbot con respuestas predefinidas, Cecilia entiende el lenguaje natural, aprende el catálogo de propiedades y adapta sus respuestas a cada conversación. Es capaz de manejar objeciones, comparar propiedades y guiar al cliente hasta agendar una visita.',
          },
        },
        {
          '@type':          'Question',
          name:             '¿Cecilia funciona fuera del horario de oficina?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Sí, Cecilia trabaja 24 horas al día, los 7 días de la semana, incluyendo fines de semana y días festivos. Responde en menos de 20 segundos sin importar la hora.',
          },
        },
        {
          '@type':          'Question',
          name:             '¿Necesito conocimientos técnicos para configurar Cecilia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'No. El equipo de FYN se encarga de toda la configuración e integración con tu catálogo de propiedades y tu calendario. En menos de 48 horas Cecilia está lista para atender a tus clientes.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full antialiased">{children}</body>
    </html>
  )
}
