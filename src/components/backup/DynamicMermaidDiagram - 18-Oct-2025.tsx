"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

/**
 * DynamicMermaidDiagram
 * ----------------------------------------------------
 * Visualises the SaaS Chatbot Architecture (Serverless)
 * where client websites use a widget.js that connects
 * directly to Azure Functions for multi-tenant chat orchestration.
 */
export default function DynamicMermaidDiagram() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose", // allows inline HTML & tooltips
    });
    mermaid.contentLoaded();
  }, []);

  const diagram = `
    %% SaaS Chatbot Architecture (Serverless Azure Functions)
    graph TD

      %% --- CLIENT WEBSITE LAYER ---
      subgraph ClientWebsite["🌐 Client Website"]
        A["Visitor / User"] -->|Chat via widget.js| B["Chat Widget UI (iframe)"]
      end

      %% --- AZURE SERVERLESS BACKEND ---
      subgraph AzureServerless["☁️ Azure Serverless Backend"]
        B --> C["⚙️ Azure Function (HTTP Trigger)"]
        C --> D["🔐 Tenant Config (Key Vault / Cosmos DB)"]
        C --> E["🗂️ ADLS2 - Tenant Files"]
        C --> F["🔍 Cognitive Search - Vector Index"]
        C --> G["🧠 Azure OpenAI (Chat Completions)"]
        C --> H["📊 App Insights / Monitoring"]
      end

      %% --- DATA FLOW ARROWS ---
      E --> C
      F --> C
      G --> C
      D --> C
      H --> C
      C --> B
  `;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold text-center mb-4">
        SaaS Chatbot Architecture (Serverless with Azure Functions)
      </h2>
      <div className="mermaid text-sm">{diagram}</div>
    </div>
  );
}
