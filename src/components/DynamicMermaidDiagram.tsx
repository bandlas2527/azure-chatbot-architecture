"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

export default function DynamicMermaidDiagram() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
    });
    mermaid.contentLoaded();
  }, []);

  const diagram = String.raw`
flowchart TD
%% --- CLIENT LAYER ---
subgraph Client["Client Website and Widget"]
    A1["Visitor or User"]
    A2["Chat Widget (widget.js) with reCAPTCHA and Fingerprint"]
    A1 --> A2
end

%% --- OPTIONAL AUTH PROXY ---
A2 -->|"HTTPS API call"| A3["Optional Tenant Auth Proxy"]
A3 -->|"Validates Origin and signs JWT"| B1

%% --- API MANAGEMENT ---
subgraph APIM["Azure API Management (APIM)"]
    B1["/getToken and /chat Endpoints"]
    B1 --> B2["Validate Origin and tenantId"]
    B2 --> B3["Issue short lived JWT (15-30 min)"]
end
A2 -->|"Direct call (no proxy)"| B1

%% --- FUNCTION APP ---
subgraph FUNC["Azure Function App (Serverless API)"]
    B3 --> B4["Read tenant-config.json (Static JSON in app settings)"]
    B4 --> B5["Chat Handler - validates tenant and model - streams via Web PubSub"]
end

%% --- DATA AND AI LAYER ---
subgraph DATA["Data and Intelligence Layer"]
    C1["Azure AI Search - Hybrid and Vector Index - filter: tenantId"]
    C2["Azure OpenAI - gpt-4o-mini and embeddings"]
    C3["ADLS Gen2 - Per tenant folders (raw files)"]
end
B5 -->|"Embed query"| C2
B5 -->|"Hybrid search"| C1
C1 -->|"Top K snippets"| B5
B5 -->|"Augment prompt (RAG)"| C2
C2 -->|"Final answer"| B5
B5 -->|"Stream response"| A2

%% --- EVENT PIPELINE ---
subgraph PIPE["Event Grid to Durable Function Pipeline"]
    D1["Event Grid - File upload trigger"]
    D2["Durable Function - Chunk and Embed"]
    D3["Upsert Embeddings to AI Search Index"]
end
C3 -->|"Upload triggers"| D1
D1 --> D2
D2 -->|"Generate embeddings (OpenAI)"| D3
D3 -->|"Update index"| C1

%% --- OBSERVABILITY AND SECURITY ---
subgraph OBS["Observability and Security"]
    E1["Application Insights - Logs, metrics, usage"]
    E2["Azure Key Vault - JWT signing key and SP secrets"]
end
B1 --> E1
B5 --> E1
B5 --> E2
A3 --> E2

classDef client fill:#E8F5E9,stroke:#2E7D32,color:#1B5E20;
classDef apim fill:#E3F2FD,stroke:#1565C0,color:#0D47A1;
classDef func fill:#FFF8E1,stroke:#F9A825,color:#827717;
classDef data fill:#F3E5F5,stroke:#6A1B9A,color:#4A148C;
classDef pipe fill:#FBE9E7,stroke:#E64A19,color:#BF360C;
classDef obs fill:#E0F7FA,stroke:#00838F,color:#006064;

class Client client
class APIM apim
class FUNC func
class DATA data
class PIPE pipe
class OBS obs
`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold text-center mb-4">
        Azure Chatbot Architecture (Serverless Prototype)
      </h2>
      <div className="mermaid text-sm">{diagram}</div>
    </div>
  );
}
