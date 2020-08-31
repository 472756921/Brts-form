import React from 'react';
import PagePanel from '../../component/pagePanel';
import ComponentPanel from '../../component/componentPanel';
import Styles from './home.less';

const Home = () => {
	return (
		<div className={Styles.home}>
			<div className={Styles.pagePanel}>
				<PagePanel />
			</div>
			<div className={Styles.componentsPanel}>
				<ComponentPanel />
			</div>
			<div className={Styles.queryPanel}></div>
		</div>
	);
};

export default Home;
