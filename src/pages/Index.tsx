import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Tooltip } from "@/components/ui/tooltip-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
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
            titleColor="#9D5C0D"
          />

          <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#9D5C0D" }}>
              <div className="text-justify">
                In the past, many were taught to wait for relief. We teach our people to{" "}
                <Tooltip
                  containerClassName="text-[#9D5C0D]"
                  content="Creating relief means developing sustainable systems and empowering communities to build their own prosperity."
                >
                  <span className="font-bold cursor-pointer">create it</span>
                </Tooltip>
                .
              </div>
              <div className="font-medium text-justify">
                We provide the{" "}
                <Tooltip
                  containerClassName="text-[#9D5C0D]"
                  content="The fishing rod represents knowledge, skills, and systems—the tools that enable sustainable, long-term prosperity."
                >
                  <span className="font-bold cursor-pointer">"fishing rod" of the modern age</span>
                </Tooltip>
                . By sharing the discipline of economic sustainability, we ensure our citizens are no longer{" "}
                <Tooltip
                  containerClassName="text-[#9D5C0D]"
                  content="Victims of limitation refers to those trapped in cycles of dependence, lacking the knowledge to build their own wealth."
                >
                  <span className="font-bold cursor-pointer">victims of limitation</span>
                </Tooltip>
                .
              </div>
              <div className="text-justify">
                When a community understands how to hold, use, and grow its own assets, it becomes{" "}
                <Tooltip
                  containerClassName="text-[#9D5C0D]"
                  content="An unshakeable community is one with economic knowledge, resilience, and the ability to sustain itself independently."
                >
                  <span className="font-bold cursor-pointer">unshakeable</span>
                </Tooltip>
                .
              </div>
              <Link to="/what-we-do" className="inline-block mt-4 px-8 py-4 rounded-lg font-semibold text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" style={{ backgroundColor: "#9D5C0D" }}>
                Learn More →
              </Link>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-sans text-2xl font-bold mb-6 text-center" style={{ color: "#9D5C0D" }}>The Comparison</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flip-card h-40">
                    <div className="flip-card-inner">
                      <div className="flip-card-front text-center p-6 rounded-xl bg-muted">
                        <div className="text-4xl mb-3">🐟</div>
                        <h4 className="font-semibold text-foreground">Temporary Fish</h4>
                      </div>
                      <div className="flip-card-back text-center p-6 rounded-xl bg-muted">
                        <p className="text-sm text-muted-foreground font-semibold">
                          Relief for a day, dependence forever
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card h-40">
                    <div className="flip-card-inner">
                      <div className="flip-card-front text-center p-6 rounded-xl bg-gradient-gold text-foreground">
                        <div className="text-4xl mb-3">🎣</div>
                        <h4 className="font-semibold">Golden Fishing Rod</h4>
                      </div>
                      <div className="flip-card-back text-center p-6 rounded-xl bg-gradient-gold text-foreground">
                        <p className="text-sm font-semibold">
                          Skills for a lifetime, freedom forever
                        </p>
                      </div>
                    </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center rounded-2xl p-8">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: '#FAFAFA' }}>
                250K+
              </div>
              <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.9 }}>Community Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: '#FAFAFA' }}>
                50+
              </div>
              <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.9 }}>Countries Reached</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: '#FAFAFA' }}>
                100%
              </div>
              <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.9 }}>Community Driven</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2" style={{ color: '#FAFAFA' }}>
                ∞
              </div>
              <p className="text-sm" style={{ color: '#FAFAFA', opacity: 0.9 }}>Love & Abundance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Pillars of Empowerment"
            subtitle="Our foundation is built on three core principles that drive sustainable change."
          />

          <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-12" style={{ backgroundColor: '#FAFAFA' }}>
            <InfiniteMovingCards
              items={pillars}
              direction="right"
              speed="fast"
            />
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

const pillars = [
  {
    quote: "Simplified teachings on digital assets, ensuring complex technology is accessible to every worker, from the fisherman on his boat to the farmer in his field. We break down barriers to understanding and empower our community with the knowledge they need to thrive.",
    name: "Financial Literacy",
    title: "Knowledge is Power",
    icon: "book-1",
  },
  {
    quote: "When one grows, we all grow. We use our community's numbers to create a marketplace where the \"small\" become \"mighty.\" Together, we leverage our collective strength to build opportunities that benefit every member of our Kingdom.",
    name: "Collective Strength",
    title: "Unity in Action",
    icon: "user-4",
  },
  {
    quote: "Moving from temporary relief to permanent financial freedom. Our goal is not just to help—but to liberate. We provide the tools and systems that enable lasting prosperity, ensuring no one is left behind.",
    name: "Permanent Freedom",
    title: "Sustainable Transformation",
    icon: "rocket-5",
  },
];

export default Index;
