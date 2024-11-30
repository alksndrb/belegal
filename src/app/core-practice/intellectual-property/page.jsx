import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function IntellectualProperty() {
  return (
    <PageLayout>
      <PageHeader>Intellectual Property</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our Law Office provides expert assistance in the registration and
          protection of intellectual property rights, including patents,
          trademarks, industrial designs, and copyrights. We represent clients
          in intellectual property disputes, offer tailored legal opinions, and
          conduct thorough legal investigations to safeguard their rights.
          <br />
          <br />
          Our specialized services include:
          <ul class="list-disc pl-6">
            <li>
              Prior examination of registration requirements for trademarks,
              industrial designs, patents, and geographical indications.
            </li>
            <li>
              Filing and registration with the Intellectual Property Office.
            </li>
            <li>
              Copyright protection, ensuring your creative works are legally
              safeguarded.
            </li>
            <li>
              Patent and trademark registration, securing exclusive rights for
              your inventions and brands.
            </li>
            <li>
              Representation in intellectual property disputes before relevant
              authorities and courts.
            </li>
            <li>
              Country of origin labelling, ensuring compliance with geographical
              indication standards.
            </li>
            <li>
              Data protection, privacy, and confidentiality, helping businesses
              protect sensitive information.
            </li>
            <li>
              Drafting contracts tailored to intellectual property matters,
              including licensing, and confidentiality agreements.
            </li>
          </ul>
          <br />
          With a strategic and detail-oriented approach, we ensure our clients’
          intellectual property is effectively protected and managed, both
          locally and internationally.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
