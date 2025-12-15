import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-[#141414] text-[#f2efe9]'>
      {/* Header */}
      <header className='border-b border-[#2a2a2a] bg-[#141414]'>
        <div className='container mx-auto flex items-center justify-between px-6 py-4'>
          <a href='https://stratos-markets-ui.vercel.app' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3'>
            <Image src='/stratos-dark.svg' alt='Stratos' width={160} height={35} className='h-8 w-auto' priority />
          </a>
          <nav className='flex items-center gap-6'>
            <Link href='/docs' className='text-sm font-medium hover:text-[#dcee24] transition-colors'>Documentation</Link>
            <Link href='/api/reference' className='text-sm font-medium hover:text-[#dcee24] transition-colors'>API Reference</Link>
            <a
              href='https://stratos-markets-ui.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-none bg-[#dcee24] px-4 py-2 text-sm font-bold text-[#141414] hover:bg-[#c9db1f] transition-colors'>
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-20'>
        <div className='max-w-4xl'>
          <h1 className='font-sans text-6xl font-bold tracking-tight text-[#f2efe9] mb-6'>The Decentralized Strategy Layer</h1>
          <p className='text-xl text-[#a1a1a1] mb-8 leading-relaxed'>
            Decentralized marketplace infrastructure for the creation, discovery, and monetization of DeFi intelligence.
          </p>
          <p className='text-xl text-[#a1a1a1] mb-12 leading-relaxed'>
            Stratos facilitates a composable creator economy where trading strategies are treated as monetizeable data products. Strategy
            creators can publish, version, and fork sophisticated DeFi logic, while users and AI agents discover and consume these
            strategies via the X402 protocol.
          </p>
          <div className='flex items-center gap-4'>
            <Link
              href='/api/reference'
              className='rounded-none bg-[#dcee24] px-6 py-3 text-base font-bold text-[#141414] hover:bg-[#c9db1f] transition-colors'>
              Explore API
            </Link>
            <Link
              href='/docs'
              className='rounded-none border border-[#2a2a2a] bg-transparent px-6 py-3 text-base font-medium text-[#f2efe9] hover:border-[#dcee24] transition-colors'>
              Read Documentation
            </Link>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className='mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Lifecycle Management</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>
              End-to-end strategy creation, validation, semantic versioning, and liveness monitoring.
            </p>
          </div>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Intelligent Discovery</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>
              Advanced marketplace search with performance-based filtering, risk scoring, and community ratings.
            </p>
          </div>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Decentralized Settlement</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>Native X402 protocol integration for trustless, friction-free payments.</p>
          </div>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Creator Dashboard</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>Granular revenue tracking, subscriber analytics, and churn metrics.</p>
          </div>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Composability Engine</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>
              Support for strategy composition (bundling) and forking (remixing), enabling a "GitHub for Alpha" dynamic.
            </p>
          </div>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
            <h3 className='text-xl font-bold text-[#f2efe9] mb-3'>Universal Compatibility</h3>
            <p className='text-[#a1a1a1] leading-relaxed'>Multi-chain and multi-protocol architecture.</p>
          </div>
        </div>

        {/* Commercial Model */}
        <div className='mt-24'>
          <h2 className='text-3xl font-bold text-[#f2efe9] mb-8'>Commercial Model</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
              <h3 className='text-lg font-bold text-[#dcee24] mb-3'>Creator-First Pricing</h3>
              <p className='text-[#a1a1a1] leading-relaxed'>Flexible tools for creators to set flat-fee or streaming-based pricing.</p>
            </div>
            <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
              <h3 className='text-lg font-bold text-[#dcee24] mb-3'>Transparent Fees</h3>
              <p className='text-[#a1a1a1] leading-relaxed'>3% protocol fee on transaction volume; 97% net revenue to the creator.</p>
            </div>
            <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-6'>
              <h3 className='text-lg font-bold text-[#dcee24] mb-3'>Flexible Access</h3>
              <p className='text-[#a1a1a1] leading-relaxed'>
                Native support for one-time unlocking, recurring subscriptions, and pay-per-call models.
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Infrastructure */}
        <div className='mt-24'>
          <h2 className='text-3xl font-bold text-[#f2efe9] mb-8'>Real-Time Infrastructure</h2>
          <div className='border border-[#2a2a2a] bg-[#1f1f1f] p-8'>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <span className='text-[#dcee24] font-bold text-xl'>•</span>
                <div>
                  <span className='font-bold text-[#f2efe9]'>Low-Latency Streaming:</span>
                  <span className='text-[#a1a1a1]'>
                    {' '}Built on WebTransport API for high-throughput, bidirectional data streams essential for HFT contexts.
                  </span>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-[#dcee24] font-bold text-xl'>•</span>
                <div>
                  <span className='font-bold text-[#f2efe9]'>Live Execution:</span>
                  <span className='text-[#a1a1a1]'>{' '}Instant broadcast of strategy signals and execution updates.</span>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-[#dcee24] font-bold text-xl'>•</span>
                <div>
                  <span className='font-bold text-[#f2efe9]'>Telemetry:</span>
                  <span className='text-[#a1a1a1]'>{' '}Real-time market data feeds and performance metric streaming.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='border-t border-[#2a2a2a] bg-[#141414] mt-32'>
        <div className='container mx-auto px-6 py-8'>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-[#666666]'>© 2025 Stratos. All rights reserved.</p>
            <div className='flex items-center gap-6'>
              <a href='https://stratos-markets-api.vercel.app/' className='text-sm text-[#a1a1a1] hover:text-[#dcee24] transition-colors'>
                API Endpoint
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
