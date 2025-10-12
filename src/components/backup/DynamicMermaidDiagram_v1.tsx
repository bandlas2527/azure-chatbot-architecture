"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

export default function DynamicMermaidDiagram() {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const diagram = `
    graph TD
      %% --- Client Website Layer ---
      subgraph ClientWebsite["Client Website"]
        A["Visitor / User"] -->|Interacts via widget| B["Embedded widget.js script"]
        B -->|Loads iframe| C["Chat Widget UI"]
      end

      %% --- Hosted Platform ---
      subgraph HostedPlatform["Your Hosted Chatbot Platform"]
        C --> D["Next.js Frontend (Widget Route)"]
        D --> E["API Route /api/chat"]
      end

      %% --- Azure Backend ---
      subgraph AzureBackend["Azure Multi-Tenant Backend"]
        E --> F["Azure API Management"]
        F --> G["Azure Function / Orchestrator"]
        G --> H["Azure OpenAI"]
        G --> I["ADLS2 (Tenant Folder)"]
        G --> J["Azure Cognitive Search / Vector Index"]
        G --> K["Azure Key Vault"]
        K --> G
      end

      %% --- Governance Layer ---
      subgraph Governance["Monitoring & Governance Layer"]
        F --> L["Azure Monitor / App Insights"]
        G --> M["Cost Mgmt / Usage Logs"]
        G --> N["Tenant Config / RBAC (Entra ID)"]
      end

      %% --- Data Flows ---
      H --> G
      J --> G
      I --> G
      G --> E
      E --> D
      D --> C
  `;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-center mb-4">
        SaaS Chatbot Architecture (Widget-Enabled)
      </h2>
      <div className="mermaid">{diagram}</div>
    </div>
  );
}
