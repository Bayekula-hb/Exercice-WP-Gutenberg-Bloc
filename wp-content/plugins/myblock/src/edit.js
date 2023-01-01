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
import { useBlockProps, RichText } from "@wordpress/block-editor";

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

  const onChangeContentTitle1 = (title1) => {
    props.setAttributes({ title1: title1 });
  };

  return (
    <div className="container-myblock" {...useBlockProps.save()}>
      <div className="first-div-myblock">
        <p>{"My Block – hello from the saved content! is soo good"}</p>
      </div>
      <div className="second-div-myblock">
        <RichText
          tagName="h1"
          value={props.attributes.title1}
          className="title1"
          onChange={(title1) => props.setAttributes({ title1 })}
          placeholder={__("Mon titre", "myBlock")}
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
        <button className="btn-myblock">{"En savoir plus"}</button>
      </div>
    </div>
  );
}
