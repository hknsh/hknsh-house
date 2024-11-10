import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/Icons";
import { IconList } from "@/components/IconList";

export function TechnologiesTab() {
	return (
		<Tabs defaultValue="languages" className="w-full bg-neutral-950">
			<TabsList className="flex items-center justify-start flex-wrap h-auto space-y-1 overflow-x-auto bg-neutral-900 text-neutral-100">
				<TabsTrigger value="languages">Languages</TabsTrigger>
				<TabsTrigger value="backend-frameworks">Back-end</TabsTrigger>
				<TabsTrigger value="frontend-frameworks">Front-end</TabsTrigger>
				<TabsTrigger value="devops">DevOps</TabsTrigger>
				<TabsTrigger value="docs_tests">Docs & Tests</TabsTrigger>
				<TabsTrigger value="db_orm">Databases & ORM</TabsTrigger>
			</TabsList>

			<TabsContent value="languages">
				<IconList icons={Icons.languages} />
			</TabsContent>
			<TabsContent value="backend-frameworks">
				<IconList icons={Icons.backend_frameworks} />
			</TabsContent>
			<TabsContent value="frontend-frameworks">
				<IconList icons={Icons.frontend_frameworks} />
			</TabsContent>
			<TabsContent value="devops">
				<IconList icons={Icons.devops} />
			</TabsContent>
			<TabsContent value="docs_tests">
				<IconList icons={Icons.docs_tests} />
			</TabsContent>
			<TabsContent value="db_orm">
				<IconList icons={Icons.db_orm} />
			</TabsContent>
		</Tabs>
	);
}
