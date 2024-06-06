import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function AdministrativeLawSr() {
  return (
    <PageLayout>
      <PageHeader>Upravno Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naš advokatski tim poseduje posebna znanja iz oblasti upravnog prava.
          S tim u vezi, pružamo celokupni spektar usluga u vezi sa vođenjem
          upravnog postupka i upravnog spora.
          <br />
          <br />
          Posebno je aktuelna primena zakona u oblasti intelektualne svojine,
          carine, poreza, izgradnje objekata, kao i postupaka inspekcijskog
          nadzora nad nadziranim subjektima. S tim u vezi, posedujemo
          specijalizovana znanja, te pružamo pravno savetovanje i podršku iz
          oblasti inspekcijskog nadzora i u vezi sa prilogođavanjem poslovanja
          važećim propisima Republike Srbije.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
