/* global QUnit */

import { Group } from '../../../../src/ddd/domain/support/objects/Group.js';

import { Object3D } from '../../../../src/ddd/infrastructure/core/Object3D.js';

export default QUnit.module( 'Objects', () => {

	QUnit.module( 'Group', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const group = new Group();
			assert.strictEqual(
				group instanceof Object3D, true,
				'Group extends from Object3D'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const object = new Group();
			assert.ok( object, 'Can instantiate a Group.' );

		} );

		// PROPERTIES
		QUnit.test( 'type', ( assert ) => {

			const object = new Group();
			assert.ok(
				object.type === 'Group',
				'Group.type should be Group'
			);

		} );

		// PUBLIC
		QUnit.test( 'isGroup', ( assert ) => {

			const object = new Group();
			assert.ok(
				object.isGroup,
				'Group.isGroup should be true'
			);

		} );

	} );

} );
