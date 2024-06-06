import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CollectionProcedure() {
  return (
    <PageLayout>
      <PageHeader>Collection Procedure</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          Our law office provides clients with the services of solving debt
          collection problems out of court and through court. In order to
          protect the interests of our clients, we effectively represent our
          domestic and international clients in enforcement procedures in all
          courts in Serbia.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
