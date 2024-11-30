import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function ItAndAILaw() {
  return (
    <PageLayout>
      <PageHeader>IT & AI LAW</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides comprehensive legal support for internet users
          and businesses engaged in online activities. We offer expert advice in
          areas such as e-commerce, data privacy protection, copyright issues on
          the internet, and other technology-related legal matters.
          <br />
          <br />
          We also specialize in Blockchain technology and cryptocurrencies,
          offering the following services:
          <ul class="list-disc pl-6">
            <li>Legal advice on Initial Coin Offerings (ICOs).</li>
            <li>
              Legal opinions on the compliance of cryptocurrencies and ICOs with
              the regulations of the Republic of Serbia.
            </li>
            <li>
              Guidance on entering the Serbian market for cryptocurrency
              businesses, including opening exchange offices for
              cryptocurrencies.
            </li>
          </ul>
          <br />
          In addition, our AI (artificial intelligence) team provides legal
          assistance to help clients navigate the complex legal, ethical, and
          regulatory challenges surrounding the development and implementation
          of AI technologies. We offer strategic counsel on ensuring compliance
          with existing laws and regulations while fostering innovation in this
          rapidly evolving field.
          <br />
          <br />
          Our multidisciplinary team is equipped to handle all legal aspects
          related to IT law, digital technologies, and AI, ensuring that our
          clients remain compliant, competitive, and protected in an
          increasingly digital world.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
