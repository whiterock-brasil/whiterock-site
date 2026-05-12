"use client";

import { useState } from "react";

const services = [
  {
    id: "plano-negocios",
    title: "Plano de Negócios",
    price: "R$ 4.500",
    description:
      "Estruture ou reorganize sua empresa com um plano completo, incluindo planejamento estratégico, marketing, operacional, análise de mercado e plano financeiro. Desenvolvemos cenários e indicadores de viabilidade para apoiar a tomada de melhores decisões gerenciais.",
    icon: "📋",
  },
  {
    id: "precificacao",
    title: "Precificação",
    price: "R$ 2.500",
    description:
      "Descubra o valor real dos seus produtos ou serviços. Análise de custos, margem de contribuição, ponto de equilíbrio e estratégia de preços para maximizar seu lucro sem perder competitividade.",
    icon: "💰",
  },
  {
    id: "controles-basicos",
    title: "Controles Financeiros Básicos",
    price: "R$ 2.500",
    description:
      "Aprenda a controlar seu fluxo de caixa, contas a pagar e receber, e organize suas finanças com ferramentas simples. Ensino prático para você mesmo executar no dia a dia.",
    icon: "📊",
  },
  {
    id: "controles-avancados",
    title: "Controles Financeiros Avançados",
    price: "R$ 3.500",
    description:
      "Vá além do básico com DRE gerencial, análise de indicadores financeiros, orçamento empresarial e projeções. Capacitação completa para uma gestão financeira profissional.",
    icon: "📈",
  },
  {
    id: "viabilidade",
    title: "Estudo de Viabilidade Econômico-Financeira",
    price: "R$ 4.500",
    description:
      "Avalie se seu projeto ou expansão é financeiramente viável antes de investir. Análise completa com TIR, VPL, payback e cenários para decisões seguras e embasadas.",
    icon: "🔍",
  },
  {
    id: "bpo",
    title: "BPO Gerencial-Financeiro",
    price: "R$ 1.497/mês",
    description:
      "Terceirize sua gestão financeira com um especialista dedicado. Relatórios mensais, dashboards, projeções de fluxo de caixa e reuniões de revisão para você tomar decisões com confiança e escalar seu negócio.",
    icon: "🏢",
  },
];

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos a fundo a realidade financeira da sua empresa. Coletamos dados, identificamos gargalos e oportunidades.",
  },
  {
    step: "02",
    title: "Estratégia",
    description:
      "Desenhamos um plano de ação sob medida. Cada entrega é pensada para gerar resultados concretos no seu negócio.",
  },
  {
    step: "03",
    title: "Execução",
    description:
      "Não entregamos apenas um relatório e vamos embora. Acompanhamos a implementação lado a lado com você e sua equipe.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description:
      "Revisões periódicas, ajustes de rota e suporte contínuo. Seu sucesso financeiro é o nosso objetivo.",
  },
];

