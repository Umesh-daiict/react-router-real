import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = () => {
	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);
	const params = useParams();
	const match = useRouteMatch();

	useEffect(() => {
		sendRequest(params.qid);
		console.log('as say');
	}, [sendRequest, params.qid]);

	if (status === 'pending') {
		return (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <div className='centered focused'>{error}</div>;
	}
	if (!loadedQuote.text) {
		return <NoQuotesFound />;
	}

	return (
		<>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

			<Route path={match.path} exact>
				<div className='centered'>
					{' '}
					<Link className='btn--flat' to={`/q/${params.qid}/comment`}>
						Add Comment On Quote
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comment`}>
				<Comments />
			</Route>
		</>
	);
};
export default QuoteDetail;
