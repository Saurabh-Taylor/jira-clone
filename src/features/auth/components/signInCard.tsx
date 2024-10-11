import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const signInSchema = z.object({
	email: z.string().trim().email(),
	password: z.string().min(1, "Required"),
});

export const SignInCard = () => {
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof signInSchema>) => {
		console.log(values);
	};

	return (
		<Card className="w-full h-full md:w-[487px] border-none shadow-none">
			<CardHeader className="p-7 flex items-center justify-center text-center ">
				<CardTitle className="text-2xl">Welcome Back!</CardTitle>
			</CardHeader>
			<div className="px-7 mb-2">
				<Separator />
			</div>
			<CardContent className="p-7">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="email"
											placeholder="Enter Email Address"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="password"
											placeholder="Enter Password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button className="w-full" size={"lg"} disabled={false}>
							Login
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardContent>
				<p className="text-sm font-semibold text-center">
					<span> Don&apos;t have an account? </span>
					<Link className="text-blue-700 hover:underline" href={"/sign-up"}>
						Sign Up
					</Link>{" "}
				</p>
			</CardContent>

			<div className="px-7 mb-4	">
				<Separator />
			</div>
			<CardContent className="p-7 flex flex-col gap-y-4">
				<Button
					variant="secondary"
					className="w-full"
					size={"lg"}
					disabled={false}
				>
					<FcGoogle className="mr-2 text-xl" /> Login With Google
				</Button>
				<div className="text-center font-bold text-sm"> Or</div>
				<Button
					variant="secondary"
					className="w-full px-2"
					size={"lg"}
					disabled={false}
				>
					<FaGithub className="mr-2 text-xl" /> Login With Github
				</Button>
			</CardContent>
		</Card>
	);
};
