import React, { FC } from 'react';

const LoginFacebookButton: FC = () => {
	return (
		<button className="flex items-center text-white bg-sky-400 hover:bg-sky-600 w-60 h-10 p-2 mt-10 rounded-lg">
			<svg className='inline' width="30" height="32" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M35 17.6074C35 7.8818 27.1644 -0.00195312 17.5 -0.00195312C7.83123 0.000234375 -0.00439453 7.8818 -0.00439453 17.6096C-0.00439453 26.3968 6.39623 33.6812 14.7612 35.0024V22.6977H10.3206V17.6096H14.7656V13.7268C14.7656 9.31461 17.3797 6.87773 21.3762 6.87773C23.2925 6.87773 25.294 7.22117 25.294 7.22117V11.5524H23.0869C20.9147 11.5524 20.2365 12.9109 20.2365 14.3043V17.6074H25.0884L24.314 22.6955H20.2344V35.0002C28.5994 33.679 35 26.3946 35 17.6074Z" fill="#F4F4F4"/>
			</svg>
			<span className='ml-5'>Login with Facebook</span>
		</button>
	);
};

export default LoginFacebookButton;

