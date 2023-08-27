import type { ColumnsType } from "antd/es/table";

export interface DataType {
  key: React.Key;
  features: any;
  free: any;
  standard: any;
  membership: any;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Features",
    dataIndex: "features",
  },
  {
    title: "FREE",
    dataIndex: "free",
    sorter: {
      compare: (a, b) => a.free - b.free,
      multiple: 3,
    },
  },
  {
    title: "Standard",
    dataIndex: "standard",
    sorter: {
      compare: (a, b) => a.standard - b.standard,
      multiple: 2,
    },
  },
  {
    title: "Membership",
    dataIndex: "membership",
    sorter: {
      compare: (a, b) => a.membership - b.membership,
      multiple: 1,
    },
  },
];

export const data: DataType[] = [
  {
    key: "1",
    features: "Apply",
    free: "Unlimited",
    standard: "Unlimited",
    membership: "Unlimited",
  },
  {
    key: "2",
    features: "Resume Upload",
    free: 2,
    standard: 5,
    membership: 10,
  },
  {
    key: "3",
    features: "Professional ",
    free: "Only Free",
    standard: "Premium ",
    membership: "Premium ",
  },
  {
    key: "4",
    features: "PDF Resume",
    free: "No",
    standard: "Yes",
    membership: "Yes",
  },
];
