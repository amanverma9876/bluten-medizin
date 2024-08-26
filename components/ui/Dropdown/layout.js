import { DropdownOptions } from "./DropdownOptions";
export default function Layout({ children }) {
  return (
    <div>
      <DropdownOptions />
      {children}
    </div>
  );
}
