import { FeatureCodeEnum } from 'src/enums/feature.code';
import { TypeCodeEnum } from 'src/enums/type.code';

import { Rule } from 'src/users/models/rule.model';

const returnFullRuleType = (feature: FeatureCodeEnum): Rule[] => {
  return Object.keys(TypeCodeEnum).reduce((acc, rule) => {
    acc.push({ action: TypeCodeEnum[rule], subject: feature });
    return acc;
  }, []);
};

export default returnFullRuleType;
