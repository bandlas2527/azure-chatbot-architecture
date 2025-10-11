"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cloud, FileText, Lock, Search, Settings, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AzureMultiTenantChatbot() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Step 1: Document Upload */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Card className="shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-5 text-center">
            <FileText className="mx-auto mb-2 w-10 h-10 text-orange-600" />
            <h2 className="text-lg font-semibold">Step 1: Document Upload</h2>
            <p className="text-sm text-gray-600 mt-2">
              Each tenant uploads documents to their own ADLS2 folder (/tenant_A, /tenant_B). Access restricted by RBAC.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Step 2: Event Trigger and Ingestion */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-500 mb-3" />
          <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100">
            <CardContent className="p-5 text-center">
              <Search className="mx-auto mb-2 w-10 h-10 text-yellow-600" />
              <h2 className="text-lg font-semibold">Step 2: Event-driven Ingestion</h2>
              <p className="text-sm text-gray-600 mt-2">
                Event Grid triggers Azure Functions to process new files, generate embeddings using Azure OpenAI, and store them in the tenant’s vector index.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Step 3: Vector Index Storage */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-500 mb-3" />
          <Card className="shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
            <CardContent className="p-5 text-center">
              <Database className="mx-auto mb-2 w-10 h-10 text-emerald-600" />
              <h2 className="text-lg font-semibold">Step 3: Vector Index Storage</h2>
              <p className="text-sm text-gray-600 mt-2">
                Tenant-specific embeddings are stored in Azure Cognitive Search or a vector database. Each index is isolated per tenant.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Step 4: Chat Request Handling */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.0 }}>
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-500 mb-3" />
          <Card className="shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardContent className="p-5 text-center">
              <Settings className="mx-auto mb-2 w-10 h-10 text-indigo-600" />
              <h2 className="text-lg font-semibold">Step 4: API Orchestration</h2>
              <p className="text-sm text-gray-600 mt-2">
                Azure Functions or App Service routes user chat requests by tenant ID, retrieves relevant vectors, and queries Azure OpenAI for answers.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Step 5: Azure OpenAI Processing */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-500 mb-3" />
          <Card className="shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
            <CardContent className="p-5 text-center">
              <Cloud className="mx-auto mb-2 w-10 h-10 text-sky-600" />
              <h2 className="text-lg font-semibold">Step 5: Azure OpenAI Inference</h2>
              <p className="text-sm text-gray-600 mt-2">
                Centralised AI service handles chat completions using retrieved tenant-specific context. Output sent back to orchestration layer.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Step 6: Secure Delivery & Chat UI */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-500 mb-3" />
          <Card className="shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
            <CardContent className="p-5 text-center">
              <MessageSquare className="mx-auto mb-2 w-10 h-10 text-violet-600" />
              <h2 className="text-lg font-semibold">Step 6: Chat Response Delivery</h2>
              <p className="text-sm text-gray-600 mt-2">
                Chatbot UI (Web or Teams App) displays the answer to the tenant. Authentication managed via Azure AD B2C / Entra ID.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Security Layer (Applies Across All Steps) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
        <Card className="shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-5 text-center">
            <Lock className="mx-auto mb-2 w-10 h-10 text-rose-600" />
            <h2 className="text-lg font-semibold">Security Layer (All Steps)</h2>
            <p className="text-sm text-gray-600 mt-2">
              Key Vault and Managed Identities secure access to ADLS2, Cognitive Search, and OpenAI. RBAC ensures strict per-tenant data isolation.
            </p>
          </CardContent>
        </Card>
      </motion.div>


      {/* Monitoring & Governance Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="lg:col-span-3"
      >
        <div className="mt-10 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4">
            Monitoring & Governance Layer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div>
              <span className="font-semibold text-blue-700">Azure Monitor</span>
              <p className="text-sm text-gray-600">
                Collects logs, traces, and metrics from all tenants for proactive monitoring.
              </p>
            </div>
            <div>
              <span className="font-semibold text-indigo-700">API Management</span>
              <p className="text-sm text-gray-600">
                Central gateway for authentication, throttling, and request auditing.
              </p>
            </div>
            <div>
              <span className="font-semibold text-emerald-700">Cost Management</span>
              <p className="text-sm text-gray-600">
                Tracks per-tenant usage with tagging and budget alerts.
              </p>
            </div>
            <div>
              <span className="font-semibold text-rose-700">Security & Policy</span>
              <p className="text-sm text-gray-600">
                Ensures compliance via Defender for Cloud and Azure Policy.
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Identity & RBAC</span>
              <p className="text-sm text-gray-600">
                Manages tenant access and lifecycle using Azure AD / Entra ID.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
 
    </div>
  );
}
