import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

type ProductImageShowcaseProps = {
  image: string;
  alt: string;
  badge?: string;
  stone?: boolean;
};

const woodRows = ["", "-scale-x-100", "", "-scale-x-100", ""];

export function ProductImageShowcase({ image, alt, badge, stone = false }: ProductImageShowcaseProps) {
  const imageSrc = assetPath(image);
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ccbd] bg-[#e5ddd2] shadow-[0_18px_45px_rgba(74,53,36,0.08)]">
      {stone ? (
        <div className="relative aspect-[295/149]">
          <Image src={imageSrc} alt={alt} fill priority quality={95} sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        </div>
      ) : (
        <div aria-label={alt} role="img">
          {woodRows.map((transform, index) => (
            <div key={index} className="relative aspect-[714/111] overflow-hidden border-b border-black/10 last:border-b-0">
              <Image src={imageSrc} alt="" fill priority={index === 0} quality={95} sizes="(max-width: 1024px) 100vw, 55vw" className={`object-cover ${transform}`} />
            </div>
          ))}
        </div>
      )}
      {badge && <span className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-xs font-semibold shadow-sm sm:left-7 sm:top-7">{badge}</span>}
      <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#f7f1e8]/92 px-5 py-4 text-sm font-medium text-[#5e4b3b] shadow-sm backdrop-blur-sm sm:inset-x-7 sm:bottom-7">Образец из каталога поставщика · без генерации изображения</div>
    </div>
  );
}
