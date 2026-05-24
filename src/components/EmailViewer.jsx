import './EmailViewer.css';

export default function EmailViewer({ email }) {
    if (!email) {
        return (
            <div className="emailviewer-container">
            <h2 className="emailviewer-title">Nenhum e-mail selecionado</h2>
            <p className="emailviewer-text">Clique em um e-mail na barra lateral para ler o conteúdo.</p>
        </div>
        );
    }

    return (
        <div className="emailviewer-container">
            <h2 className="emailviewer-title">{email.assunto}</h2>
            <div className="emailviewer-metadata">
                <div className="emailviewer-metadata-row">
                    <span><strong>De:</strong> {email.remetente}</span>
                    {email.cc && (
                        <span><strong>CC:</strong> {email.cc}</span>
                    )}
                    <span><strong>Data:</strong> {email.data}</span>
                </div>
            </div>
            
            <div 
                className="emailviewer-text"
                dangerouslySetInnerHTML={{ __html: email.corpo }}
            />
            

            {email.anexos && email.anexos.length > 0 && (
                <div className="emailviewer-attachments">
                    <strong><p>Anexos:</p></strong>
                        <div className="emailviewer-attachment-list">
                            {email.anexos.map((anexo, index) => (
                                <div key={index} className="emailviewer-attachment-item">
                                    {anexo.nome}
                                </div>
                            ))}
                        </div>
                </div>
            )}
        </div>
    );
}   