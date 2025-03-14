import { baseUrlProduction } from "@/schemas/base/config"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrlProduction),
  title:
    "Não seja a próxima vítima - Aprenda a reconhecer os sinais antes que seja tarde!",
  generator: "Next.js",
  description:
    "Os sinais estão lá, mas muitas mulheres não os percebem até que seja tarde demais. Iremos te ensinar a identificar os perigos escondidos e a se proteger antes que algo aconteça.",
  keywords: [
    "relacionamento abusivo sinais",
    "como identificar um relacionamento abusivo",
    "sinais de abuso emocional",
    "e-book sobre relacionamentos tóxicos",
    "evitar relacionamentos abusivos",
    "como sair de um relacionamento abusivo",
    "como reconhecer um parceiro manipulador",
    "dependência emocional e abuso",
    "dicas para identificar relacionamentos tóxicos",
    "histórias reais de mulheres vítimas de abuso"
  ],
  authors: [
    {
      name: "Fabiano Pereira",
      url: "https://fabianopereiradev.com.br/"
    }
  ],
  creator: "Fabiano Pereira",
  publisher: "Fabiano Pereira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrlProduction,
    title:
      "Não seja a próxima vítima - Aprenda a reconhecer os sinais antes que seja tarde!",
    description:
      "Os sinais estão lá, mas muitas mulheres não os percebem até que seja tarde demais. Iremos te ensinar a identificar os perigos escondidos e a se proteger antes que algo aconteça.",
    siteName: "CicloDoze",
    images: [
      {
        url: "/assets/openGraph.webp",
        width: 1440,
        height: 823,
        alt: "Ciclodoze - Plataforma de produtividade"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Não seja a próxima vítima - Aprenda a reconhecer os sinais antes que seja tarde!",
    description:
      "Os sinais estão lá, mas muitas mulheres não os percebem até que seja tarde demais. Iremos te ensinar a identificar os perigos escondidos e a se proteger antes que algo aconteça.",
    creator: "@fabianopereira.dev",
    images: ["/assets/openGraph.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: baseUrlProduction
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
