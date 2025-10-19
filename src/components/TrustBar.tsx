import { ShieldCheck, CreditCard, ChartNoAxesCombined, ShoppingCart, Youtube } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "30-Day Money-Back" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: ChartNoAxesCombined, label: "Proven Funnels" },
  { icon: ShoppingCart, label: "Shopify / Stripe Ready" },
  { icon: Youtube, label: "Content Strategy" },
];

const TrustBar = () => {
  return (
    <aside aria-label="Trust and credibility bar" className="w-full bg-card/40 border-b border-border/60">
      <div className="container mx-auto px-4 py-3 overflow-x-auto">
        <div className="flex items-center gap-6 md:gap-10 min-w-max">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
              <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-xs md:text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrustBar;
