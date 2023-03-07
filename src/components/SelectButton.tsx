interface SelectButtonProps {
  name: string;
  value: string;
  handleTileChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SelectButton({
  name,
  value,
  handleTileChange,
}: SelectButtonProps) {
  return (
    <button
      onClick={(e) => handleTileChange(e)}
      value={value}
      className="rounded border border-blue-500 bg-transparent py-1 px-3 text-base font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
    >
      {name}
    </button>
  );
}
