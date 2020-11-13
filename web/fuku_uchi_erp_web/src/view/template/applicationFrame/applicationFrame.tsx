import React from 'react';
import Navbar from '../../component/navbar/navbar';
import Sidebar from '../../component/sidebar/sidebar';

type Link = {
	id: 'string';
	text: 'string';
	to: 'string';
	icon: any;
	active: boolean;
};

export const applicationFrameProps: {
	username: string;
	links?: Link[];
} = {
	username: 'ゲスト',
};

type Props = typeof applicationFrameProps;

export default function ApplicationFrame(props: Props) {
	return (
		<>
			<Navbar.container></Navbar.container>
			<Sidebar.container>
				<Sidebar.head>
					<Sidebar.userDisplay name={props.username} />
				</Sidebar.head>
				<Sidebar.list>
					{props.links.map((link) => {
						return <Sidebar.link text={link.text} icon={link.icon} active={link.active} />;
					})}
				</Sidebar.list>
			</Sidebar.container>
		</>
	);
}
ApplicationFrame.defaultProps = applicationFrameProps;
