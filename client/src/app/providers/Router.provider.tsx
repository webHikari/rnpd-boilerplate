import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// outlet
import { Layout, FallBack } from "../layouts";

// lazy pages
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"))
const PrivacyPage = lazy(() => import("pages/PrivacyPage/PrivacyPage"))

export const Router = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<FallBack />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="privacy" element={<PrivacyPage />} />
						
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
