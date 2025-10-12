"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidDiagram() {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const diagram = `
    graph TD
      User[User / Chat UI] -->|Chat Query| APIM[API Gateway]
      APIM --> Function[Azure Function / Node Service]
      Function --> OpenAI[Azure OpenAI]
      Function --> ADLS2[ADLS2 / Tenant Folders]
      ADLS2 --> Search[Cognitive Search / Vector DB]
      Search --> Response[Chat Response]
      Function --> Governance[Monitoring & Governance Layer]
  `;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-center mb-4">
        Mermaid Architecture Diagram
      </h2>
      <div className="mermaid">{diagram}</div>
    </div>
  );
}
