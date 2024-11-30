import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
  CorePracticeHeader2,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function EnvironmentalLawSr() {
  return (
    <PageLayout>
      <PageHeader>Zaštita Životne Sredine</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Zaštita životne sredine je dinamična pravna oblast koja zahteva
          specijalizovano znanje i posvećenu pravnu stručnost. Naša advokatska
          kancelarija pruža sveobuhvatne pravne usluge u oblasti zaštite životne
          sredine, nudeći klijentima savetovanje o snalaženju u složenim
          propisima o zaštiti životne sredine u Republici Srbiji i osiguravanju
          usklađenosti sa nacionalnim i međunarodnim standardima.
          <br />
          <br />
          Naše usluge uključuju:
          <ul class="list-disc pl-6">
            <li>
              Pravno savetovanje i usmeravanje u skladu sa važećim zakonima o
              zaštiti životne sredine Republike Srbije.
            </li>
            <li>
              Pomoć u dobijanju potrebnih dozvola i licenci za zaštitu životne
              sredine, kao što su one u vezi sa upravljanjem vodama, zaštitom
              šuma, upravljanjem otpadom i korišćenjem zemljišta.
            </li>
            <li>
              Savetovanje o ekološki održivim praksama i pomoć preduzećima u
              implementaciji politika koje su usklađene sa ciljevima održivog
              razvoja.
            </li>
          </ul>
          <br />
          Posebnu pažnju posvećujemo pravnom upravljanju i implementaciji
          ekoloških projekata, osiguravajući potpunu usklađenost sa propisima u
          sledećim oblastima:
          <br />
          <br />
          <ul class="list-disc pl-6">
            <li>
              Upravljanje vodama: uključujući upotrebu i zaštitu vodnih resursa.
            </li>
            <li>
              Upravljanje šumama: rešavanje pitanja zaštite i održivog
              korišćenja šumskih resursa.
            </li>
            <li>
              Upravljanje otpadom: savetovanje preduzeća u vezi sa odlaganjem
              otpada i praksama reciklaže u skladu sa zakonodavstvom.
            </li>
            <li>
              Održivi razvoj: pomoć preduzećima u usvajanju praksi koje smanjuju
              njihov uticaj na životnu sredinu, a podržavaju dugoročne ekonomske
              i društvene ciljeve.
            </li>
          </ul>
          <br />
          Dodatno, pružamo stručne savete u vezi sa specifičnim ekološkim
          pitanjima, uključujući:
          <br />
          <br />
          <ul>
            <li>
              {" "}
              Zagađenje vazduha, uključujući usklađenost sa standardima emisije
              i propisima.
            </li>
            <li>
              Prečišćavanje otpadnih voda, osiguravajući da kompanije ispune
              zakonske obaveze u vezi sa upravljanjem kvalitetom vode.
            </li>
            <li>
              Procene uticaja na životnu sredinu (PUŽS) i strateške procene
              uticaja na životnu sredinu (SPUŽS), osiguravajući da se projekti
              procene za potencijalne ekološke rizike pre nego što se započnu.
            </li>
          </ul>
          <CorePracticeHeader2>Energetsko pravo:</CorePracticeHeader2>Energetski
          sektor je jedan od najperspektivnijih i najbrže rastućih područja
          privrede. Naš multidisciplinarni tim nudi specijalizovane pravne
          savetodavne usluge u ključnim energetskim oblastima, uključujući
          proizvodnju, transport i distribuciju električne energije, gasa i
          nafte. Pružamo pravnu podršku kroz različite faze energetskih
          projekata, od razvoja do implementacije, i osiguravamo usklađenost sa
          svim ekološkim propisima.
          <br />
          <br />
          Posebno iskustvo pružamo u oblasti obnovljivih izvora energije, koji
          predstavljaju najperspektivniji i najodrživiji deo energetskog
          razvoja. Naše usluge u oblasti obnovljivih izvora energije uključuju:
          <ul class="list-disc pl-6">
            <li>
              Pravne analize u vezi sa energetskim projektima, osiguravajući
              usklađenost sa regulatornim okvirima.
            </li>
            <li>
              Dobijanje svih potrebnih dozvola i licenci za razvoj i rad
              projekata obnovljivih izvora energije, kao što su solarni, vetro,
              hidro i biomasni projekti.
            </li>
            <li>
              Praćenje procesa izgradnje, osiguravajući da se ispune svi
              ekološki zahtevi i da projekat bude u skladu sa propisima o
              održivosti i zaštiti životne sredine tokom celokupnog životnog
              ciklusa.
            </li>
          </ul>
          <br />
          Naša stručnost u oblasti prava životne sredine i energetskog sektora
          osigurava da preduzeća ne samo da ispune svoje regulatorne obaveze,
          već i da pozitivno doprinesu očuvanju životne sredine i održivom
          razvoju energije.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
