import { Flex, Card, Text } from "@radix-ui/themes";

export default function ActiveNow() {
	return (
		<Card variant="classic">
			<Flex direction="row" className="items-center w-full" justify="between">
				<Text as="div" size="2" weight="bold">
					Active Now
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
					<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
				</svg>
			</Flex>

			<Text as="div" size="6" weight="bold">
				+573
			</Text>
			<Text as="div" color="gray" size="1">
				+201 since last hour
			</Text>
		</Card>
	);
}
