import Image from 'next/image';
import Link from 'next/link';
import { ClientZoomableDiagram } from './_components/client-zoomable-diagram';

/**
 * MAIN PAGE COMPONENT
 */
export default function DocsPage() {
  return (
    <div className='min-h-screen bg-[#f2efe9] text-[#141414] font-sans selection:bg-[#dcee24] selection:text-black'>
      {/* Header */}
      <header className='border-b border-[#dbd8d0] bg-[#f2efe9]/95 backdrop-blur supports-backdrop-filter:bg-[#f2efe9]/60 sticky top-0 z-50'>
        <div className='container mx-auto flex items-center justify-between px-6 py-4'>
          <a href='https://stratos-markets-ui.vercel.app' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <Image src='/stratos-light.svg' alt='Stratos' width={160} height={35} className='h-8 w-auto' priority />
          </a>
          <nav className='flex items-center gap-6'>
            <Link href='/docs' className='text-sm font-medium text-[#141414] hover:text-[#dcee24] transition-colors'>Documentation</Link>
            <Link href='/api/reference' className='text-sm font-medium text-[#454545] hover:text-[#141414] transition-colors'>
              API Reference
            </Link>
          </nav>
        </div>
      </header>

      <div className='container mx-auto flex flex-col md:flex-row gap-8 px-6 py-8'>
        {/* Sidebar Navigation */}
        <aside className='hidden md:block w-64 shrink-0'>
          <nav className='sticky top-24 space-y-8'>
            <div>
              <h3 className='mb-3 text-xs font-bold uppercase tracking-wider text-[#141414]/50'>Overview</h3>
              <ul className='space-y-2 border-l border-[#dbd8d0]'>
                <li>
                  <a
                    href='#executive-summary'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Executive Summary
                  </a>
                </li>
                <li>
                  <a
                    href='#market-timing'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Market Timing
                  </a>
                </li>
                <li>
                  <a
                    href='#problem'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    The Problem
                  </a>
                </li>
                <li>
                  <a
                    href='#solution'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    The Solution
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-3 text-xs font-bold uppercase tracking-wider text-[#141414]/50'>Architecture</h3>
              <ul className='space-y-2 border-l border-[#dbd8d0]'>
                <li>
                  <a
                    href='#technical-architecture'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Technical Architecture
                  </a>
                </li>
                <li>
                  <a
                    href='#user-journey'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    User Journey
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-3 text-xs font-bold uppercase tracking-wider text-[#141414]/50'>Roadmap</h3>
              <ul className='space-y-2 border-l border-[#dbd8d0]'>
                <li>
                  <a
                    href='#technical-roadmap'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Technical Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href='#executional-roadmap'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Executional Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href='#gtm-strategy'
                    className='block pl-4 text-sm text-[#454545] hover:text-[#141414] hover:border-l-2 hover:border-[#141414] -ml-px py-1 transition-all'>
                    Go-To-Market
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='flex-1 max-w-4xl min-w-0'>
          <article className='prose prose-neutral max-w-none prose-headings:font-bold prose-headings:text-[#141414] prose-p:text-[#454545] prose-li:text-[#454545] prose-strong:text-[#141414]'>
            <div className='mb-12'>
              <span className='bg-[#dcee24] px-2 py-1 text-xs font-bold uppercase tracking-wide rounded-sm'>Protocol Whitepaper v1.0</span>
              <h1 className='font-sans text-4xl md:text-5xl font-bold text-[#141414] mt-4 mb-6 tracking-tight'>
                Stratos Protocol: The Decentralized Strategy Layer
              </h1>
              <p className='text-xl md:text-2xl text-[#141414] font-medium leading-relaxed mb-8 border-l-4 border-[#dcee24] pl-6'>
                Standardizing the exchange of intelligence in the Agent Economy.
              </p>
            </div>

            {/* Executive Summary */}
            <section id='executive-summary' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>Executive Summary</h2>

              <div className='grid md:grid-cols-2 gap-8 mt-8 mb-12'>
                <div className='bg-white p-6 rounded-lg border border-[#dbd8d0] shadow-sm'>
                  <h3 className='text-xl font-bold text-[#141414] mb-3 mt-0'>The Vision</h3>
                  <p className='text-sm text-[#454545] leading-relaxed'>
                    Stratos is building the missing data layer for the{' '}
                    <strong className='text-[#141414] bg-[#dcee24]/30 px-1'>Agent Economy</strong>. We bridge the gap between human
                    financial expertise and autonomous execution without proprietary tokens or walled gardens.
                  </p>
                </div>
                <div className='bg-white p-6 rounded-lg border border-[#dbd8d0] shadow-sm'>
                  <h3 className='text-xl font-bold text-[#141414] mb-3 mt-0'>The Opportunity</h3>
                  <p className='text-sm text-[#454545] leading-relaxed'>
                    We are moving from <strong className='text-[#141414]'>DeFi 1.0</strong> (Humans trading on UIs) to{' '}
                    <strong className='text-[#141414] bg-[#dcee24]/30 px-1'>DeFi 2.0</strong>{' '}
                    (Agents trading via APIs). Stratos provides the standardized, neutral rails for this $100B+ transition.
                  </p>
                </div>
              </div>

              <h3 className='text-2xl font-bold text-[#141414] mt-8 mb-4'>The Product</h3>
              <p className='text-base text-[#454545] leading-relaxed mb-4'>A decentralized infrastructure where DeFi strategies are:</p>
              <ol className='list-decimal list-inside space-y-3 mb-6 text-[#454545] marker:text-[#141414] marker:font-bold'>
                <li>
                  <strong className='text-[#141414]'>Wrapped</strong> as standard Model Context Protocol (MCP) endpoints.
                </li>
                <li>
                  <strong className='text-[#141414]'>Streamed</strong> via low-latency WebTransport.
                </li>
                <li>
                  <strong className='text-[#141414]'>Monetized</strong>{' '}
                  natively via the HTTP x402 (Payment Required) protocol using standard assets (USDC/ETH).
                </li>
              </ol>
            </section>

            {/* Market Timing */}
            <section id='market-timing' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>The "Why Now?" (Market Timing)</h2>
              <p className='text-base text-[#454545] leading-relaxed mb-6'>
                Three distinct technological waves are converging to make this possible <strong className='text-[#141414]'>today</strong>:
              </p>
              <div className='space-y-4'>
                <div className='flex gap-4'>
                  <div className='h-8 w-8 shrink-0 flex items-center justify-center bg-[#141414] text-white font-bold rounded-full'>1</div>
                  <div>
                    <strong className='text-[#141414] block mb-1'>The Agent Explosion (2025)</strong>
                    <span className='text-[#454545]'>
                      AI Agents are rapidly becoming the primary consumers of on-chain data, but they lack a standardized way to "ingest"
                      complex strategy logic.
                    </span>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='h-8 w-8 shrink-0 flex items-center justify-center bg-[#141414] text-white font-bold rounded-full'>2</div>
                  <div>
                    <strong className='text-[#141414] block mb-1'>Model Context Protocol (MCP)</strong>
                    <span className='text-[#454545]'>
                      The new industry standard (backed by Anthropic/OpenAI) finally gives us a universal language for LLMs to talk to
                      external data sources.
                    </span>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='h-8 w-8 shrink-0 flex items-center justify-center bg-[#141414] text-white font-bold rounded-full'>3</div>
                  <div>
                    <strong className='text-[#141414] block mb-1'>HTTP/3 & WebTransport</strong>
                    <span className='text-[#454545]'>
                      New web standards now allow for high-frequency, bidirectional streaming that legacy WebSockets could not handle
                      efficiently.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section id='problem' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>The Problem</h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-[#e8e5de]/50 p-6 rounded-lg'>
                  <h4 className='text-xl font-bold text-[#141414] mb-3 flex items-center gap-2'>
                    For Human Quants <span className='text-xs bg-[#141414] text-white px-2 py-0.5 rounded-full'>Supply</span>
                  </h4>
                  <ul className='space-y-3 list-disc list-outside ml-4'>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>Fragmentation:</strong> Strategies locked in Discord/Python scripts/Telegram.
                    </li>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>Monetization Friction:</strong>{' '}
                      Requiring full-stack SaaS & Stripe just to sell one signal.
                    </li>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>IP Theft:</strong> Sharing code often means losing your edge.
                    </li>
                  </ul>
                </div>

                <div className='bg-[#e8e5de]/50 p-6 rounded-lg'>
                  <h4 className='text-xl font-bold text-[#141414] mb-3 flex items-center gap-2'>
                    For AI Agents <span className='text-xs bg-[#141414] text-white px-2 py-0.5 rounded-full'>Demand</span>
                  </h4>
                  <ul className='space-y-3 list-disc list-outside ml-4'>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>Unstructured Data:</strong> Agents can't "read" chart screenshots; they need JSON.
                    </li>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>Subscription Fatigue:</strong> Can't pay $500/mo for a signal used twice.
                    </li>
                    <li className='text-[#454545]'>
                      <strong className='text-[#141414]'>Latency:</strong> REST APIs are too slow for crypto.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section id='solution' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>The Solution</h2>
              <p className='text-lg text-[#454545] leading-relaxed mb-6'>
                We treat trading strategies as <strong className='text-[#141414] bg-[#dcee24]/40 px-1'>Composable Data Products</strong>.
              </p>

              <div className='flex flex-wrap gap-4 mb-8'>
                {['Create', 'Discover', 'Consume', 'Settle'].map((step, i) => (
                  <div key={step} className='flex-1 min-w-35 bg-white border border-[#dbd8d0] p-4 rounded text-center'>
                    <div className='text-xs text-[#666] uppercase mb-1'>Step {i + 1}</div>
                    <div className='font-bold text-[#141414]'>{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Architecture */}
            <section id='technical-architecture' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>Technical Architecture</h2>
              <p className='text-lg font-semibold text-[#141414] mb-6'>Pure Standards. High-Throughput Data Infrastructure.</p>
              <p className='text-base text-[#454545] leading-relaxed mb-6'>
                We reject the usage of a custom utility token. Stratos is built entirely on open web and crypto standards to ensure maximum
                interoperability.
              </p>

              {/* Diagram for Technical Architecture */}
              <ClientZoomableDiagram
                id='architecture-diagram'
                minScale={0.5}
                maxScale={3}
                chart={`
graph TB
    subgraph "Agent Layer"
        A[AI Agent]
    end

    subgraph "Interface Layer"
        B[Model Context Protocol<br/>MCP Endpoints]
    end

    subgraph "Transport Layer"
        C[WebTransport HTTP/3<br/>Bidirectional Streaming]
    end

    subgraph "Settlement Layer"
        D[x402 Payment Protocol<br/>USDC/ETH]
    end

    subgraph "Data Layer"
        E[Avalanche Network<br/>Performance Logging & Telemetry]
    end

    subgraph "Creator Layer"
        F[Strategy Creator<br/>Quant Developer]
    end

    A -->|Discovers & Consumes| B
    B -->|Streams Signals| C
    C -->|Validates Payment| D
    D -->|Logs Performance| E
    F -->|Publishes Strategy| B
    E -->|Verifies History| B

    style A fill:#dcee24,stroke:#141414,stroke-width:2px,color:#141414
    style F fill:#dcee24,stroke:#141414,stroke-width:2px,color:#141414
    style B fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
    style C fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
    style D fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
    style E fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
                `} />

              <div className='border border-[#dbd8d0] rounded-lg overflow-hidden mb-6 shadow-sm'>
                <table className='w-full border-collapse'>
                  <thead className='bg-[#e8e5de]'>
                    <tr>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Layer
                      </th>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Technology
                      </th>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Function
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>Interface</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>Model Context Protocol (MCP)</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>
                        Strategies are self-describing. We do not build custom adapters for agent frameworks. If an agent speaks MCP, it
                        speaks Stratos natively.
                      </td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>Data Layer</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>Avalanche Network</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>
                        <strong className='text-[#141414]'>Avalanche is leveraged as the Data-Chain.</strong>{' '}
                        We utilize the high throughput and instant finality of Avalanche for immutable logging of strategy telemetry.
                      </td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>Transport</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>WebTransport (HTTP/3)</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>
                        Replaces WebSockets. Allows multiplexed, bidirectional streaming over UDP (QUIC).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* User Journey */}
            <section id='user-journey' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>User Journey (The "Happy Path")</h2>

              {/* Diagram for User Journey */}
              <ClientZoomableDiagram
                id='user-journey-diagram'
                minScale={0.5}
                maxScale={3}
                chart={`
sequenceDiagram
    participant C as Elena (Creator)
    participant S as Stratos Platform
    participant A as Avalanche Data-Chain
    participant AG as Agent-007
    participant M as Market

    Note over C,M: Strategy Publication Flow
    C->>S: stratos publish ./strategy.py
    S->>S: Validate & Wrap in MCP
    S->>A: Deploy Liveness Monitor
    S-->>C: Endpoint: api.stratos.markets/elena/arb-v1

    Note over C,M: Agent Discovery & Execution Flow
    AG->>S: Connect via WebTransport
    S-->>AG: 402 Payment Required: 0.05 USDC
    AG->>S: Sign Micro-Transaction
    S->>A: Log Transaction
    S-->>AG: Stream Live Signal
    AG->>M: Execute Trade On-Chain
    M-->>AG: Trade Confirmed
    AG->>A: Log Performance
                `} />

              <div className='space-y-6 mt-8'>
                <div className='border-l-4 border-[#dcee24] pl-6 py-2 bg-white rounded-r-lg shadow-sm p-4'>
                  <h3 className='text-xl font-bold text-[#141414] mb-2'>Step 1: The Publish (Supply)</h3>
                  <p className='text-[#454545] mb-2'>
                    Elena runs{' '}
                    <code className='px-2 py-1 bg-[#e8e5de] rounded text-[#141414] text-sm font-mono'>stratos publish ./strategy.py</code>.
                  </p>
                  <p className='text-[#454545] mb-2'>
                    System generates an MCP endpoint:{' '}
                    <code className='px-2 py-1 bg-[#e8e5de] rounded text-[#141414] text-sm font-mono'>
                      api.stratos.markets/elena/arb-v1
                    </code>.
                  </p>
                  <p className='text-[#454545]'>Liveness monitors begin tracking performance on the Avalanche Data-Chain.</p>
                </div>

                <div className='border-l-4 border-[#141414] pl-6 py-2 bg-white rounded-r-lg shadow-sm p-4'>
                  <h3 className='text-xl font-bold text-[#141414] mb-2'>Step 2: The Handshake (Demand)</h3>
                  <p className='text-[#454545] mb-2'>Agent-007 connects to the endpoint via WebTransport.</p>
                  <p className='text-[#454545]'>
                    Endpoint responds:{' '}
                    <code className='px-2 py-1 bg-[#e8e5de] rounded text-[#141414] text-sm font-mono'>402 Payment Required: 0.05 USDC
                    </code>.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Roadmap */}
            <section id='technical-roadmap' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>Technical Roadmap</h2>

              {/* Diagram for Technical Roadmap */}
              <ClientZoomableDiagram
                id='technical-roadmap-diagram'
                minScale={0.6}
                maxScale={12}
                chart={`
gantt
    title Technical Development Timeline
    dateFormat YYYY-MM
    axisFormat %b %Y

    section Phase 1
    x402 Settlement Logic            :active, a1, 2025-07, 2025-09
    WebTransport Gateway Nodes       :active, a2, 2025-07, 2025-09
    Stratos CLI Release              :a3, 2025-08, 2025-09

    section Phase 2
    MCP Server Implementation        :b1, 2025-10, 2025-12
    Avalanche Integration            :b2, 2025-10, 2025-12
    Security Assessment              :b3, 2025-11, 2025-12

    section Phase 3
    Global Edge Distribution         :c1, 2026-01, 2026-03
    Strategy Chaining Engine         :c2, 2026-01, 2026-03
    Stratos Validator Release        :c3, 2026-02, 2026-03
                `} />
            </section>

            {/* Go-To-Market Strategy */}
            <section id='gtm-strategy' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>Go-To-Market Strategy</h2>

              <ClientZoomableDiagram
                id='gtm-strategy-diagram'
                minScale={0.5}
                maxScale={3}
                chart={`
graph TD
    A[Stratos Platform] --> B[Supply Seeding]
    A --> C[Demand Generation]
    A --> D[Composability Flywheel]

    B --> B1[Target Signal Providers<br/>Discord/Telegram]
    B --> B2[Offer 0% Fees<br/>First 6 Months]
    B1 --> E[Creator Onboarding]
    B2 --> E

    C --> C1[MCP Documentation<br/>& SDKs]
    C --> C2[Reference Implementations<br/>Python/TypeScript]
    C1 --> F[Agent Developer Adoption]
    C2 --> F

    D --> D1[Primitive Strategies<br/>Building Blocks]
    D --> D2[Strategy Composition<br/>Dependencies]
    D1 --> G[Network Effects]
    D2 --> G

    E --> H[Marketplace Growth]
    F --> H
    G --> H

    style A fill:#dcee24,stroke:#141414,stroke-width:2px,color:#141414
    style H fill:#dcee24,stroke:#141414,stroke-width:2px,color:#141414
    style B fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
    style C fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
    style D fill:#fff,stroke:#141414,stroke-width:1px,color:#141414
                `} />
            </section>

            {/* Feature Matrix */}
            <section id='feature-matrix' className='scroll-mt-24 mb-16'>
              <h2 className='text-3xl font-bold text-[#141414] mt-16 mb-6'>Feature Matrix (MoSCoW)</h2>
              <div className='border border-[#dbd8d0] rounded-lg overflow-hidden mb-6 shadow-sm'>
                <table className='w-full border-collapse'>
                  <thead className='bg-[#e8e5de]'>
                    <tr>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Priority
                      </th>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Feature
                      </th>
                      <th className='px-4 py-3 text-left text-xs uppercase tracking-wider font-bold text-[#141414] border-b border-[#dbd8d0]'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#dcee24] bg-[#141414] w-24 text-center'>MUST</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>x402 Settlement Rail</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>🚧 Implementation in Progress</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#dcee24] bg-[#141414] w-24 text-center'>MUST</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>MCP Implementation</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>🚧 In Development</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#dcee24] bg-[#141414] w-24 text-center'>MUST</td>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>WebTransport Streamer</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>🚧 In Development</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414] bg-[#e8e5de] w-24 text-center'>SHOULD</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>Strategy Composability</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>📅 Post-Launch (The "GitHub" mechanic)</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414] bg-[#e8e5de] w-24 text-center'>SHOULD</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>Visual Registry</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>📅 Post-Launch (Human-readable UI)</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>COULD</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>Backtesting Cloud</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>📅 2027 (Simulation environment)</td>
                    </tr>
                    <tr className='border-b border-[#dbd8d0] hover:bg-[#f9fafb]'>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>WON'T</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>Framework Specific Plugins</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>❌ We adhere to standards, not frameworks.</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3 text-sm font-bold text-[#141414]'>WON'T</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>Proprietary Token</td>
                      <td className='px-4 py-3 text-sm text-[#454545]'>❌ Settlement is in USDC/ETH only.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <div className='mt-16 border border-[#dbd8d0] bg-white p-8 rounded-lg shadow-sm text-center md:text-left md:flex md:items-center md:justify-between'>
              <div>
                <h3 className='text-xl font-bold text-[#141414] mb-2'>Ready to get started?</h3>
                <p className='text-[#454545] mb-4 md:mb-0 max-w-lg'>
                  Explore our interactive API reference to see all available endpoints and start building with Stratos.
                </p>
              </div>
              <a
                href='#'
                className='inline-block whitespace-nowrap bg-[#141414] px-8 py-4 text-base font-bold text-[#dcee24] hover:bg-[#000000] hover:scale-105 transition-all shadow-lg'>
                View API Reference
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
