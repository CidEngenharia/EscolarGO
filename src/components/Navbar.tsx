import React from 'react';
import { Bell, Search, User as UserIcon } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

export function Navbar() {
  const { user, role } = useAppContext();

  return (
    <header className="h-16 border-bottom border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            placeholder="Buscar alunos, rotas ou motoristas..." 
            className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{role}</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-slate-100">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-slate-100 text-slate-600">
              <UserIcon size={20} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
