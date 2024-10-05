import Grid from "@/components/ui/Grid"
import Header from "@/components/ui/Header"

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="w-[1200px] rounded-3xl p-4 bg-slate-600 flex flex-col gap-4">
				<Header />
				<Grid />
			</div>
		</div>
	)
}
