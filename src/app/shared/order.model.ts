import { Item } from './item.model';

export class Order {
    constructor(public items: Item[],
        public address: String,
        public track: null | String,
        public status:  'Processing' | 'Sent' | 'Received' | 'Resolving problems',
        public vklink: String,
        public email: String,
        public name: String,
        public shipvia: String,
        public phone: String) {}
}
