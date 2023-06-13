import { Object3D } from '../../../infrastructure/core/Object3D.js';

class Bone extends Object3D {

	constructor() {

		super();

		this.isBone = true;

		this.type = 'Bone';

	}

}

export { Bone };
