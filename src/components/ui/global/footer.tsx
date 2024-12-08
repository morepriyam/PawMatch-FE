import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 w-full bg-background border-t border-border shadow-sm h-10">
			<div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
				<p className="text-xs text-muted-foreground mb-2 sm:mb-0">
					© 2024 PawMatch. All rights reserved.
				</p>
				<nav className="flex gap-4">
					<Link
						className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						href="#"
					>
						Terms of Service
					</Link>
					<Link
						className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						href="#"
					>
						Privacy
					</Link>
				</nav>
			</div>
		</footer>
	);
}
