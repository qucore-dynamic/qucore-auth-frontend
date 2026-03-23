// Styles
import '../global.css'

// Font
import { Prosto_One } from 'next/font/google'

// Modules
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

// Types
import { LocalesLayoutT } from '@shared-types/layouts'

const prosto = Prosto_One({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const RootLayout = async ({ children, params }: LocalesLayoutT) => {
  const { locale } = await params

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`${prosto.className} flex flex-col justify-center w-full px-[2.5%] h-screen bg-(--bg) text-(--txt)`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
