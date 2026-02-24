import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StreamsSection } from "@/components/sections/StreamsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { collegeConfig } from "@/config/collegeConfig";

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>{collegeConfig.name} - {collegeConfig.tagline}</title>
      <meta name="description" content={`${collegeConfig.name} - ${collegeConfig.vision.slice(0, 150)}...`} />
      
      <HeroSection />
      <AboutPreview />
      <StreamsSection />
      <FacilitiesSection />
      <AnnouncementsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
