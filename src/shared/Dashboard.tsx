export type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  link?: string;
  children?: MenuItem[];
};

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  link?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    link,
    children,
    label,
  };
}
