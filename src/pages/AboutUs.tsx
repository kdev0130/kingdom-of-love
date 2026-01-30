import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroAbout from "@/assets/hero-about.jpg";

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="BORN IN THE FIELDS. SCALED FOR THE WORLD."
        subtitle="In the past, we operated in silence, proving that trust is earned through action, not noise."
        backgroundImage={heroAbout}
        size="medium"
      />

      {/* Origins Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Our Origins" titleColor="#9D5C0D" />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We didn't build this Kingdom in boardrooms; we built it in the fields with the
                farmers and on the waters with the fishermen. Through this work, we identified that
                the true barrier to prosperity was not a lack of money, but a lack of economic
                discipline.
              </p>

              <p className="text-lg text-[#9D5C0D] leading-relaxed font-medium mb-6">
                Today, we have evolved into Kingdom of Love International—a borderless nation where
                love and shared responsibility are the primary currencies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple truth: sustainable change comes not from handouts,
                but from empowerment. We witnessed firsthand how communities, when given the right
                tools and knowledge, could transform their circumstances and create lasting prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 250,000 Strong Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A NATION READY TO RISE
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              We are not a dream of the future; we are a reality of today. We are a pre-built
              community of 250,000 citizens who share a vision of an economy that serves the people.
            </p>
            <div className="text-6xl md:text-8xl font-sans font-bold text-accent mb-4">
              250,000+
            </div>
            <p className="text-lg opacity-80">
              Citizens united in purpose and vision
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-foreground">Love</h3>
              <p className="text-muted-foreground">
                At the heart of everything we do is unconditional love for humanity.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-foreground">Unity</h3>
              <p className="text-muted-foreground">
                When one grows, we all grow. Our strength lies in our togetherness.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-foreground">Discipline</h3>
              <p className="text-muted-foreground">
                True freedom comes through the discipline of economic understanding.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center card-hover">
              <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-foreground">Growth</h3>
              <p className="text-muted-foreground">
                We believe in sustainable, lasting growth that benefits all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="From humble beginnings to a global movement"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4" />
                </div>
                <div className="pb-12">
                  <h3 className="font-sans text-xl font-bold mb-2 text-foreground">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Started in the fields, working directly with farmers and fishermen to understand
                    the real barriers to prosperity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4" />
                </div>
                <div className="pb-12">
                  <h3 className="font-sans text-xl font-bold mb-2 text-foreground">The Discovery</h3>
                  <p className="text-muted-foreground">
                    Identified that economic discipline, not just money, was the key to lasting change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    3
                  </div>
                  <div className="w-0.5 h-full bg-border mt-4" />
                </div>
                <div className="pb-12">
                  <h3 className="font-sans text-xl font-bold mb-2 text-foreground">The Evolution</h3>
                  <p className="text-muted-foreground">
                    Transformed into Kingdom of Love International—a borderless nation of shared purpose.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    ∞
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-bold mb-2 text-foreground">The Future</h3>
                  <p className="text-muted-foreground">
                    Continuing to grow, empower, and ensure no one is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
