import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function IconList({ icons }) {
	return (
		<div className="flex mt-4">
			<ScrollArea className="flex-1 w-full whitespace-nowrap rounded-md border border-neutral-800 p-2">
				<div className="flex w-max space-x-4 p-4">
					{Object.entries(icons).map(([key, IconComponent]) => (
						<div key={key} className="flex flex-col items-center p-2 md:p-4">
							<img src={IconComponent} alt={key} className="w-8 h-8 md:w-12 md:h-12" />
							<span className="mt-2 capitalize">{key}</span>
						</div>
					))}
				</div>
				<ScrollBar orientation="horizontal" className="mt=2" />
			</ScrollArea>
		</div>
	);
}
