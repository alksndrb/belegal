import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnvironmentalLaw() {
  return (
    <PageLayout>
      <PageHeader>Environmental Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Environmental protection represents a branch of law of the new
          generation, and it deserves special attention and legal commitment. In
          this regard, our legal team has special knowledge regarding legal
          counseling of clients in accordance with the applicable regulations of
          the Republic of Serbia. We also provide assistance in obtaining the
          necessary permits and licenses from the aspect of environmental
          protection.
          <br />
          <br />
          We are especially dedicated to the proper and legal management and
          implementation of projects from the aspect of environmental
          protection, adhering to regulations in the areas of water, forests,
          waste management, as well as sustainable development in the
          environment.
          <br />
          <br />
          On the other hand, we provide consulting services related to air
          pollution, wastewater treatment, noise emissions, environmental impact
          assessment, strategic environmental impact assessment, as well as
          other areas related to environmental protection.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
