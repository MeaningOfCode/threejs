/* global QUnit */

import { HemisphereLightProbe } from '../../../../src/ddd/domain/support/lights/HemisphereLightProbe.js';

import { LightProbe } from '../../../../src/ddd/domain/support/lights/LightProbe.js';

export default QUnit.module( 'Lights', () => {

	QUnit.module( 'HemisphereLightProbe', () => {

		// INHERITANCE
		QUnit.test( 'Extending', ( assert ) => {

			const object = new HemisphereLightProbe();
			assert.strictEqual(
				object instanceof LightProbe, true,
				'HemisphereLightProbe extends from LightProbe'
			);

		} );

		// INSTANCING
		QUnit.test( 'Instancing', ( assert ) => {

			const object = new HemisphereLightProbe();
			assert.ok( object, 'Can instantiate a HemisphereLightProbe.' );

		} );

		// PUBLIC
		QUnit.test( 'isHemisphereLightProbe', ( assert ) => {

			const object = new HemisphereLightProbe();
			assert.ok(
				object.isHemisphereLightProbe,
				'HemisphereLightProbe.isHemisphereLightProbe should be true'
			);

		} );

	} );

} );
