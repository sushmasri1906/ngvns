import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className=" bg-gray-200">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
