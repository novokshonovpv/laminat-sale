export function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <form action="/catalog" className={`flex items-center rounded-full border border-[#cfc0ad] bg-white/70 ${compact ? "h-11" : "h-12"}`} role="search">
      <label className="sr-only" htmlFor={compact ? "header-search" : "catalog-search"}>Поиск по каталогу</label>
      <span className="pl-4 text-[#8b7767]" aria-hidden="true">⌕</span>
      <input id={compact ? "header-search" : "catalog-search"} name="q" type="search" placeholder="Название, коллекция или оттенок" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#9a8e83]" />
      <button className="mr-1 rounded-full bg-[#71482e] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#573722]" type="submit">Найти</button>
    </form>
  );
}
