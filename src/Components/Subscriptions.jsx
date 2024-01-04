import { Flex, Card, Text } from "@radix-ui/themes";

export default function Subscriptions() {
	return (
		<Card variant="classic">
			<Flex direction="row" className="items-center w-full" justify="between">
				<Text as="div" size="2" weight="bold">
					Subscriptions
				</Text>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="h-3 w-3">
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
				</svg>
			</Flex>

			<Text as="div" size="6" weight="bold">
				+2350
			</Text>
			<Text as="div" color="gray" size="1">
				+180.1% from last month
			</Text>
		</Card>
	);
}
