import MarketingShell from "@/components/marketing/MarketingShell";
import PageHero from "@/components/marketing/PageHero";
import { Icon, icons } from "@/components/marketing/shared";

export default function ContactPage() {
  return (
    <MarketingShell>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-40 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Info & Cards */}
          <div className="flex flex-col gap-16">
            <div>
              <p className="font-mono text-sm text-ng-orange tracking-widest uppercase mb-8 relative z-10">
                Contact
              </p>
              <h1 className="font-display font-medium leading-[1.1] tracking-tight text-5xl sm:text-6xl md:text-7xl max-w-xl mb-6">
                Let's upgrade your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ng-orange to-amber-500">
                  security.
                </span>
              </h1>
              <p className="font-body text-ng-secondary text-lg md:text-xl leading-relaxed max-w-md">
                Whether you have technical questions, need a custom deployment plan, or just want to see a live demo, our team is ready to help.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[2rem] border border-ng-border bg-ng-panel p-8 shadow-sm flex flex-col items-start gap-4 hover:border-ng-orange/50 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center text-ng-orange group-hover:scale-110 transition-transform">
                  <Icon path={icons.mail} size={24} />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg mb-1">Email us</h3>
                  <p className="text-sm text-ng-secondary mb-3">For general inquiries</p>
                  <a href="mailto:hello@nestguard.live" className="text-sm font-semibold hover:text-ng-orange transition-colors">hello@nestguard.live</a>
                </div>
              </div>
              
              <div className="rounded-[2rem] border border-ng-border bg-ng-panel p-8 shadow-sm flex flex-col items-start gap-4 hover:border-ng-orange/50 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-ng-elevated border border-ng-border flex items-center justify-center text-ng-orange group-hover:scale-110 transition-transform">
                  <Icon path={icons.shield} size={24} />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg mb-1">Support</h3>
                  <p className="text-sm text-ng-secondary mb-3">For existing clients</p>
                  <a href="mailto:support@nestguard.live" className="text-sm font-semibold hover:text-ng-orange transition-colors">support@nestguard.live</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ng-orange/5 blur-[120px] rounded-full pointer-events-none" />
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="relative z-10 rounded-[2.5rem] border border-ng-border bg-ng-panel/50 backdrop-blur-2xl p-8 sm:p-12 flex flex-col gap-6 shadow-2xl">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-sm font-medium mb-2.5 text-ng-secondary">Full Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-ng-border bg-ng-elevated/50 px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange focus:bg-ng-elevated transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block font-display text-sm font-medium mb-2.5 text-ng-secondary">Work Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-ng-border bg-ng-elevated/50 px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange focus:bg-ng-elevated transition-all shadow-inner"
                    placeholder="john@university.edu"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display text-sm font-medium mb-2.5 text-ng-secondary">Institution Name</label>
                <input
                  name="institution"
                  className="w-full rounded-2xl border border-ng-border bg-ng-elevated/50 px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange focus:bg-ng-elevated transition-all shadow-inner"
                  placeholder="e.g. University of Lahore"
                />
              </div>
              
              <div>
                <label className="block font-display text-sm font-medium mb-2.5 text-ng-secondary">How can we help?</label>
                <textarea
                  name="message"
                  required
                  className="w-full min-h-[160px] rounded-2xl border border-ng-border bg-ng-elevated/50 px-5 py-4 text-base text-ng-text placeholder:text-ng-muted focus:outline-none focus:border-ng-orange focus:bg-ng-elevated transition-all resize-none shadow-inner"
                  placeholder="Tell us about your campus setup and requirements..."
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-ng-orange text-white font-display font-semibold text-base transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                >
                  Send Message
                </button>
                <p className="font-mono text-center text-ng-muted text-[11px] uppercase tracking-widest mt-6">
                  We respond within one business day
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
