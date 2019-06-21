import {
  Rule,
  apply,
  chain,
  mergeWith,
  template,
  branchAndMerge,
  move,
  url,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { schemaOptions } from './schema';

export default function (options: schemaOptions): Rule {
    options.path = "src/app";

    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        'if-flat': (s: string) => options.flat ? '' : s,
        ...options,
      }),
      move(options.path)
    ]);
    
    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource)
      ])),
    ]);
}