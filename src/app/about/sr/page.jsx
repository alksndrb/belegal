import {
  AboutCard,
  AboutGrid,
  AboutInfoText,
  AboutPageHeader2,
} from "@/components/About/aboutComponents";
import {
  Bullseye,
  ChartLine,
  Lightbulb,
  Seedling,
  Users,
  UsersCog,
} from "@/components/Assets/icons";
import {
  HorizontalLine,
  PageHeader,
  PageLayout,
  PageText,
} from "@/components/Global/globalComponents";

export default function AboutSr() {
  return (
    <>
      <PageLayout>
        <PageHeader>O Nama</PageHeader>
        <PageText>
          BeLegal je osnovan sa principom pružanja jedinstvenog opsega pravnih
          usluga, sa ciljem da klijentima pruži sve što im je potrebno na jednom
          mestu. Naš cilj je da olakšamo pravni proces nudeći sveobuhvatna,
          integrisana rešenja prilagođena specifičnim potrebama svakog klijenta.
          Spajanjem raznovrsnog spektra stručnosti pod jednim krovom,
          osiguravamo da naši klijenti dobiju najefikasniju i najefikasniju
          pravnu podršku koja je dostupna.
        </PageText>
        <AboutGrid>
          <AboutCard icon={Bullseye} name="Misija">
            Naša misija je pružanje sveobuhvatnih pravnih usluga pod jednim
            krovom, osiguravajući da naši klijenti dobiju stručnu pomoć
            prilagođenu njihovim jedinstvenim potrebama. Posvećeni smo pružanju
            stalne dostupnosti, profesionalne izvrsnosti i inovativnih rešenja
            kako bismo zaštitili i unapredili interese naših klijenata.
          </AboutCard>
          <AboutCard icon={Lightbulb} name="Vizija">
            Vizioniramo BeLegal kao pionirsku snagu u pravnoj oblasti,
            kontinuirano prilagođavajući se razvijajućoj globalnoj ekonomiji i
            tehnološkim napretcima. Naš cilj je izgradnja trajnih odnosa
            zasnovanih na poverenju, razumevanju i međusobnom poštovanju,
            postajući pouzdan partner za pravne potrebe naših klijenata.
          </AboutCard>
        </AboutGrid>
        <AboutPageHeader2>Naša Priča</AboutPageHeader2>
        <AboutInfoText icon={Seedling}>
          Put BeLegal-a počeo je sa vizijom stvaranja advokatske firme koja
          prevazilazi tradicionalne pravne usluge. Prepoznali smo potrebu za
          integrisanijim pristupom pravnoj praksi, onim koji kombinuje duboko
          pravno znanje sa razumevanjem razvijajućeg poslovnog i tehnološkog
          pejzaža. Sa ovom vizijom na umu, BeLegal je osnovan kako bi pružio
          klijentima holistički pristup njihovim pravnim potrebama.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={ChartLine}>
          Od naših skromnih početaka, BeLegal je značajno porastao, vođen našim
          posvećenjem inovaciji i izvrsnosti. Prihvatili smo moderne tehnologije
          i metode kako bismo unapredili našu uslugu, osiguravajući da naši
          klijenti dobijaju najefikasnija i najefikasnija pravna rešenja. Naš
          inovativni pristup uključuje korišćenje digitalnih alata za bolju
          komunikaciju sa klijentima, upravljanje slučajevima i pravna
          istraživanja.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={Users}>
          Jedna od naših osnovnih snaga je naš raznovrstan tim pravnih
          stručnjaka. Svaki član našeg tima donosi jedinstven skup veština i
          iskustava, što nam omogućava da pružamo specijalizovane usluge u
          različitim oblastima prava. Naš tim posvećen je kontinuiranom učenju i
          profesionalnom razvoju, osiguravajući da ostanemo korak ispred
          trendova industrije i pravnih inovacija kako bismo pružili najbolju
          moguću uslugu našim klijentima.
        </AboutInfoText>
        <HorizontalLine />
        <AboutInfoText icon={UsersCog}>
          Verujemo u snagu saradnje i timskog rada. Zato sarađujemo sa vrhunskim
          stručnjacima iz različitih oblasti kako bismo pružili sveobuhvatna i
          efikasna pravna rešenja. Iskorišćavajući naše kolektivno znanje i
          resurse, u mogućnosti smo da ponudimo našim klijentima inovativne
          strategije i neuporedivu podršku. Naš pristup saradnji osigurava da
          naši klijenti dobiju najviši nivo usluge i zastupanja.
        </AboutInfoText>
        <br />
      </PageLayout>
    </>
  );
}
