export default function ComingSoon() {
  return (
    <div className="py-6 px-6 bg-cream border-t border-b border-gold/20">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0"
              style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
            />
            <div>
              <span className="text-navy font-bold">Prochainement — </span>
              <span className="text-sm text-muted">
                Ouverture de locaux dédiés à Paris pour les cours en présentiel dans un cadre
                professionnel.
              </span>
            </div>
          </div>
          <span className="text-xs tracking-widest uppercase px-5 py-2 flex-shrink-0 font-semibold border border-gold text-gold rounded-full">
            En préparation
          </span>
        </div>
      </div>
    </div>
  )
}
