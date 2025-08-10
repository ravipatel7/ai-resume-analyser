import Navbar from '~/components/Navbar';
import type { Route } from './+types/home';
import { resumes } from '~/constants';
import ResumeCard from '~/components/ResumeCard';
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'ResumeAI' },
		{ name: 'description', content: 'Smart resume builder!' },
	];
}

export default function Home() {
	const { auth } = usePuterStore();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isAuthenticated) navigate('/auth?next=/');
	}, [auth.isAuthenticated]);

	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<Navbar />
			<section className='main-section'>
				<div className='page-heading py-16'>
					<h1>Track Your Applications & Ratings</h1>
					<h2>Review your submission and check AI powered feedback.</h2>
				</div>
				{resumes.length > 0 && (
					<div className='resumes-section'>
						{resumes.map((resume) => (
							<ResumeCard key={resume.id} resume={resume} />
						))}
					</div>
				)}
			</section>
		</main>
	);
}
