import './globals.css'

export const metadata = {
  title: 'Marvel',
  description: 'Projeto desenvolvido em forma de teste para processo seletivo de Front-end',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='max-w-screen-{1366} h-screen tracking-tightest m-auto'>{children}</body>
    </html>
  )
}
