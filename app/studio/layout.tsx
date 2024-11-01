export const metadata = {
    title: "Sanity Studio",
    description: "Sanity Studio for the Ecommerce App",
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en">
        <body>{children}</body>
    </html>
    )
}