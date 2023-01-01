/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();
  return (
    <div className="container-myblock" {...blockProps}>
      <div className="first-div-myblock">
        <p>
          <img src={props.attributes.imgURL} alt={props.attributes.imgAlt} />
        </p>
      </div>
      <div className="second-div-myblock">
        <h1 className="title1"> {props.attributes.title1}</h1>
        <h3 className="title2"> {props.attributes.title2}</h3>
		<p className="description">{props.attributes.description}</p>
        <button className="btncta">{props.attributes.btncta}</button>
      </div>
    </div>
  );
}
