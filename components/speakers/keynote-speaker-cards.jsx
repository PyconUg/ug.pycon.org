import { KEYNOTESPEAKERS } from "./keynote-speakers-data";

export default function KeynoteSpeakers() {
	return (
		<div className="py-4">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{KEYNOTESPEAKERS.map((speaker, i) => (
						<li key={i} className="flex flex-col items-center text-center">
							<img className=" size-64 rounded-full object-cover" src={speaker.image} alt="" />
							<h2 className="mt-2 text-xl font-semibold leading-8 tracking-tight text-gray-900">{speaker.name}</h2>
							<ul role="list" className="flex gap-x-6">
								<li>
									<a href={speaker?.twitterUrl} className="text-gray-400 hover:text-gray-500 cursor-pointer">
										<span className="sr-only">Twitter | X</span>
										<svg className="h-5 w-5" x="0px" y="0px" viewBox="0 0 50 50" fill="currentColor">
											<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
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
