import CanvasBlock from 'canvas-editor/components/canvas-block/component';
import layout from './template';
import styles from './styles';

/*
 * A component representing a "code" type canvas block.
 *
 * @class CanvasEditor.CanvasBlockCodeComponent
 * @extends CanvasEditor.CanvasBlockComponent
 */
export default CanvasBlock.extend({
  classNames: ['canvas-block-code'],
  layout,
  localClassNames: ['canvas-block-code'],
  styles
});
