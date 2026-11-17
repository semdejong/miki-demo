/** Verticale behangbanen langs de linkerzijde, alleen op breed scherm. */
export default function WallpaperEdge() {
  return (
    <div aria-hidden className="hidden w-[52px] shrink-0 self-stretch min-[1180px]:flex">
      <div className="w-[10px] bg-vlak" />
      <div className="w-px bg-ink/20" />
      <div className="w-[16px] bg-sheet" />
      <div className="w-[3px] bg-olive" />
      <div className="w-[8px] bg-paper" />
      <div className="w-px bg-ink/15" />
      <div className="w-[12px] bg-vlak" />
    </div>
  );
}
