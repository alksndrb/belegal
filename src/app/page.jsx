import Image from "next/image";
import background from "../../public/background.jpg";
export default function Home() {
  return (
    <>
      <div className="text-9xl">
        <Image
          src={background}
          alt="start-background
        "
          className="h-[80vh] object-cover"
        />
      </div>
    </>
  );
}
