import React from 'react';
import { 
  Users, 
  Bus, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  MoreVertical,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Seg', valor: 400 },
  { name: 'Ter', valor: 300 },
  { name: 'Qua', valor: 600 },
  { name: 'Qui', valor: 800 },
  { name: 'Sex', valor: 500 },
];

const revenueData = [
  { month: 'Jan', revenue: 4500 },
  { month: 'Fev', revenue: 5200 },
  { month: 'Mar', revenue: 4800 },
  { month: 'Abr', revenue: 6100 },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Administrativo</h1>
        <p className="text-slate-500 mt-1">Visão geral da sua plataforma SaaS de transporte escolar.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Motoristas', value: '124', icon: Bus, color: 'bg-blue-500', trend: '+12%' },
          { label: 'Alunos Ativos', value: '1,842', icon: Users, color: 'bg-green-500', trend: '+5%' },
          { label: 'Receita Mensal', value: 'R$ 42.500', icon: TrendingUp, color: 'bg-yellow-500', trend: '+18%' },
          { label: 'Alertas Ativos', value: '3', icon: AlertCircle, color: 'bg-red-500', trend: '-2' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className={`${stat.color} p-3 rounded-2xl text-white shadow-lg shadow-${stat.color.split('-')[1]}-200 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-none">
                  {stat.trend}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Crescimento de Assinaturas</CardTitle>
                <CardDescription>Volume de novos motoristas por mês</CardDescription>
              </div>
              <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20} /></button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Drivers */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Motoristas Recentes</CardTitle>
            <CardDescription>Últimos cadastros na plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: 'Carlos Alberto', status: 'Ativo', date: 'Hoje, 14:20' },
                { name: 'Sandra Regina', status: 'Pendente', date: 'Hoje, 11:05' },
                { name: 'Marcos Paulo', status: 'Ativo', date: 'Ontem, 18:45' },
                { name: 'Juliana Costa', status: 'Ativo', date: 'Ontem, 15:30' },
              ].map((driver, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                      {driver.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors">{driver.name}</p>
                      <p className="text-xs text-slate-500">{driver.date}</p>
                    </div>
                  </div>
                  <Badge className={driver.status === 'Ativo' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'}>
                    {driver.status}
                  </Badge>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
              Ver todos os motoristas <ArrowUpRight size={16} />
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Active Routes Table */}
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Rotas em Tempo Real</CardTitle>
          <CardDescription>Monitoramento das rotas ativas no momento</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-slate-100">
                <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Motorista</TableHead>
                <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Rota</TableHead>
                <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Status</TableHead>
                <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Alunos</TableHead>
                <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Última Atualização</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { driver: 'Roberto Silva', route: 'Zona Sul - Manhã', status: 'Em Rota', students: '12/15', time: '2 min atrás' },
                { driver: 'Ana Paula', route: 'Centro - Tarde', status: 'Iniciando', students: '0/8', time: '10 min atrás' },
                { driver: 'Ricardo Gomes', route: 'Zona Norte - Noite', status: 'Finalizado', students: '20/20', time: '1h atrás' },
              ].map((row, i) => (
                <TableRow key={i} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-semibold text-slate-900">{row.driver}</TableCell>
                  <TableCell className="text-slate-600">{row.route}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${row.status === 'Em Rota' ? 'bg-green-500 animate-pulse' : row.status === 'Iniciando' ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                      <span className="text-sm font-medium">{row.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">{row.students}</TableCell>
                  <TableCell className="text-slate-500 text-xs">{row.time}</TableCell>
                  <TableCell className="text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><MoreVertical size={18} /></button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
