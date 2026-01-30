import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import heroDonate from "@/assets/hero-donate.jpg";

const DonateNow = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    if (customAmount) return parseFloat(customAmount) || 0;
    return selectedAmount || 0;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="PLANT A SEED OF ABUNDANCE"
        subtitle="Every contribution to the Kingdom is a seed planted in the soil of a new economy."
        backgroundImage={heroDonate}
        size="medium"
      />

      {/* Donation Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Side - Info */}
              <div className="lg:col-span-2">
                <SectionHeading
                  title="Fuel the Movement"
                  centered={false}
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your support goes directly into expanding our reach to underserved communities,
                  providing the tools and teachings necessary to ensure No One is Left Behind.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🌾</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education Programs</h4>
                      <p className="text-sm text-muted-foreground">
                        Financial literacy and digital asset training
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏗️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">
                        Building community resources and tools
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Global Outreach</h4>
                      <p className="text-sm text-muted-foreground">
                        Expanding to underserved communities worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <h3 className="font-serif text-2xl font-bold mb-6">Make a Donation</h3>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          disabled
                          onClick={() => handleAmountSelect(amount)}
                          className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 opacity-50 cursor-not-allowed ${
                            selectedAmount === amount
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                        $
                      </span>
                      <input
                        type="number"
                        disabled
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all opacity-50 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        disabled
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all opacity-50 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        disabled
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all opacity-50 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Donation Amount</span>
                      <span className="font-serif text-2xl font-bold text-foreground">
                        ${getCurrentAmount().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button disabled className="w-full btn-kingdom text-center opacity-50 cursor-not-allowed">
                    Complete Donation
                  </button>

                  <p className="text-sm text-center text-secondary font-medium mt-4">
                    💫 Donations coming soon! KOLI is currently in progress.
                  </p>

                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Your donation is secure and encrypted. Thank you for your generosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Your Impact
            </h2>
            <p className="text-xl opacity-90">
              See how your donation makes a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">$25</div>
              <p className="opacity-90">
                Provides financial literacy materials for one family
              </p>
            </div>
            <div className="bg-background/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">$100</div>
              <p className="opacity-90">
                Funds a community workshop on digital asset management
              </p>
            </div>
            <div className="bg-background/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">$500</div>
              <p className="opacity-90">
                Enables KOLI wallet setup for an entire village
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Campaign Progress"
            subtitle="Together we're making incredible strides"
          />

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-3xl font-serif font-bold text-foreground">$127,450</span>
                  <span className="text-muted-foreground ml-2">raised</span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Goal: </span>
                  <span className="font-semibold text-foreground">$250,000</span>
                </div>
              </div>

              <progress
                className="progress progress-secondary w-full h-4"
                value="51"
                max="100"
              />

              <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                <span>51% Complete</span>
                <span>1,847 Donors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card card-side bg-card shadow-soft border border-border">
              <figure className="w-1/3">
                <img
                  src="/src/assets/ramon real.png"
                  alt="Ramon, Community Member"
                  className="h-full object-cover"
                />
              </figure>
              <div className="card-body w-2/3 flex flex-col justify-center">
                <div className="text-4xl mb-4">❝</div>
                <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-4">
                  When I joined the Kingdom, I was just a fisherman hoping for better days. Today, I
                  understand finance, I trade globally, and my family's future is secure. This is what
                  the Kingdom does—it transforms.
                </blockquote>
                <cite className="text-muted-foreground not-italic font-medium">
                  — Ramon, Community Member since 2022
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonateNow;
