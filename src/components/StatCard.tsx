interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

export const StatCard = ({ number, label, description }: StatCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
      <div className="relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
        <div className="space-y-2">
          <div className="text-5xl md:text-6xl font-bold text-primary">{number}</div>
          <div className="text-xl font-semibold text-foreground">{label}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};
