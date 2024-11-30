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
      link: "/core-practice/src/app/core-practice/it-and-ai-law/sr",
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
        <HomeSectionHeader>Naša Vizija</HomeSectionHeader>Advokatska kancelarija
        BeLegal osnovana je sa idejom da objedini sve pravne usluge u jednu
        celinu u cilju da svojim klijentima blagovremeno pruži celokupni spektar
        usluga na jednom mestu – “All in one place”. Naša kancelarija teži
        inovativnom pristupu shvatanja advokature sa ciljem da svojim klijentima
        omogući stalnu dostupnost, kao i profesionalnu i adekvatnu pravnu pomoć.
        Po uzoru na moderno shvatanje i kretanje tržišta kapitala, naša
        advokatska kancelarija neguje moderan pristup i odnos sa klijentima,
        koji se zasniva na razumevanju delatnosti klijenata, zaštiti interesa
        klijenata i uzajmnom poverenju.
      </HomeAbout>
      <HomePractices corePractice={corePractice}>
        <HomeSectionHeader>Pravne Oblasti</HomeSectionHeader>
        Specijalizovani smo za širok spektar pravnih usluga koje su osmišljene
        da zadovolje raznolike potrebe naših klijenata. Posvećeni smo pružanju
        izuzetne pravne podrške kako bismo vam pomogli da sa sigurnošću
        prebrodite složene pravne izazove.
      </HomePractices>
    </HomeLayout>
  );
}
