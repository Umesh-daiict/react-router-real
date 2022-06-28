import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Quotes of Day</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/q' activeClassName={classes.active}>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to='/new' activeClassName={classes.active}>
							Add your Quote
						</NavLink>
					</li>
					<li></li>
				</ul>
			</nav>
		</header>
	);
};
export default MainNavigation;
