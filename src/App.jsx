import { Flex } from "@radix-ui/themes";
import { DashHeading } from "./Components/DashHeading";
import "./index.css";
import TabMenu from "./Components/TabMenu";
import TopMenu from "./Components/TopMenu";

export default function App() {
	return (
		<Flex direction="column" gap="2" p="8" pt="6">
			<Flex direction="column" gap="5">
				<TopMenu />
				<DashHeading />
			</Flex>
			<TabMenu />
		</Flex>
	);
}
