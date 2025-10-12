import AzureMultiTenantChatbot from "@/components/AzureMultiTenantChatbot";
//import MermaidDiagram from "@/components/MermaidDiagram";
import DynamicMermaidDiagram from "@/components/DynamicMermaidDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Azure Multi-Tenant Chatbot Architecture
      </h1>

      {/* 1️⃣ Functional flow (Cards) */}
      <AzureMultiTenantChatbot />

      {/* 2️⃣ Static Mermaid diagram */}
      {/*<MermaidDiagram /> */}

      {/* 3️⃣ Dynamic JSON-driven Mermaid diagram */}
      <DynamicMermaidDiagram />
    </main>
  );
}
