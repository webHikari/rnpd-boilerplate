import { Outlet } from "react-router-dom"
import { Header } from "widgets/Header/Header"
export const DefaultPage = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	)
}
