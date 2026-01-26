import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Pythia AI orchestrates distributed compute across the Alpha Protocol Network using Active Inference and economic optimization.",
};

export default function HowItWorks() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient-gold">Pythia</span> Works
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            A topological super intelligence that optimizes compute allocation
            in real-time for maximum collective benefit.
          </p>
        </div>
      </section>

      {/* The Decision Engine */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Decision Engine</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every moment, Pythia evaluates network conditions and decides the optimal
              allocation of compute resources across the mesh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">1</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-3">Sense</h3>
              <p className="text-[var(--text-secondary)]">
                Pythia continuously monitors network state: task queue depth, Bitcoin difficulty,
                energy costs, and node availability across all tiers.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">2</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-3">Predict</h3>
              <p className="text-[var(--text-secondary)]">
                Using Active Inference, Pythia generates predictions about future states
                and calculates expected value for each allocation strategy.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">3</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-3">Act</h3>
              <p className="text-[var(--text-secondary)]">
                The action that minimizes free energy (surprise) is selected.
                Compute is allocated to tasks or Bitcoin mining based on optimal returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Inference */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-gold">Active Inference</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Built on Karl Friston&apos;s Free Energy Principle, Active Inference is a framework
                from computational neuroscience that describes how intelligent agents
                minimize surprise in their environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#9679;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Generative Model:</strong> Pythia maintains
                    a model of how the network behaves and uses it to predict outcomes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#9679;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Belief Updating:</strong> As new data arrives,
                    beliefs are updated using Bayesian inference.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#9679;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Policy Selection:</strong> Actions are chosen
                    to minimize expected free energy (surprise + uncertainty).
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <pre className="text-sm text-[var(--text-secondary)] overflow-x-auto">
{`// Simplified Active Inference Loop
while network.is_running() {
  // 1. Observe current state
  state = sense_network();

  // 2. Update beliefs
  beliefs = update_beliefs(
    prior_beliefs,
    state
  );

  // 3. Evaluate policies
  policies = [
    allocate_to_tasks(beliefs),
    allocate_to_mining(beliefs),
    hybrid_allocation(beliefs)
  ];

  // 4. Select action minimizing
  //    expected free energy
  action = argmin(
    policies.map(p =>
      expected_free_energy(p, beliefs)
    )
  );

  // 5. Execute and learn
  execute(action);
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Optimization */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Economic Optimization</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Pythia continuously evaluates whether to execute user tasks or mine Bitcoin,
              always choosing the option that maximizes value for the collective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card border-t-4 border-t-[var(--accent-green)]">
              <h3 className="text-xl font-semibold text-[var(--accent-green)] mb-4">Task Execution Mode</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                When the task queue is full and prices are favorable:
              </p>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>&#8226; AI inference workloads</li>
                <li>&#8226; Data processing jobs</li>
                <li>&#8226; Model training (federated)</li>
                <li>&#8226; Custom compute tasks</li>
              </ul>
              <div className="mt-6 p-4 bg-[var(--dark-surface)] rounded-lg">
                <div className="text-sm text-[var(--text-muted)]">Revenue Distribution</div>
                <div className="text-lg text-[var(--gold)]">Task Fees &#8594; VIBE Rewards</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--accent-purple)]">
              <h3 className="text-xl font-semibold text-[var(--accent-purple)] mb-4">Bitcoin Mining Mode</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                When task demand is low or mining is more profitable:
              </p>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li>&#8226; Pooled mining operations</li>
                <li>&#8226; Stratum v2 protocol</li>
                <li>&#8226; Efficient power management</li>
                <li>&#8226; Heat recycling where possible</li>
              </ul>
              <div className="mt-6 p-4 bg-[var(--dark-surface)] rounded-lg">
                <div className="text-sm text-[var(--text-muted)]">Revenue Distribution</div>
                <div className="text-lg text-[var(--gold)]">BTC &#8594; Treasury &#8594; Buybacks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Federated Learning */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                      <span className="text-[var(--gold)]">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">Local Training</div>
                      <div className="text-sm text-[var(--text-muted)]">Data stays on your device</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                      <span className="text-[var(--gold)]">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">Gradient Encryption</div>
                      <div className="text-sm text-[var(--text-muted)]">Only encrypted updates shared</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                      <span className="text-[var(--gold)]">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">Secure Aggregation</div>
                      <div className="text-sm text-[var(--text-muted)]">Pythia combines learnings</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                      <span className="text-[var(--gold)]">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)]">Model Distribution</div>
                      <div className="text-sm text-[var(--text-muted)]">Improved model sent to all</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-gold">Federated Learning</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Pythia learns from the entire network without ever seeing raw data.
                Each device trains locally; only encrypted gradients are shared.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    Raw data never leaves your device
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    Differential privacy protects individual contributions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    The collective model improves for everyone
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore the <span className="text-gradient-gold">Technology Stack</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Dive deeper into the cryptographic protocols, network topology, and
            system architecture that powers Pythia AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technology" className="btn-primary">
              View Technology
            </Link>
            <Link href="/roadmap" className="btn-secondary">
              See Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
