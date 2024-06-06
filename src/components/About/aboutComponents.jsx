export function AboutInfoText({ icon: IconComponent, children }) {
  return (
    <div className="flex flex-col sm:flex-row py-5 items-center">
      <div className="pb-5 sm:pb-0 sm:px-10">
        <IconComponent
          height={"25px"}
          width={"25px"}
          color={"#189CA7"}
          className="hidden sm:block"
        />
        <IconComponent
          height={"40px"}
          width={"40px"}
          color={"#189CA7"}
          className="sm:hidden"
        />
      </div>
      {children}
    </div>
  );
}
export function AboutPageHeader2({ children }) {
  return <h2 className="text-center font-semibold text-xl pt-6">{children}</h2>;
}
export function AboutGrid({ children }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 border-y-2 py-5 mt-5">
      {children}
    </div>
  );
}
export function AboutCard({ children, icon: IconComponent, name }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <IconComponent
          height={"25px"}
          width={"25px"}
          color={"#189CA7"}
          className="hidden sm:block"
        />
        <IconComponent
          height={"40px"}
          width={"40px"}
          color={"#189CA7"}
          className="sm:hidden"
        />
        <h3 className="pt-3 text-xl font-semibold">{name}</h3>
      </div>
      <div className="sm:px-6 pt-5">{children}</div>
    </div>
  );
}
