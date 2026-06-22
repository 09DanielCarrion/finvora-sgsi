import { Search } from "lucide-react";

export default function SearchFilter({ value, onChange, placeholder = "Search...", filters = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <div className="relative flex-1 min-w-[200px]">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-base-surface border border-border-subtle rounded-md pl-9 pr-3 py-2 text-sm font-body text-text-primary placeholder-text-secondary focus:outline-none focus:border-border-active"
        />
      </div>
      {filters.map((filter) => (
        <select
          key={filter.label}
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          className="bg-base-surface border border-border-subtle rounded-md px-3 py-2 text-sm font-body text-text-primary focus:outline-none focus:border-border-active"
        >
          <option value="">{filter.label}</option>
          {filter.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
