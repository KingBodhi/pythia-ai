import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description: "Explore the technical architecture of Pythia AI - from Active Inference algorithms to mesh network topology and privacy-preserving computation.",
};

export default function Technology() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Technology</span> Stack
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            A mesh of meshes architecture enabling true offline-first,
            privacy-preserving distributed intelligence.
          </p>
        </div>
      </section>

      {/* Network Topology */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Network Topology</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pythia operates across five network tiers, from Bluetooth-connected
              devices to LEO satellites, ensuring connectivity in any environment.
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {[
              {
                tier: "Tier 5",
                name: "Planetary",
                tech: "LEO Satellites",
                latency: "20-40ms",
                range: "Global",
                color: "var(--accent-purple)"
              },
              {
                tier: "Tier 4",
                name: "Global",
                tech: "Internet (when available)",
                latency: "50-200ms",
                range: "Worldwide",
                color: "var(--accent-blue)"
              },
              {
                tier: "Tier 3",
                name: "Mesh",
                tech: "LoRa 915MHz",
                latency: "100-500ms",
                range: "5-15km",
                color: "var(--gold)"
              },
              {
                tier: "Tier 2",
                name: "Local",
                tech: "WiFi 6E",
                latency: "<10ms",
                range: "100m",
                color: "var(--accent-green)"
              },
              {
                tier: "Tier 1",
                name: "Hyperlocal",
                tech: "BLE 5.3",
                latency: "<5ms",
                range: "10m",
                color: "var(--gold-light)"
              }
            ].map((tier, i) => (
              <div
                key={tier.tier}
                className="card flex items-center gap-6"
                style={{ borderLeft: `4px solid ${tier.color}` }}
              >
                <div className="text-sm font-mono" style={{ color: tier.color }}>
                  {tier.tier}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[var(--text-primary)]">{tier.name}</div>
                  <div className="text-sm text-[var(--text-muted)]">{tier.tech}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[var(--text-secondary)]">{tier.latency}</div>
                  <div className="text-xs text-[var(--text-muted)]">{tier.range}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Components</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The building blocks of Pythia&apos;s distributed intelligence system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Cryptographic Layer</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                End-to-end encryption using modern cryptographic primitives.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; Ed25519 signatures</li>
                <li>&#8226; X25519 key exchange</li>
                <li>&#8226; ChaCha20-Poly1305 encryption</li>
                <li>&#8226; BLAKE3 hashing</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">State Management</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Conflict-free replicated data types for offline-first operation.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; CRDT-based sync</li>
                <li>&#8226; Merkle DAG storage</li>
                <li>&#8226; Eventual consistency</li>
                <li>&#8226; Automatic conflict resolution</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Compute Engine</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Heterogeneous compute orchestration across diverse hardware.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; GPU acceleration</li>
                <li>&#8226; WASM sandboxing</li>
                <li>&#8226; Task scheduling</li>
                <li>&#8226; Resource metering</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Inference Engine</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Active Inference implementation for decision-making.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; Generative models</li>
                <li>&#8226; Variational inference</li>
                <li>&#8226; Expected free energy</li>
                <li>&#8226; Policy optimization</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Economics Layer</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Token mechanics and incentive alignment via VIBE.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; Stake-weighted voting</li>
                <li>&#8226; Revenue distribution</li>
                <li>&#8226; Treasury management</li>
                <li>&#8226; Buyback mechanisms</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Mesh Protocol</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Multi-tier networking for resilient connectivity.
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>&#8226; Gossip protocol</li>
                <li>&#8226; DHT routing</li>
                <li>&#8226; NAT traversal</li>
                <li>&#8226; Relay nodes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sovereign Stack Integration</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pythia AI sits at Layer 4 of the Sovereign Stack, coordinating between
              hardware, protocol, and economic layers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                layer: "L6",
                name: "Spectrum Galactic",
                desc: "LEO satellite constellation for global coverage",
                link: "#"
              },
              {
                layer: "L5",
                name: "VIBE Token",
                desc: "Economic layer powering incentives and governance",
                link: "#"
              },
              {
                layer: "L4",
                name: "Pythia AI",
                desc: "Intelligence layer - you are here",
                current: true
              },
              {
                layer: "L3",
                name: "PCG Dashboard",
                desc: "User interface for network interaction",
                link: "#"
              },
              {
                layer: "L2",
                name: "Omega Hardware",
                desc: "Privacy routers, relays, and phones",
                link: "https://omegawireless.xyz"
              },
              {
                layer: "L1",
                name: "Alpha Protocol",
                desc: "Core cryptographic network protocol",
                link: "https://alphaprotocol.network"
              }
            ].map((layer) => (
              <div
                key={layer.layer}
                className={`card flex items-center gap-6 ${
                  layer.current ? "border-[var(--gold)] bg-[var(--gold)]/5 glow-gold" : ""
                }`}
              >
                <div className={`text-sm font-mono ${layer.current ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`}>
                  {layer.layer}
                </div>
                <div className="flex-1">
                  <div className={`font-semibold ${layer.current ? "text-[var(--gold)]" : "text-[var(--text-primary)]"}`}>
                    {layer.name}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{layer.desc}</div>
                </div>
                {layer.link && (
                  <a
                    href={layer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline text-sm"
                  >
                    Visit &#8594;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Build With Us</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Join the network as a node operator, developer, or investor.
            The future of distributed intelligence is being built now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Investment Opportunities
            </Link>
            <Link href="/roadmap" className="btn-secondary">
              View Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
