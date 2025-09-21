const BulletPoint = ({
  emoji,
  children
}: {
  emoji: string;
  children: React.ReactNode;
}) => <div className="flex items-center gap-3 mb-3">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
      <span className="text-lg">{emoji}</span>
    </div>
    <span className="text-sm font-medium text-foreground">{children}</span>
  </div>;
const ProblemSolutionSection = () => {
  return <section className="py-12 bg-background">
      <div className="max-w-sm mx-auto px-4">
        {/* Problems */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Por que você não faz um pãozinho de manhã?
          </h2>
          
          <div className="space-y-2">
            <BulletPoint emoji="🍞">Muita sujeira <span className="text-secondary font-bold">!</span></BulletPoint>
            <BulletPoint emoji="😩">Muita louça <span className="text-secondary font-bold">!</span></BulletPoint>
            <BulletPoint emoji="⏰">Tem que ficar sovando <span className="text-secondary font-bold">!</span></BulletPoint>
            <BulletPoint emoji="⏳">Demora pra assar <span className="text-secondary font-bold">!</span></BulletPoint>
            <BulletPoint emoji="💸">Ingredientes caros <span className="text-secondary font-bold">!</span></BulletPoint>
            <BulletPoint emoji="😱">E se não ficar bom<span className="text-secondary font-bold">?</span> Vai tudo fora<span className="text-secondary font-bold">?</span></BulletPoint>
          </div>
        </div>

      </div>
    </section>;
};
export default ProblemSolutionSection;