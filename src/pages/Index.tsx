import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroHome from "@/assets/hero-home.jpg";
import heroMission from "@/assets/hero-mission.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="A KINGDOM WHERE NO ONE IS LEFT BEHIND."
        subtitle="Born in silence and rooted in service. We are a global sanctuary for 250,000+ believers, uniting digital innovation with human necessity to build a lasting, self-sustaining economy."
        primaryCta={{ text: "Join the Kingdom", link: "/donate" }}
        secondaryCta={{ text: "Our Legacy", link: "/about" }}
        backgroundImage={heroHome}
        size="full"
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="WE DON'T JUST GIVE FISH. WE TEACH THE DISCIPLINE."
            subtitle="Conventional aid provides relief for a day but maintains dependence—leaving people behind once the resources run out."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the past, many were taught to wait for relief. We teach our people to create it.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-medium">
                We provide the "fishing rod" of the modern age. By sharing the discipline of
                economic sustainability, we ensure our citizens are no longer victims of limitation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When a community understands how to hold, use, and grow its own assets, it becomes
                unshakeable.
              </p>
              <Link to="/what-we-do" className="btn-kingdom inline-block mt-4">
                Learn More
              </Link>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-serif text-2xl font-bold mb-6 text-center">The Comparison</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-xl bg-muted">
                    <div className="text-4xl mb-3">🐟</div>
                    <h4 className="font-semibold mb-2 text-foreground">Temporary Fish</h4>
                    <p className="text-sm text-muted-foreground">
                      Relief for a day, dependence forever
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-gradient-gold text-foreground">
                    <div className="text-4xl mb-3">🎣</div>
                    <h4 className="font-semibold mb-2">Golden Fishing Rod</h4>
                    <p className="text-sm opacity-80">
                      Skills for a lifetime, freedom forever
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                250K+
              </div>
              <p className="text-sm opacity-80">Community Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                50+
              </div>
              <p className="text-sm opacity-80">Countries Reached</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                100%
              </div>
              <p className="text-sm opacity-80">Community Driven</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                ∞
              </div>
              <p className="text-sm opacity-80">Love & Abundance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Pillars of Empowerment"
            subtitle="Our foundation is built on three core principles that drive sustainable change."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Financial Literacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simplified teachings on digital assets, ensuring complex technology is accessible
                to every worker, from the fisherman on his boat to the farmer in his field.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Collective Strength</h3>
              <p className="text-muted-foreground leading-relaxed">
                When one grows, we all grow. We use our community's numbers to create a
                marketplace where the "small" become "mighty."
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Permanent Freedom</h3>
              <p className="text-muted-foreground leading-relaxed">
                Moving from temporary relief to permanent financial freedom. Our goal is not
                just to help—but to liberate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Image Section */}
      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroMission})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            A Nation Ready to Rise
          </h2>
          <p className="text-xl text-background/90 max-w-3xl mx-auto mb-8">
            We are not a dream of the future; we are a reality of today. We are a pre-built
            community of 250,000 citizens who share a vision of an economy that serves the people.
          </p>
          <Link to="/about" className="btn-kingdom">
            Learn Our Story
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Plant a Seed of Abundance"
            subtitle="Every contribution is a seed planted in the soil of a new economy. Your support expands our reach to underserved communities."
          />
          <Link to="/donate" className="btn-kingdom inline-block mt-8">
            Donate Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
