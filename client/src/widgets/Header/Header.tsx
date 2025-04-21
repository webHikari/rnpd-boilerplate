import { ReactNode } from "react"
import { NavLink, Link } from "react-router-dom"
import { TbWorld } from "react-icons/tb";

import styles from "./Header.module.scss"

interface HeaderLinkProps {
	path: string;
	children: ReactNode;
}

const HeaderLink = ({ path, children }: HeaderLinkProps) => {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive ? styles.NavLinkActive : styles.NavLink
			}
		>
			{children}
		</NavLink>
	)
}


export const Header = () => {

	return (
		<header className={styles.Header}>
			<div className={styles.Logo}>
				<Link className={styles.LogoLink} to="/">
					<TbWorld className={styles.WorldIcon} />
					Boilerplate
				</Link>				
			</div>
			<nav>
				<HeaderLink path="/">Home</HeaderLink>
				<HeaderLink path="/about">About us</HeaderLink>
				<HeaderLink path="/privacy">Privacy Policy</HeaderLink>
				<HeaderLink path="/">Support</HeaderLink>
				<HeaderLink path="/404">404</HeaderLink>
			</nav>
			<div>
				<Link className={styles.SuperLink} to="/auth">Sign Up</Link>				
			</div>
		</header>
	)
}
