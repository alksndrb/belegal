import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function DataProtection() {
  return (
    <PageLayout>
      <PageHeader>Data Protection</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Data protection and privacy policy have an impact in all business
          areas and industry sectors. This sophisticated legal field demands
          specific knowledge related to data security, information availability
          and access, etc.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
