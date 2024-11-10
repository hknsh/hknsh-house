import {
	LocationProvider,
	Route,
	Router,
	hydrate,
	prerender as ssr,
} from "preact-iso";

import { Home } from "@/pages/Home";
import { Header } from "./components/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import './i18n';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}