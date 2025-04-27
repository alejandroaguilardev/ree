import type React from "react"
import type { ReactNode } from "react"
import { RouterLink } from "../UI"
import { navigation } from "../../routes/navegation"

interface Props {
    children: ReactNode
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-800">
            <header className="border-b border-zinc-200 py-4">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-xl font-medium tracking-tight text-zinc-900">REE</h1>
                    <nav className="hidden sm:flex space-x-6">
                        <RouterLink to={navigation.home} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                            Inicio
                        </RouterLink>
                        <RouterLink to={navigation.balance} className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                            Balance
                        </RouterLink>
                    </nav>
                </div>
            </header>

            <main className="flex-1 py-8 sm:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm border border-zinc-100 p-6 sm:p-8">{children}</div>
                </div>
            </main>

            <footer className="border-t border-zinc-200 py-6 mt-auto">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-zinc-500">&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}