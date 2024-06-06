import {
  BalanceScale,
  Book,
  Briefcase,
  Building,
  Calculator,
  Clipboard,
  FileContract,
  Gavel,
  Handshake,
  Industry,
  Laptop,
  Lightbulb,
  Lock,
  Tree,
} from "@/components/Assets/icons";
import {
  CorePracticeGrid,
  CorePracticeList,
} from "@/components/CorePractice/corePracticeComponent";
import {
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";
export const corePracticesSr = [
  {
    name: "Privredno Pravo",
    id: 0,
    icon: Briefcase,
    link: "/core-practice/commercial-law/sr",
  },
  {
    name: "Poresko Pravo",
    id: 1,
    icon: Calculator,
    link: "/core-practice/tax-law/sr",
  },
  {
    name: "Radno Pravo",
    id: 2,
    icon: Gavel,
    link: "/core-practice/employment-law/sr",
  },
  { name: "IT Pravo", id: 3, icon: Laptop, link: "/core-practice/it-law/sr" },
  {
    name: "Pravo Intelektualne Svojine",
    id: 4,
    icon: Lightbulb,
    link: "/core-practice/intellectual-property/sr",
  },
  {
    name: "Zaštita Podataka",
    id: 5,
    icon: Lock,
    link: "/core-practice/data-protection/sr",
  },
  {
    name: "Energetika i Infrastruktura",
    id: 6,
    icon: Industry,
    link: "/core-practice/energy-and-infrastructure/sr",
  },
  {
    name: "Zaštita Životne Sredine",
    id: 7,
    icon: Tree,
    link: "/core-practice/environmental-law/sr",
  },
  {
    name: "Rešavanje Sporova i Parnica",
    id: 8,
    icon: Handshake,
    link: "/core-practice/dispute-resolution/sr",
  },
  {
    name: "Nekretnine i Izgradnja",
    id: 9,
    icon: Building,
    link: "/core-practice/real-estate-and-construction/sr",
  },
  {
    name: "Naplata Potraživanja i Izvršenje",
    id: 10,
    icon: Clipboard,
    link: "/core-practice/collection-procedure/sr",
  },
  {
    name: "Kazneno Pravo",
    id: 11,
    icon: BalanceScale,
    link: "/core-practice/criminal-law/sr",
  },
  {
    name: "Upravno Pravo",
    id: 12,
    icon: Book,
    link: "/core-practice/administrative-law/sr",
  },
  {
    name: "Javne Nabavke",
    id: 13,
    icon: FileContract,
    link: "/core-practice/public-procurement/sr",
  },
];
export default function CorePractice() {
  return (
    <>
      <PageLayout>
        <PageHeader>Pravne Oblasti</PageHeader>
        <PageText>
          Specijalizujemo se za niz pravnih usluga kako bismo zadovoljili
          raznovrsne potrebe naših klijenata. Naši osnovni pravni oblasti
          odražavaju naše duboko stručnosti i posvećenost pružanju izuzetnih
          pravnih rešenja. Otkrijte naše glavne oblasti prakse u nastavku:
        </PageText>
        <CorePracticeGrid>
          <CorePracticeList corePractices={corePracticesSr} />
        </CorePracticeGrid>
      </PageLayout>
    </>
  );
}
