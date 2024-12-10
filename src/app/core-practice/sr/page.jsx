import {
  BalanceScale,
  Briefcase,
  Building,
  Calculator,
  Clipboard,
  Gavel,
  Handshake,
  Laptop,
  Lightbulb,
  Lock,
  Tree,
  RocketIcon,
  Globe,
  Ball,
  HandHoldingDollar,
  UserTie,
  BroadcastTower,
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
    link: "/core-practice/commercial-law",
  },
  {
    name: "Nepokretnosti i Građevnina",
    id: 1,
    icon: Building,
    link: "/core-practice/real-estate-and-construction",
  },
  {
    name: "Intelektualna Svojina",
    id: 2,
    icon: Lightbulb,
    link: "/core-practice/intellectual-property",
  },
  {
    name: "IT i Veštačka Inteligencija (AI)",
    id: 3,
    icon: Laptop,
    link: "/core-practice/it-and-ai-law",
  },
  {
    name: "Startapi",
    id: 4,
    icon: RocketIcon,
    link: "/core-practice/startups",
  },
  {
    name: "Strane Investicije",
    id: 5,
    icon: Globe,
    link: "/core-practice/foreign-investments",
  },
  {
    name: "Regulativa i Usklađenosti sa Propisima",
    id: 6,
    icon: BalanceScale,
    link: "/core-practice/regulatory-and-compliance",
  },
  {
    name: "Radno i Imigraciono Pravo",
    id: 7,
    icon: Gavel,
    link: "/core-practice/employment-and-immigration",
  },
  {
    name: "Zaštita Životne Sredine",
    id: 8,
    icon: Tree,
    link: "/core-practice/environmental-law",
  },
  {
    name: "Sportsko Pravo",
    id: 9,
    icon: Ball,
    link: "/core-practice/sports-law",
  },
  {
    name: "Zaštita Podataka i GDPR",
    id: 10,
    icon: Lock,
    link: "/core-practice/data-protection-and-gdpr",
  },
  {
    name: "Naplata Potraživanja i Izvršenje",
    id: 11,
    icon: HandHoldingDollar,
    link: "/core-practice/debt-collection-and-enforcement",
  },
  {
    name: "Rešavanje Sporova",
    id: 12,
    icon: Handshake,
    link: "/core-practice/dispute-resolution",
  },
  {
    name: "Arbitraža i Medijacija",
    id: 13,
    icon: Clipboard,
    link: "/core-practice/arbitration-and-mediation",
  },
  {
    name: "Poresko Pravo",
    id: 14,
    icon: Calculator,
    link: "/core-practice/tax-law",
  },
  {
    name: "Privredni Kriminal",
    id: 15,
    icon: UserTie,
    link: "/core-practice/white-collar-crimes",
  },
  {
    name: "Medijsko Pravo i Telekomunikacije",
    id: 16,
    icon: BroadcastTower,
    link: "/core-practice/media-and-telecommuncations-law",
  },
];
export default function CorePracticeSr() {
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
