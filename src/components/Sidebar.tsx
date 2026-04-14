import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Bus, 
  MapPin, 
  MessageSquare, 
  Settings, 
  CreditCard,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { role, setRole } = useAppContext();

  const menuItems = {
    ADMIN: [
      { icon: LayoutDashboard, label: 'Dashboard', id: 'dash' },
      { icon: Users, label: 'Motoristas', id: 'drivers' },
      { icon: Bus, label: 'Frotas', id: 'fleet' },
      { icon: CreditCard, label: 'Assinaturas', id: 'billing' },
      { icon: Settings, label: 'Configurações', id: 'settings' },
    ],
    DRIVER: [
      { icon: MapPin, label: 'Minha Rota', id: 'route' },
      { icon: Users, label: 'Alunos', id: 'students' },
      { icon: MessageSquare, label: 'Chat', id: 'chat' },
      { icon: Settings, label: 'Veículo', id: 'vehicle' },
    ],
    PARENT: [
      { icon: MapPin, label: 'Rastreamento', id: 'tracking' },
      { icon: MessageSquare, label: 'Chat Motorista', id: 'chat' },
      { icon: Users, label: 'Meus Filhos', id: 'children' },
      { icon: Settings, label: 'Perfil', id: 'profile' },
    ]
  };

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col border-r border-slate-800">
      <div className="p-6">
        <div className="bg-white/10 p-2 rounded-xl">
          <img src="/EscolarGO1.fw.png" alt="EscolarGO Logo" className="h-12 w-auto object-contain brightness-110" />
        </div>
      </div>


      <nav className="flex-1 px-4 space-y-2">
        <div className="mb-4 px-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Menu Principal</p>
        </div>
        {menuItems[role].map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all group"
          >
            <item.icon size={20} className="group-hover:text-yellow-400 transition-colors" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-4">
        <div className="bg-slate-800/50 p-3 rounded-xl">
          <p className="text-xs text-slate-500 mb-2">Alternar Visão (Demo)</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setRole('ADMIN')}
              className={cn("text-xs py-1 px-2 rounded border border-slate-700 hover:bg-slate-700", role === 'ADMIN' && "bg-yellow-400 text-slate-900 font-bold border-yellow-400")}
            >
              Admin
            </button>
            <button 
              onClick={() => setRole('DRIVER')}
              className={cn("text-xs py-1 px-2 rounded border border-slate-700 hover:bg-slate-700", role === 'DRIVER' && "bg-yellow-400 text-slate-900 font-bold border-yellow-400")}
            >
              Motorista
            </button>
            <button 
              onClick={() => setRole('PARENT')}
              className={cn("text-xs py-1 px-2 rounded border border-slate-700 hover:bg-slate-700", role === 'PARENT' && "bg-yellow-400 text-slate-900 font-bold border-yellow-400")}
            >
              Pais
            </button>
          </div>
        </div>
        
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
}
