import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebar,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EmploymentLaw() {
  return (
    <PageLayout>
      <PageHeader>Employment Law</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Our law office provides comprehensive services in the field of
          Employment law.. According to the &quot;All in one place&quot; work
          model, we find unique and optimal solutions relating to drafting
          internal documents and work rules, negotiations over collective
          agreement and the obligations arising out of the collective agreement,
          safety at work, economic and social programmes for resolving the
          redundancy issues.
          <br /> <br />
          Bearing in mind the modern age and the frequent movement of people on
          the labor market, we provide our clients with representation services
          before the competent authorities of the Republic of Serbia in the
          process of obtaining residence and work permits.
        </CorePracticeContent>
        <CorePracticeSidebar />
      </CorePracticeLayout>
    </PageLayout>
  );
}
