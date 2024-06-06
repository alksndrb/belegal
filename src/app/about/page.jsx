import {
  AboutCard,
  AboutGrid,
  AboutInfoText,
  AboutPageHeader2,
} from "@/components/About/aboutComponents";
import {
  Bullseye,
  ChartLine,
  Lightbulb,
  Seedling,
  Users,
  UsersCog,
} from "@/components/Assets/icons";
import {
  HorizontalLine,
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";

export default function About() {
  return (
    <>
      <PageLayout>
        <PageHeader>About Us</PageHeader>
        <PageText>
          BeLegal was founded with the principle of offering a unique scope of
          legal services, aiming to provide clients with everything they need in
          one place. Our goal is to streamline the legal process by offering
          comprehensive, integrated solutions tailored to each client&apos;s
          specific needs. By combining a diverse range of expertise under one
          roof, we ensure that our clients receive the most effective and
          efficient legal support available.
        </PageText>
        <AboutGrid>
          <AboutCard icon={Bullseye} name="Mission">
            At BeLegal, our mission is to provide comprehensive legal services
            under one roof, ensuring our clients receive expert assistance
            tailored to their unique needs. We are committed to delivering
            constant availability, professional excellence, and innovative
            solutions to protect and advance our clients&apos; interests.
          </AboutCard>
          <AboutCard icon={Lightbulb} name="Vision">
            We envision BeLegal as a pioneering force in the legal field,
            continuously adapting to the evolving global economy and
            technological advancements. Our goal is to build lasting
            relationships based on trust, understanding, and mutual respect,
            becoming a trusted partner for our clients&apos; legal needs.
          </AboutCard>
        </AboutGrid>
        <AboutPageHeader2>Our Jurney</AboutPageHeader2>
        <AboutInfoText icon={Seedling}>
          The journey of BeLegal began with a vision to create a law firm that
          goes beyond traditional legal services. We recognized the need for a
          more integrated approach to legal practice, one that combines deep
          legal expertise with an understanding of the evolving business and
          technological landscape. With this vision in mind, BeLegal was
          established to serve clients with a holistic approach to their legal
          needs.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={ChartLine}>
          From our humble beginnings, BeLegal has grown significantly, driven by
          our commitment to innovation and excellence. We have embraced modern
          technologies and methodologies to enhance our service delivery,
          ensuring that our clients receive the most efficient and effective
          legal solutions. Our innovative approach includes leveraging digital
          tools for better client communication, case management, and legal
          research.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={Users}>
          One of our core strengths is our diverse team of legal professionals.
          Each member of our team brings a unique set of skills and experiences,
          allowing us to offer specialized services across various areas of law.
          Our team is dedicated to continuous learning and professional
          development, ensuring that we stay ahead of industry trends and legal
          advancements to provide the best possible service to our clients.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={UsersCog}>
          We believe in the power of collaboration and teamwork. That&apos;s why
          we partner with top experts from various fields to deliver
          comprehensive and effective legal solutions. By leveraging our
          collective expertise and resources, we are able to offer our clients
          innovative strategies and unparalleled support. Our collaborative
          approach ensures that our clients receive the highest level of service
          and representation.
        </AboutInfoText>
        <br />
      </PageLayout>
    </>
  );
}
