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
    { name: "IT Law", link: "/core-practice/it-law" },
    { name: "Environment Law", link: "/core-practice/environmental-law" },
    { name: "All services", link: "/core-practice/" },
  ];
  return (
    <HomeLayout>
      <Banner>Law Firm</Banner>
      <HomeAbout>
        <HomeSectionHeader>Vision</HomeSectionHeader>BeLegal was founded with
        the idea to provide unique scope of legal services with the goal of
        providing services to its clients on the principle - all in one place.
        Our office works on an innovative approach to legal practice with the
        aim of providing its clients with constant availability, as well as
        professional and adequate legal assistance. Following the example of
        modern understanding of the world economy and capital market movements,
        our law office promotes a modern approach and relationship with clients,
        which is based on innovative understanding the activities of clients,
        protecting the interests of clients and mutual trust.
      </HomeAbout>
      <HomePractices corePractice={corePractice}>
        <HomeSectionHeader>Core Practice</HomeSectionHeader>
        At BeLegal, we specialize in a comprehensive range of legal services
        designed to meet the diverse needs of our clients. We are dedicated to
        delivering exceptional legal support to help you navigate complex legal
        challenges with confidence.
      </HomePractices>
    </HomeLayout>
  );
}
