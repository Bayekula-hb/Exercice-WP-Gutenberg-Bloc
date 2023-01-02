/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
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
  const { alignImg, imgURL, imgAlt, title1, title2, description, btncta } =
    props.attributes;
  return (
    <div className="container-myblock" {...blockProps}>
      <div
        className="first-div-myblock"
        style={{ textAlign: alignImg }}
      >
        <img src={imgURL} alt={imgAlt} />
      </div>
      <div className="second-div-myblock">
        <RichText.Content tagName="h1" className="title1" value={title1} />
        <RichText.Content tagName="h3" className="title2" value={title2} />
        <RichText.Content
          tagName="p"
          className="description"
          value={description}
        />
        <RichText.Content tagName="button" className="btncta" value={btncta} />
      </div>
    </div>
  );
}
