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
export const corePractices = [
  {
    name: "Commercial Law",
    id: 0,
    icon: Briefcase,
    link: "/core-practice/commercial-law",
  },
  {
    name: "Tax Law",
    id: 1,
    icon: Calculator,
    link: "/core-practice/tax-law",
  },
  {
    name: "Employment Law",
    id: 2,
    icon: Gavel,
    link: "/core-practice/employment-law",
  },
  { name: "IT Law", id: 3, icon: Laptop, link: "/core-practice/it-law" },
  {
    name: "Intellectual Property",
    id: 4,
    icon: Lightbulb,
    link: "/core-practice/intellectual-property",
  },
  {
    name: "Data Protection",
    id: 5,
    icon: Lock,
    link: "/core-practice/data-protection",
  },
  {
    name: "Energy and Infrastructure",
    id: 6,
    icon: Industry,
    link: "/core-practice/energy-and-infrastructure",
  },
  {
    name: "Environmental Law",
    id: 7,
    icon: Tree,
    link: "/core-practice/environmental-law",
  },
  {
    name: "Dispute Resolution",
    id: 8,
    icon: Handshake,
    link: "/core-practice/dispute-resolution",
  },
  {
    name: "Real Estate and Construction",
    id: 9,
    icon: Building,
    link: "/core-practice/real-estate-and-construction",
  },
  {
    name: "Collection Procedure",
    id: 10,
    icon: Clipboard,
    link: "/core-practice/collection-procedure",
  },
  {
    name: "Criminal Law",
    id: 11,
    icon: BalanceScale,
    link: "/core-practice/criminal-law",
  },
  {
    name: "Administrative Law",
    id: 12,
    icon: Book,
    link: "/core-practice/administrative-law",
  },
  {
    name: "Public Procurement",
    id: 13,
    icon: FileContract,
    link: "/core-practice/public-procurement",
  },
];
export default function CorePractice() {
  return (
    <>
      <PageLayout>
        <PageHeader>Core Practice</PageHeader>
        <PageText>
          At BeLegal, we specialize in a range of legal services to meet the
          diverse needs of our clients. Our core practice areas reflect our deep
          expertise and commitment to delivering exceptional legal solutions.
          Explore our main areas of practice below:
        </PageText>
        <CorePracticeGrid>
          <CorePracticeList corePractices={corePractices} />
        </CorePracticeGrid>
      </PageLayout>
    </>
  );
}
