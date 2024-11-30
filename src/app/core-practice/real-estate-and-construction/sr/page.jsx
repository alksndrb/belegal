import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RealEstateAndConstructionSr() {
  return (
    <PageLayout>
      <PageHeader>Nepokretnosti i Građevinarstvo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne pravne usluge u
          sektorima nekretnina i građevine. Sprovodimo detaljne pravne analize
          dokumenata vezanih za imovinu, osiguravajući da interesi naših
          klijenata budu zaštićeni u svim transakcijama i investicijama.
          <br />
          <br />
          Naš tim aktivno učestvuje u pregovaranju i pripremi svih vrsta ugovora
          vezanih za nekretnine, uključujući ugovore o preprodaji, ugovore o
          kupovini, ugovore o zakupu i druge aranžmane u vezi sa imovinom.
          <br />
          <br />
          Pored toga, naš specijalizovani tim pruža stručnu pravnu podršku za
          javno-privatna partnerstva (PPP) i koncesije kroz čitav proces. Ovo
          uključuje:
          <br />
          <br />
          <ul class="list-disc pl-6">
            <li>Zastupanje klijenata pred administrativnim vlastima.</li>
            <li>
              Izrada ugovora prilagođenih specifičnostima partnerstva ili
              koncesije.
            </li>
            <li>
              Aktivno učešće u pregovorima kako bi se osigurala uspešna
              realizacija projekata javno-privatnog partnerstva.
            </li>
          </ul>
          <br />
          Sa proaktivnim i pažljivim pristupom, pomažemo našim klijentima da sa
          sigurnošću savladaju složenost prava u oblasti nekretnina i građevine.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
