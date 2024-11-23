interface DataSummaryProps {
  start: number;
  end: number;
  total: number;
}

const DataSummary: React.FC<DataSummaryProps> = ({ start, end, total }) => {
  return (
    <div className="hidden mx-auto md:block text-slate-500">
      نمایش {start} تا {end} از {total} داده
    </div>
  );
};

export default DataSummary;
