import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Pythia AI development roadmap - from local inference to planetary-scale distributed intelligence.",
};

const phases = [
  {
    phase: "Phase 1",
    name: "Local Topsi",
    status: "IN PROGRESS",
    timeline: "Q1 2026",
    description: "Single-device Active Inference engine with local model training and basic decision-making capabilities.",
    milestones: [
      { text: "Active Inference core implementation", done: true },
      { text: "Local model training pipeline", done: true },
      { text: "Task/Mining decision engine", done: false },
      { text: "Integration with Omega Router", done: false },
      { text: "Basic metrics dashboard", done: false },
    ]
  },
  {
    phase: "Phase 2",
    name: "Sync Topsi",
    status: "UPCOMING",
    timeline: "Q2 2026",
    description: "Multi-device synchronization enabling Pythia instances to share learnings while preserving privacy.",
    milestones: [
      { text: "Encrypted gradient sharing", done: false },
      { text: "CRDT-based state sync", done: false },
      { text: "Peer discovery protocol", done: false },
      { text: "Federated model aggregation", done: false },
      { text: "Network consensus layer", done: false },
    ]
  },
  {
    phase: "Phase 3",
    name: "Learning Topsi",
    status: "PLANNED",
    timeline: "Q3 2026",
    description: "Collective intelligence emergence through coordinated learning across the mesh network.",
    milestones: [
      { text: "Multi-tier gossip protocol", done: false },
      { text: "Differential privacy integration", done: false },
      { text: "Hierarchical model architecture", done: false },
      { text: "Cross-cluster optimization", done: false },
      { text: "VIBE token integration", done: false },
    ]
  },
  {
    phase: "Phase 4",
    name: "Pythia AI",
    status: "FUTURE",
    timeline: "Q4 2026",
    description: "Full planetary-scale topological super intelligence with satellite connectivity and global coordination.",
    milestones: [
      { text: "Spectrum Galactic integration", done: false },
      { text: "Global task marketplace", done: false },
      { text: "Automated treasury management", done: false },
      { text: "Third-party developer API", done: false },
      { text: "Governance automation", done: false },
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Development <span className="text-gradient-gold">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            From local inference to planetary-scale distributed intelligence.
            Track our progress as we build the future.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {/* Connection line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--dark-border)] hidden md:block" />
                )}

                <div className="grid md:grid-cols-[120px_1fr] gap-6">
                  {/* Phase indicator */}
                  <div className="hidden md:block">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                      ${phase.status === "IN PROGRESS"
                        ? "bg-[var(--gold)] text-[var(--dark-bg)]"
                        : "bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--text-muted)]"
                      }
                    `}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`
                    card
                    ${phase.status === "IN PROGRESS" ? "border-[var(--gold)] glow-gold" : ""}
                  `}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-[var(--text-muted)]">{phase.phase}</span>
                      <h3 className="text-2xl font-bold text-[var(--gold)]">{phase.name}</h3>
                      <span className={`
                        text-xs px-2 py-1 rounded-full font-medium
                        ${phase.status === "IN PROGRESS"
                          ? "bg-[var(--gold)]/20 text-[var(--gold)]"
                          : phase.status === "UPCOMING"
                          ? "bg-[var(--accent-blue)]/20 text-[var(--accent-blue)]"
                          : "bg-[var(--dark-surface)] text-[var(--text-muted)]"
                        }
                      `}>
                        {phase.status}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">{phase.timeline}</span>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">
                      {phase.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.milestones.map((milestone, i) => (
                        <div
                          key={i}
                          className={`
                            flex items-center gap-3 text-sm
                            ${milestone.done ? "text-[var(--accent-green)]" : "text-[var(--text-muted)]"}
                          `}
                        >
                          <span className="flex-shrink-0">
                            {milestone.done ? "&#10003;" : "&#9675;"}
                          </span>
                          <span className={milestone.done ? "line-through opacity-70" : ""}>
                            {milestone.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Focus</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re building the foundation for distributed intelligence, starting
              with robust local inference capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl mb-4">&#128187;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Core Engine</h3>
              <p className="text-[var(--text-secondary)]">
                Implementing the Active Inference decision loop with support for
                task execution and Bitcoin mining allocation.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">&#128279;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Hardware Integration</h3>
              <p className="text-[var(--text-secondary)]">
                Deep integration with Omega Router for real-time network state
                monitoring and compute resource management.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-4">&#128176;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Economic Model</h3>
              <p className="text-[var(--text-secondary)]">
                Designing the incentive structure that aligns individual node
                operators with collective network health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Timeline</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              OKB Ventures is deploying capital into the Sovereign Stack with
              Pythia AI as a priority investment target.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card border-l-4 border-l-[var(--gold)]">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="text-lg font-bold text-[var(--gold)]">Seed Round</span>
                <span className="text-sm text-[var(--text-muted)]">Now Open</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                Initial capital deployment for core development team and infrastructure.
                Focus on Phase 1 and Phase 2 milestones.
              </p>
            </div>

            <div className="card border-l-4 border-l-[var(--accent-blue)]">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="text-lg font-bold text-[var(--accent-blue)]">Series A</span>
                <span className="text-sm text-[var(--text-muted)]">Q3 2026</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                Scaling the network with additional node deployment, marketing,
                and developer ecosystem growth.
              </p>
            </div>

            <div className="card border-l-4 border-l-[var(--accent-purple)]">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="text-lg font-bold text-[var(--accent-purple)]">Token Launch</span>
                <span className="text-sm text-[var(--text-muted)]">Q4 2026</span>
              </div>
              <p className="text-[var(--text-secondary)]">
                VIBE token public launch with full economic integration across
                the Sovereign Stack ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Be part of building the next generation of distributed intelligence.
            Investment opportunities are available now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Explore Investment
            </Link>
            <a
              href="https://okb-ventures.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit OKB Ventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
