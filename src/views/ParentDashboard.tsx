import React from 'react';
import { 
  Bus, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Phone, 
  ShieldCheck,
  Bell,
  ChevronRight,
  Info,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { VisualMap } from '@/components/VisualMap';

export function ParentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
      {/* Left Column: Tracking & Driver Info */}
      <div className="lg:col-span-2 space-y-6">
        <div className="h-[500px]">
          <VisualMap />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Driver Info Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Seu Motorista</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-14 w-14 border-2 border-yellow-400">
                  <AvatarImage src="https://i.pravatar.cc/150?u=d1" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-slate-900">Roberto Silva</h4>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <ShieldCheck size={14} className="text-blue-500" /> Motorista Verificado
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="text-yellow-400 text-xs">★</span>
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">(128 avaliações)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Veículo:</span>
                  <span className="font-semibold text-slate-900">Mercedes Sprinter (ABC-1234)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Status:</span>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">Em Rota</Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                  <MessageSquare className="mr-2" size={18} /> Chat
                </Button>
                <Button variant="outline" className="flex-1 border-slate-200 rounded-xl">
                  <Phone className="mr-2" size={18} /> Ligar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Route Progress Card */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Status do Trajeto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-sm z-10"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Início da Rota</p>
                    <p className="text-xs text-slate-500">07:05 • Garagem Central</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Próxima Parada: Sua Casa</p>
                    <p className="text-xs text-slate-500">Previsão: 07:42 (8 min)</p>
                  </div>
                </div>
                <div className="relative opacity-40">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white shadow-sm z-10"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Chegada na Escola</p>
                    <p className="text-xs text-slate-500">Previsão: 08:15</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Column: Notifications & Children */}
      <div className="space-y-6">
        {/* Notifications */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Notificações</CardTitle>
            <Bell size={18} className="text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Transporte Chegando', time: '2 min atrás', desc: 'O motorista está a 500m da sua residência.', type: 'alert' },
                { title: 'Atraso Reportado', time: '15 min atrás', desc: 'Trânsito intenso na Av. Paulista.', type: 'info' },
                { title: 'Embarque Confirmado', time: 'Ontem', desc: 'Lucas embarcou com sucesso às 07:45.', type: 'success' },
              ].map((notif, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="text-xs font-bold text-slate-900">{notif.title}</h5>
                    <span className="text-[9px] text-slate-400">{notif.time}</span>
                  </div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{notif.desc}</p>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-xs text-slate-500 hover:text-slate-900">
              Ver histórico completo
            </Button>
          </CardContent>
        </Card>

        {/* Children Info */}
        <Card className="border-none shadow-sm bg-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users size={20} /> Meus Filhos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Lucas Oliveira', school: 'Colégio Bandeirantes', status: 'Em trânsito' },
              { name: 'Ana Clara', school: 'Colégio Bandeirantes', status: 'Aguardando' },
            ].map((child, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{child.name}</p>
                  <p className="text-[10px] text-blue-100">{child.school}</p>
                </div>
                <Badge className="bg-white text-blue-600 hover:bg-white border-none text-[10px]">
                  {child.status}
                </Badge>
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Info size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold">Aviso de Ausência</p>
                  <p className="text-[10px] text-blue-100 mt-1">Seu filho não irá hoje? Avise o motorista com antecedência.</p>
                  <button className="text-[10px] font-bold mt-2 underline">REPORTAR AUSÊNCIA</button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
