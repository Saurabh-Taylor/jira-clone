"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();

	return (
		<main className="bg-neutral-100 min-h-screen">
			<div className="mx-auto max-w-screen-2xl p-4">
				<nav className="flex justify-between items-center ">
					<Image src={"/logo.svg"} alt="logo" width={152} height={56} />
					<Button asChild variant={"outline"} className="m-4">
						<Link href={pathName === "/sign-up" ? "/sign-in" : "/sign-up"}>
							{pathName === "/sign-up" ? "Login" : "Sign Up"}
						</Link>
					</Button>
				</nav>
				<div className="flex flex-col items-center justify-center pt-4 md:pt-14 ">
					{children}
				</div>
			</div>
		</main>
	);
}

export default AuthLayout;
