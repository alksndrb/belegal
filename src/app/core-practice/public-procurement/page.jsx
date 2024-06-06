import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function PublicProcurement() {
  return (
    <PageLayout>
      <PageHeader>Public Procurement</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our law office provides legal services to domestic and foreign clients
          in the preparation and submission of tender documents, as well as
          during the entire public procurement procedure in the Republic of
          Serbia.
          <br />
          <br />
          Our team represents clients&apos; interests in public procurement
          procedures and provides legal support in the process of implementing
          awarded public procurement contracts. Our lawyers advise clients and
          bidders in all industries and areas of public procurement.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
