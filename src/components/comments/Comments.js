import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import classes from './Comments.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';
const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
	const params = useParams();
	const { qid } = params;
	useEffect(() => {
		sendRequest(qid);
	}, [qid, sendRequest]);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	const addCommentHandler = useCallback(() => {
		sendRequest(qid);
	}, [sendRequest, qid]);

	let comments;
	if (status === 'pending') {
		comments = (
			<div className='centered'>
				<LoadingSpinner />
			</div>
		);
	}
	if (status === 'completed' && loadedComments && loadedComments.length > 0) {
		comments = <CommentsList comments={loadedComments} />;
	}
	if (
		status === 'completed' &&
		(!loadedComments || loadedComments.length === 0)
	) {
		comments = <p className='centered'>No Comments Added</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm qid={params.qid} onAddedComment={addCommentHandler} />
			)}
			{comments}
		</section>
	);
};

export default Comments;
