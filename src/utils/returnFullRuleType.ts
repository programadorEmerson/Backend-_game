import { FeatureCodeEnum } from 'src/enums/feature.code';
import { TypeCodeEnum } from 'src/enums/type.code';

import { Rule } from 'src/users/models/rule.model';

const returnFullRuleType = (feature: FeatureCodeEnum): Rule[] => {
  const fullRule = [];
  for (const rule of Object.keys(TypeCodeEnum)) {
    fullRule.push({ action: TypeCodeEnum[rule], subject: feature });
  }
  return fullRule;
};

export default returnFullRuleType;
