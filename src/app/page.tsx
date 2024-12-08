import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/global/navbar";
import { Input } from "@/components/ui/input";
import { Search, Heart, MessageCircle, PawPrint } from "lucide-react";
import Link from "next/link";

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Black_and_Brown_Dog_Breeds_14b2f8b6-4fee-4d93-b9f7-be7bc415e597.jpg?v=1696310874')] bg-cover bg-center">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
									Find Your Perfect Furry Friend
								</h1>
								<p className="mx-auto max-w-[700px] text-white md:text-xl">
									Connect with local shelters, browse pet profiles, and start
									your adoption journey today.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input
										className=" bg-primary-foreground max-w-lg flex-1"
										placeholder="Search for pets..."
										type="text"
									/>
									<Button type="submit">
										<Search className="h-4 w-4" />
										<span className="sr-only">Search</span>
									</Button>
								</form>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							How PawMatch Works
						</h2>
						<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
							<div className="flex flex-col items-center space-y-4">
								<Search className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">Browse Pets</h3>
								<p className="text-center text-muted-foreground">
									Search and filter through our database of adorable pets
									waiting for their forever homes.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<Heart className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">Apply to Adopt</h3>
								<p className="text-center text-muted-foreground">
									Found your perfect match? Submit an adoption application
									directly through our platform.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<MessageCircle className="h-12 w-12 text-primary" />
								<h3 className="text-xl font-bold">Connect with Shelters</h3>
								<p className="text-center text-muted-foreground">
									Communicate with shelter admins and get updates on your
									application status.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
							<div className="flex flex-col items-center space-y-4">
								<img
									alt="Happy adopted dog"
									className="aspect-square overflow-hidden rounded-lg object-cover object-center"
									height="300"
									src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=3093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									width="300"
								/>
								<h3 className="text-xl font-bold">Max</h3>
								<p className="text-center text-muted-foreground">
									Max found his forever home through PawMatch. His new family
									couldn't be happier!
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<img
									alt="Cute cat ready for adoption"
									className="aspect-square overflow-hidden rounded-lg object-cover object-center"
									height="300"
									src="https://images.unsplash.com/photo-1518378188025-22bd89516ee2?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									width="300"
								/>
								<h3 className="text-xl font-bold">Luna</h3>
								<p className="text-center text-muted-foreground">
									Luna is still waiting for her perfect match. Could it be you?
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<img
									alt="Happy family with adopted pet"
									className="aspect-square overflow-hidden rounded-lg object-cover object-center"
									height="300"
									src="https://energync.org/wp-content/uploads/2017/04/iStock_000020612034_XXXLarge_small.jpg"
									width="300"
								/>
								<h3 className="text-xl font-bold">The Johnson Family</h3>
								<p className="text-center text-muted-foreground">
									"PawMatch made our adoption process so smooth. We're so
									grateful for our new family member!"
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Ready to Find Your Perfect Match?
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Join PawMatch today and start your journey to pet parenthood.
									Thousands of loving animals are waiting to meet you.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<div className="flex flex-col gap-2">
									<Link href="users/register">
										<Button className="w-full">Sign Up</Button>
									</Link>

									<div className="text-muted-foreground text-sm">
										Already have an account?
									</div>
									<Link href="users/login">
										<Button className="w-full bg-primary-foreground text-primary hover:bg-white">
											Login
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
