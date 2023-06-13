/* global QUnit */

import { ArrayCamera } from '../../../../src/ddd/domain/core/cameras/ArrayCamera.js';

import { PerspectiveCamera } from '../../../../src/ddd/domain/core/cameras/PerspectiveCamera.js';

export default QUnit.module( 'Cameras', () => {

	QUnit.module( 'ArrayCamera', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const object = new ArrayCamera();
			assert.strictEqual(
				object instanceof PerspectiveCamera, true,
				'ArrayCamera extends from PerspectiveCamera'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const object = new ArrayCamera();
			assert.ok( object, 'Can instantiate an ArrayCamera.' );

		} );

		// PROPERTIES
		QUnit.todo( 'cameras', ( assert ) => {

			// array
			assert.ok( false, 'everything\'s gonna be alright' );

		} );

		// PUBLIC
		QUnit.test( 'isArrayCamera', ( assert ) => {

			const object = new ArrayCamera();
			assert.ok(
				object.isArrayCamera,
				'ArrayCamera.isArrayCamera should be true'
			);

		} );

	} );

} );
