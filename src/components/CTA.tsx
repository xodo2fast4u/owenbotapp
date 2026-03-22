import { MessageSquare, List, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-bg-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-primary">
          Get Started
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Main Hero Card */}
          <div className="sm:col-span-2 rounded-2xl p-8 flex flex-col justify-between bg-bg shadow-m border border-border">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-text">
              Ready to Get
              <br />
              <span className="text-primary">Started?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed max-w-md text-text-muted">
              Add Owen to your WhatsApp in under a minute. Enter your number,
              get the pairing code, and start using 100+ commands instantly.
            </p>
          </div>

          {/* Commands Stat Card - FIX: text-primary-foreground */}
          <div className="rounded-2xl p-8 flex flex-col justify-between bg-primary shadow-m">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70">
              Commands
            </span>
            <div>
              <p className="text-5xl leading-none font-black text-primary-foreground">
                100+
              </p>
              <p className="text-sm mt-1 text-primary-foreground/70">
                available instantly
              </p>
            </div>
          </div>

          {/* Step 1 Card */}
          <div className="rounded-2xl p-8 flex flex-col justify-between bg-bg shadow-m border border-border">
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-primary">
                {/* FIX: text-primary-foreground for icon inside primary bg */}
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-text-muted">
                Step 1
              </p>
              <p className="font-semibold text-text">Get your pairing code</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-6 w-full shadow-s hover:shadow-m border-border hover:border-border-hover text-text-muted hover:text-text transition-all duration-200"
            >
              <a
                href="https://owen-production-28fc.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Connect WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-2xl p-8 flex flex-col justify-between bg-bg shadow-m border border-border">
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-bg-light shadow-s border border-border">
                <List className="w-5 h-5 text-text-muted" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-text-muted">
                Step 2
              </p>
              <p className="font-semibold text-text">Browse all commands</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-6 w-full shadow-s hover:shadow-m"
            >
              <a href="#commands">View All Commands</a>
            </Button>
          </div>

          <div className="rounded-2xl p-8 flex flex-col justify-center items-start bg-bg-light shadow-s border border-border">
            <p className="text-4xl font-black leading-none text-text">&lt; 1</p>
            <p className="text-lg font-semibold mt-1 text-primary flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" />
              minute setup
            </p>
            <p className="text-xs mt-3 leading-relaxed text-text-muted">
              No app install required. Works entirely inside WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
