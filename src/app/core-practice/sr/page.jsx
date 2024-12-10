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
    name: "Commercial Law",
    id: 0,
    icon: Briefcase,
    link: "/core-practice/commercial-law",
  },
  {
    name: "Real Estate and Construction",
    id: 1,
    icon: Building,
    link: "/core-practice/real-estate-and-construction",
  },
  {
    name: "Intellectual Property",
    id: 2,
    icon: Lightbulb,
    link: "/core-practice/intellectual-property",
  },
  {
    name: "IT & AI Law",
    id: 3,
    icon: Laptop,
    link: "/core-practice/it-and-ai-law",
  },
  {
    name: "Startups",
    id: 4,
    icon: RocketIcon,
    link: "/core-practice/startups",
  },
  {
    name: "Foreign Investments",
    id: 5,
    icon: Globe,
    link: "/core-practice/foreign-investments",
  },
  {
    name: "Regulatory and Compliance",
    id: 6,
    icon: BalanceScale,
    link: "/core-practice/regulatory-and-compliance",
  },
  {
    name: "Employment and Immigration",
    id: 7,
    icon: Gavel,
    link: "/core-practice/employment-and-immigration",
  },
  {
    name: "Environmental Law",
    id: 8,
    icon: Tree,
    link: "/core-practice/environmental-law",
  },
  {
    name: "Sports Law",
    id: 9,
    icon: Ball,
    link: "/core-practice/sports-law",
  },
  {
    name: "Data Protection and GDPR",
    id: 10,
    icon: Lock,
    link: "/core-practice/data-protection-and-gdpr",
  },
  {
    name: "Debt Collection and Enforcement",
    id: 11,
    icon: HandHoldingDollar,
    link: "/core-practice/debt-collection-and-enforcement",
  },
  {
    name: "Dispute Resolution",
    id: 12,
    icon: Handshake,
    link: "/core-practice/dispute-resolution",
  },
  {
    name: "Arbitration and Mediation",
    id: 13,
    icon: Clipboard,
    link: "/core-practice/arbitration-and-mediation",
  },
  {
    name: "Tax Law",
    id: 14,
    icon: Calculator,
    link: "/core-practice/tax-law",
  },
  {
    name: "White Collar Crimes",
    id: 15,
    icon: UserTie,
    link: "/core-practice/white-collar-crimes",
  },
  {
    name: "Media and Telecommuncations Law",
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
