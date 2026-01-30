import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
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

      {/* Pillars Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Pillars of Empowerment"
            subtitle="How we transform communities from dependent to independent"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Financial Literacy</h3>
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
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Collective Strength</h3>
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
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Permanent Freedom</h3>
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
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer text-foreground">
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
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer text-foreground">
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
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer text-foreground">
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
              <summary className="collapse-title font-serif font-semibold text-lg cursor-pointer text-foreground">
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
