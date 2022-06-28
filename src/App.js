import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/Allq';
import NewQuote from './pages/newq';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/qDetail';
function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/q' />
				</Route>
				<Route path='/q' exact>
					<AllQuotes />
				</Route>
				<Route path='/q/:qid'>
					<QuoteDetail />
				</Route>
				<Route path='/new'>
					<NewQuote />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
