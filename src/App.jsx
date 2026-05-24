import { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import EmailViewer from './components/EmailViewer';

const mockEmails = [
  {
    id: 1,
    remetente: "chefe@empresa.com",
    assunto: "Relatório Financeiro Q3",
    data: "24/05/2026",
    corpo: "Segue o relatório para análise da diretoria."
  },
  {
    id: 2,
    remetente: "ti@empresa.com",
    assunto: "Alerta de Segurança do Servidor",
    data: "23/05/2026",
    corpo: "Detectamos acessos suspeitos na rede."
  },
  {
    id: 3,
    remetente: "rh@empresa.com",
    assunto: "Festa de Fim de Ano",
    data: "20/05/2026",
    corpo: "Confirme sua presença na nossa confraternização!"
  }
];


function App() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Sidebar emails={mockEmails} onEmailSelect={setSelectedEmail} />
        <EmailViewer email={selectedEmail} />

      </div>
    </div>
  );
}

export default App;