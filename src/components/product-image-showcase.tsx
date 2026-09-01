import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

type ProductImageShowcaseProps = {
  image: string;
  alt: string;
  badge?: string;
};

export function ProductImageShowcase({ image, alt, badge }: ProductImageShowcaseProps) {
  const imageSrc = assetPath(image);
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ccbd] bg-[#e5ddd2] shadow-[0_18px_45px_rgba(74,53,36,0.08)]">
      <div className="relative aspect-[714/220] bg-[radial-gradient(circle_at_center,#f7f1e8_0%,#e5ddd2_72%)]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain px-[4%] py-[5%] drop-shadow-[0_12px_14px_rgba(74,53,36,0.18)]"
        />
      </div>
      {badge && <span className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-xs font-semibold shadow-sm sm:left-7 sm:top-7">{badge}</span>}
      <div className="border-t border-[#d8ccbd] bg-[#f7f1e8] px-5 py-3 text-center text-xs font-medium text-[#5e4b3b]">Образец из каталога поставщика · без генерации изображения</div>
    </div>
  );
}
