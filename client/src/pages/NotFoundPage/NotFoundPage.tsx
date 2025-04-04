import styles from "./NotFoundPage.module.scss"

function FourDigit() {
	return (
		<div className={styles.FourDigit}>
			<div className={styles.FourDigitLeftStick}></div>
			<div className={styles.FourDigitCenterStick}></div>
			<div className={styles.FourDigitRightStick}></div>
		</div>
	)
}

function ZeroDigit() {
	return (
		<div className={styles.ZeroDigit}>
			<h1>Page not found</h1>
			<p>Sorry, we couldn't find the page you're looking for.</p>
			<div className={styles.SuggestionsContainer}>
				<div className={styles.Suggestion}>
					<h3>Homepage</h3>
				</div>
				<div className={styles.Suggestion}>
					<h3>About us</h3>
				</div>
				<div className={styles.Suggestion}>
					<h3>Need help?</h3>
				</div>
			</div>
		</div>
	)
}

function NotFoundPage() {
	return (
		<div className={styles.DigitsWrapper}>
			<div className={styles.Digits}>
				<FourDigit />
				<ZeroDigit />
				<FourDigit />
			</div>
		</div>
	)
}

export default NotFoundPage
