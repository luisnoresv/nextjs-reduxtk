import '@styles/globals.css';
import '@styles/app.css';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import store from '@store/store';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<SWRConfig value={{ provider: () => new Map() }}>
				<Component {...pageProps} />
			</SWRConfig>
		</Provider>
	);
}

export default MyApp;
