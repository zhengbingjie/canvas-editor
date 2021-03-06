import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('canvas-block-wrapper',
  'Integration | Component | canvas block wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{canvas-block-wrapper}}`);

  assert.ok(this.$());

  // Template block usage:
  this.render(hbs`
    {{#canvas-block-wrapper}}
      template block text
    {{/canvas-block-wrapper}}
  `);

  assert.ok(this.$());
});
