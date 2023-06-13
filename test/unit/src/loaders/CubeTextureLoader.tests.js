/* global QUnit */

import { CubeTextureLoader } from '../../../../src/ddd/domain/support/loaders/CubeTextureLoader.js';

import { Loader } from '../../../../src/ddd/domain/support/loaders/Loader.js';

export default QUnit.module( 'Loaders', () => {

	QUnit.module( 'CubeTextureLoader', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const object = new CubeTextureLoader();
			assert.strictEqual(
				object instanceof Loader, true,
				'CubeTextureLoader extends from Loader'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const object = new CubeTextureLoader();
			assert.ok( object, 'Can instantiate a CubeTextureLoader.' );

		} );

		// PUBLIC
		QUnit.todo( 'load', ( assert ) => {

			assert.ok( false, 'everything\'s gonna be alright' );

		} );

	} );

} );
