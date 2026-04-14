import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


import { useAppContext } from '@/context/AppContext';

interface LoginProps {
  onLogin: () => void;
  onBack: () => void;
}

export function Login({ onLogin, onBack }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRole } = useAppContext();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'teste@escolargo.com' && password === '123456') {
      setRole('ADMIN');
      onLogin();
    } else {
      alert('Dados incorretos. Use os dados de teste.');
    }
  };


  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-8 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-8 rounded-[40px] shadow-2xl relative"
      >
        <button 
          onClick={onBack}
          className="absolute top-6 left-8 text-slate-400 hover:text-slate-900 transition-colors text-sm font-bold flex items-center gap-1"
        >
          ← Voltar
        </button>

        <div className="text-center mb-8 pt-6">
          <div className="flex justify-center mb-6">
            <img src="/EscolarGO1.fw.png" alt="EscolarGO Logo" className="h-20 w-auto object-contain" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Acesse sua conta</h2>
          <p className="text-slate-500 text-xs">Use os dados de teste para explorar a plataforma.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-900 uppercase tracking-wider ml-1">E-mail</label>
            <Input 
              type="email" 
              placeholder="teste@escolargo.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl border-slate-200 focus:ring-yellow-400 text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-900 uppercase tracking-wider ml-1">Senha</label>
            <Input 
              type="password" 
              placeholder="••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 rounded-xl border-slate-200 focus:ring-yellow-400 text-sm"
            />
          </div>
          <Button type="submit" className="w-full h-12 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold text-base shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-transform">
            Entrar na Plataforma
          </Button>
        </form>

        <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Acesso de Teste</p>
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-600">E-mail: <span className="font-bold text-slate-900">teste@escolargo.com</span></span>
            <span className="text-slate-600">Senha: <span className="font-bold text-slate-900">123456</span></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
