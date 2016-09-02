import Ember from 'ember';
import Block from './block';

const { computed } = Ember;

/**
 * A group in a canvas.
 *
 * @class CanvasEditor.RealtimeCanvas.Group
 * @extends Ember.Object
 */
export default Block.extend({
  blocks: computed(_ => [])
});
