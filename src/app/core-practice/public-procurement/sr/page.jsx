import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function PublicProcurementSr() {
  return (
    <PageLayout>
      <PageHeader>Javne Nabavke</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža pravne usluge domaćim i inostranim
          klijentima u pripremi i podnošenju konkursne dokumentacije, kao i u
          toku celog postupka javne nabavke u Republici Srbiji.
          <br />
          <br />
          Naš tim zastupa interese klijenata u postupcima javnih nabavki i pruža
          pravnu podršku u procesu realizacije dodeljenih ugovora o javnoj
          nabavci. Naši advokati savetuju naručioce i ponuđače u svim
          industrijama i oblastima javnih nabavki.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
