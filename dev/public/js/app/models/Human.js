import Model from '../../skeleton/Model';

class Human  extends Model {
  constructor (fields = { firstName:"John", lastName:"Doe"  }) {
    //superclass's constructor invocation
    //super(fields);
    super(fields, "/humans");
  }
}

export default Human;
