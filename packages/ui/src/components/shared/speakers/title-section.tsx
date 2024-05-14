export default function TitleSection(params) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-5xl text-gray-700">{params?.name}</h4>
      <p className="text-base   text-gray-500">{params?.description}</p>
      <hr className="w-80 bg-gray-300 h-0.5 4" />
    </div>
  );
}
