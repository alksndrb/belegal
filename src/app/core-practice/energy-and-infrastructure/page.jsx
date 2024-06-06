import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnergyAndInfrastructure() {
  return (
    <PageLayout>
      <PageHeader>Energy and Infrastructure</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          The energy sector represents one of the most promising sectors in the
          economy.
          <br />
          <br />
          The multidisciplinary team of our law office provides legal advisory
          services, primarily in the areas of production, transportation and
          distribution of electricity as well as gas and oil, but also in other
          energy activities.
          <br />
          <br />
          We have special knowledge and experience in the field of renewable
          energy sources, as the most promising part of energy development. In
          this regard, we provide legal support in connection with the
          implementation of projects, starting from legal analyzes to obtaining
          all permits and licenses and monitoring the entire construction
          process with obtaining and applying all conditions from the aspect of
          environmental protection.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