const faqs = [
  {
    q: "Vocês fazem contabilidade?",
    a: "Não. Nosso foco é a gestão financeira gerencial: planejamento, controle, projeções e análise de resultados. Para questões contábeis e fiscais, recomendamos que você mantenha (ou contrate) um escritório de contabilidade. Inclusive, podemos trabalhar em parceria com seu contador.",
  },
  {
    q: "Para quem é o serviço de BPO Gerencial?",
    a: "Pequenas e médias empresas que faturam acima de R$ 30 mil/mês e precisam de visão financeira profissional para crescer com segurança, mas ainda não têm estrutura (ou necessidade) de um CFO interno.",
  },
  {
    q: "Quanto tempo leva um Plano de Negócios?",
    a: "Em média, de 30 a 45 dias, dependendo da complexidade do negócio e da disponibilidade dos dados pela contratante. O cronograma exato é definido na proposta.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Para projetos pontuais (Plano de Negócios, Precificação, Viabilidade), trabalhamos com 50% na assinatura e 50% na entrega. Para o BPO Gerencial, o valor é mensal, com primeiro mês adiantado.",
  },
  {
    q: "Atendem empresas fora de Brasília?",
    a: "Sim! Atendemos remotamente empresas em todo o Brasil. Reuniões são feitas por videochamada e toda comunicação flui pelo WhatsApp. Se necessário, visitas presenciais pontuais podem ser combinadas.",
  },
  {
    q: "Qual a diferença entre Controles Básicos e Avançados?",
    a: "O Básico foca em fluxo de caixa, contas a pagar/receber e organização financeira inicial — ideal para quem está começando. O Avançado inclui DRE, indicadores (margem, lucratividade, EBITDA), orçamento e projeções — para quem já fatura e quer profissionalizar a gestão.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#00AFEF]/95 backdrop-blur border-b border-brand-400">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold tracking-tight">
            <span className="text-white">White</span>
            <span className="text-gray-900">Rock</span>
            <span className="text-white/90 text-base ml-2 font-bold hidden sm:inline">
              Consultoria
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-base font-bold">
            <a href="#servicos" className="text-white/70 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="text-white/70 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#quem-sou" className="text-white/70 hover:text-white transition-colors">
              Quem Sou
            </a>
            <a href="#faq" className="text-white/70 hover:text-white transition-colors">
              Dúvidas
            </a>
            <a
              href="https://wa.me/5561999888282?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WhiteRock"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00AFEF] px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors font-semibold"
            >
              Fale Comigo
            </a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0090C7] px-4 pb-4 space-y-2">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-white">Serviços</a>
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-white">Como Funciona</a>
            <a href="#quem-sou" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-white">Quem Sou</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-white">Dúvidas</a>
            <a
              href="https://wa.me/5561999888282?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WhiteRock"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-white font-medium"
            >
              Fale Comigo →
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Consultoria para pequenas empresas em todo o Brasil
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Mais controle.{" "}
            <span className="text-brand-500">Menos preocupação.</span>
            {" "}Mais lucro.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ajudamos pequenas empresas de todo o Brasil a organizar suas finanças e a potencializar sua geração de lucros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5561999888282?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WhiteRock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600 transition-all shadow-lg shadow-brand-200 hover:shadow-xl hover:shadow-brand-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale Comigo no WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto text-center">
            {[
              { value: "+1.000", label: "Empresas Assessoradas" },
              { value: "15+", label: "Anos de Experiência" },
              { value: "Brasil", label: "Atendimento Nacional" },
              { value: "+R$ 50Mi", label: "em Projetos Viabilizados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-brand-600">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2">
              Nossos Serviços
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Soluções financeiras sob medida
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Do planejamento à execução, encontre o serviço certo para o momento da sua empresa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300 flex flex-col"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400">A partir de</p>
                    <p className="text-xl font-bold text-brand-600">{service.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/5561999888282?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2">
              Metodologia
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Como funciona
            </h2>
            <p className="text-gray-500 mt-3">
              Um processo claro e transparente, da primeira conversa ao resultado.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="text-4xl font-bold text-brand-200 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Sou */}
      <section id="quem-sou" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-10 items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                LS
              </div>
            </div>
            <div>
              <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2">
                Quem está à frente
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Leandro Simões
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Bacharel em Administração pela <strong>Universidade de Brasília (UnB)</strong>.{" "}
                <strong>MBA em Gestão Empresarial</strong> e{" "}
                <strong>MBA em Finanças & Controladoria pela USP</strong>.
                Registro ativo no <strong>CRA/DF nº 027584</strong>.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                São <strong>15 anos de experiência</strong> em consultoria de gestão,
                finanças e captação de recursos. Auxiliei milhares de empresas de todo o Brasil a
                organizarem suas finanças, viabilizarem projetos e tomarem decisões
                embasadas em dados — da pequena empresa ao grande empreendimento.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  leandro@whiterock.business
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Brasília/DF — Atendimento remoto para todo o Brasil
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2">
              Dúvidas Frequentes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Perguntas que sempre recebo
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato / Footer */}
      <section id="contato" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Pronto para transformar suas finanças?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Agende uma conversa sem compromisso. Entendo seu momento e mostro como podemos trabalhar juntos.
          </p>
          <a
            href="https://wa.me/5561999888282?text=Ol%C3%A1%2C%20Leandro!%20Gostaria%20de%20conversar%20sobre%20consultoria%20financeira%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-900/30"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <span>leandro@whiterock.business</span>
            <span className="hidden sm:block">·</span>
            <span>(61) 999.888.282</span>
            <span className="hidden sm:block">·</span>
            <span>Brasília/DF — Brasil</span>
          </div>
          <div className="mt-6 text-xs text-gray-600">
            WhiteRock Consultoria DF LTDA · CNPJ: 22.215.045/0001-16 · CRA/DF 027584
          </div>
        </div>
      </section>
    </div>
  );
}
