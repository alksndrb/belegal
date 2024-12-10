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
    link: "/core-practice/commercial-law/sr",
  },
  {
    name: "Nepokretnosti i Građevnina",
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
    name: "IT i Veštačka Inteligencija (AI)",
    id: 3,
    icon: Laptop,
    link: "/core-practice/it-and-ai-law/sr",
  },
  {
    name: "Startapi",
    id: 4,
    icon: RocketIcon,
    link: "/core-practice/startups/sr",
  },
  {
    name: "Strane Investicije",
    id: 5,
    icon: Globe,
    link: "/core-practice/foreign-investments/sr",
  },
  {
    name: "Regulativa i Usklađenosti sa Propisima",
    id: 6,
    icon: BalanceScale,
    link: "/core-practice/regulatory-and-compliance/sr",
  },
  {
    name: "Radno i Imigraciono Pravo",
    id: 7,
    icon: Gavel,
    link: "/core-practice/employment-and-immigration/sr",
  },
  {
    name: "Zaštita Životne Sredine",
    id: 8,
    icon: Tree,
    link: "/core-practice/environmental-law/sr",
  },
  {
    name: "Sportsko Pravo",
    id: 9,
    icon: Ball,
    link: "/core-practice/sports-law/sr",
  },
  {
    name: "Zaštita Podataka i GDPR",
    id: 10,
    icon: Lock,
    link: "/core-practice/data-protection-and-gdpr/sr",
  },
  {
    name: "Naplata Potraživanja i Izvršenje",
    id: 11,
    icon: HandHoldingDollar,
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
    icon: UserTie,
    link: "/core-practice/white-collar-crimes/sr",
  },
  {
    name: "Medijsko Pravo i Telekomunikacije",
    id: 16,
    icon: BroadcastTower,
    link: "/core-practice/media-and-telecommuncations-law/sr",
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
