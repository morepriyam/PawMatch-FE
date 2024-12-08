"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FieldErrors {
	[key: string]: string;
}

export default function Page() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		address: "",
		username: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
	const { toast } = useToast();
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		// Clear the error for this field when the user starts typing
		setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setFieldErrors({});

		try {
			const response = await fetch("http://localhost:8080/users/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					role: "USER",
					active: true,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				toast({
					title: "Registration Successful",
					description: `Welcome, ${data.username}! Your account has been created.`,
				});
				setTimeout(() => {
					router.push("/users/login");
				}, 2000);
			} else {
				const errorData = await response.json();
				if (errorData.errors) {
					const newFieldErrors: FieldErrors = {};
					errorData.errors.forEach((error: any) => {
						const fieldName = error.propertyPath;
						newFieldErrors[fieldName] = error.interpolatedMessage;
					});
					setFieldErrors(newFieldErrors);
				} else {
					throw new Error("Registration failed");
				}
			}
		} catch (error) {
			toast({
				title: "Registration Failed",
				description:
					"There was an error creating your account. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			<main className="flex-grow flex items-center justify-center px-4 py-12">
				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
					<h1 className="text-2xl font-bold mb-6 text-center">
						Sign Up for PawMatch
					</h1>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
								{fieldErrors.firstName && (
									<p className="text-red-500 text-sm mt-1">
										{fieldErrors.firstName}
									</p>
								)}
							</div>
							<div>
								<Label htmlFor="lastName">Last Name</Label>
								<Input
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
								{fieldErrors.lastName && (
									<p className="text-red-500 text-sm mt-1">
										{fieldErrors.lastName}
									</p>
								)}
							</div>
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							{fieldErrors.email && (
								<p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
							)}
						</div>
						<div>
							<Label htmlFor="phoneNumber">Phone Number</Label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								type="tel"
								value={formData.phoneNumber}
								onChange={handleChange}
								required
							/>
							{fieldErrors.phoneNumber && (
								<p className="text-red-500 text-sm mt-1">
									{fieldErrors.phoneNumber}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="address">Address</Label>
							<Input
								id="address"
								name="address"
								value={formData.address}
								onChange={handleChange}
								required
							/>
							{fieldErrors.address && (
								<p className="text-red-500 text-sm mt-1">
									{fieldErrors.address}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
							/>
							{fieldErrors.username && (
								<p className="text-red-500 text-sm mt-1">
									{fieldErrors.username}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								required
							/>
							{fieldErrors.password && (
								<p className="text-red-500 text-sm mt-1">
									{fieldErrors.password}
								</p>
							)}
						</div>
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? "Signing Up..." : "Sign Up"}
						</Button>
					</form>
					<p className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="/users/login" className="text-blue-600 hover:underline">
							Log in
						</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
