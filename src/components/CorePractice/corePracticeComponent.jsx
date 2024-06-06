import Link from "next/link";

export function CorePracticeTile({ name, icon: IconComponent, link }) {
  return (
    <Link
      href={link}
      className="flex h-[80px] justify-between px-5 lg:px-10 border-2 border-dark/70 text-xl items-center hover:bg-primary/10 hover:border-primary transition ease-in-out duration-300"
    >
      {name}
      <IconComponent height={"25px"} width={"25px"} color={"#189CA7"} />
    </Link>
  );
}

export function CorePracticeGrid({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 pt-6 border-t-2">
      {children}
    </div>
  );
}
export function CorePracticeList({ corePractices }) {
  return (
    <>
      {corePractices.map((practice, index) => (
        <CorePracticeTile
          key={index}
          name={practice.name}
          icon={practice.icon}
          link={practice.link}
        />
      ))}
    </>
  );
}
