import AzureMultiTenantChatbot from "@/components/AzureMultiTenantChatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Azure Multi-Tenant Chatbot Architecture
      </h1>
      <AzureMultiTenantChatbot />
    </main>
  );
}
