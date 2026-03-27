import { UserHeader } from "../components/user-header"
import "./globals.css"
// src/app/layout.js
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar" // Added SidebarTrigger here
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
                {/* Now this will work because it is imported above */}
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