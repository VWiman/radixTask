import { Flex, Card, Text } from "@radix-ui/themes";

export default function Sales() {
	return (
		<Card variant="classic">
			<Flex direction="row" className="items-center w-full" justify="between">
				<Text as="div" size="2" weight="bold">
					Sales
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
					<rect width="20" height="14" x="2" y="5" rx="2"></rect>
					<path d="M2 10h20"></path>
				</svg>
			</Flex>

			<Text as="div" size="6" weight="bold">
				+12,234
			</Text>
			<Text as="div" color="gray" size="1">
				+19% from last month
			</Text>
		</Card>
	);
}
