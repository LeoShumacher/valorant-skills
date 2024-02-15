"use client";
import Image from "next/image";

interface BannerProps {
  agentImage: string;
  name: string;
  agentType: string;
  agentTypeIcon: string;
}

export default function AgentBanner({
  agentImage,
  name,
  agentType,
  agentTypeIcon,
}: BannerProps) {
  return (
    <div className="w-full flex items-center gap-2">
      <div>
        <Image
          className=""
          src={agentImage}
          alt={""}
          width={300}
          height={400}
        />
      </div>

      <div className="flex flex-col">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl  font-oswald text-primary">
          {name}
        </h2>
        <div className="flex gap-2 text-3xl sm:text-4xl  text-white">
          <Image src={agentTypeIcon} width={40} height={100} alt={""} />
          <p>{agentType}</p>
        </div>
      </div>
    </div>
  );
}
