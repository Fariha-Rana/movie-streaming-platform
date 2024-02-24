import Image from "next/image";

export default function MovieImageList({src, alt}) {
  return (
    <div className="w-full h-auto rounded-lg">
      <img
        src={src} 
        alt={alt || "an image"}
       className="w-60 h-auto object-cover"
      />
    </div>
  );
}
