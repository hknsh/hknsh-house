import { Icons } from "./Icons";
import { useTranslation } from "react-i18next";

export function ProjectGrid() {
	const { t } = useTranslation();

	const projects = t("projects.list", { returnObjects: true });

	const fetchIcon = (icon) => {
		if (icon.startsWith("https")) {
			return icon;
		}

		switch (icon) {
			case "knedita-light":
				return Icons.projects.Knedita;
			case "portfolio":
				return Icons.projects.Portfolio;
			default:
				return null;
		}
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{Object.entries(projects).map(([key, project]) => (
				<div key={key} className="bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col">
					<div className="flex items-center space-x-4">
						<img
							src={fetchIcon(project.icon)}
							alt={`${project.name} logo`}
							className="h-12 w-12 object-contain rounded-md"
						/>
						<h2 className="text-xl font-semibold">{project.name}</h2>
					</div>

					<p className="text-neutral-300 mt-4">{project.description}</p>
					<p className="text-neutral-400 text-sm mt-2 mb-2">
						{t("projects.license")}: {project.license}
					</p>

					{project.stack && project.stack.length > 0 && (
						<div className="mt-3 mb-4">
							<p className="text-neutral-400 text-sm font-medium">
								{t("projects.stack")}
							</p>
							<ul className="flex flex-wrap gap-2 mt-1">
								{project.stack.map((item, k) => (
									<li
										key={k}
										className="bg-neutral-700 text-neutral-100 px-2 py-1 rounded text-xs"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					)}

					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="block mt-auto text-center bg-indigo-600 text-neutral-100 px-4 py-2 rounded font-semibold hover:bg-indigo-700 transition"
					>
						{t("projects.checkProject")}
					</a>
				</div>
			))}
		</div>
	);
}
