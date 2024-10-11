import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<Button className="m-4 " variant={"muted"}>
				Click Me
			</Button>
			<Button className="m-4 " variant={"teritary"}>
				Click Me
			</Button>
		</div>
	);
}
