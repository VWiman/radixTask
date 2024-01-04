import { Tabs } from "@radix-ui/themes";
import Account from "../Pages/Account";

export default function TabMenu() {
	return (
		<Tabs.Root defaultValue="account" className="flex flex-col gap-2">
			<Tabs.List size="2" className="inline-flex border border-neutral-200 max-w-min rounded-lg">
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="documents">Documents</Tabs.Trigger>
				<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
			</Tabs.List>
			<Account />
		</Tabs.Root>
	);
}
