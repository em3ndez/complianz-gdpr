import { create } from 'zustand';
import * as cmplz_api from '../../utils/api';

export const UseCookieScanData = create( ( set, get ) => ( {
	initialLoadCompleted: false,
	setInitialLoadCompleted: ( initialLoadCompleted ) =>
		set( { initialLoadCompleted } ),
	iframeLoaded: false,
	loading: false,
	nextPage: false,
	progress: 0,
	cookies: [],
	lastLoadedIframe: '',
	setIframeLoaded: ( iframeLoaded ) => set( { iframeLoaded } ),
	setLastLoadedIframe: ( lastLoadedIframe ) => set( { lastLoadedIframe } ),
	setProgress: ( progress ) => set( { progress } ),
	fetchProgress: () => {
		const data = {};
		// In-flight guard: a second concurrent call would spawn a parallel
		// get_scan_progress request server-side (two PHP workers racing through
		// wsc_scan_process). Callers relying on the response must not bypass this.
		if ( get().loading ) {
			return Promise.resolve( null );
		}
		set( { loading: true } );
		return cmplz_api
			.doAction( 'get_scan_progress', data )
			.then( ( response ) => {
				set( {
					initialLoadCompleted: true,
					loading: false,
					nextPage: response.next_page,
					progress: response.progress,
					cookies: response.cookies,
				} );
				return response;
			} );
	},
} ) );
