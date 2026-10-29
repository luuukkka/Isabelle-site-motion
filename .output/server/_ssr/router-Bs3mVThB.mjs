import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/router-Bs3mVThB.js
var import_jsx_runtime = require_jsx_runtime();
var description = "Isabelle Ebener Nutrição Comportamental: consultas online no Brasil e na Europa, sem dietas restritivas. Nutrição além do prato — um caminho de volta para si.";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Isabelle Ebener Nutrição Comportamental" },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: "Isabelle Ebener Nutrição Comportamental"
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/images/logo-badge.png"
			}
		],
		links: [{
			rel: "icon",
			href: "/favicon.ico"
		}, {
			rel: "apple-touch-icon",
			href: "/apple-touch-icon.png"
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter = () => import("./routes-D0u4-psk.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { getRouter };
