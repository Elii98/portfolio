import Image from "next/image"
import GridItem from "./GridItem"
import { Caveat } from "next/font/google"
import { SocialIcon } from "react-social-icons"

const caveat = Caveat({
	subsets: ["latin"],
	weight: ["400"]
})

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/Accordion"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import {
	Html5Plain,
	Css3Plain,
	TailwindcssOriginal,
	SassOriginal,
	PostmanPlain,
	AmazonwebservicesPlainWordmark,
	DockerPlain,
	ExpressOriginalWordmark,
	FastapiPlainWordmark,
	FigmaPlain,
	FirebasePlain,
	GithubOriginal,
	GooglecloudPlain,
	JavascriptPlain,
	JqueryPlain,
	LaravelOriginal,
	MongodbPlain,
	MongooseOriginal,
	MysqlOriginal,
	NextjsPlain,
	NodejsPlain,
	PhpPlain,
	PythonOriginal,
	ReactOriginal,
	SocketioOriginal,
	TypescriptOriginal,
	VercelOriginal,
	ViteOriginal,
	VscodeOriginal,
	WoocommercePlain,
	WordpressPlain
} from "devicons-react"
import MarqueeIcon from "./MarqueeIcon"

const Grid = () => {
	return (
		<div className="flex gap-4">
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<GridItem className="w-[500px] h-[300px] leading-6 text-2xl flex flex-col justify-center">
						<div className="font-bold">
							Redefining what’s possible
						</div>
						<div>Development with you in mind</div>
						<div>Let’s not state the obvious, we ROCK</div>
					</GridItem>
					<GridItem className="relative overflow-hidden grow">
						<div className="absolute top-0">
							<span className={`${caveat.className}`}>
								Hair grew Longer!
							</span>
							<Image
								src="/arrow-curved-down.png"
								width={20}
								height={20}
								alt="curved arrow down"
							/>
						</div>
						<div className="absolute top-1/3 right-2 flex gap-4">
							<Image
								src="/arrow-curved-left.png"
								width={40}
								height={40}
								alt="curved arrow down"
							/>
							<span className={`${caveat.className}`}>
								That's me!
							</span>
						</div>
						<Image
							className="absolute bottom-0 left-[-20px] max-w-none"
							src="/ali-empty.png"
							width={280}
							height={200}
							alt="Ali Ibrahim Face Shot"
						/>
					</GridItem>
				</div>
				<div className="flex gap-4 grow">
					<GridItem className="w-[400px] relative">
						<Marquee pauseOnHover direction="right">
							<MarqueeIcon icon={Html5Plain} />
							<MarqueeIcon icon={Css3Plain} />
							<MarqueeIcon icon={TailwindcssOriginal} />
							<MarqueeIcon icon={SassOriginal} />
							<MarqueeIcon icon={JavascriptPlain} />
							<MarqueeIcon icon={ReactOriginal} />
							<MarqueeIcon icon={TypescriptOriginal} />
							<MarqueeIcon icon={JqueryPlain} />
							<MarqueeIcon icon={SassOriginal} />
							<MarqueeIcon icon={PhpPlain} />
							<MarqueeIcon icon={PythonOriginal} />
						</Marquee>
						<Marquee
							pauseOnHover
							direction="left"
							style={{ marginTop: "20px" }}>
							<MarqueeIcon
								icon={AmazonwebservicesPlainWordmark}
							/>
							<MarqueeIcon icon={DockerPlain} />
							<MarqueeIcon icon={FirebasePlain} />
							<MarqueeIcon icon={GooglecloudPlain} />
							<MarqueeIcon icon={MongodbPlain} />
							<MarqueeIcon icon={MongooseOriginal} />
							<MarqueeIcon icon={WordpressPlain} />
							<MarqueeIcon icon={FastapiPlainWordmark} />
							<MarqueeIcon icon={SocketioOriginal} />
							<MarqueeIcon icon={VercelOriginal} />
							<MarqueeIcon icon={WoocommercePlain} />
						</Marquee>
						<Marquee
							pauseOnHover
							direction="right"
							style={{ marginTop: "20px" }}>
							<MarqueeIcon
								icon={AmazonwebservicesPlainWordmark}
							/>
							<MarqueeIcon icon={PostmanPlain} />
							<MarqueeIcon icon={ExpressOriginalWordmark} />
							<MarqueeIcon icon={FigmaPlain} />
							<MarqueeIcon icon={GithubOriginal} />
							<MarqueeIcon icon={LaravelOriginal} />
							<MarqueeIcon icon={MysqlOriginal} />
							<MarqueeIcon icon={MysqlOriginal} />
							<MarqueeIcon icon={NextjsPlain} />
							<MarqueeIcon icon={NodejsPlain} />
							<MarqueeIcon icon={ViteOriginal} />
							<MarqueeIcon icon={VscodeOriginal} />
						</Marquee>
					</GridItem>
					<div className="w-[350px] flex flex-col gap-4">
						<GridItem className="flex grow justify-between items-center bg-yellow-100">
							<div className="w-full text-center font-bold text-3xl">
								Contact me
							</div>
						</GridItem>
						<div className="flex justify-between">
							<GridItem className="!p-3">
								<SocialIcon
									href="https://wa.me/96181156678"
									network="whatsapp"
									className="transition-all hover:scale-110"
								/>
							</GridItem>
							<GridItem className="!p-3">
								<SocialIcon
									href="https://www.linkedin.com/in/ali-ibrahim-b44b06155/"
									network="linkedin"
									className="transition-all hover:scale-110"
								/>
							</GridItem>
							<GridItem className="!p-3">
								<SocialIcon
									href="mailto:alimouhan.ibrahim@gmail.com"
									network="email"
									className="transition-all hover:scale-110"
								/>
							</GridItem>
							<GridItem className="!p-3">
								<SocialIcon
									href="https://github.com/Elii98"
									network="github"
									className="transition-all hover:scale-110"
								/>
							</GridItem>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 grow">
				<GridItem className="grow">
					<Accordion type="single" collapsible defaultValue="item1">
						<AccordionItem
							value="item1"
							className="border-b border-gray-600">
							<AccordionTrigger className="font-bold">
								Danny's Vintage Watches
							</AccordionTrigger>
							<AccordionContent>
								<Link
									href="https://dannysvintagewatches.com"
									target="_blank">
									<Image
										className="w-full rounded-2xl h-[200px]"
										src="/danny.png"
										width={500}
										height={300}
										alt="Danny's Vintage Watches Landing page"
									/>
								</Link>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem
							value="item2"
							className="border-b border-gray-600">
							<AccordionTrigger className="font-bold">
								Danny's Vintage Watches
							</AccordionTrigger>
							<AccordionContent>
								<Link
									href="https://dannysvintagewatches.com"
									target="_blank">
									<Image
										className="w-full rounded-2xl h-[200px]"
										src="/danny.png"
										width={500}
										height={300}
										alt="Danny's Vintage Watches Landing page"
									/>
								</Link>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</GridItem>
			</div>
		</div>
	)
}
export default Grid
