import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return   <Link href={"/"}>
    <Image src={
      "/assets/images/logo.png"
    } alt="Pycon logo" width={120} height={70} />
  </Link>
}