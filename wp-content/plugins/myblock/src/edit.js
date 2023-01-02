/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  Placeholder,
  PanelBody,
  PanelColor,
  ButtonGroup,
  Button,
  ToggleControl,
  RangeControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
  const blockProps = useBlockProps();
  const onSelectImage = (imgProps) => {
    props.setAttributes({
      imgID: imgProps.id,
      imgURL: imgProps.url,
      imgAlt: imgProps.alt,
    });
  };
  const onRemoveImage = () => {
    props.setAttributes({
      imgID: null,
      imgURL: null,
      imgAlt: null,
    });
  };

  return (
    <Fragment>
      <div className="container-myblock" {...useBlockProps.save()}>
        <div className="first-div-myblock">
          {!props.attributes.imgID ? (
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={["image"]}
                value={props.attributes.imgID}
                render={({ open }) => (
                  <Placeholder
                    icon="images-alt"
                    label={__("Photo", "myBlock")}
                    instructions={__("Sélectionner une image", "myBlock")}
                  >
                    <Button isSecondary isLarge onClick={open} icon="upload">
                      {__("Importer", "myBlock")}
                    </Button>
                  </Placeholder>
                )}
              />
            </MediaUploadCheck>
          ) : (
            <p className="myblock-img-wrapper">
              <img
                src={props.attributes.imgURL}
                alt={props.attributes.imgAlt}
              />

              {props.isSelected && (
                <Button
                  className="myblock-del-img"
                  onClick={onRemoveImage}
                  icon="dismiss"
                >
                  {__("Supprimer l'image", "myblock")}
                </Button>
              )}
            </p>
          )}
        </div>
        <div className="second-div-myblock">
          <RichText
            tagName="h1"
            value={props.attributes.title1}
            className="title1"
            onChange={(title1) => props.setAttributes({ title1 })}
            placeholder={__("Mon titre", "myBlock")}
            allowedFormats={["core/bold", "core/italic", "core/link"]}
          />
          <RichText
            tagName="h3"
            value={props.attributes.title2}
            className="title2"
            onChange={(title2) => props.setAttributes({ title2 })}
            placeholder={__("Mon sous titre", "myBlock")}
          />
          <RichText
            tagName="p"
            value={props.attributes.description}
            className="title2"
            onChange={(description) => props.setAttributes({ description })}
            placeholder={__("Ma description", "myBlock")}
          />
          <RichText
            tagName="p"
            value={props.attributes.btncta}
            className="btncta"
            onChange={(btncta) => props.setAttributes({ btncta })}
            placeholder={__("Mon bouton", "myBlock")}
          />
        </div>
      </div>
    </Fragment>
  );
}
