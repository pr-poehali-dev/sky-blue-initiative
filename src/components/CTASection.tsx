export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
            Планируй сегодня. Создавай будущее.
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Связаться с нами
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm shadow-lg shadow-primary/20">
              Начать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}