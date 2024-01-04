import { Flex, Card, Text } from "@radix-ui/themes";

export default function TotalRevenue() {
	return (
		<Card variant="classic">
			<Flex direction="row" className="items-center w-full" justify="between">
				<Text as="div" size="2" weight="bold">
					Total Revenue
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
					<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
				</svg>
			</Flex>

			<Text as="div" size="6" weight="bold">
				$45,231.89
			</Text>
			<Text as="div" color="gray" size="1">
				+20.1% from last month
			</Text>
		</Card>
	);
}
