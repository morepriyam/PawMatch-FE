"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CSVUpload() {
	const [file, setFile] = useState<File | null>(null);
	const [response, setResponse] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!file) {
			setError("Please select a CSV file");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		try {
			const res = await fetch("http://localhost:8080/api/v1/Pets/upload/csv", {
				method: "POST",
				body: formData,
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const data = await res.text();
			setResponse(data);
			setError(null);
		} catch (err) {
			setError("An error occurred while uploading the file");
			setResponse(null);
			console.error("Error:", err);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Upload CSV File</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Input
								type="file"
								accept=".csv"
								onChange={(e) => setFile(e.target.files?.[0] || null)}
								className="cursor-pointer"
							/>
						</div>
						<Button type="submit" className="w-full">
							Upload
						</Button>
					</form>

					{error && (
						<Alert variant="destructive" className="mt-4">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					{response && (
						<Alert className="mt-4">
							<AlertDescription>{response}</AlertDescription>
						</Alert>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
