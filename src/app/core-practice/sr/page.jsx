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
    name: "Nepokretnosti i građevinarstvo",
    id: 1,
    icon: Building,
    link: "/core-practice/real-estate-and-construction/sr",
  },
  {
    name: "Intelektualna Svojina",
    id: 2,
    icon: Lightbulb,
    link: "/core-practice/intellectual-property/sr",
  },
  {
    name: "IT i Veštačka inteligencija (AI)",
    id: 3,
    icon: Laptop,
    link: "/core-practice/it-and-ai-law/sr",
  },
  {
    name: "Startapi",
    id: 4,
    icon: Clipboard,
    link: "/core-practice/startups/sr",
  },
  {
    name: "Strane Investicije",
    id: 5,
    icon: Clipboard,
    link: "/core-practice/foreign-investments/sr",
  },
  {
    name: "Regulativa i Usklađenost sa propisima",
    id: 6,
    icon: Clipboard,
    link: "/core-practice/regulatory-and-compliance/sr",
  },
  {
    name: "Radno i Imigraciono Pravo",
    id: 7,
    icon: Gavel,
    link: "/core-practice/employment-and-immigration/sr",
  },
  {
    name: "Zaštita Životne Sredine ",
    id: 8,
    icon: Tree,
    link: "/core-practice/environmental-law/sr",
  },
  {
    name: "Sportsko Pravo",
    id: 9,
    icon: Clipboard,
    link: "/core-practice/sports-law/sr",
  },
  {
    name: "Zaštita Podataka i GDPR",
    id: 10,
    icon: Lock,
    link: "/core-practice/data-protection-and-gdpr/sr",
  },
  {
    name: "Naplata Potraživanja i izvršenje",
    id: 11,
    icon: Clipboard,
    link: "/core-practice/debt-collection-and-enforcement/sr",
  },
  {
    name: "Rešavanje Sporova",
    id: 12,
    icon: Handshake,
    link: "/core-practice/dispute-resolution/sr",
  },
  {
    name: "Arbitraža i Medijacija",
    id: 13,
    icon: Clipboard,
    link: "/core-practice/arbitration-and-mediation/sr",
  },
  {
    name: "Poresko Pravo",
    id: 14,
    icon: Calculator,
    link: "/core-practice/tax-law/sr",
  },
  {
    name: "Privredni Kriminal",
    id: 15,
    icon: Clipboard,
    link: "/core-practice/white-collar-crimes/sr",
  },
  {
    name: "Medijsko Pravo i Telekomunikacije",
    id: 16,
    icon: Clipboard,
    link: "/core-practice/media-and-telecommuncations-law/sr",
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
