import {
  CorePracticeContent,
  CorePracticeHeader2,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function CommercialLawSr() {
  return (
    <PageLayout>
      <PageHeader>Privredno Pravo</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija pruža sveobuhvatne pravne usluge u svim
          oblastima privrednog prava, pomažući klijentima da prebrode izazove
          savremenog poslovanja. Od korporativnog upravljanja do složenih
          transakcija, nudimo strateške savete i prilagođena rešenja koja
          doprinose uspehu vašeg poslovanja.
          <CorePracticeHeader2>Korporativno pravo</CorePracticeHeader2>
          Naš tim pruža stručnu pravnu podršku kompanijama u svim fazama
          njihovog poslovnog ciklusa, uključujući:
          <ul class="list-disc pl-6">
            <li>
              Osnivanje i strukturiranje preduzeća: Pružanje saveta o
              najprikladnijem pravnom obliku za vaše poslovanje (DOO, AD,
              partnerstva, itd.) i obezbeđivanje usklađenosti sa svim
              registracionim zahtevima.
            </li>
            <li>
              Korporativno upravljanje: Izrada internih procedura, statuta
              kompanija i ugovora između akcionara radi osiguravanja efikasnog
              upravljanja i usklađenosti sa najboljim praksama.
            </li>
            <li>
              Restrukturiranje i reorganizacije: Podrška kompanijama tokom
              spajanja, razdvajanja, izdvajanja i drugih procesa
              restrukturiranja, obezbeđujući nesmetane pravne tranzicije.
            </li>
            <li>
              Korporativna usklađenost: Pružanje smernica za regulatorne
              prijave, godišnje izveštavanje i poštovanje srpskih zakona o
              privrednim društvima.
            </li>
          </ul>
          <CorePracticeHeader2>Komercijalni ugovori</CorePracticeHeader2>
          Specijalizovani smo za izradu, pregovaranje i reviziju širokog spektra
          komercijalnih ugovora koji su ključni za poslovne aktivnosti,
          uključujući:
          <ul class="list-disc pl-6">
            <li>Ugovore o pružanju usluga</li>
            <li>Ugovore o prodaji i kupovini</li>
            <li>Ugovore o distribuciji i lancu snabdevanja</li>
            <li>Licencne i franšizne ugovore</li>
            <li>Ugovore o partnerstvu i zajedničkim ulaganjima</li>
            <li>Ugovore o poverljivosti (NDA)</li>
          </ul>
          Naš cilj je da izradimo jasne i pravno obavezujuće ugovore koji štite
          interese naših klijenata i minimiziraju potencijalne rizike.
          <CorePracticeHeader2>Spajanja i akvizicije (M&A)</CorePracticeHeader2>
          Naša advokatska kancelarija pruža kompletnu pravnu podršku u svim
          fazama spajanja i akvizicija, pomažući klijentima da postignu svoje
          poslovne ciljeve efikasno i sigurno. Uspešno smo zastupali kompanije
          svih veličina u širenju njihovih poslovanja kroz:
          <ul class="list-disc pl-6">
            <li>
              Sprovođenje due diligence procesa za procenu rizika i mogućnosti
            </li>
            <li>
              Strukturiranje i pregovaranje M&A poslova u skladu sa regulatornim
              zahtevima
            </li>
            <li>
              Izrada transakcionih ugovora, uključujući ugovore o prodaji i
              kupovini (SPA) i ugovore o akcionarima
            </li>
            <li>
              Upravljanje regulatornim odobrenjima i usklađenošću tokom i nakon
              transakcije
            </li>
          </ul>
          <CorePracticeHeader2>Bankarstvo i finansije</CorePracticeHeader2>
          Pružamo stručne pravne savete finansijskim institucijama, fondovima
          privatnog kapitala, investicionim firmama i preduzećima u pitanjima
          vezanim za:
          <ul class="list-disc pl-6">
            <li>Strukturiranje transakcija i prikupljanje kapitala.</li>
            <li>
              Izrada i pregovaranje ugovora o pozajmicama, kreditnih aranžmana i
              projektnog finansiranja.
            </li>
            <li>Pomoć u restrukturiranju duga.</li>
            <li>
              Osiguranje usklađenosti sa bankarskim regulativima i standardima
              finansijskih industrija.
            </li>
          </ul>
          Naše duboko razumevanje finansijskog sektora omogućava nam da ponudimo
          praktična rešenja koja su u skladu sa komercijalnim ciljevima naših
          klijenata.
          <CorePracticeHeader2>Pravo konkurencije</CorePracticeHeader2>Naša
          stručnost u oblasti prava konkurencije omogućava nam da se bavimo svim
          aspektima usklađenosti i pravnim izazovima u ovoj oblasti. Pružamo
          strateške savete o aktuelnim pitanjima konkurencije klijentima u
          različitim sektorima.
          <br />
          Naša advokatska kancelarija je dobro upoznata sa:
          <ul class="list-disc pl-6">
            <li>
              Postupkom prethodnih obaveštenja o koncentracijama (spajanja,
              akvizicije i zajednička ulaganja).
            </li>
            <li>Sprovođenjem dubinskih analiza tržišta.</li>
            <li>
              {" "}
              Zastupanjem klijenata u postupcima vezanim za usklađenost sa
              konkurencijskim zakonodavstvom.
            </li>
            <li>
              Osiguranje da poslovanje naših klijenata bude u skladu sa srpskim
              i međunarodnim pravilima konkurencije.
            </li>
          </ul>
          <CorePracticeHeader2>Antimonopol</CorePracticeHeader2>Naš tim pruža
          neophodnu pravnu podršku kako bi obezbedio potpunu usklađenost sa
          antimonopolskim zakonima i zaštitu prava naših klijenata na fer
          tržišnu konkurenciju. Pomažemo preduzećima da se snađu u regulatornim
          okvirima i rešavaju bilo kakve antimonopolske zabrinutosti koje se
          mogu pojaviti.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
