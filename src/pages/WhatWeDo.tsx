import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroMission from "@/assets/hero-mission.jpg";

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="THE KINGDOM PROTOCOL"
        subtitle="Protecting the future through shared discipline and community-sustained economics."
        backgroundImage={heroMission}
        size="medium"
      />

      {/* Economic Discipline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="PROTECTING THE FUTURE THROUGH SHARED DISCIPLINE"
            />

            <div className="mt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We educate our citizens on the right teachings of how a community-sustained economy
                works. This is about the discipline of holding for the future—viewing our collective
                assets as a shield that resists inflation and market volatility.
              </p>

              <p className="text-lg text-foreground leading-relaxed font-medium">
                When a community understands how to hold, use, and grow its own assets, it becomes
                unshakeable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KOLI Engine Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              THE TOOL OF ABUNDANCE
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8 max-w-3xl mx-auto">
              To achieve true financial freedom, the Kingdom requires a medium of exchange that is
              fast, secure, and inclusive. We have established KOLI (Kingdom of Love International)—the
              official digital asset of our community.
            </p>

            <div className="bg-background/10 rounded-2xl p-8 mt-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-accent">The Purpose</h3>
              <p className="text-lg opacity-90">
                $KOLI allows our farmers and fishermen to bypass traditional banking barriers and trade
                directly with the world, keeping the full value of their harvest in their own hands.
              </p>
            </div>

            <a
              href="#"
              className="inline-block mt-8 px-8 py-4 rounded-lg font-semibold bg-accent text-accent-foreground hover:brightness-110 transition-all duration-300"
            >
              Explore the KOLI Coin
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Pillars of Empowerment"
            subtitle="How we transform communities from dependent to independent"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Financial Literacy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Simplified teachings on digital assets, ensuring complex technology is accessible to
                every worker, from the fisherman on his boat to the farmer in his field.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Digital asset education
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Wallet management training
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Market understanding
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Collective Strength</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When one grows, we all grow. We use our community's numbers to create a marketplace
                where the "small" become "mighty."
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Community marketplace
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Cooperative trading
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Shared resources
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Permanent Freedom</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal: Moving from temporary relief to Permanent Financial Freedom. Not just
                help—but true liberation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Self-sustaining economy
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Generational wealth
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Economic independence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Learn more about how we operate"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            <details className="collapse bg-card border border-border rounded-xl" name="faq" open>
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer">
                How do I join the Kingdom?
              </summary>
              <div className="collapse-content text-muted-foreground">
                <p>
                  Joining the Kingdom is simple. Click the "Join the Kingdom" button on our homepage
                  and follow the registration process. You'll become part of our 250,000+ community
                  of believers committed to building a self-sustaining economy.
                </p>
              </div>
            </details>

            <details className="collapse bg-card border border-border rounded-xl" name="faq">
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer">
                What is the KOLI Coin?
              </summary>
              <div className="collapse-content text-muted-foreground">
                <p>
                  KOLI (Kingdom of Love International) is our official digital asset. It allows our
                  members to trade directly with the world, bypassing traditional banking barriers
                  and keeping the full value of their work in their own hands.
                </p>
              </div>
            </details>

            <details className="collapse bg-card border border-border rounded-xl" name="faq">
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer">
                How are donations used?
              </summary>
              <div className="collapse-content text-muted-foreground">
                <p>
                  Every donation goes directly into expanding our reach to underserved communities,
                  providing the tools and teachings necessary to ensure No One is Left Behind. We
                  focus on education, infrastructure, and community development.
                </p>
              </div>
            </details>

            <details className="collapse bg-card border border-border rounded-xl" name="faq">
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer">
                Can I volunteer with the Kingdom?
              </summary>
              <div className="collapse-content text-muted-foreground">
                <p>
                  Absolutely! We welcome volunteers who share our vision. Whether you can contribute
                  skills, time, or expertise, there's a place for you in the Kingdom. Contact us
                  through our social media channels to learn about opportunities.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Join the Movement?"
            subtitle="Become part of a community that's changing the world, one family at a time."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/donate" className="btn-kingdom">
              Donate Now
            </Link>
            <Link to="/about" className="btn-kingdom-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
