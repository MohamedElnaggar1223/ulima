import { Metadata } from "next"
import './globals.css'
import { Inter, Grenze } from 'next/font/google'
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { VerificationProvider } from "@/providers/VerifiedContext"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ulima - Anonymous Messages',
    description: 'Share anonymous messages exclusively to Ulima.',
}

const grenze = Grenze({ subsets: ['latin'], weight: '400', variable: '--font-grenze' })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-br from-green-400 to-yellow-400 min-h-screen">
                <div className="min-h-screen flex flex-col justify-between">
                    <main className={cn("flex-1", inter.className, grenze.variable)}>
                        <VerificationProvider>
                            {children}
                        </VerificationProvider>
                    </main>
                    <Toaster />
                </div>
            </body>
        </html>
    )
}