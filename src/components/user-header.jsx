
import { Button } from "@/components/ui/button"
import { 
  User, 
  CreditCard, 
  Settings, 
  Bell, 
  ShoppingCart 
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserHeader() {
  return (
    <div className="flex items-center gap-2">
      
      <Button variant="ghost" size="icon" className="relative text-blue-500">
        <Bell className="h-5 w-5" />

      </Button>

  
      <Button variant="ghost" size="icon" className="relative text-slate-400">
        <ShoppingCart className="h-5 w-5" />
       
      </Button>

     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-12 w-full justify-start gap-3 px-2 hover:bg-slate-50">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-0.5 text-left">
              <p className="text-sm font-bold border-slate-700">Admin User</p>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">KSHRD</p>
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1 p-2">
              <p className="text-sm font-bold leading-none text-slate-600">Admin User</p>
              <p className="text-xs leading-none text-slate-400">admin@hrdshop.com</p>
            </div>
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuGroup className="p-1">
            <DropdownMenuItem className="flex gap-3 py-3 text-slate-600 focus:bg-slate-50 focus:text-cyan-600 cursor-pointer">
              <User className="h-4 w-4" />
              <span className="font-medium">My Profile</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex gap-3 py-3 text-slate-600 focus:bg-slate-50 focus:text-cyan-600 cursor-pointer">
              <CreditCard className="h-4 w-4" />
              <span className="font-medium">Billing</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex gap-3 py-3 text-slate-600 focus:bg-slate-50 focus:text-cyan-600 cursor-pointer">
              <Settings className="h-4 w-4" />
              <span className="font-medium">Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}