import React from "react";

interface AvatarGroupProps {
  images: string[];
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ images }) => {
  return (
    <div className="flex -space-x-3">
      {images.slice(0, 5).map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Happy client ${idx + 1}`}
          loading="lazy"
          className="w-12 h-12 rounded-full border-4 border-accent object-cover shadow-soft"
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
