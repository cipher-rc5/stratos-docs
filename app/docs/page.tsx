import Image from "next/image"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#141414]">
      {/* Header */}
      <header className="border-b border-[#dbd8d0] bg-[#f2efe9] sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/stratos-light.svg" alt="Stratos" width={160} height={35} className="h-8 w-auto" priority />
          </Link>
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
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <nav className="sticky top-24 space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#introduction"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#capabilities"
                    className="block text-sm text-[#454545] hover:text-[#141414] transition-colors"
                  >
                    Key Capabilities
                  </a>
                </li>
                <li>
                  <a href="#commercial" className="block text-sm text-[#454545] hover:text-[#141414] transition-colors">
                    Commercial Model
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Infrastructure</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#realtime" className="block text-sm text-[#454545] hover:text-[#141414] transition-colors">
                    Real-Time Infrastructure
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-bold text-[#141414]">Resources</h3>
              <ul className="space-y-2">
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

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <article className="prose prose-neutral max-w-none">
            <h1 id="introduction" className="font-tektur text-4xl font-bold text-[#141414] mb-4 scroll-mt-8">
              Stratos API: The Decentralized Strategy Layer
            </h1>
            <p className="text-lg text-[#454545] leading-relaxed mb-8">
              Decentralized marketplace infrastructure for the creation, discovery, and monetization of DeFi
              intelligence.
            </p>
            <p className="text-base text-[#454545] leading-relaxed mb-8">
              Stratos facilitates a composable creator economy where trading strategies are treated as monetizeable data
              products. Strategy creators can publish, version, and fork sophisticated DeFi logic, while users and AI
              agents discover and consume these strategies via the X402 protocol. Creators retain full pricing control,
              with the platform facilitating trustless settlement.
            </p>

            <h2 id="capabilities" className="text-3xl font-bold text-[#141414] mt-16 mb-6 scroll-mt-8">
              Key Capabilities
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Lifecycle Management:</strong> End-to-end strategy creation,
                validation, semantic versioning, and liveness monitoring.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Intelligent Discovery:</strong> Advanced marketplace search with
                performance-based filtering, risk scoring, and community ratings.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Decentralized Settlement:</strong> Native X402 protocol integration
                for trustless, friction-free payments.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Creator Dashboard:</strong> Granular revenue tracking, subscriber
                analytics, and churn metrics.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Composability Engine:</strong> Support for strategy composition
                (bundling) and forking (remixing), enabling a "GitHub for Alpha" dynamic.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Universal Compatibility:</strong> Multi-chain and multi-protocol
                architecture.
              </li>
            </ul>

            <h2 id="commercial" className="text-3xl font-bold text-[#141414] mt-16 mb-6 scroll-mt-8">
              Commercial Model
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Creator-First Pricing:</strong> Flexible tools for creators to set
                flat-fee or streaming-based pricing.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Transparent Fees:</strong> 3% protocol fee on transaction volume; 97%
                net revenue to the creator.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Flexible Access:</strong> Native support for one-time unlocking,
                recurring subscriptions, and pay-per-call (streaming) models.
              </li>
            </ul>

            <h2 id="realtime" className="text-3xl font-bold text-[#141414] mt-16 mb-6 scroll-mt-8">
              Real-Time Infrastructure
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Low-Latency Streaming:</strong> Built on WebTransport API for
                high-throughput, bidirectional data streams essential for HFT (High-Frequency Trading) contexts.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Live Execution:</strong> Instant broadcast of strategy signals and
                execution updates.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Telemetry:</strong> Real-time market data feeds and performance
                metric streaming.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#141414] mt-16 mb-6">Developer Resources</h2>
            <ul className="space-y-4 mb-8">
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Interactive Docs:</strong> Full OpenAPI specifications powered by
                Scalar.
              </li>
              <li className="text-[#454545]">
                <strong className="text-[#141414]">Endpoint:</strong>{" "}
                <a
                  href="https://api.stratos.markets/docs"
                  className="text-[#141414] underline hover:text-[#dcee24] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://api.stratos.markets/docs
                </a>
              </li>
            </ul>

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
