import { KEYNOTESPEAKERS } from "./keynote-speakers-data";

export default function KeynoteSpeakers() {
	return (
		<div className="py-4">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{KEYNOTESPEAKERS.map((speaker, i) => (
						<li key={i}>
							<img className=" size-64 rounded-full object-cover" src={speaker.image} alt="" />
							<h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{speaker.name}</h3>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
