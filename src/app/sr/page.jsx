import {
  Banner,
  HomeAbout,
  HomePractices,
  HomeSectionHeader,
} from "@/components/Home/homeComponents";
import { HomeLayout } from "@/components/Global/globalComponents";
export default function HomeSr() {
  const corePractice = [
    { name: "Privredno Pravo", link: "/core-practice/commercial-law/sr" },
    {
      name: "IT i Veštačka Inteligencija (AI)",
      link: "/core-practice/it-and-ai-law/sr",
    },
    {
      name: "Zaštita Životne Sredine",
      link: "/core-practice/environmental-law/sr",
    },
    { name: "Sve Usluge", link: "/core-practice/sr" },
  ];
  return (
    <HomeLayout>
      <Banner>Advokatska Kancelarija</Banner>
      <HomeAbout>
        <HomeSectionHeader>Naša Vizija</HomeSectionHeader>
        Advokatska kancelarija BeLegal osnovana je sa idejom da objedini sve
        pravne usluge u jednu celinu i time omogući klijentima da na jednom
        mestu pronađu pouzdanog partnera za sve svoje pravne potrebe.
        <br />
        <br />
        Naša vizija nije samo da pružamo zastupanje u sporovima, već da budemo
        strateški savetnici koji pomažu klijentima da prepoznaju i spreče
        potencijalne rizike, da zaštite svoja prava i interese, i da nađu
        rešenja koja otvaraju prostor za nove prilike i rast.
        <br />
        <br />
        U svom radu oslanjamo se na savremene metode, kao i na međunarodne
        standarde pravne prakse, kako bismo klijentima obezbedili pravovremena,
        praktična i inovativna rešenja. Verujemo da se uspešan odnos sa
        klijentima zasniva na poverenju, transparentnosti i dostupnosti, i
        upravo kroz profesionalnost, integritet i stalnu komunikaciju gradimo to
        poverenje.
        <br />
        <br />
        Svaki klijent je jedinstven, i zato prilagođavamo naš pristup konkretnim
        potrebama – bilo da ste fizičko lice, preduzetnik ili međunarodna
        kompanija. BeLegal je tu da vam bude oslonac u svakom koraku,
        obezbeđujući da se vaši pravni izazovi rešavaju sa sigurnošću, jasnoćom
        i stručnom podrškom.
      </HomeAbout>

      <HomePractices corePractice={corePractice}>
        <HomeSectionHeader>Pravne Oblasti</HomeSectionHeader>
        Snaga naše kancelarije leži u širokom spektru pravnih oblasti kojima se
        bavimo, a koje odgovaraju raznolikim izazovima sa kojima se klijenti
        suočavaju. Posvećeni smo tome da pružimo vrhunsku pravnu podršku,
        kombinujući dubinsko pravno znanje sa praktičnim razumevanjem poslovnih
        okolnosti.
        <br />
        <br />
        Naše osnovne oblasti rada obuhvataju privredno i korporativno pravo,
        rešavanje sporova, nepokretnosti, radno pravo, intelektualnu svojinu,
        poresko pravo i regulatornu usklađenost. Time omogućavamo da naši
        klijenti efikasno rešavaju svoja pitanja bez potrebe za angažovanjem
        više različitih savetnika.
        <br />
        <br />
        Ono što nas izdvaja jeste sposobnost da se brzo prilagođavamo promenama
        u pravnom okruženju. Od podrške startapima i malim biznisima, do
        savetovanja velikih međunarodnih kompanija – svaki predmet tretiramo sa
        jednakom pažnjom, posvećenošću i preciznošću.
        <br />
        <br />
        Za BeLegal, „pravne oblasti“ nisu samo rutinska praksa – to je srž naše
        uloge u uspehu klijenata. Naša misija je da predvidimo rizike, otvorimo
        nove mogućnosti i obezbedimo da svaka vaša odluka bude pravno sigurna i
        strateški promišljena.
      </HomePractices>
    </HomeLayout>
  );
}
