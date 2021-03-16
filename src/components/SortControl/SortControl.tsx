
export interface ISortControlProps {
  options: Record<string, { label: string }>;
  label: string;
}

export function SortControl(props: ISortControlProps) {
  return <div className="botes-sort-control">
    <label>{props.label}</label>
    <select>
      {Object.keys(props.options).map((key) => {
        const value = props.options[key];
        return <option key={key}>{value.label}</option>
      })}
    </select>
  </div>
}