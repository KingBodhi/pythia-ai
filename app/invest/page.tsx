import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invest",
  description: "Investment opportunities in Pythia AI - the intelligence layer of the Sovereign Stack. Backed by OKB Ventures.",
};

export default function Invest() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] text-sm mb-8">
            Investment Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in <span className="text-gradient-gold">Pythia AI</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            The intelligence layer of the Sovereign Stack. Building the OpenAI
            of decentralized networks, backed by OKB Ventures.
          </p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Opportunity</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Pythia AI represents a new paradigm in distributed computing and
                artificial intelligence. By combining Active Inference with mesh
                networking, we&apos;re creating a collective intelligence that grows
                stronger with every node added to the network.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">First-Mover Advantage:</strong> No other
                    project combines Active Inference with decentralized mesh networking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Vertically Integrated:</strong> Part of
                    the Sovereign Stack from hardware to satellites.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Revenue From Day One:</strong> Bitcoin
                    mining provides immediate cash flow while task marketplace grows.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Total Addressable Market</div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">$150B+</div>
                  <div className="text-sm text-[var(--text-muted)]">AI + Edge Computing + Mining</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Network Effect Multiplier</div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">N&sup2;</div>
                  <div className="text-sm text-[var(--text-muted)]">Value scales with nodes squared</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Revenue Streams</div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">3+</div>
                  <div className="text-sm text-[var(--text-muted)]">Tasks, Mining, API Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Structure */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Structure</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              OKB Ventures is coordinating the capital deployment for Pythia AI
              as part of the broader Sovereign Stack initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card border-t-4 border-t-[var(--gold)]">
              <div className="text-sm text-[var(--text-muted)] mb-2">Current Round</div>
              <h3 className="text-2xl font-bold text-[var(--gold)] mb-4">Seed</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Target Raise</div>
                  <div className="text-lg text-[var(--text-primary)]">$2-5M</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Instrument</div>
                  <div className="text-lg text-[var(--text-primary)]">SAFE + Token Warrant</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Use of Funds</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Core development, team expansion, initial node deployment
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Next Round</div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Series A</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Target Raise</div>
                  <div className="text-lg text-[var(--text-primary)]">$10-20M</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Timeline</div>
                  <div className="text-lg text-[var(--text-primary)]">Q3 2026</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Focus</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Network scaling, marketing, developer ecosystem
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-[var(--text-muted)] mb-2">Token Event</div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">VIBE Launch</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Total Supply</div>
                  <div className="text-lg text-[var(--text-primary)]">1 Billion</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Timeline</div>
                  <div className="text-lg text-[var(--text-primary)]">Q4 2026</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Investor Allocation</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Early investors receive token warrants at discount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OKB Ventures */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card">
                  <div className="text-3xl mb-2">&#127919;</div>
                  <h4 className="font-semibold text-[var(--gold)]">Vision-Aligned</h4>
                  <p className="text-sm text-[var(--text-muted)]">Building for Oklahoma and beyond</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">&#128200;</div>
                  <h4 className="font-semibold text-[var(--gold)]">Active Support</h4>
                  <p className="text-sm text-[var(--text-muted)]">Hands-on portfolio management</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">&#128279;</div>
                  <h4 className="font-semibold text-[var(--gold)]">Stack Synergy</h4>
                  <p className="text-sm text-[var(--text-muted)]">Deep integration with ecosystem</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">&#128176;</div>
                  <h4 className="font-semibold text-[var(--gold)]">Capital Access</h4>
                  <p className="text-sm text-[var(--text-muted)]">Network of co-investors</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Backed by OKB Ventures</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                OKB Ventures is the investment arm of the Private Office, deploying
                capital into early-stage ventures that enhance quality of life for
                individuals in Oklahoma and beyond.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                As part of the Sovereign Stack initiative, Pythia AI receives not just
                capital but deep technical integration with Alpha Protocol, Omega Hardware,
                and the broader ecosystem.
              </p>
              <a
                href="https://okb-ventures.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--gold)] hover:underline"
              >
                Learn more about OKB Ventures &#8594;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Sovereign Stack */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Part of Something Bigger</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pythia AI is Layer 4 of the Sovereign Stack — a vertically integrated
              technology ecosystem from silicon to space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="https://alphaprotocol.network"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L1</div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                Alpha Protocol
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Core cryptographic network</p>
            </a>

            <a
              href="https://omegawireless.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L2</div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                Omega Wireless
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Privacy hardware devices</p>
            </a>

            <div className="card opacity-60">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L3</div>
              <h4 className="font-semibold text-[var(--text-primary)]">PCG Dashboard</h4>
              <p className="text-sm text-[var(--text-muted)]">User interface</p>
            </div>

            <div className="card border-[var(--gold)] glow-gold">
              <div className="text-xs font-mono text-[var(--gold)] mb-2">L4</div>
              <h4 className="font-semibold text-[var(--gold)]">Pythia AI</h4>
              <p className="text-sm text-[var(--text-muted)]">You are here</p>
            </div>

            <div className="card opacity-60">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L5</div>
              <h4 className="font-semibold text-[var(--text-primary)]">VIBE Token</h4>
              <p className="text-sm text-[var(--text-muted)]">Economics layer (Coming Soon)</p>
            </div>

            <div className="card opacity-60">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L6</div>
              <h4 className="font-semibold text-[var(--text-primary)]">Spectrum Galactic</h4>
              <p className="text-sm text-[var(--text-muted)]">LEO satellites (Coming Soon)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Partner</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            We&apos;re looking for strategic investors who share our vision for
            decentralized infrastructure and distributed intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact OKB Ventures
            </a>
            <Link href="/roadmap" className="btn-secondary">
              View Roadmap
            </Link>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-8">
            For investment inquiries, please reach out through OKB Ventures.
          </p>
        </div>
      </section>
    </div>
  );
}
