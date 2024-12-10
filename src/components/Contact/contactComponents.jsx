import {
  AddressIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  XIcon,
} from "../Assets/icons";

export function MapComponent() {
  return (
    <div className="h-[300px] sm:h-[500px] my-4">
      <iframe
        className="w-full h-full grayscale-[70%]"
        src="https://maps.google.com/maps?hl=en&amp;q=+(GagicLaw)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export function ContactHeader2({ children }) {
  return (
    <h2 className="text-xl pt-4 pb-2 text-center font-semibold">{children}</h2>
  );
}

export function ContactContent({ children }) {
  return (
    <div className="flex flex-col sm:flex-row pb-4 my-4 border-y-2">
      {children}
    </div>
  );
}
export function ContactContentTile({ children }) {
  return <div className="flex-1 justify-center">{children}</div>;
}
export function ContactAdress({ children }) {
  return (
    <div className="flex pt-2 items-center justify-center text-sm gap-1">
      <p className="w-[25px] h-[25px]">
        <AddressIcon height={"25px"} width={"25px"} color={"#189CA7"} />
      </p>
      <a href="https://www.google.com/maps/place/Gagic+Law+%7C+Advokatska+kancelarija+Gagi%C4%87/@44.805369,20.408955,16z/data=!4m6!3m5!1s0x475a6f0ec3d199dd:0x10bf65cabb8e75c5!8m2!3d44.8053685!4d20.4089545!16s%2Fg%2F11sct0j40q?hl=en&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">
        {children}
      </a>
    </div>
  );
}
export function ContactEmail({ children }) {
  return (
    <div className="flex pt-2 items-center text-sm gap-1 justify-center">
      <p className="w-[25px] h-[25px]">
        <EmailIcon height={"25px"} width={"25px"} color={"#189CA7"} />
      </p>
      <a href={`mailto:${children}`}>{children}</a>
    </div>
  );
}
export function ContactPhone({ children }) {
  return (
    <div className="flex pt-2 items-center text-sm gap-1 justify-center">
      <p className="w-[25px] h-[25px]">
        <PhoneIcon height={"25px"} width={"25px"} color={"#189CA7"} />
      </p>{" "}
      <a href={`tel:${children}`}>{children}</a>
    </div>
  );
}
export function ContactSocials() {
  return (
    <div
      className="flex pt-3 items-center gap-3 justify-center
  "
    >
      <p className="w-[25px] h-[25px]">
        <a href="$">
          <LinkedinIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        </a>
      </p>
      <p className="w-[25px] h-[25px]">
        <a href="$">
          <InstagramIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        </a>
      </p>
      <p className="w-[25px] h-[25px]">
        <a href="$">
          <FacebookIcon height={"25px"} width={"25px"} color={"#189CA7"} />
        </a>
      </p>
      <p className="w-[25px] h-[25px] flex items-center justify-center">
        <a href="$">
          <XIcon height={"20px"} width={"20px"} color={"#189CA7"} />
        </a>
      </p>
    </div>
  );
}
