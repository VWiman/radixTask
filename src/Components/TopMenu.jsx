import { DropdownMenu, Button, Flex, Avatar, Tabs, TextField } from "@radix-ui/themes";

export default function TopMenu() {
	return (
		<Flex direction="row" gap="4" align="center" justify="between">
			<Flex>
				{" "}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						<Button variant="outline">
							<Avatar
								size="1"
								radius="full"
								src="src/img/womanFour.png"
								fallback="A"
								className=" border border-neutral-800 self-center"
							/>
							Frida <span>&#8595;</span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Item shortcut="⌘ E">Settings</DropdownMenu.Item>
						<DropdownMenu.Item shortcut="⌘ D">Log out</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</Flex>
			<Flex align="center" gap="2" direction="row">
				<Tabs.Root defaultValue="account" className="flex flex-col gap-2">
					<Tabs.List size="1">
						<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
						<Tabs.Trigger value="customers">Customers</Tabs.Trigger>
						<Tabs.Trigger value="settings">Products</Tabs.Trigger>
						<Tabs.Trigger value="cettings">Settings</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			</Flex>
			<Flex gap="2">
				<TextField.Root size="1">
					<TextField.Slot></TextField.Slot>
					<TextField.Input placeholder=" Search..." size="1" />
				</TextField.Root>
				<Avatar
					size="1"
					radius="full"
					src="src/img/womanFour.png"
					fallback="A"
					className=" border border-neutral-800 self-center"
				/>
			</Flex>
		</Flex>
	);
}
