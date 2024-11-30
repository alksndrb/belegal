import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RealEstateAndConstruction() {
  return (
    <PageLayout>
      <PageHeader>Real Estate and Construction</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides comprehensive legal services in the real
          estate and construction sectors. We conduct detailed legal analyses of
          property-related documents, ensuring that our clients&apos; interests
          are safeguarded in all transactions and investments.
          <br />
          <br />
          Our team plays an active role in negotiating and preparing all types
          of contracts for real estate, including pre-sale agreements, purchase
          agreements, lease agreements, and other property-related arrangements.
          <br />
          <br />
          In addition, our specialized team offers expert legal support for
          public-private partnerships (PPPs) and concessions throughout the
          entire process. This includes:
          <br />
          <br />
          <ul class="list-disc pl-6">
            <li>Representing clients before administrative authorities.</li>
            <li>
              Drafting contracts tailored to the specific partnership or
              concession.
            </li>
            <li>
              Actively participating in negotiations to ensure the successful
              realization of public-private partnership projects.
            </li>
          </ul>
          <br />
          With a proactive and detail-oriented approach, we help our clients
          navigate the complexities of real estate and construction law with
          confidence.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
