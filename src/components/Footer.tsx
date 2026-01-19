export function Footer() {
  const footerLinks = {
    "Возможности": ["Планирование", "Разработка", "Аналитика", "Запросы клиентов", "Orbit Asks", "Безопасность", "Мобильное приложение"],
    "Продукт": ["Тарифы", "Методология", "Интеграции", "История изменений", "Документация", "Скачать", "Перейти на Orbit"],
    "Компания": ["О нас", "Клиенты", "Карьера", "Новости", "README", "Качество", "Бренд"],
    "Ресурсы": ["Разработчикам", "Статус", "Стартапам", "Сообщить об уязвимости", "DPA", "Конфиденциальность", "Условия"],
    "Связаться": ["Контакты", "Сообщество", "X (Twitter)", "GitHub", "YouTube"],
  }

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}