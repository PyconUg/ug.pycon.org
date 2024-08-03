import Image from "next/image";
export default function KeynoteSpeakers({ data }) {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {data?.map((speaker, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <Image
                className="rounded-full object-cover"
                src={speaker.image}
                alt=""
                width={200}
                height={200}
              />
              <h2 className="mt-2 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                {speaker.name}
              </h2>
              <p className="text-base leading-7 text-gray-600">
                {speaker.description}
              </p>
              <ul role="list" className="flex gap-x-6">
                <li>
                  <a
                    href={speaker?.twitterUrl}
                    className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    <span className="sr-only">Twitter | X</span>
                    <svg
                      className="h-5 w-5"
                      x="0px"
                      y="0px"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={speaker?.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
