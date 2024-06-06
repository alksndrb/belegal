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
          We assist clients in registration of their patents and trademarks,
          designs and copyrights infringements, through representation and
          preparation of legal opinions and legal investigations. Our services
          in particular include prior examination of requirements for
          registration of trade marks, design, patents, geographical
          indications, registration with the Intellectual Property Office.
          <br />
          <br />
          Our services include:
          <ul className="list-disc list-inside">
            <li>Copyright protection</li>
            <li>Patent and trademark registration</li>
            <li>Representation before the competent in IP disputes</li>
            <li>Country of origin labelling</li>
            <li>Data protection, privacy and confidentiality</li>
            <li>Drafting various contracts</li>
          </ul>
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
