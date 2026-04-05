export function Card({ children }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-4">
      {children}
    </div>
  );
}