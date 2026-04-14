import React from 'react';
import { motion } from 'motion/react';
import { Bus, MapPin, School, Home } from 'lucide-react';

interface VisualMapProps {
  driverLocation?: { lat: number, lng: number };
  students?: { id: string, name: string, status: string, address: string }[];
}

export function VisualMap({ driverLocation, students }: VisualMapProps) {
  return (
    <div className="relative w-full h-full bg-[#f8f9fa] overflow-hidden rounded-2xl border border-slate-200 shadow-inner">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Simulated Streets */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
        <path d="M0 100 H800 M0 300 H800 M0 500 H800 M100 0 V600 M400 0 V600 M700 0 V600" stroke="#e2e8f0" strokeWidth="40" fill="none" />
        <path d="M0 100 H800 M0 300 H800 M0 500 H800 M100 0 V600 M400 0 V600 M700 0 V600" stroke="#fff" strokeWidth="2" strokeDasharray="10 10" fill="none" />
      </svg>

      {/* School Icon */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg text-white mb-1">
          <School size={24} />
        </div>
        <span className="text-[10px] font-bold bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">Colégio Bandeirantes</span>
      </div>

      {/* Student Houses */}
      <div className="absolute top-[40%] left-[20%] flex flex-col items-center">
        <div className="bg-green-500 p-1.5 rounded-full shadow-md text-white border-2 border-white">
          <Home size={16} />
        </div>
        <span className="text-[9px] font-medium mt-1">Lucas</span>
      </div>

      <div className="absolute top-[70%] left-[80%] flex flex-col items-center">
        <div className="bg-orange-500 p-1.5 rounded-full shadow-md text-white border-2 border-white">
          <Home size={16} />
        </div>
        <span className="text-[9px] font-medium mt-1">Ana Clara</span>
      </div>

      {/* Driver / Bus Marker */}
      <motion.div 
        className="absolute z-20"
        initial={{ top: '80%', left: '10%' }}
        animate={{ 
          top: ['80%', '50%', '30%', '15%'],
          left: ['10%', '15%', '45%', '50%']
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="bg-yellow-400 p-3 rounded-2xl shadow-xl text-slate-900 border-2 border-white relative">
            <Bus size={24} />
          </div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-3 rounded-full whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Motorista Roberto • Em Rota
          </div>
        </div>
      </motion.div>

      {/* Map Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-100 font-bold text-xl">+</button>
        <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-100 font-bold text-xl">-</button>
        <button className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 border border-slate-100">
          <MapPin size={20} />
        </button>
      </div>

      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100 max-w-[200px]">
        <p className="text-xs font-bold text-slate-900 mb-1">Status da Rota</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-slate-600 font-medium">Em movimento</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-500">Próxima parada:</span>
            <span className="font-bold text-slate-900">Ana Clara</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-500">Tempo estimado:</span>
            <span className="font-bold text-blue-600">8 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
