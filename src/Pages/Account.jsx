import Overview from "../Components/Overview";
import { Flex, Grid, Tabs } from "@radix-ui/themes";
import TotalRevenue from "../Components/TotalRevenue";
import Subscriptions from "../Components/Subscriptions";
import Sales from "../Components/Sales";
import ActiveNow from "../Components/ActiveNow";
import RecentSales from "../Components/RecentSales";

export default function Account() {
	return (
		<Tabs.Content value="account">
			<Flex direction="column" gap="2">
				<Grid columns="4" gap="2">
					<TotalRevenue />
					<Subscriptions />
					<Sales />
					<ActiveNow />
				</Grid>
                <Grid columns="2" gap="2">
					<Overview />
					<RecentSales />
				</Grid>
			</Flex>
		</Tabs.Content>
	);
}
