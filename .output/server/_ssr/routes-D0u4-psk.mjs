import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ban, CalendarCheck, ChevronDown, ClipboardList, Clock3, Earth, HeartHandshake, Instagram, Linkedin, Mail, Menu, MessageCircle, MessageSquareHeart, Quote, Rss, ShieldCheck, Target, Users, X } from "../_libs/lucide-react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-D0u4-psk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "4915234650736";
function waLink(text) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
var NAV_LINKS = [
	{
		href: "#sobre",
		label: "Sobre mim"
	},
	{
		href: "#abordagem",
		label: "Abordagem"
	},
	{
		href: "#como-funciona",
		label: "Como funciona"
	},
	{
		href: "#servicos",
		label: "Programas"
	},
	{
		href: "#mentorias",
		label: "Mentorias"
	},
	{
		href: "#faq",
		label: "Perguntas"
	},
	{
		href: "#contato",
		label: "Contato"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-[#4c311c]/10 bg-[#eae8da]/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#topo",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo-horizontal.png",
						alt: "Isabelle Ebener Nutrição Comportamental",
						className: "h-10 w-auto sm:h-12"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 lg:flex xl:gap-7",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-[#4c311c]/80 transition-colors hover:text-[#4c311c]",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Olá, Isabelle! Gostaria de marcar uma consulta."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center rounded-full bg-[#4c311c] px-5 py-2.5 text-sm font-medium text-[#eae8da] transition-colors hover:bg-[#3a2515]",
						children: "Marcar consulta"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex items-center justify-center rounded-full border border-[#4c311c]/20 p-2 lg:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-[#4c311c]/10 bg-[#eae8da] px-5 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-4",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "block py-2 text-base text-[#4c311c]/85",
					onClick: () => setOpen(false),
					children: link.label
				}) }, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waLink("Olá, Isabelle! Gostaria de marcar uma consulta."),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-1 inline-flex items-center rounded-full bg-[#4c311c] px-5 py-2.5 text-sm font-medium text-[#eae8da]",
					onClick: () => setOpen(false),
					children: "Marcar consulta"
				}) })]
			})
		})]
	});
}
function FaqAccordion({ items }) {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-[#4c311c]/15 border-y border-[#4c311c]/15",
		children: items.map((item, index) => {
			const isOpen = openIndex === index;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpenIndex(isOpen ? null : index),
				"aria-expanded": isOpen,
				className: "flex w-full items-center justify-between gap-4 py-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-base sm:text-lg text-[#4c311c]",
					children: item.question
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					"aria-hidden": "true",
					className: `h-5 w-5 flex-shrink-0 text-[#913c1f] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "leading-relaxed text-[#4c311c]/80",
					children: item.answer
				})
			})] }, item.question);
		})
	});
}
function Pumpkin({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 14v-5M27 11c1-3 8-3 9 0",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 16c11 0 18 9 18 20 0 12-9 18-18 18s-18-6-18-18c0-11 7-20 18-20Z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 18c-2 8-2 26 0 34M32 16v38M40 18c2 8 2 26 0 34",
				stroke: "currentColor",
				strokeWidth: "1.3"
			})
		]
	});
}
function Mushroom({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 30c0-11 10-18 22-18s22 7 22 18c-6 3-38 3-44 0Z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "21",
				cy: "24",
				r: "1.4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "20",
				r: "1.6",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "43",
				cy: "25",
				r: "1.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M26 31v16c0 4 3 6 6 6s6-2 6-6V31",
				stroke: "currentColor",
				strokeWidth: "1.6"
			})
		]
	});
}
function Tomato({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 16c-3-4-8-5-11-3M32 16c3-4 8-5 11-3M32 16v4",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "38",
				r: "20",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 30c4 3 9 4 14 4s10-1 14-4",
				stroke: "currentColor",
				strokeWidth: "1.2"
			})
		]
	});
}
function Pea({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 32c0-8 6-16 20-16 12 0 20 6 20 16 0 9-8 16-20 16-13 0-20-7-20-16Z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "21",
				cy: "29",
				r: "6",
				stroke: "currentColor",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "33",
				r: "6.5",
				stroke: "currentColor",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "43",
				cy: "29",
				r: "6",
				stroke: "currentColor",
				strokeWidth: "1.3"
			})
		]
	});
}
function Beet({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 14c2 3 2 7 0 9M36 14c-2 3-2 7 0 9M32 12v11",
				stroke: "currentColor",
				strokeWidth: "1.3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 22c9 0 14 9 14 18 0 10-6 18-14 18s-14-8-14-18c0-9 5-18 14-18Z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 30c4 6 4 20 0 26M40 30c-4 6-4 20 0 26M32 22v36",
				stroke: "currentColor",
				strokeWidth: "1.1"
			})
		]
	});
}
function Carrot({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 12l3 8M28 10l1 8M36 12l-3 8",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 22c0-3 3-4 10-4s10 1 10 4c0 14-5 30-10 30s-10-16-10-30Z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 27c5 1 11 1 16 0M21 34c4 1 10 1 14 0M23 41c3 1 6 1 9 0",
				stroke: "currentColor",
				strokeWidth: "1"
			})
		]
	});
}
var INSTAGRAM_URL = "https://www.instagram.com/isaebener_/";
var LINKEDIN_URL = "https://www.linkedin.com/in/isabelle-ebener-0204651ba/";
var SUBSTACK_URL = "https://substack.com/@isaebenernutri";
var EMAIL = "ebenerisa1@gmail.com";
var TRUST_POINTS = [
	{
		icon: Clock3,
		title: "Acompanhamento próximo",
		text: "Sessões semanais ou quinzenais, com proximidade real durante toda a jornada — você nunca caminha sozinha entre um encontro e outro."
	},
	{
		icon: Earth,
		title: "Encontros online",
		text: "Atendimento 100% online, com flexibilidade de horários em português, inglês ou alemão."
	},
	{
		icon: HeartHandshake,
		title: "Escuta sem julgamento",
		text: "Um espaço acolhedor, gentil e livre para falar sobre a sua relação com você, com seu corpo e com comida."
	}
];
var PILLARS = [
	{
		icon: Pumpkin,
		title: "Olhar Integral",
		text: "Avalio você de forma sistêmica — sono, estresse, autocuidado e gatilhos emocionais. A comida é só uma parte da história: para regular a alimentação, primeiro acolhemos a sua vida.",
		accent: "#b2c442"
	},
	{
		icon: Carrot,
		title: "Autonomia Alimentar",
		text: "Devolvo o controle do seu corpo a você, sem listas de permitidos ou proibidos. Você sai com ferramentas e organização para escolher com consciência — liberdade no lugar da rigidez.",
		accent: "#e48e37"
	},
	{
		icon: Tomato,
		title: "Afeto e Presença",
		text: "Resgatamos o prazer de comer e a atenção plena à mesa, sem terrorismo nutricional. Comida também é celebração e afeto: nenhum prato precisa carregar medo.",
		accent: "#913c1f"
	}
];
var DIFFERENTIALS = [
	{
		icon: Clock3,
		text: "Cansou das dietas restritivas e quer aprender a comer de forma saudável de vez, com constância."
	},
	{
		icon: HeartHandshake,
		text: "Sente-se perdida entre o que comer e como se organizar na correria do dia a dia."
	},
	{
		icon: ClipboardList,
		text: "Vive no ciclo do \"começo na segunda e desisto na quarta\" e busca hábitos que realmente durem."
	},
	{
		icon: MessageSquareHeart,
		text: "Pacientes vegetarianos e veganos."
	},
	{
		icon: Ban,
		text: "Carrega culpa e frustração com a comida e quer fazer as pazes com o prato."
	},
	{
		icon: Target,
		text: "Busca emagrecimento ou performance, mas quer um processo humanizado, sem milagres."
	}
];
var TESTIMONIALS = [
	{
		quote: "Com a Isa, entendi que emagrecer de forma constante vem de mudar o estilo de vida, não de mais uma dieta. Já perdi bons quilos, sem restrição, sem culpa e sem medo.",
		name: "Júlia Maciel"
	},
	{
		quote: "A Isa não fez só um plano alimentar — organizou minha rotina inteira e me ajudou na transição pro vegetarianismo. Cada consulta termina com um plano de ação prático. Recomendo demais!",
		name: "Felipe Fioravanti"
	},
	{
		quote: "Com a Isa, o acompanhamento virou leve e divertido — nunca chato. O cuidado e a didática dela me ajudaram muito no tratamento da DM1, e as metas que traçamos juntas mostram evolução real a cada passo",
		name: "Maíra Gabriely"
	}
];
var STEPS = [
	{
		number: "01",
		title: "Encontro de 20 minutos",
		text: "Uma conversa curta, gratuita e sem compromisso. Vamos nos conhecer, alinhar expectativas e escolher juntas o melhor programa para o seu momento."
	},
	{
		number: "02",
		title: "Diagnóstico + consulta inicial",
		text: "Você preenche um formulário detalhado e fazemos a primeira consulta, de 1h30, para olhar de perto sua rotina, saúde e comportamento alimentar."
	},
	{
		number: "03",
		title: "Acompanhamento contínuo",
		text: "Sessões semanais ou quinzenais, no ritmo certo para você. A cada encontro, um plano de ação prático — e suporte direto entre as consultas."
	}
];
var SERVICES = [
	{
		icon: Pumpkin,
		accent: "#e48e37",
		title: "Programa Trimestral",
		text: "Acompanhamento contínuo de 3 meses, com consultas de 1h e check-ins quinzenais ou semanais online. Tempo para criar uma rotina e fazer as pazes com a comida.",
		image: "/images/servicos/avulsas.jpg.jpg "
	},
	{
		icon: Beet,
		accent: "#913c1f",
		title: "Programa Semestral",
		text: "O mesmo cuidado humanizado, por 6 meses. O mais indicado para quem vive uma relação mais desgastada com a comida — efeito sanfona, comer emocional ou culpa constante.",
		image: "/images/servicos/exames.jpg.jpg"
	},
	{
		icon: Mushroom,
		accent: "#b2c442",
		title: "Consulta de Manutenção",
		text: "Exclusiva para quem já passou por acompanhamento comigo e quer revisar metas ou adaptar a rotina a uma nova fase da vida.",
		image: "/images/servicos/manutencao.jpg.jpg"
	},
	{
		icon: Pea,
		accent: "#351935",
		title: "Avaliação e Solicitação de Exames",
		text: "Atendimento pontual para analisar exames, identificar deficiências de vitaminas e fazer ajustes nutricionais clínicos a partir dos resultados.",
		image: "/images/servicos/semestral.jpg.jpg"
	},
	{
		icon: Tomato,
		accent: "#4c311c",
		title: "Pacote de Consultas Avulsas",
		text: "Pacotes de 3 ou 5 consultas para quem quer um acompanhamento estruturado, no próprio ritmo, sem o compromisso de um programa longo.",
		image: "/images/servicos/trimestral.jpg.jpg"
	}
];
var MENTORIA_GATHERING = [{
	icon: Users,
	title: "Encontros em grupo",
	text: "Reuniões para troca de experiências, dinâmicas comportamentais, suporte mútuo e palestras de educação nutricional."
}, {
	icon: ClipboardList,
	title: "Consultas individuais",
	text: "Atendimentos exclusivos e personalizados para ajustar as suas metas, a rotina e os exames."
}];
var FAQ_ITEMS = [
	{
		question: "O atendimento é só online?",
		answer: "Sim, todo o acompanhamento é feito online, por videochamada — o que permite atender pacientes no Brasil e em toda a Europa com a mesma qualidade de escuta."
	},
	{
		question: "Em quais idiomas você atende?",
		answer: "As consultas acontecem em português. Caso seja necessário, também é possível conversar em inglês ou alemão — é só combinar antes de agendar."
	},
	{
		question: "Como funciona o pagamento?",
		answer: "O pagamento é combinado diretamente por WhatsApp após o encontro inicial de 20 minutos, quando definimos junto qual programa faz mais sentido para você."
	},
	{
		question: "Preciso seguir uma dieta restritiva?",
		answer: "Não. O trabalho é construído em cima de comportamento alimentar e hábitos sustentáveis — sem contagem de calorias, sem listas de proibidos e sem promessas de resultado rápido."
	},
	{
		question: "Mentoria em grupo substitui o acompanhamento individual?",
		answer: "Não. A mentoria em grupo é um espaço de aprendizagem compartilhada — comunidade, conversa e ferramentas práticas. Os Programas são o acompanhamento 1:1: sessões suas, anamnese, orientações personalizadas e, nos programas contínuos, suporte no WhatsApp. Dá para viver um, o outro, ou os dois, conforme o seu momento. O que faz sentido a gente define juntas no WhatsApp."
	},
	{
		question: "Você atende vegetarianos, veganos e esportistas?",
		answer: "Sim. O plano é sempre adaptado à sua rotina, seus valores e seus objetivos — inclusive performance, emagrecimento saudável e alimentação vegetariana ou vegana."
	}
];
function CTAButton({ href, variant = "primary", children }) {
	const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors";
	const styles = variant === "primary" ? "bg-[#4c311c] text-[#eae8da] hover:bg-[#3a2515]" : "border border-[#4c311c] text-[#4c311c] hover:bg-[#4c311c]/10";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		...href.startsWith("http") ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		className: `${base} ${styles}`,
		children
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-xs uppercase tracking-[0.25em] text-[#913c1f]",
		children
	});
}
function LandingPage() {
	(0, import_react.useEffect)(() => {
		const root = document.querySelector("#topo");
		if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const targets = root.querySelectorAll("section > div, section > div > div, section article, section figure, section blockquote");
		targets.forEach((target) => target.classList.add("motion-reveal"));
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -36px 0px"
		});
		targets.forEach((target) => observer.observe(target));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "topo",
		className: "bg-[#eae8da]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 pb-20 pt-14 sm:px-8 sm:pt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Nutrição Comportamental · Online " }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-display text-3xl leading-tight text-[#4c311c] sm:text-5xl sm:leading-tight",
							children: "Por uma relação mais gentil: com você, com seu corpo e com a comida."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-[#4c311c]/85",
							children: "Um acompanhamento nutricional que une afeto, memórias e comportamento — sem dietas, sem restrições e longe de contagem de calorias."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								href: waLink("Olá, Isabelle! Gostaria de marcar uma consulta."),
								children: "Marcar consulta"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								href: INSTAGRAM_URL,
								variant: "secondary",
								children: "Ver no Instagram"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-md lg:max-w-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute -left-6 -top-8 h-[92%] w-[92%]",
							style: {
								backgroundColor: "#b2c44240",
								borderRadius: "46% 54% 62% 38% / 42% 40% 60% 58%"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/isabellelimao.jpeg",
							alt: "Isabelle Ebener sorrindo",
							className: "relative aspect-[4/5] w-full object-cover shadow-[0_28px_60px_-30px_rgba(76,49,28,0.45)]",
							style: { borderRadius: "180px 180px 180px 24px" }
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3",
					children: TRUST_POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6 text-center shadow-[0_1px_0_rgba(76,49,28,0.06)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(point.icon, {
								className: "mx-auto h-7 w-7 text-[#913c1f]",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base text-[#4c311c]",
								children: point.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-[#4c311c]/75",
								children: point.text
							})
						]
					}, point.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sobre",
				className: "px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-5xl gap-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/isabelletoranja.jpeg",
								alt: "Isabelle Ebener sorrindo, segurando fatias de toranja",
								className: "absolute inset-0 h-full w-full rounded-[2rem] border border-[#4c311c]/15 object-cover shadow-[0_8px_24px_rgba(76,49,28,0.15)]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-6 -right-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border-4 border-[#eae8da] bg-[#eae8da] p-2 shadow-[0_8px_20px_rgba(76,49,28,0.2)] sm:h-36 sm:w-36 sm:p-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/logo-badge.png",
									alt: "Selo Isabelle Ebener Nutrição Comportamental",
									className: "h-full w-full object-contain"
								})
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Sobre mim" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
							children: "Isabelle Ebener"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-[#4c311c]/85",
							children: "Sou nutricionista comportamental e acredito que mudança de hábito de verdade e a construção de um estilo de vida mais saudável não nasce de mais uma dieta (eu não sigo dieta rs), ela nasce do autoconhecimento, da paciência com o próprio processo e do entendimento de que não há uma rotina 100% perfeita. Meu trabalho é conduzir esse caminho junto com você, e te mostrar que o comer vai muito além do prato."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-2.5 text-sm text-[#4c311c]/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]",
										"aria-hidden": "true"
									}), "CRN 92060"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]",
										"aria-hidden": "true"
									}), "Formada pela UNESP"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]",
										"aria-hidden": "true"
									}), "Formação em Nutrição Comportamental pelo Instituto Nutrição Comportamental"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]",
										"aria-hidden": "true"
									}), "Especializanda como Terapeuta Nutricional na Alemanha"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								href: waLink("Olá, Isabelle! Vi o site e queria saber mais sobre o acompanhamento."),
								children: "Falar no WhatsApp"
							})
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "abordagem",
				className: "bg-[#e2decb] px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Minha abordagem" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
									children: "Comportamental, sem dietas, sem contagem de calorias."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-relaxed text-[#4c311c]/85",
									children: "Comer vai muito além de contar calorias. A alimentação é uma expressão viva de quem somos — histórias, emoções, cultura e prazer. Atuo sem prescrever dietas: o caminho é reconectar você aos sinais do próprio corpo, com leveza e sem julgamento. Cuidado humanizado, no ritmo da sua rotina. Vamos resgatar o equilíbrio e a paz com o seu prato?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-3",
							children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-11 w-11 items-center justify-center rounded-full",
										style: { backgroundColor: `${pillar.accent}30` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, {
											className: "h-6 w-6",
											style: { color: pillar.accent }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-lg text-[#4c311c]",
										children: pillar.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-[#4c311c]/80",
										children: pillar.text
									})
								]
							}, pillar.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-12 text-center font-display text-xl text-[#4c311c]",
							children: "Meu atendimento é para você que:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-4 sm:grid-cols-2",
							children: DIFFERENTIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-xl bg-[#eae8da] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "mt-0.5 h-5 w-5 flex-shrink-0 text-[#913c1f]",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-[#4c311c]/85",
									children: item.text
								})]
							}, item.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								href: "#como-funciona",
								variant: "secondary",
								children: "Ver como funciona"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-16 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg italic leading-relaxed text-[#4c311c] sm:text-[1.35rem]",
						children: "“Por aqui, quero te mostrar que a comida cura… e que você pode conquistar tudo na vida, mas se não tiver saúde, não tem nada. Nutrição nunca foi sobre comer menos, mas sim sobre comer certo — para que você se sinta bem no seu próprio corpo, sem culpa e sem restrições.”"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-16 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Depoimentos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
							children: "Histórias de quem viveu o processo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-3",
						children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									className: "h-5 w-5 text-[#913c1f]/50",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-2.5 text-sm leading-relaxed text-[#4c311c]/85",
									children: [
										"“",
										t.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "mt-4 text-xs uppercase tracking-wide text-[#913c1f]",
									children: t.name
								})
							]
						}, t.quote))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "como-funciona",
				className: "bg-[#e2decb] px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Como funciona" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
							children: "Três passos para começar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-12 max-w-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 right-0 top-6 hidden h-px bg-[#4c311c]/20 sm:block",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 sm:grid-cols-3",
							children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center sm:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4c311c] font-display text-lg text-[#eae8da] sm:mx-0",
										children: step.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-lg text-[#4c311c]",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-[#4c311c]/80",
										children: step.text
									})
								]
							}, step.number))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, {
							href: waLink("Olá, Isabelle! Gostaria de agendar o encontro de 20 minutos."),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Agendar encontro de 20 minutos"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "servicos",
				className: "px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Programas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
								children: "Um programa para cada momento"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-8 sm:grid-cols-2",
							children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group overflow-hidden rounded-2xl border border-[#4c311c]/12 bg-[#eae8da]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-44 items-center justify-center overflow-hidden",
									style: {
										backgroundImage: `url(${service.image})`,
										backgroundSize: "cover",
										backgroundPosition: "center"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0",
										style: {
											backgroundColor: service.accent,
											opacity: .45
										},
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { className: "relative h-16 w-16 text-white transition-transform duration-500 ease-out group-hover:scale-110" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-[#4c311c]",
											children: service.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-[#4c311c]/80",
											children: service.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: waLink(`Olá, Isabelle! Quero saber mais sobre o ${service.title}.`),
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-2 text-sm font-medium text-[#913c1f] hover:text-[#4c311c]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
													className: "h-4 w-4",
													"aria-hidden": "true"
												}), "Falar no WhatsApp sobre este programa"]
											})
										})
									]
								})]
							}, service.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[#4c311c]/25 p-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-[#4c311c]/75",
								children: "Nos programas contínuos e no grupo: consulta inicial completa (1h30) com anamnese detalhada, guia de orientações nutricionais, solicitação de exames, aplicativo de acompanhamento, ferramentas de mudança comportamental, plano de metas prático, suporte direto via WhatsApp, comunidade de pacientes e materiais de apoio exclusivos."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#mentorias",
								className: "mt-3 inline-block text-sm font-medium text-[#913c1f] hover:text-[#4c311c]",
								children: "Conheça também as mentorias em grupo"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "mentorias",
				className: "bg-[#e2decb] px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-[#4c311c]/10 bg-[#eae8da] px-6 py-12 sm:px-12 sm:py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Mentorias em grupo" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
										children: "Um grupo fechado de 10 mulheres"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 leading-relaxed text-[#4c311c]/85",
										children: "Um processo exclusivo para quem busca emagrecimento saudável sem abrir mão do prazer de comer. Unimos a força e o acolhimento do grupo ao cuidado individualizado que a sua rotina precisa."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 text-center font-display text-sm uppercase tracking-[0.18em] text-[#913c1f]",
								children: "Como funciona a dinâmica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: MENTORIA_GATHERING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-[#4c311c]/10 bg-[#e2decb]/50 p-6 text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: "h-5 w-5 text-[#913c1f]",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-lg text-[#4c311c]",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-[#4c311c]/85",
											children: item.text
										})
									]
								}, item.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, {
									href: waLink("Olá, Isabelle! Quero entrar na lista de espera do grupo de mentoria."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Quero entrar na lista de espera do grupo"]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Conteúdo vivo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
								children: "Acompanhe o dia a dia do consultório"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#4c311c]/80",
								children: "Conteúdo educativo e sem julgamento, direto no Instagram e na newsletter."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									className: "mx-auto h-8 w-8 text-[#913c1f]",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg text-[#4c311c]",
									children: "@isaebener_"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-[#4c311c]/80",
									children: "Bastidores, dicas comportamentais e reflexões sobre comida, corpo e afeto."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
										href: INSTAGRAM_URL,
										variant: "secondary",
										children: "Seguir no Instagram"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, {
									className: "mx-auto h-8 w-8 text-[#913c1f]",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg text-[#4c311c]",
									children: "Newsletter no Substack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-[#4c311c]/80",
									children: "Textos mais longos sobre comportamento alimentar direto na sua caixa de entrada."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
										href: SUBSTACK_URL,
										variant: "secondary",
										children: "Assinar a newsletter"
									})
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "bg-[#e2decb] px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Perguntas frequentes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl",
							children: "Ficou com alguma dúvida?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordion, { items: FAQ_ITEMS })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contato",
				className: "px-5 py-20 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo-badge.png",
							alt: "Isabelle Ebener Nutrição Comportamental",
							className: "mx-auto h-40 w-40 sm:h-48 sm:w-48"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-2xl text-[#4c311c] sm:text-3xl",
							children: "Vamos agendar uma consulta?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl leading-relaxed text-[#4c311c]/85",
							children: "Me escreva contando um pouco da sua rotina — a resposta chega ainda no mesmo dia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CTAButton, {
								href: waLink("Olá, Isabelle! Vim pelo site e gostaria de conversar."),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), "Falar no WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${EMAIL}`,
								className: "inline-flex items-center gap-2 text-sm text-[#4c311c]/80 hover:text-[#4c311c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), EMAIL]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-center gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: INSTAGRAM_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Instagram",
									className: "text-[#4c311c] transition-colors hover:text-[#913c1f]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKEDIN_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "LinkedIn",
									className: "text-[#4c311c] transition-colors hover:text-[#913c1f]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SUBSTACK_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Substack",
									className: "text-[#4c311c] transition-colors hover:text-[#913c1f]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rss, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-5 py-10 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "hidden h-4 w-4 text-[#4c311c]/50 sm:block",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-[#4c311c]/60",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Isabelle Ebener Nutrição Comportamental. CRN 92060."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-[#4c311c]/60",
						children: "Atendimento online — Brasil e Europa."
					})]
				})
			})
		]
	});
}
export { LandingPage as component };
