import Image from "next/image";
import Link from "next/link";
// import logo from "@/public/assets/images/logo.png";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/logo.png"} alt="Pycon logo" width={120} height={70} />
    </Link>
  );
}
