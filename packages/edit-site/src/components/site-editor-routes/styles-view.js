/**
 * Internal dependencies
 */
// import Editor from '../editor';
import SidebarNavigationScreenGlobalStyles from '../sidebar-navigation-screen-global-styles';
//import GlobalStylesUIWrapper from '../sidebar-global-styles-wrapper';
import StylesEditor from '../styles-editor';

export const stylesViewRoute = {
	name: 'styles-view',
	match: ( params ) => {
		return (
			params.path &&
			params.path.startsWith( '/wp_global_styles' ) &&
			params.canvas !== 'edit'
		);
	},
	areas: {
		// content: <GlobalStylesUIWrapper />,
		sidebar: <SidebarNavigationScreenGlobalStyles backPath={ {} } />,
		preview: <StylesEditor />,
		// mobile: <GlobalStylesUIWrapper />,
	},
	widths: {
		content: 380,
	},
};
