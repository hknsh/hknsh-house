import { TechnologiesTab } from "@/components/TechnologiesTab";
import { Separator } from "@/components/ui/separator";
import { useState } from "preact/hooks";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";

export function Home() {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();
	const [, setCurrentLanguage] = useState<string>(language);

	useEffect(() => {
		const storedLanguage = localStorage.getItem("language");
		if (storedLanguage) {
			setCurrentLanguage(storedLanguage);
			changeLanguage(storedLanguage);
		}
	}, [changeLanguage]);

	const handleChangeLanguage = (lang: string) => {
		setCurrentLanguage(lang);
		changeLanguage(lang);
		localStorage.setItem("language", lang);
	};
	return (
		<>
			<Header />

			<div id="home" className="md:flex-center flex-col pt-24">
				<div className="flex flex-col items-start justify-center p-4">
					<div className="space-y-8 mt-4 md:mt-7">
						<h1 className="title">{t("hello")}</h1>
						<p className="text">{t("introduction")}</p>
						<div className="flex flex-col space-y-1 text-left items-start">
							<p className="text">{t("i18n")}</p>
							<div className="space-y-2">
								<ul className="flex flex-row space-x-2">
									<li>
										<button
											type="button"
											onClick={() => handleChangeLanguage("en")}
											className="link text"
										>
											English,
										</button>
									</li>
									<li>
										<button
											type="button"
											onClick={() => handleChangeLanguage("pt")}
											className="link text"
										>
											Português do Brasil,
										</button>
									</li>
									<li>
										<button
											type="button"
											onClick={() => handleChangeLanguage("ja")}
											className="link text"
										>
											日本語
										</button>
									</li>
								</ul>
							</div>
						</div>
						<p className="break-words text">{t("description")}</p>
					</div>

					<Separator className="my-8 bg-neutral-700" />

					<div>
						<div className="space-y-10 mt-4 md:mt-7">
							<h1 className="title">{t("technologies")}</h1>
							<TechnologiesTab />
						</div>
					</div>

					<Separator className="my-8 bg-neutral-700" />

					<div id="projects">
						<div className="space-y-10 mt-4 md:mt-7">
							<h1 className="title">{t("projects_contributions")}</h1>
							<ProjectGrid />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
