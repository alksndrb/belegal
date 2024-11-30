import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function SportsLaw() {
  return (
    <PageLayout>
      <PageHeader>Sports Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides specialized legal services for the sports
          industry, assisting with the establishment and operation of sports
          associations and clubs, as well as offering ongoing legal support to
          athletes. We have extensive experience in handling all aspects of
          sports law, ensuring that both organizations and individuals comply
          with relevant regulations and protect their legal rights.
          <br />
          <br />
          Our services include:
          <ul class="list-disc pl-6">
            <li>
              Establishing sports associations and clubs, providing guidance on
              legal structures, registration, and governance.
            </li>
            <li>
              Legal representation for established sports associations and
              clubs, ensuring compliance with national and international
              regulations.
            </li>
          </ul>
          <br />
          We also offer comprehensive legal support for athletes, particularly
          in matters such as:
          <ul class="list-disc pl-6">
            <li>
              Contract negotiations and drafting, ensuring fair terms and legal
              protection for athletes.
            </li>
            <li>
              Providing legal advice on endorsement deals, sponsorships, and
              other commercial agreements.
            </li>
          </ul>
          <br />
          In addition, we specialize in out-of-court dispute resolution, helping
          athletes and clubs resolve conflicts through mediation or other
          alternative methods. However, if these efforts fail, we are fully
          equipped to provide strong representation in court or arbitration to
          ensure our clients’ interests are protected.
          <br />
          <br />
          We particularly emphasize our expertise in assisting athletes in the
          collection of unpaid claims from sports clubs, including unpaid
          salaries, bonuses, or other contractual obligations. Our office works
          diligently to ensure athletes receive the compensation they are owed,
          using both negotiation and legal action as needed.
          <br />
          <br />
          With our in-depth knowledge of sports law, we are committed to
          ensuring that our clients, whether athletes, clubs, or
          associations—can focus on their performance while we handle the legal
          complexities.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
