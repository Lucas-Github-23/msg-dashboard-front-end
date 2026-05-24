import { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import EmailViewer from './components/EmailViewer';

const mockEmails = [
  {
    id: 1,
    remetente: "chefe@empresa.com",
    cc: "diretoria@empresa.com, rh@empresa.com", // <-- Adicionamos o Cc aqui!
    assunto: "Relatório Financeiro Q3",
    data: "24/05/2026",
    corpo: "<h2>Relatório Q3</h2><p>Segue o relatório para análise da <strong>diretoria</strong>.</p><ul><li>Vendas subiram 10%</li><li>Custos caíram 5%</li></ul>",
    anexos: [
      { id: 101, nome: "balanco_q3.xlsx", tamanho: "45 KB" },
      { id: 102, nome: "notas_fiscais.pdf", tamanho: "1.2 MB" }
    ]
  },
  {
    id: 2,
    remetente: "ti@empresa.com",
    // Sem Cc neste aqui
    assunto: "Alerta de Segurança do Servidor",
    data: "23/05/2026",
    corpo: "Detectamos acessos suspeitos na rede.",
    anexos: []
  },
  {
    id: 3,
    remetente: "rh@empresa.com",
    cc: "ti@empresa.com", // <-- E um Cc simples aqui
    assunto: "Festa de Fim de Ano",
    data: "20/05/2026",
    corpo: "Confirme sua presença na nossa confraternização!",
    anexos: [
      { id: 103, nome: "convite.jpg", tamanho: "800 KB" }
    ]
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