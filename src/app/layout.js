import { UserHeader } from "../components/user-header"
import "./globals.css"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"    

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          
          <main className="flex-1 flex flex-col bg-slate-50/50">
            <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger /> 
              </div>
              <UserHeader />
            </header>
            <div className="flex-1 p-6">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}