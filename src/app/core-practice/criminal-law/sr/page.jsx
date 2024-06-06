import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CriminalLawSr() {
  return (
    <PageLayout>
      <PageHeader>Kazeneno Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naš]a advokatska kancelarija u svom sastavu ima posebno odeljenje koje
          čini specijalizovani tim advokata koji se bavi kaznenim pravom, koje
          obuhvata krivično pravo, privredne prestupe, carinske prekršaje i
          prekršaje u vezi sa kazneno-pravnom odbranom.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
