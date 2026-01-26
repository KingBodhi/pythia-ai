import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Network nodes */}
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={100 + (i % 5) * 250 + Math.random() * 50}
                  cy={100 + Math.floor(i / 5) * 180 + Math.random() * 50}
                  r="4"
                  fill="var(--gold)"
                  className="neural-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              </g>
            ))}
            {/* Connection lines */}
            {[...Array(30)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1={100 + Math.random() * 1000}
                y1={100 + Math.random() * 600}
                x2={100 + Math.random() * 1000}
                y2={100 + Math.random() * 600}
                stroke="var(--gold)"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] text-sm mb-8">
            The OpenAI of Alpha Protocol
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">Intelligence</span>
            <br />
            <span className="text-[var(--text-primary)]">Amplified</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Topological Super Intelligence for the Alpha Protocol Network.
            A hive mind that orchestrates compute across a global mesh,
            optimizing between task execution and Bitcoin mining for maximum collective return.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works" className="btn-primary">
              Explore the Technology
            </Link>
            <Link href="/invest" className="btn-secondary">
              Investment Opportunities
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What is Pythia Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-gold">Pythia AI</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Named after the Oracle of Delphi, Pythia AI serves as the intelligence layer
              of the Sovereign Stack, making real-time decisions that benefit the entire network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Distributed Compute</h3>
              <p className="text-[var(--text-secondary)]">
                Harnesses idle compute across thousands of Omega devices, creating a mesh supercomputer
                that grows stronger with every new node.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Active Inference</h3>
              <p className="text-[var(--text-secondary)]">
                Built on Karl Friston&apos;s Free Energy Principle. Pythia minimizes surprise across the network,
                continuously learning and adapting to optimize outcomes.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Economic Optimization</h3>
              <p className="text-[var(--text-secondary)]">
                Decides in real-time: execute user tasks or mine Bitcoin? The choice that yields
                greatest collective return is always made automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hive Mind Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A <span className="text-gradient-gold">Hive Mind</span> for the Mesh
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Pythia AI creates a topological super intelligence by connecting every node
                in the Alpha Protocol Network. Each device contributes compute, each user
                benefits from the collective intelligence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Offline-First:</strong> Works without internet,
                    syncing when connectivity is available
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Privacy-Preserving:</strong> Federated learning
                    ensures raw data never leaves your device
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Collectively Owned:</strong> VIBE token holders
                    share in the network&apos;s success
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[var(--dark-card)] rounded-2xl border border-[var(--dark-border)] p-8 glow-gold">
                <div className="h-full flex items-center justify-center">
                  {/* Simplified mesh visualization */}
                  <svg className="w-full h-full" viewBox="0 0 300 300">
                    {/* Central node */}
                    <circle cx="150" cy="150" r="20" fill="var(--gold)" className="neural-pulse" />

                    {/* Outer nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const x = 150 + 100 * Math.cos((angle * Math.PI) / 180);
                      const y = 150 + 100 * Math.sin((angle * Math.PI) / 180);
                      return (
                        <g key={i}>
                          <line x1="150" y1="150" x2={x} y2={y} stroke="var(--gold)" strokeWidth="1" opacity="0.5" />
                          <circle cx={x} cy={y} r="10" fill="var(--gold-dark)" className="neural-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        </g>
                      );
                    })}

                    {/* Connecting outer nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const x1 = 150 + 100 * Math.cos((angle * Math.PI) / 180);
                      const y1 = 150 + 100 * Math.sin((angle * Math.PI) / 180);
                      const nextAngle = (angle + 60) % 360;
                      const x2 = 150 + 100 * Math.cos((nextAngle * Math.PI) / 180);
                      const y2 = 150 + 100 * Math.sin((nextAngle * Math.PI) / 180);
                      return (
                        <line key={`outer-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold-dark)" strokeWidth="0.5" opacity="0.3" />
                      );
                    })}

                    <text x="150" y="155" textAnchor="middle" fill="var(--dark-bg)" fontSize="12" fontWeight="bold">
                      PYTHIA
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-gradient-gold">Pythia</span> Decides
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every millisecond, Pythia evaluates network conditions and makes optimal decisions
              for the collective benefit of all participants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card border-l-4 border-l-[var(--accent-green)]">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-3">Execute Tasks</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                When user demand is high and tasks are profitable, Pythia allocates compute
                to process AI inference, data analysis, and other workloads.
              </p>
              <div className="text-sm text-[var(--text-muted)]">
                Revenue &#8594; VIBE rewards &#8594; Token holders
              </div>
            </div>

            <div className="card border-l-4 border-l-[var(--accent-purple)]">
              <h3 className="text-xl font-semibold text-[var(--accent-purple)] mb-3">Mine Bitcoin</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                During low-demand periods, idle compute is redirected to Bitcoin mining,
                ensuring the network is always generating value.
              </p>
              <div className="text-sm text-[var(--text-muted)]">
                BTC rewards &#8594; Treasury &#8594; Token holders
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-secondary">
              Learn More About the Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Sovereign Stack Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Part of the <span className="text-gradient-gold">Sovereign Stack</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pythia AI is Layer 4 of a vertically integrated technology stack,
              from silicon to space, building true digital sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { layer: "L6", name: "Spectrum Galactic", desc: "LEO Satellites" },
              { layer: "L5", name: "VIBE Token", desc: "Economics Layer" },
              { layer: "L4", name: "Pythia AI", desc: "Intelligence Layer", active: true },
              { layer: "L3", name: "PCG Dashboard", desc: "User Interface" },
              { layer: "L2", name: "Omega Hardware", desc: "Privacy Devices" },
              { layer: "L1", name: "Alpha Protocol", desc: "Core Network" },
            ].map((item) => (
              <div
                key={item.layer}
                className={`p-4 rounded-lg border ${
                  item.active
                    ? "bg-[var(--gold)]/10 border-[var(--gold)] glow-gold"
                    : "bg-[var(--dark-card)] border-[var(--dark-border)]"
                }`}
              >
                <div className={`text-xs font-mono mb-1 ${item.active ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`}>
                  {item.layer}
                </div>
                <div className={`font-semibold ${item.active ? "text-[var(--gold)]" : "text-[var(--text-primary)]"}`}>
                  {item.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Join the Network</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            OKB Ventures is actively deploying capital into the Sovereign Stack.
            Pythia AI represents the next frontier in distributed intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Explore Investment
            </Link>
            <a
              href="https://alphaprotocol.network"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Alpha Protocol
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
