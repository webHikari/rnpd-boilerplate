import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// outlet
import { Layout, FallBack } from "../layouts";

// lazy pages
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

export const Router = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<FallBack />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
