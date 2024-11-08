/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import {
	BlockList,
	privateApis as blockEditorPrivateApis,
	__unstableEditorStyles as EditorStyles,
	__unstableIframe as Iframe,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { memo, useState } from '@wordpress/element';
import { useEntityBlockEditor } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import { store as editSiteStore } from '../../store';
import GlobalStylesUI from '../global-styles/ui';
import { useSpecificEditorSettings } from '../block-editor/use-site-editor-settings';
import StyleBook from '../style-book';

const { ExperimentalBlockEditorProvider, useGlobalStylesOutput } = unlock(
	blockEditorPrivateApis
);
// This is used to avoid rendering the block list if the sizes change.
const MemoizedBlockList = memo( BlockList );

/*
  Rough requirements:
    - The component can be standalone or part of a larger editor. Need to work out block contexts etc.
    - The component should be able to load a global styles entity and a "post" entity, where
      a post is the contents of a template, template part, pattern, page, post or custom post type.
    - The component should accept a postType and postId prop to load a specific post.
    - The component should accept a globalStylesId prop to load a specific global styles entity,
      alternatively a full userConfig object to merge with base config.
    - The component should accept a children prop to extend or override the rendered post or global styles UI.
    - The canvas should be configurable to show anything. Initially it could just load the style book, and the home page template for block themes.
      Thinking of classic themes, how to overload with classic theme CSS? Here's where a custom PHP page could be useful (and faster)



  Future props:
  - globalStylesId to load a global styles record, alternatively a full userConfig object to merge with base config.
  - postType to load a specific post type, this could from a parent component or a URL parameter
  - postId to load a specific post, this could from a parent component or a URL parameter
  - children to extend or override the rendered post or global styles UI (?)

  Notes:
    - How will, if ever, classic themes be supported? Would it be a link to `site-editor.php`
      or should there be a custom page, e.g., `styles-editor.php`? I'm not sure the former
      is possible anyway as there are guards against classic themes accessing.
      The latter would allow for more flexibility and separations of concerns in the future.
  -

 */
export default function StylesEditor() {
	const { editedPostType, editedPostId } = useSelect( ( select ) => {
		const { getEditedPostType, getEditedPostId } = unlock(
			select( editSiteStore )
		);
		return {
			editedPostType: getEditedPostType(),
			editedPostId: getEditedPostId(),
		};
	}, [] );
	const [ isStyleBookOpen, setIsStyleBookOpen ] = useState( true );
	const _siteSettings = useSpecificEditorSettings();
	const [ blocks ] = useEntityBlockEditor( 'postType', editedPostType, {
		id: editedPostId,
	} );
	const [ editorStyles ] = useGlobalStylesOutput();
	const isLoaded =
		blocks && blocks.length > 0 && !! _siteSettings && !! editorStyles;

	if ( ! isLoaded ) {
		return;
	}

	return (
		<div className="style-editor-layout">
			<div className="style-editor-layout__content">
				<div className="style-editor-layout__sidebar">
					<div className="style-editor-layout__sidebar-header">
						<h2>{ __( 'Styles' ) }</h2>
						<button
							onClick={ () =>
								setIsStyleBookOpen( ! isStyleBookOpen )
							}
						>
							Toggle
						</button>
					</div>
					<GlobalStylesUI path="/" onPathChange={ () => {} } />
				</div>
				<div className="style-editor-layout__canvas-container">
					<div className="style-editor-layout__canvas">
						<Iframe
							className="style-editor-layout__iframe"
							name="styles-editor"
							tabIndex={ 0 }
						>
							{ isStyleBookOpen ? (
								<>
									<EditorStyles styles={ editorStyles } />
									<StyleBook />
								</>
							) : (
								<>
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
										/*
										@TODO For some reason, some blocks like navigation
										are not added to the block editor registry
										and won't be styled correctly. See the `if ( ! blockWithoutAttributes ) {`
										test in  packages/block-editor/src/components/block-list/block.js
										*/
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
								</>
							) }
						</Iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
