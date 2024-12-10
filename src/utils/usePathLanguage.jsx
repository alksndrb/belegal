"user client";
import { usePathname } from "next/navigation";

export default function usePathLanguage(link) {
  const path = usePathname();
  const lang = path.slice(path.length - 2) === "sr" ? "sr" : "en";
  if (lang === "en") return link;
  else return link + "/sr";
}
