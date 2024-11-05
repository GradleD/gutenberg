/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { privateApis as routerPrivateApis } from '@wordpress/router';
import {
	parse,
	createBlock,
	__unstableSerializeAndClean,
} from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	BlockList,
	privateApis as blockEditorPrivateApis,
	store as blockEditorStore,
	__unstableEditorStyles as EditorStyles,
	__unstableIframe as Iframe,
	BlockPreview,
	BlockContextProvider,
} from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback, useMemo, memo, useContext } from '@wordpress/element';
import { useInstanceId, useReducedMotion } from '@wordpress/compose';

import {
	privateApis as editorPrivateApis,
	EditorProvider,
} from '@wordpress/editor';
import {
	EntityProvider,
	useEntityBlockEditor,
	store as coreDataStore,
} from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import { store as editSiteStore } from '../../store';
import { GlobalStylesRenderer } from '../global-styles-renderer';
import GlobalStylesUI from '../global-styles/ui';
import CanvasLoader from '../canvas-loader';
import { Async } from '../async';
import usePatternSettings from '../page-patterns/use-pattern-settings';
import { useSpecificEditorSettings } from '../block-editor/use-site-editor-settings';

function isObjectEmpty( object ) {
	return ! object || Object.keys( object ).length === 0;
}

function useBlockEditorProps( post, template, mode ) {
	const [ templateBlocks ] = useEntityBlockEditor(
		'postType',
		template?.type,
		{
			id: template?.id,
		}
	);

	return templateBlocks;
}

const { mergeBaseAndUserConfigs } = unlock( editorPrivateApis );
const { useHistory, useLocation } = unlock( routerPrivateApis );
const {
	ExperimentalBlockEditorProvider,
	GlobalStylesContext,
	useGlobalStylesOutputWithConfig,
	useGlobalStylesOutput,
	__unstableBlockStyleVariationOverridesWithConfig,
} = unlock( blockEditorPrivateApis );
const EMPTY_ARRAY = [];
// This is used to avoid rendering the block list if the sizes change.
const MemoizedBlockList = memo( BlockList );

export default function StylesEditor() {
	/*

		A component that renders Global styles controls UI and an editor canvas with the current global styles applied.

		The editor canvas is a rendered block list with the global styles applied.

		The editor "canvas" can also render the style book.

		If there's a global styles post id passed to this component, we should fetch it,
		so we can build the styles. The globalStylesId is the initial global styles record to render.

		Internally, it can use other global style objects.

		FUTURE: Ideally, the component should handle any merged style object passed to it via props.

		This component also needs to render current user global styles record, to support styles editing.

		If there's a post/template id, we should fetch it so we can render it in the editor.

		FUTURE: If there are children, we assume they override the rendered post/template.

		Or everything is internal: we swap the canvas in and out of the style book internally for now.

		Similarly, revisions can be toggled on, replacing the global styles controls UI.

		<StylesEditor globalStylesId={ 1 }>
			FUTURE: <StyleBook />
		</StylesEditor>

	 */

	const { editedPostType, editedPostId } = useSelect( ( select ) => {
		const { getEditedPostType, getEditedPostId } = unlock(
			select( editSiteStore )
		);

		return {
			editedPostType: getEditedPostType(),
			editedPostId: getEditedPostId(),
		};
	}, [] );
	const _siteSettings = useSpecificEditorSettings();
	const [ blocks ] = useEntityBlockEditor( 'postType', editedPostType, {
		id: editedPostId,
	} );
	const [ editorStyles ] = useGlobalStylesOutput();
	const isLoaded =
		blocks && blocks.length > 0 && !! _siteSettings && !! editorStyles;

	/*
	- Need NavigableRegion to be able to navigate the editor canvas.
	- Setting ExperimentalBlockEditorProvider useSubRegistry to true breaks the blockWithoutAttributes test in blocklist
	  But without it the navigation and other template parts are not styled in the editor canvas.

	*/

	return (
		<>
			<GlobalStylesRenderer />
			{ isLoaded && (
				<div className="style-editor-layout">
					<div className="style-editor-layout__content">
						<div className="style-editor-layout__sidebar">
							<div className="style-editor-layout__sidebar-header">
								<h2>{ __( 'Styles' ) }</h2>
							</div>
							<GlobalStylesUI
								path="/"
								onPathChange={ () => {} }
							/>
						</div>
						<div className="style-editor-layout__canvas-container">
							<div className="style-editor-layout__canvas">
								<Iframe
									className="style-editor-layout__iframe"
									name="styles-editor"
									tabIndex={ 0 }
								>
									<style>
										{
											// Forming a "block formatting context" to prevent margin collapsing.
											// @see https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
											`.is-root-container { display: flow-root; }`
										}
									</style>

									<ExperimentalBlockEditorProvider
										value={ blocks }
										settings={ _siteSettings }
										useSubRegistry={ false }
									>
										<MemoizedBlockList
											renderAppender={ false }
										/>
										{ /*
										 * Styles are printed inside the block editor provider,
										 * so they can access any registered style overrides.
										 */ }
										<EditorStyles styles={ editorStyles } />
									</ExperimentalBlockEditorProvider>
								</Iframe>
							</div>
						</div>
					</div>
				</div>
			) }
		</>
	);
}
