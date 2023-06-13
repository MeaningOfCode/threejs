/* global QUnit */

import { ShaderChunk } from '../../../../../src/ddd/domain/core/renderers/shaders/ShaderChunk.js';

export default QUnit.module( 'Renderers', () => {

	QUnit.module( 'Shaders', () => {

		QUnit.module( 'ShaderChunk', () => {

			// INSTANCING
			QUnit.test( 'Instancing', ( assert ) => {

				assert.ok( ShaderChunk, 'ShaderChunk is defined.' );

			} );

		} );

	} );

} );
