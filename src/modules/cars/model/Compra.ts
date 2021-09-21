import { v4 as uuidV4 } from 'uuid';

class Compra {
    id?: string;
    name: string;
    item: string;
    value: number;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
export { Compra };
