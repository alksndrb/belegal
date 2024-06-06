import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function AdministrativeLaw() {
  return (
    <PageLayout>
      <PageHeader>Administrative Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our legal team has special knowledge in the field of administrative
          law. In this regard, we provide the entire range of services related
          to conducting administrative proceedings and administrative disputes.
          <br />
          <br />
          The application of laws in the field of intellectual property,
          customs, taxes, construction of buildings, as well as procedures of
          inspection supervision over supervised entities is especially current.
          In this regard, we have specialized knowledge, and we provide legal
          advice and support in the field of inspection supervision and in
          connection with the harmonization of business operations with the
          valid regulations of the Republic of Serbia.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
