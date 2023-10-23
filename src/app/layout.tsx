'use client'
import Header from '@/components/UI/Header'
import { ConfigProvider, Flex } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={{
          token: {
            colorPrimary: '28c0e9',
          },
          components: {
            Button: {
              controlHeight: 56,
              borderRadius: 20,
            },
          }
        }}>
          <Header isLogin={pathname === '/login'}/>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
