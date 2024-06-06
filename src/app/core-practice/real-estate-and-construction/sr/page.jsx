import {
  CorePracticeContent,
  CorePracticeLayout,
  CorePracticeSidebarSr,
} from "@/components/CorePractice/practicePageComponents";
import { PageHeader, PageLayout } from "@/components/Global/globalComponents";

export default function RealEstateAndConstructionSr() {
  return (
    <PageLayout>
      <PageHeader>Nekretnine i Izgradnja</PageHeader>
      <CorePracticeLayout>
        <CorePracticeContent>
          <br />
          Naša advokatska kancelarija se bavi pravnom analizom imovinsko-pravne
          dokumentacije u vezi sa građevinskim investicijama i transakcijama
          vezanih za kupoprodaju neporetnosti.
          <br />
          <br />
          Takođe, naš tim proaktivno učestvuje u pregovorima i pripremi
          kupoprodajnih predugovora i ugovora za sve vrste nepokretnosti. S tim
          u vezi, pružamo celokupni spektar usluga tokom čitavog procesa
          izgradnje objekata sa osvrtom na pravnu podršku prilikom pribavljanja
          svih vrsta dozvola u vezi sa izgradnjom.
          <br />
          <br />
          Sa druge strane, naš specijalizovani tim pruža pravne usluge u vezi sa
          javno-privatnim partnerstvima i koncesijama tokom čitavog procesa:
          zastupanje klijenata pred organima lokalne samouprave, izrada ugovora
          i učešće u pregovorima o realizaciji javno-privatnog partnerstva.
        </CorePracticeContent>
        <CorePracticeSidebarSr />
      </CorePracticeLayout>
    </PageLayout>
  );
}
