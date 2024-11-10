import { useTranslation } from "react-i18next";

export function Header() {
	const { t } = useTranslation();
	const scroll = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="flex-center">
			<header className="h-18 fixed left-0 right-0 top-0 bg-neutral-950 p-8 text-xl">
				<div className="mx-auto p-4">
					<nav className="flex-center space-x-5 md:space-x-12">
						<button
							type="button"
							onClick={() => scroll("home")}
							className="link whitespace-nowrap"
						>
							{t('header.home')}
						</button>
						<button
							type="button"
							onClick={() => scroll("projects")}
							className="link whitespace-nowrap"
						>
							{t('header.projects')}
						</button>
						<a href="https://social.hknsh.com" class="link whitespace-nowrap">
							{t('header.social')}
						</a>
						<a href="https://git.hknsh.com/hknsh" class="link">
							{t('header.git')}
						</a>
					</nav>
				</div>
			</header>
		</div>
	);
}
