import { FC } from "react"

const MarqueeIcon = ({ icon: Icon }: { icon: FC<any> }) => {
	return (
		<div style={{ marginRight: "20px", cursor: "pointer" }}>
			<Icon size={40} />
		</div>
	)
}

export default MarqueeIcon
