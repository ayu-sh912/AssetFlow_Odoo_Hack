import SearchInput from "@/components/common/SearchInput";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Props {
  search: string;
  onSearch: (value: string) => void;
  buttonText: string;
}

export default function TableToolbar({
  search,
  onSearch,
  buttonText,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <SearchInput
        value={search}
        onChange={onSearch}
      />

      <PrimaryButton>
        {buttonText}
      </PrimaryButton>

    </div>
  );
}