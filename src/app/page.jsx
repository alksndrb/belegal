import {
  Banner,
  HomeAbout,
  HomePractices,
  HomeSectionHeader,
} from "@/components/Home/homeComponents";
import { HomeLayout } from "@/components/Global/globalComponents";
export default function Home() {
  const corePractice = [
    { name: "Commercial Law", link: "/core-practice/commercial-law" },
    { name: "IT & AI Law", link: "/core-practice/it-and-ai-law" },
    { name: "Environment Law", link: "/core-practice/environmental-law" },
    { name: "All services", link: "/core-practice/" },
  ];
  return (
    <HomeLayout>
      <Banner>Law Firm</Banner>
      <HomeAbout>
        <HomeSectionHeader>Vision</HomeSectionHeader>
        BeLegal was founded with the mission of building a law office that
        provides a truly comprehensive scope of legal services in one place –
        ensuring that every client can find a reliable partner for all their
        legal needs.
        <br />
        <br />
        Our vision is to offer not only legal representation, but also long-term
        strategic guidance. We approach every case with the belief that law is
        not only about resolving disputes, but also about preventing them,
        protecting interests, and creating opportunities for growth.
        <br />
        <br />
        By adopting modern practices and drawing inspiration from international
        standards, BeLegal works to deliver practical, timely, and innovative
        solutions that align with the dynamics of today’s economy and global
        capital markets. We believe that trust, transparency, and accessibility
        are the foundation of a successful attorney-client relationship, and we
        are committed to cultivating that trust through professionalism,
        integrity, and continuous communication.
        <br />
        <br />
        Every client is unique, and our vision is to tailor our approach to fit
        specific needs—whether you are an individual, entrepreneur, or an
        international corporation. BeLegal is here to stand with you at every
        step, ensuring that your legal challenges are met with confidence,
        clarity, and expertise.
      </HomeAbout>

      <HomePractices corePractice={corePractice}>
        <HomeSectionHeader>Core Practice</HomeSectionHeader>
        At BeLegal, our strength lies in a wide spectrum of practice areas that
        reflect the diverse challenges our clients face. We are dedicated to
        delivering outstanding legal support by combining deep legal knowledge
        with practical business insight.
        <br />
        <br />
        Our core practice areas include corporate and commercial law, dispute
        resolution, real estate, labor law, intellectual property, tax law, and
        regulatory compliance. By covering such a broad range of disciplines, we
        enable our clients to resolve issues efficiently, without the need to
        search for multiple advisors.
        <br />
        <br />
        What sets us apart is our ability to adapt quickly to the evolving legal
        landscape. From supporting start-ups and small businesses to advising
        multinational corporations, we bring the same level of dedication,
        precision, and care to every matter.
        <br />
        <br />
        At BeLegal, core practice does not mean routine service – it means being
        at the heart of our clients’ success stories. Our role is to anticipate
        risks, unlock opportunities, and ensure that every decision you make is
        legally sound and strategically informed.
      </HomePractices>
    </HomeLayout>
  );
}
