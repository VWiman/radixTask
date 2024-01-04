import { Flex, Card, Text, Grid, Avatar } from "@radix-ui/themes";

export default function RecentSales() {
	return (
		<Card variant="classic">
			<Grid rows="6" gap="2">
				<Flex direction="column" width="100%">
					<Text as="div" size="2" weight="bold">
						Recent Sales
					</Text>
					<Text as="div" color="gray" size="2">
						You made 265 sales this month.
					</Text>
				</Flex>

				<Flex align="center" justify="between" mt="2">
					<Flex gap="4">
						<Avatar
							radius="full"
							src="src/img/womanOne.png"
							fallback="A"
							className=" border border-neutral-800 self-center"
						/>
						<Grid rows="2">
							<Text weight="bold">Olivia Martin</Text>
							<Text color="gray" size="2">
								olivia.martin@email.com
							</Text>
						</Grid>
					</Flex>

					<Text align="center" weight="bold">
						+$1,999.00
					</Text>
				</Flex>

				<Flex align="center" justify="between" mt="2">
					<Flex gap="4">
						<Avatar
							radius="full"
							src="src/img/manOne.png"
							fallback="A"
							className=" border border-neutral-800 self-center"
						/>
						<Grid rows="2">
							<Text weight="bold">Jackson Lee</Text>
							<Text color="gray" size="2">
								jackson.lee@email.com
							</Text>
						</Grid>
					</Flex>

					<Text align="center" weight="bold">
						+$39.00
					</Text>
				</Flex>

				<Flex align="center" justify="between" mt="2">
					<Flex gap="4">
						<Avatar
							radius="full"
							src="src/img/womanTwo.png"
							fallback="A"
							className=" border border-neutral-800 self-center"
						/>
						<Grid rows="2">
							<Text weight="bold">Isabella Nguyen</Text>
							<Text color="gray" size="2">
								isabella.nguyen@email.com
							</Text>
						</Grid>
					</Flex>

					<Text align="center" weight="bold">
						+$299.00
					</Text>
				</Flex>

				<Flex align="center" justify="between" mt="2">
					<Flex gap="4">
						<Avatar
							radius="full"
							src="src/img/manTwo.png"
							fallback="A"
							className=" border border-neutral-800 self-center"
						/>
						<Grid rows="2">
							<Text weight="bold">William Kim</Text>
							<Text color="gray" size="2">
								will@email.com
							</Text>
						</Grid>
					</Flex>

					<Text align="center" weight="bold">
						+$99.00
					</Text>
				</Flex>
				<Flex align="center" justify="between" mt="2">
					<Flex gap="4">
						<Avatar
							radius="full"
							src="src/img/womanThree.png"
							fallback="A"
							className=" border border-neutral-800 self-center"
						/>
						<Grid rows="2">
							<Text weight="bold">Sofia Davis</Text>
							<Text color="gray" size="2">
								sofia.davis@email.com
							</Text>
						</Grid>
					</Flex>

					<Text align="center" weight="bold">
						+$39.00
					</Text>
				</Flex>
			</Grid>
		</Card>
	);
}
