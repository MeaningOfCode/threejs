/* global QUnit */

import { WebGL1Renderer } from '../../../../src/ddd/domain/core/renderers/WebGL1Renderer.js';

import { WebGLRenderer } from '../../../../src/ddd/domain/core/renderers/WebGLRenderer.js';

export default QUnit.module( 'Renderers', () => {

	QUnit.module( 'WebGL1Renderer-webonly', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const object = new WebGL1Renderer();
			assert.strictEqual(
				object instanceof WebGLRenderer, true,
				'WebGL1Renderer extends from WebGLRenderer'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const renderer = new WebGL1Renderer();
			assert.ok( renderer, 'Can instantiate a WebGL1Renderer.' );

		} );

		// PUBLIC
		QUnit.todo( 'isWebGL1Renderer', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

	} );

} );
