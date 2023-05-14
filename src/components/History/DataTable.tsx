interface TestData {
  testId: string;
  imageBase64: string;
  result: { positive: number; negative: number };
  includeInReport: boolean;
}

export default function DataTable({ data }: { data: TestData[] }) {
  return <div>Hello</div>;
}
