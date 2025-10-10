export default function SocialProof() {
  const companies = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm text-muted-foreground mb-12">
          Trusted by leading manufacturers and service teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-32 h-12 bg-muted rounded-md flex items-center justify-center"
              data-testid={`logo-${index}`}
            >
              <span className="text-xs font-medium text-foreground">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
