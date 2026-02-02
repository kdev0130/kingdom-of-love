import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroHome from "@/assets/hero-home.jpg";

const KOLI = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="KOLI COIN"
        subtitle="The currency of the Kingdom. Building a self-sustaining digital economy for our global community."
        backgroundImage={heroHome}
        size="medium"
      />

      {/* The Tool of Abundance Section */}
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
              href="https://koli-coin.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 rounded-lg font-semibold bg-accent text-accent-foreground hover:brightness-110 transition-all duration-300"
            >
              Explore the KOLI Coin
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="WHAT IS KOLI?"
            subtitle="A utility token built with genuine purpose—to give people excluded from financial opportunities a real chance to improve their lives."
            titleColor="#E5890A"
          />

          <div className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="bg-muted p-8 rounded-lg" style={{ borderLeft: "4px solid #E5890A" }}>
              <p className="text-lg leading-relaxed" style={{ color: "#9D5C0D" }}>
                KOLI is a utility token we're building with one clear, heartfelt purpose: to give people who are often left out of financial opportunities a genuine chance to improve their lives. We created KOLI because we believe everyday individuals—especially those facing real economic hardship—deserve access to something that can grow in value through community belief and practical use, not just speculation.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg" style={{ borderLeft: "4px solid #E5890A" }}>
              <p className="text-lg leading-relaxed" style={{ color: "#9D5C0D" }}>
                The idea is straightforward yet powerful: make it affordable for anyone to hold $KOLI during our early phases at very low entry prices. As more people join, as merchants begin accepting KOLI for payments in stores, online shops, and even gas stations, and as the token finds real-world utility, its value has the potential to rise in a way that directly benefits those who held from the beginning. For many, that could mean meaningful financial progress—something we see as life-changing when approached responsibly and inclusively.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg" style={{ borderLeft: "4px solid #E5890A" }}>
              <p className="text-lg leading-relaxed" style={{ color: "#9D5C0D" }}>
                This isn't about launching another coin for quick flips. We're focused on creating an actual economy around KOLI: peer-to-peer transactions that remove expensive middlemen, lower costs for users who pay with the token, staking rewards that reward long-term commitment, and planned burns to support scarcity as adoption grows. With over 250,000 people already waiting to participate, the response has been humbling and confirms what we've always believed—no one should be excluded from the path to financial freedom.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg" style={{ borderLeft: "4px solid #E5890A" }}>
              <p className="text-lg leading-relaxed" style={{ color: "#9D5C0D" }}>
                By holding, using, and supporting KOLI together as a community, we're working toward a fairer system where ordinary people can actively participate in and benefit from real economic progress. We're moving forward thoughtfully, transparently, and with genuine impact at the center of everything we do. This is more than a project; it's a commitment to building something that can help lift people up, one step at a time.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-xl font-semibold" style={{ color: "#E5890A" }}>
                Stay with us—we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KOLI;
