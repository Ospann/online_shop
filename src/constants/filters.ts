type FilterItem = {
  key: string;
  value: string;
};

type Filters = {
  [category: string]: FilterItem[];
};

const Filters: Filters = {
  "Suppliers Types": [
    {
      key: "supplier type",
      value: "Trade Assurance",
    },
    {
      key: "supplier type",
      value: "Verfied Suppliers",
    },
  ],
  "Product Types": [
    {
      key: "type",
      value: "Ready to Ship",
    },
    {
      key: "type",
      value: "Paid Samples",
    },
  ],
  Condition: [
    {
      key: "condition",
      value: "New Stuff",
    },
    {
      key: "condition",
      value: "Second hand",
    },
  ],
};

export default Filters;
