import React, { useState } from 'react';
import { 
  Play, 
  Square, 
  UserCheck, 
  UserMinus, 
  MessageSquare, 
  MapPin, 
  Clock,
  Navigation,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { VisualMap } from '@/components/VisualMap';
import { MOCK_STUDENTS } from '@/mocks/data';

export function DriverDashboard() {
  const [isRouteActive, setIsRouteActive] = useState(false);
  const [students, setStudents] = useState(MOCK_STUDENTS);

  const toggleStudentStatus = (id: string) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'BOARDED' ? 'PENDING' : 'BOARDED' };
      }
      return s;
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-120px)] animate-in slide-in-from-bottom-4 duration-500">
      {/* Left Column: Route Controls & Students */}
      <div className="lg:col-span-1 flex flex-col gap-6 overflow-hidden">
        {/* Route Action Card */}
        <Card className="border-none shadow-sm bg-slate-900 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold">Rota: Zona Sul - Manhã</h3>
                <p className="text-slate-400 text-xs">15 alunos previstos • 8.5 km total</p>
              </div>
              <Badge className={isRouteActive ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-slate-800 text-slate-400 border-slate-700"}>
                {isRouteActive ? "EM ROTA" : "AGUARDANDO"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {!isRouteActive ? (
                <Button 
                  onClick={() => setIsRouteActive(true)}
                  className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold py-6 rounded-xl col-span-2"
                >
                  <Play className="mr-2 fill-current" size={20} /> INICIAR ROTA
                </Button>
              ) : (
                <>
                  <Button 
                    variant="outline"
                    onClick={() => setIsRouteActive(false)}
                    className="border-slate-700 text-white hover:bg-slate-800 py-6 rounded-xl"
                  >
                    <Square className="mr-2 fill-current" size={18} /> PARAR
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl">
                    <Navigation className="mr-2" size={18} /> GPS
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Students List */}
        <Card className="flex-1 border-none shadow-sm overflow-hidden flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Lista de Embarque</CardTitle>
              <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                {students.filter(s => s.status === 'BOARDED').length}/{students.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full px-6">
              <div className="space-y-4 py-4">
                {students.map((student) => (
                  <div 
                    key={student.id} 
                    className={`p-4 rounded-2xl border transition-all ${
                      student.status === 'BOARDED' 
                        ? 'bg-green-50 border-green-100' 
                        : 'bg-white border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          student.status === 'BOARDED' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{student.name}</p>
                          <p className="text-[10px] text-slate-500 flex items-center gap-1">
                            <MapPin size={10} /> {student.address}
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-blue-600">
                        <MessageSquare size={18} />
                      </button>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        variant={student.status === 'BOARDED' ? "default" : "outline"}
                        className={`flex-1 rounded-lg text-xs h-8 ${
                          student.status === 'BOARDED' ? 'bg-green-600 hover:bg-green-700' : 'border-slate-200'
                        }`}
                        onClick={() => toggleStudentStatus(student.id)}
                      >
                        {student.status === 'BOARDED' ? (
                          <><UserCheck className="mr-1" size={14} /> EMBARCADO</>
                        ) : (
                          <><UserCheck className="mr-1" size={14} /> EMBARCAR</>
                        )}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="rounded-lg text-xs h-8 border-slate-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <UserMinus size={14} /> AUSENTE
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Right Column: Map & Info */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="flex-1 min-h-[400px]">
          <VisualMap />
        </div>

        {/* Route Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Tempo Estimado</p>
                <p className="text-sm font-bold text-slate-900">45 minutos</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-xl text-green-600">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Concluído</p>
                <p className="text-sm font-bold text-slate-900">12 / 15 alunos</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-red-100 p-2 rounded-xl text-red-600">
                <AlertCircle size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Alertas</p>
                <p className="text-sm font-bold text-slate-900">Trânsito Intenso</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
