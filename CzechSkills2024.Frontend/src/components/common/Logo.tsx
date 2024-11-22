import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="Beat Saber logo"
        src="/images/Logo.webp"
        width={50}
        height={0}
      />
    </Link>
  );
}
