import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bus, 
  ShieldCheck, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Check, 
  ArrowRight,
  Star,
  Smartphone,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';

export function LandingPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRole } = useAppContext();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Test login logic
    if (email === 'teste@escolargo.com' && password === '123456') {
      setRole('ADMIN');
      onLogin();
    } else {
      alert('Login de teste: teste@escolargo.com / 123456');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/EscolarGO1.fw.png" alt="EscolarGO Logo" className="h-20 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Funcionalidades</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Planos</a>
          <a href="#login" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all">Entrar</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <img src="/EscolarGO1.fw.png" alt="EscolarGO Logo" className="h-40 w-auto object-contain" />
          </div>
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-none px-4 py-1 mb-6">
            ✨ O Futuro do Transporte Escolar
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
            Segurança e <span className="text-yellow-500">Tranquilidade</span> em cada trajeto.
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
            A plataforma SaaS definitiva para motoristas escolares. Monitore rotas, comunique-se com os pais e gerencie sua frota com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-slate-900 text-white h-14 px-8 rounded-2xl text-lg font-bold hover:scale-105 transition-transform">
              Começar Agora <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="h-14 px-8 rounded-2xl text-lg font-bold border-slate-200">
              Ver Demonstração
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="text-slate-900 font-bold">+500 motoristas</span> já confiam no EscolarGo
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-[40px] blur-3xl"></div>
          <div className="relative p-4 flex items-center justify-center">
            <img 
              src="/bus_go.png" 
              className="w-full h-auto object-contain drop-shadow-2xl" 
              alt="App Preview" 
            />

            {/* Floating UI elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                <p className="text-xs font-bold text-slate-900">Aluno Embarcado</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Tudo o que você precisa</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Desenvolvemos ferramentas específicas para cada ponta do transporte escolar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: MapPin, 
                title: 'Rastreamento Real', 
                desc: 'Pais acompanham a localização exata do veículo pelo mapa em tempo real.',
                color: 'bg-blue-500'
              },
              { 
                icon: MessageSquare, 
                title: 'Comunicação Direta', 
                desc: 'Chat integrado para avisos rápidos, atrasos ou ausências sem sair do app.',
                color: 'bg-yellow-500'
              },
              { 
                icon: ShieldCheck, 
                title: 'Segurança Total', 
                desc: 'Check-in e check-out de alunos com notificações instantâneas para os pais.',
                color: 'bg-green-500'
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Planos que crescem com você</h2>
          <p className="text-slate-500">Escolha a melhor opção para o seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Individual', 
              price: 'R$ 49', 
              desc: 'Para motoristas autônomos',
              features: ['Até 20 alunos', 'Rastreamento em tempo real', 'Chat básico', 'Suporte por email']
            },
            { 
              name: 'Profissional', 
              price: 'R$ 99', 
              desc: 'O mais popular entre motoristas',
              popular: true,
              features: ['Alunos ilimitados', 'Histórico de rotas', 'Notificações push', 'Suporte prioritário', 'Gestão financeira']
            },
            { 
              name: 'Empresarial', 
              price: 'R$ 299', 
              desc: 'Para frotas e empresas',
              features: ['Múltiplos veículos', 'Dashboard admin frota', 'Relatórios avançados', 'API de integração', 'Gerente de conta']
            }
          ].map((plan, i) => (
            <div key={i} className={cn(
              "relative p-8 rounded-[32px] border transition-all",
              plan.popular ? "bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10" : "bg-white border-slate-100"
            )}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={cn("text-sm mb-8", plan.popular ? "text-slate-400" : "text-slate-500")}>{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={cn("text-sm", plan.popular ? "text-slate-400" : "text-slate-500")}>/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", plan.popular ? "bg-yellow-400 text-slate-900" : "bg-slate-100 text-slate-600")}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className={cn(
                "w-full h-12 rounded-xl font-bold",
                plan.popular ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500" : "bg-slate-900 text-white hover:bg-slate-800"
              )}>
                Assinar Plano
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="bg-yellow-400 py-24 px-8">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-[40px] shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Acesse sua conta</h2>
            <p className="text-slate-500 text-sm">Use os dados de teste para explorar a plataforma.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">E-mail</label>
              <Input 
                type="email" 
                placeholder="teste@escolargo.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-slate-200 focus:ring-yellow-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">Senha</label>
              <Input 
                type="password" 
                placeholder="••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-slate-200 focus:ring-yellow-400"
              />
            </div>
            <Button type="submit" className="w-full h-14 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold text-lg">
              Entrar na Plataforma
            </Button>
          </form>

          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Acesso de Teste</p>
            <div className="flex justify-between text-xs">
              <span className="text-slate-600">E-mail: <span className="font-bold text-slate-900">teste@escolargo.com</span></span>
              <span className="text-slate-600">Senha: <span className="font-bold text-slate-900">123456</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/EscolarGO1.fw.png" alt="EscolarGO Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Transformando o transporte escolar em uma experiência segura, conectada e eficiente para todos.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="font-bold">Developer</li>
              <li>CidEngenharia</li>
              <li>Sidney Sales</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 EscolarGo. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
