"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Cpu,
  Cloud,
  Send,
  RefreshCcw,
} from "lucide-react";

export default function AzureMultiTenantChatbot() {
  return (
    <div className="grid grid-cols-12 gap-4 p-6 text-sm">
      {/* --- CLIENT LAYER --- */}
      <div className="col-span-12">
        <h2 className="text-lg font-semibold mb-2">Client Layer</h2>
        <div className="flex flex-wrap gap-4">
          <Card title="Customer Website">
            <p>
              Hosts <code>widget.js</code> script<br />
              Origin: <span className="font-semibold">https://www.acme.com</span>
            </p>
          </Card>
          <Card title="Chat Widget (Browser)">
            <ul className="list-disc ml-4">
              <li>Calls <code>/getToken</code> endpoint via APIM</li>
              <li>Performs reCAPTCHA + Fingerprint check</li>
              <li>Uses short-lived JWT for chat calls</li>
            </ul>
          </Card>
          <Arrow label="HTTPS" />
          <Card title="Optional Tenant Auth Proxy" icon={<ShieldCheck />}>
            <ul className="list-disc ml-4">
              <li>Docker/Function app, easy to deploy</li>
              <li>Signs & forwards chat securely</li>
              <li>Stores tenant SP credentials privately</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* --- API & SECURITY LAYER --- */}
      <div className="col-span-12 mt-8">
        <h2 className="text-lg font-semibold mb-2">API & Security Layer</h2>
        <div className="flex flex-wrap gap-4">
          <Card title="Azure API Management (APIM)" icon={<Lock />}>
            <ul className="list-disc ml-4">
              <li>Validates <code>Origin</code> + <code>tenantId</code></li>
              <li>Issues short-lived JWTs (15–30 min)</li>
              <li>Rejects non-browser (Postman/cURL) traffic</li>
              <li>Rate limits per tenant / fingerprint</li>
            </ul>
          </Card>
          <Arrow label="Validated request →" />
          <Card title="Azure Functions (Serverless API)" icon={<Cpu />}>
            <ul className="list-disc ml-4">
              <li>Executes chat flow</li>
              <li>Reads tenant config from <strong>static JSON</strong> in Function settings</li>
              <li>Maps tenantId → allowed origins, model type, storage path</li>
              <li>Applies <code>tenantId</code> filters to Search + ADLS</li>
              <li>Streams responses via Web PubSub</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* --- DATA LAYER --- */}
      <div className="col-span-12 mt-8">
        <h2 className="text-lg font-semibold mb-2">Data & Intelligence Layer</h2>
        <div className="flex flex-wrap gap-4">
          <Card title="Tenant Config (Static JSON)" icon={<Database />}>
            <ul className="list-disc ml-4">
              <li>
                Stored as <code>tenant-config.json</code> in Function App or Blob
              </li>
              <li>
                Loaded at runtime (cached in memory)
              </li>
              <li>
                Zero-cost config store for prototype
              </li>
              <li>
                Future upgrade → Cosmos DB for dynamic multi-tenant scaling
              </li>
            </ul>
          </Card>
          <Card title="Azure AI Search" icon={<SearchIcon />}>
            <ul className="list-disc ml-4">
              <li>Single hybrid + vector index</li>
              <li>Filter by <code>tenantId</code></li>
              <li>RAG source for chat responses</li>
            </ul>
          </Card>
          <Card title="Azure OpenAI" icon={<Cloud />}>
            <ul className="list-disc ml-4">
              <li><code>gpt-4o-mini</code> for chat</li>
              <li><code>text-embedding-3-small</code> for vectors</li>
              <li>Usage tracked via APIM telemetry</li>
            </ul>
          </Card>
          <Card title="ADLS Gen2 (Storage)" icon={<Database />}>
            <ul className="list-disc ml-4">
              <li>Per-tenant folders</li>
              <li>Event Grid → Durable Function pipeline for embeddings</li>
              <li>Cached vectors → Cognitive Search</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* --- OBSERVABILITY --- */}
      <div className="col-span-12 mt-8">
        <h2 className="text-lg font-semibold mb-2">Observability & Governance</h2>
        <div className="flex flex-wrap gap-4">
          <Card title="App Insights + Log Analytics" icon={<RefreshCcw />}>
            <ul className="list-disc ml-4">
              <li>Logs with <code>tenantId</code>, <code>origin</code>, <code>fingerprint</code></li>
              <li>Power BI dashboards for usage & costs</li>
              <li>Alerts for spikes or errors</li>
            </ul>
          </Card>
          <Card title="Azure Key Vault" icon={<Lock />}>
            <ul className="list-disc ml-4">
              <li>Holds JWT signing keys & SP secrets</li>
              <li>Accessed via Managed Identity</li>
              <li>Rotated every 90 days</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* --- SECURITY NOTES --- */}
      <div className="col-span-12 mt-8">
        <h2 className="text-lg font-semibold mb-2">Security Boundaries</h2>
        <p className="text-gray-600">
          All requests authenticated via APIM. 
          Tokens bound to <code>tenantId</code> and <code>origin</code>. 
          Optional Auth Proxy for enterprise tenants. 
          Private endpoints for Key Vault, Search, and Storage. 
          CORS + reCAPTCHA protect against fake widget calls and API clients. 
          Tenant config managed as static JSON during prototype stage, upgradable to Cosmos DB later.
        </p>
      </div>
    </div>
  );
}

/* --- Helper Components --- */
function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white border rounded-2xl shadow-md p-4 w-[300px]"
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-indigo-600">{icon}</span>}
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500">
      <Send className="h-4 w-4" />
      {label && <span className="text-[10px] mt-1">{label}</span>}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
