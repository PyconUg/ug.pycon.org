import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SpeakerCard({ speaker }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease",
  };

  function handleClick(params) {
    router.push(`/speakers/${speaker.name}`);
  }

  return (
    <div className="space-y-3" onClick={handleClick}>
      <div
        className="text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-72 h-72 mx-auto rounded-full overflow-hidden"
          style={hoverStyles}
        >
          <Image src={speaker?.image} alt="" width={600} height={600} />
        </div>
      </div>{" "}
      <div className="text-center" style={hoverStyles}>
        <div className="">
          <h4 className="font-semibold text-2xl text-gray-700">
            {speaker?.name}
          </h4>
          <p className="text-base text-gray-500">{speaker.position}</p>
        </div>
      </div>
    </div>
  );
}
