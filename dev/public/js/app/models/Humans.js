import Collection from '../../skeleton/Collection';
import Human from './Human';

class Humans extends Collection {

  constructor (humans) {
    //super(Human,humans);
    super(Human,"/humans", humans);

  }
}

export default Humans;