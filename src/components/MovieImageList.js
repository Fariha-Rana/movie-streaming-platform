import Image from "next/image";

export default function MovieImageList({src, alt}) {
  return (
    <div className="w-full h-auto rounded-lg">
      <Image
        src={src} 
        alt={alt || "an image"}
        priority={true}
        width={200}
        height={200}
      />
    </div>
  );
}
