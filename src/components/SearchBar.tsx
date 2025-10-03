import type React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};
const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "8px",
        width: "300px",
        border: "1px solid gray",
        background: "white",
      }}
    />
  );
};

export default SearchBar;
