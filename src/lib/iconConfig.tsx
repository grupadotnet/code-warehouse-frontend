import { Search, Funnel, Archive, Plus, X, Trash, ArrowUpDown, ChevronDown, ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft, ChevronUp, Pencil, Bell, User, type LucideProps } from "lucide-react";

const Icons = {
  search: Search,
  filter: Funnel,
  plus: Plus,
  editProduct: Archive,
  alert: Bell,
  user: User,
  close: X,
  edit: Pencil,
  trash: Trash,
  sortArrows: ArrowUpDown,
  dropDown: ChevronDown,
  dropUp: ChevronUp,    
  arrowLeft: ChevronLeft,
  arrowRight: ChevronRight,
  doubleArrowLeft: ChevronsLeft,
  doubleArrowRight: ChevronsRight,
};

interface IconProps extends LucideProps {
  name: keyof typeof Icons;
}

export default function Icon({ name, ...props }: IconProps) {
  const Icon = Icons[name];
  return <Icon {...props} />;
}