const GridItem = ({
	children,
	className = ""
}: Readonly<{
	children: React.ReactNode
	className?: string
}>) => {
	return (
		<div className={`${className} rounded-2xl bg-slate-200 p-8`}>
			{children}
		</div>
	)
}
export default GridItem
