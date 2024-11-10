export function NotFound() {
	return (
		<section className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-xl font-medium">Looks like you are lost!</h1>
			<br />
			<a href="/" className="text-base font-medium link">
				Let's go back home
			</a>
		</section>
	);
}
