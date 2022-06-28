import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';
const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === 'completed') {
			history.push('/q');
		}
	}, [status, history]);

	const addQuoteHander = (data) => {
		sendRequest(data);
		console.log(data);
	};
	return (
		<section>
			<h1>Write Your Quote of Day </h1>
			<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHander} />
		</section>
	);
};
export default NewQuote;
