export function PageLayout({ children }) {
  return (
    <div className="bg-stripes bg-cover">
      <div className="max-w-[1280px] min-h-[calc(100vh-206px)] m-auto bg-light/75 shadow-md px-4 py-4">
        {children}
      </div>
    </div>
  );
}
export function HomeLayout({ children }) {
  return (
    <div className="bg-stripes bg-cover">
      <div className="max-w-[1280px] min-h-[calc(100vh-206px)] m-auto bg-light/75 shadow-md">
        {children}
      </div>
    </div>
  );
}
export function PageText({ children }) {
  return <div className="text-base">{children}</div>;
}
export function PageHeader({ children }) {
  return (
    <h1 className="flex justify-center text-3xl pb-4 font-semibold">
      {children}
    </h1>
  );
}
export function HorizontalLine() {
  return <div className="w-full border-b-2"></div>;
}
