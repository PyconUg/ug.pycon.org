import Image from "next/image";
import Link from "next/link";
import { PYCONUG_EMAIL } from "@/2023/utils/constants";
import Logo from "../../ui/logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="my-10">
            <Logo />
            <p className="py-2">
              PyCon Uganda is one of the Python Conferences you can attend in
              East Africa. We shall talk about Python applications in data, web
              and other domains. This is a platform where Python users,
              developers, library developers and companies that use Python come
              together. This is going to be the <strong>2nd</strong> PyCon
              Conference in Uganda!
            </p>
          </div>
          <div className="my-10">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="/" className="text-neutral-600 dark:text-neutral-200">
                Home
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Tickets
              </a>
            </p>
            <p className="mb-4">
              <Link
                href={"/privacy-policy"}
                className="text-neutral-600 dark:text-neutral-200"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href={"/health-and-safety"}
                className="text-neutral-600 dark:text-neutral-200"
              >
                Health and Safety Guidelines
              </Link>
            </p>
            <p className="mb-4">
              Our PyCon Uganda Editions:
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li className="text-sm text-blue-400 underline">
                  <Link href="/2024">PyCon Uganda 2024</Link>
                </li>
                <li className="text-sm text-blue-400 underline">
                  <Link href="/2023">PyCon Uganda 2023</Link>
                </li>
              </ul>
            </p>
          </div>
          <div className="my-10">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <span>
                {" "}
                NWSC International Resource Center, Bugolobi (IREC) Plot M11 Old
                Portbell Road, Bugolobi, P. O. Box 7053, Kampala, Uganda
              </span>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              {PYCONUG_EMAIL}
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 256 755 488 697
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://ug.pycon.org/"
        >
          Python Software Society of Uganda (PSSU)
        </a>
      </div>
    </footer>
  );
}
