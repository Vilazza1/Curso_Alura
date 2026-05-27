import Link from "../../Link";

interface MenuListProps extends React.LiHTMLAttributes<HTMLLIElement> {
  href?: string;
}

const MenuItem = ({ children, href = "#" }: MenuListProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
