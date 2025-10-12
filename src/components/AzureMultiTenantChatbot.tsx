"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Cloud,
  FileText,
  Lock,
  Search,
  Settings,
  MessageSquare,
  Globe,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AzureMultiTenantChatbot() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 🟢 Client Website Widget Layer */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-3"
      >
        <Card className="shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-5 text-center">
            <Globe className="mx-auto mb-2 w-10 h-10 text-green-600" />
            <h2 className="text-xl font-semibold">Client Website Widget</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Each client embeds a lightweight{" "}
              <code>widget.js</code> script into their website. This script
              injects a floating chat bubble that opens an iframe connected to
              your hosted chatbot UI. The widget identifies the tenant through a
              unique ID and allows visitors to interact directly with your AI
              service in real time.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 🟠 Step 1: Document Upload */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-5 text-center">
            <FileText className="mx-auto mb-2 w-10 h-10 text-orange-600" />
            <h2 className="text-lg font-semibold">Step 1: Document Upload</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Each tenant uploads documents to their dedicated ADLS2 folder
              (e.g., <code>/tenant_A</code>, <code>/tenant_B</code>).
              Access is restricted via RBAC.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 🟡 Step 2: Event-driven Ingestion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100">
          <CardContent className="p-5 text-center">
            <Settings className="mx-auto mb-2 w-10 h-10 text-yellow-600" />
            <h2 className="text-lg font-semibold">Step 2: Event-driven Ingestion</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Azure Event Grid triggers Functions to process new files,
              generate embeddings using Azure OpenAI, and store them in the
              tenant’s vector index.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 🟢 Step 3: Vector Index Storage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-5 text-center">
            <Database className="mx-auto mb-2 w-10 h-10 text-green-600" />
            <h2 className="text-lg font-semibold">Step 3: Vector Index Storage</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Tenant-specific embeddings are stored in Azure Cognitive Search or
              a vector database. Each index remains isolated per tenant for
              strict data separation.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 🔵 Step 4: API Orchestration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-5 text-center">
            <Settings className="mx-auto mb-2 w-10 h-10 text-blue-600" />
            <h2 className="text-lg font-semibold">Step 4: API Orchestration</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Azure Functions or App Service routes chat requests by tenant ID,
              retrieves relevant vectors, and queries Azure OpenAI for answers.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* ☁️ Step 5: Azure OpenAI Inference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
          <CardContent className="p-5 text-center">
            <Cloud className="mx-auto mb-2 w-10 h-10 text-sky-600" />
            <h2 className="text-lg font-semibold">Step 5: Azure OpenAI Inference</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              A centralized Azure OpenAI service processes completions using
              tenant-specific context, ensuring accurate and contextual answers.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 💬 Step 6: Chat Response Delivery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-5 text-center">
            <MessageSquare className="mx-auto mb-2 w-10 h-10 text-purple-600" />
            <h2 className="text-lg font-semibold">Step 6: Chat Response Delivery</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              The chatbot UI (Web App or Teams App) delivers responses back to
              the tenant’s users. Authentication and access are managed via
              Azure AD B2C or Entra ID.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* 🔐 Security Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:col-span-3"
      >
        <Card className="shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-5 text-center">
            <Lock className="mx-auto mb-2 w-10 h-10 text-rose-600" />
            <h2 className="text-lg font-semibold">Security & Governance (All Steps)</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              Managed Identities and Key Vault protect all secrets and credentials. 
              Role-Based Access Control (RBAC) ensures strict per-tenant data isolation. 
              Azure Monitor and Cost Management track resource usage and performance.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
