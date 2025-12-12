import Image from "next/image"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#141414]">
      {/* Header */}
      <header className="border-b border-[#dbd8d0] bg-[#f2efe9] sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="https://stratos-markets-ui.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <Image src="/stratos-light.svg" alt="Stratos" width={160} height={35} className="h-8 w-auto" priority />
          </a>
          <nav className="flex items-center gap-6">
            <Link href="/docs" className="text-sm font-medium text-[#141414] hover:text-[#dcee24] transition-colors">
              Documentation
            </Link>
            <Link
              href="/api/reference"
              className="text-sm font-medium text-[#454545] hover:text-[#141414] transition-colors"
            >
              API Reference
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto flex gap-8 px-6 py-8">
        <aside className="w-64 shrink-0">
          <nav className="sticky top-24 space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Overview</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#executive-summary"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Executive Summary
                  </a>
                </li>
                <li>
                  <a
                    href="#market-timing"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Market Timing
                  </a>
                </li>
                <li>
                  <a href="#problem" className="block text-sm text-[#454545] hover:text-[#141414] transition-colors">
                    The Problem
                  </a>
                </li>
                <li>
                  <a href="#solution" className="block text-sm text-[#454545] hover:text-[#141414] transition-colors">
                    The Solution
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Architecture</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#technical-architecture"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Technical Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#user-journey"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    User Journey
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Roadmap</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#technical-roadmap"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Technical Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#executional-roadmap"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Executional Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#gtm-strategy"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Go-To-Market
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#feature-matrix"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Feature Matrix
                  </a>
                </li>
                <li>
                  <a href="#team" className="block text-sm text-[#454545] hover:text-[#141414] transition-colors">
                    The Team
                  </a>
                </li>
                <li>
                  <Link
                    href="/api/reference"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="flex-1 max-w-3xl">
          <article className="prose prose-neutral max-w-none">
            <h1 className="font-sans text-4xl font-bold text-[#141414] mb-4">
              Stratos Protocol: The Decentralized Strategy Layer
            </h1>
            <p className="text-xl text-[#141414] font-semibold leading-relaxed mb-8">
              Standardizing the exchange of intelligence in the Agent Economy.
            </p>

            {/* Executive Summary */}
            <section id="executive-summary" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Executive Summary</h2>

              <h3 className="text-2xl font-bold text-[#141414] mt-8 mb-4">The Vision</h3>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                Stratos is building the missing data layer for the{" "}
                <strong className="text-[#141414]">Agent Economy</strong>. We bridge the gap between human financial
                expertise and autonomous execution without proprietary tokens or walled gardens.
              </p>

              <h3 className="text-2xl font-bold text-[#141414] mt-8 mb-4">The Product</h3>
              <p className="text-base text-[#454545] leading-relaxed mb-4">
                A decentralized infrastructure where DeFi strategies are:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-[#454545]">
                <li>
                  <strong className="text-[#141414]">Wrapped</strong> as standard Model Context Protocol (MCP)
                  endpoints.
                </li>
                <li>
                  <strong className="text-[#141414]">Streamed</strong> via low-latency WebTransport.
                </li>
                <li>
                  <strong className="text-[#141414]">Monetized</strong> natively via the HTTP x402 (Payment Required)
                  protocol using standard assets (USDC/ETH).
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-[#141414] mt-8 mb-4">The Opportunity</h3>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                We are moving from <strong className="text-[#141414]">DeFi 1.0</strong> (Humans trading on UIs) to{" "}
                <strong className="text-[#141414]">DeFi 2.0</strong> (Agents trading via APIs). Stratos provides the
                standardized, neutral rails for this $100B+ transition.
              </p>
            </section>

            {/* Market Timing */}
            <section id="market-timing" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">The "Why Now?" (Market Timing)</h2>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                Three distinct technological waves are converging to make this possible{" "}
                <strong className="text-[#141414]">today</strong>:
              </p>
              <ol className="list-decimal list-inside space-y-4 mb-6">
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">The Agent Explosion (2025):</strong> AI Agents are rapidly becoming
                  the primary consumers of on-chain data, but they lack a standardized way to "ingest" complex strategy
                  logic.
                </li>
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">Model Context Protocol (MCP):</strong> The new industry standard
                  (backed by Anthropic/OpenAI) finally gives us a universal language for LLMs to talk to external data
                  sources.
                </li>
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">HTTP/3 & WebTransport:</strong> New web standards now allow for
                  high-frequency, bidirectional streaming that legacy WebSockets could not handle efficiently.
                </li>
              </ol>
            </section>

            {/* The Problem */}
            <section id="problem" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">The Problem</h2>
              <h3 className="text-2xl font-bold text-[#141414] mt-8 mb-4">The "Alpha" Disconnect</h3>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-[#141414] mb-3">For Human Quants (Supply):</h4>
                <ul className="space-y-3 list-disc list-inside">
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">Fragmentation:</strong> Brilliant strategies are locked in
                    Discord servers, Python scripts, and private Telegram chats.
                  </li>
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">Monetization Friction:</strong> Selling a strategy requires
                    building a full-stack SaaS app and managing Stripe subscriptions.
                  </li>
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">IP Theft:</strong> Sharing code often means losing your edge.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-[#141414] mb-3">For AI Agents (Demand):</h4>
                <ul className="space-y-3 list-disc list-inside">
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">Unstructured Data:</strong> Agents cannot "read" a screenshot of
                    a chart. They need verified, structured JSON streams.
                  </li>
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">Subscription Fatigue:</strong> An Agent managing a $10k portfolio
                    cannot afford $500/month for a signal it might only use twice.
                  </li>
                  <li className="text-[#454545]">
                    <strong className="text-[#141414]">Latency:</strong> Standard REST APIs are too slow for volatile
                    crypto markets.
                  </li>
                </ul>
              </div>
            </section>

            {/* The Solution */}
            <section id="solution" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">The Solution</h2>
              <h3 className="text-2xl font-bold text-[#141414] mt-8 mb-4">Stratos: The Decentralized Strategy Layer</h3>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                We treat trading strategies as <strong className="text-[#141414]">Composable Data Products</strong>.
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6">
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">Create:</strong> Quants upload logic to Stratos. It is versioned,
                  validated, and wrapped in an MCP container.
                </li>
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">Discover:</strong> Agents query the registry based on metadata
                  (Risk Score, APY, Chain, Asset).
                </li>
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">Consume:</strong> Signals are streamed in real-time.
                </li>
                <li className="text-[#454545]">
                  <strong className="text-[#141414]">Settle:</strong> Payments are handled per-message via x402.
                </li>
              </ol>
            </section>

            {/* Technical Architecture */}
            <section id="technical-architecture" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Technical Architecture</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">
                Pure Standards. High-Throughput Data Infrastructure.
              </p>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                We reject the usage of a custom utility token. Stratos is built entirely on open web and crypto
                standards to ensure maximum interoperability.
              </p>

              <div className="border border-[#dbd8d0] overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-[#e8e5de]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Layer
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Technology
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Function
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#f2efe9]">
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Interface</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Model Context Protocol (MCP)</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">
                        Strategies are self-describing. We do not build custom adapters for agent frameworks. If an
                        agent speaks MCP, it speaks Stratos natively.
                      </td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Data Layer</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Avalanche Network</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">
                        <strong className="text-[#141414]">Avalanche is leveraged as the Data-Chain.</strong> We utilize
                        the high throughput and instant finality of Avalanche for immutable logging of strategy
                        telemetry, signal history, and performance verification.
                      </td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Transport</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">WebTransport (HTTP/3)</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">
                        Replaces WebSockets. Allows multiplexed, bidirectional streaming over UDP (QUIC) to prevent
                        head-of-line blocking.
                      </td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Settlement</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">x402 (Payment Required)</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">
                        We utilize the standard HTTP 402 status code. Every API response header contains a payment
                        demand settled in <strong className="text-[#141414]">USDC or ETH</strong>.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">Security</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">TLS 1.3 & Isolation</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">
                        We use standard Transport Layer Security. We are currently assessing the security landscape to
                        determine the optimal sandboxing environment for creator code protection.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* User Journey */}
            <section id="user-journey" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">User Journey (The "Happy Path")</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-[#dcee24] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#141414] mb-2">Step 1: The Publish (Supply)</h3>
                  <p className="text-[#454545] mb-2">
                    Elena runs{" "}
                    <code className="px-2 py-1 bg-[#e8e5de] text-[#141414] text-sm">stratos publish ./strategy.py</code>
                    .
                  </p>
                  <p className="text-[#454545] mb-2">
                    System generates an MCP endpoint:{" "}
                    <code className="px-2 py-1 bg-[#e8e5de] text-[#141414] text-sm">
                      api.stratos.markets/elena/arb-v1
                    </code>
                    .
                  </p>
                  <p className="text-[#454545]">
                    Liveness monitors begin tracking performance on the Avalanche Data-Chain.
                  </p>
                </div>

                <div className="border-l-4 border-[#dcee24] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#141414] mb-2">Step 2: The Handshake (Demand)</h3>
                  <p className="text-[#454545] mb-2">Agent-007 connects to the endpoint via WebTransport.</p>
                  <p className="text-[#454545]">
                    Endpoint responds:{" "}
                    <code className="px-2 py-1 bg-[#e8e5de] text-[#141414] text-sm">
                      402 Payment Required: 0.05 USDC
                    </code>
                    .
                  </p>
                </div>

                <div className="border-l-4 border-[#dcee24] pl-6 py-2">
                  <h3 className="text-xl font-bold text-[#141414] mb-2">Step 3: The Stream & Settle</h3>
                  <p className="text-[#454545] mb-2">Agent signs the micro-transaction.</p>
                  <p className="text-[#454545] mb-2">Endpoint validates and pushes the live signal.</p>
                  <p className="text-[#454545]">Agent executes trade on-chain.</p>
                </div>
              </div>
            </section>

            {/* Technical Roadmap */}
            <section id="technical-roadmap" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Technical Roadmap</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">Engineering the Standards</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 1: The Core Rails (Q3 2025)</h3>
                  <ul className="space-y-2 list-disc list-inside text-[#454545]">
                    <li>Implement x402 settlement logic for EVM-compatible payments.</li>
                    <li>Deploy WebTransport gateway nodes.</li>
                    <li>Release Stratos CLI for strategy wrapping.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 2: The Standardization (Q4 2025)</h3>
                  <ul className="space-y-2 list-disc list-inside text-[#454545]">
                    <li>Full implementation of Model Context Protocol (MCP) server-side.</li>
                    <li>
                      Integration of <strong className="text-[#141414]">Avalanche</strong> as the primary Data-Chain for
                      performance logging.
                    </li>
                    <li>Comprehensive Security Landscape Assessment (Sandboxing/Isolation research).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 3: The Optimization (Q1 2026)</h3>
                  <ul className="space-y-2 list-disc list-inside text-[#454545]">
                    <li>Latency reduction (Global edge distribution).</li>
                    <li>Support for strategy chaining (Composability engine).</li>
                    <li>Release of "Stratos Validator" for decentralized checks.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Executional Roadmap */}
            <section id="executional-roadmap" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Executional Roadmap</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">Business & Growth</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 1: Experimental Alpha (Testnet Only)</h3>
                  <ul className="space-y-2 text-[#454545]">
                    <li>
                      <strong className="text-[#141414]">Environment:</strong> Restricted strictly to{" "}
                      <strong className="text-[#141414]">Base Sepolia</strong> and{" "}
                      <strong className="text-[#141414]">Avalanche Fuji</strong>.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Goal:</strong> Assess security risks and transaction flow
                      without risking real capital.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Cohort:</strong> Onboard 50 high-quality quant developers for
                      stress testing.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 2: Public Beta (Permissionless)</h3>
                  <ul className="space-y-2 text-[#454545]">
                    <li>
                      <strong className="text-[#141414]">Environment:</strong> Mainnet Launch.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Goal:</strong> Open Registry to the public with validated
                      security parameters.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Metrics:</strong> Target 500 active strategies and 10,000 daily
                      executions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">Phase 3: Mainnet Scale</h3>
                  <ul className="space-y-2 list-disc list-inside text-[#454545]">
                    <li>Enable cross-chain settlement.</li>
                    <li>Launch Enterprise API for institutional funds.</li>
                    <li>Goal: Become the default data dependency for the top 5 Institutional Agent Funds.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Go-To-Market Strategy */}
            <section id="gtm-strategy" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Go-To-Market Strategy</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">Adoption via Standardization</p>
              <p className="text-base text-[#454545] leading-relaxed mb-6">
                We are not building plugins for specific agent frameworks. We are building the <em>standard</em> that
                all frameworks will naturally adopt.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">1. Supply Seeding (The "Alpha" Drop)</h3>
                  <ul className="space-y-2 text-[#454545]">
                    <li>
                      <strong className="text-[#141414]">Tactic:</strong> Direct outreach to existing signal providers
                      on Discord/Telegram who are struggling with monetization.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Pitch:</strong> "Stop chasing subscriptions. Get paid per
                      execution via a simple API."
                    </li>
                    <li>
                      <strong className="text-[#141414]">Incentive:</strong> 0% protocol fees for the first 6 months.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">2. Demand Generation (Developer Evangelism)</h3>
                  <ul className="space-y-2 text-[#454545]">
                    <li>
                      <strong className="text-[#141414]">Tactic:</strong> Focus entirely on documentation and SDKs for
                      the MCP standard.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Logic:</strong> By making Stratos the easiest MCP-compliant
                      data source to integrate, any developer building an agent (using any framework) will choose
                      Stratos by default.
                    </li>
                    <li>
                      <strong className="text-[#141414]">Action:</strong> Produce high-quality "Reference
                      Implementations" showing how a generic Python script can consume Stratos data.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#141414] mb-3">3. The Composability Flywheel</h3>
                  <ul className="space-y-2 text-[#454545]">
                    <li>
                      <strong className="text-[#141414]">Tactic:</strong> Encourage "Primitive" strategies (e.g., "ETH
                      Volatility Index").
                    </li>
                    <li>
                      <strong className="text-[#141414]">Effect:</strong> Complex strategies will import these
                      primitives. Once a strategy is a dependency for 50 other strategies, network effects solidify the
                      platform's position.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feature Matrix */}
            <section id="feature-matrix" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Feature Matrix (MoSCoW)</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">Prioritization Strategy</p>

              <div className="border border-[#dbd8d0] overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-[#e8e5de]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Priority
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-[#141414] border-b border-[#dbd8d0]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#f2efe9]">
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">MUST</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">x402 Settlement Rail</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">🚧 Implementation in Progress</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">MUST</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">MCP Implementation</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">🚧 In Development</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">MUST</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">WebTransport Streamer</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">🚧 In Development</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">SHOULD</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">Strategy Composability</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">📅 Post-Launch (The "GitHub" mechanic)</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">SHOULD</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">Visual Registry</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">📅 Post-Launch (Human-readable UI)</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">COULD</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">Backtesting Cloud</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">📅 2027 (Simulation environment)</td>
                    </tr>
                    <tr className="border-b border-[#dbd8d0]">
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">WON'T</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">Framework Specific Plugins</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">❌ We adhere to standards, not frameworks.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-[#141414]">WON'T</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">Proprietary Token</td>
                      <td className="px-4 py-3 text-sm text-[#454545]">❌ Settlement is in USDC/ETH only.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* The Team */}
            <section id="team" className="scroll-mt-8 mb-16">
              <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">The Team</h2>
              <p className="text-lg font-semibold text-[#141414] mb-6">Builders of the Infrastructure</p>

              <div className="space-y-6">
                <div className="border border-[#dbd8d0] bg-[#e8e5de] p-6">
                  <h3 className="text-xl font-bold text-[#141414] mb-2">Cipher | CEO</h3>
                  <ul className="space-y-1 list-disc list-inside text-[#454545]">
                    <li>7+ years in Data Systems & Fintech Architecture.</li>
                    <li>Expertise in Distributed Systems and MCP implementation.</li>
                    <li>Visionary behind the "Decentralized Strategy Layer."</li>
                  </ul>
                </div>

                <div className="border border-[#dbd8d0] bg-[#e8e5de] p-6">
                  <h3 className="text-xl font-bold text-[#141414] mb-2">UnityCodes | CFO</h3>
                  <ul className="space-y-1 list-disc list-inside text-[#454545]">
                    <li>DeFi Economics & Programmable Money Specialist.</li>
                    <li>Deep experience in Tokenomics and Treasury Management.</li>
                    <li>Architect of the x402 settlement workflow.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="mt-16 border border-[#dbd8d0] bg-[#e8e5de] p-6">
              <h3 className="text-xl font-bold text-[#141414] mb-3">Ready to get started?</h3>
              <p className="text-[#454545] mb-4">
                Explore our interactive API reference to see all available endpoints and start building with Stratos.
              </p>
              <Link
                href="/api/reference"
                className="inline-block rounded-none bg-[#141414] px-6 py-3 text-base font-bold text-[#dcee24] hover:bg-[#000000] transition-colors"
              >
                View API Reference
              </Link>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
