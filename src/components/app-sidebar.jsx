import {
  LayoutGrid,
  Users,
  BookOpen,
  Settings,
  ShoppingBag
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Products", icon: LayoutGrid },
  { title: "Customer", icon: Users },
  { title: "Categories", icon: BookOpen },
  { title: "Settings", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 bg-white">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-500">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-blue-600">
              HRD <span className="text-blue-700">SHOP</span>
            </h2>
            <p className="text-[10px] font-medium tracking-widest text-slate-400">
              ADMIN V2.0
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 px-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Main Menu
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}  className="mb-2">
                <SidebarMenuButton 
                  className="flex items-center gap-4 py-6 text-slate-500 transition-colors hover:bg-slate-50 hover:text-cyan-500 active:text-cyan-600"
                >
                  <item.icon className="h-5 w-5 stroke-[1.5px]" />
                  <span className="text-base font-semibold">{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}