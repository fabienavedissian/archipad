import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})

export class RolePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const roles = [
      {
        key: 'owner',
        value: 'Administrateur'
      },
      {
        key: 'collaborator',
        value: 'Collaborateur'
      },
      {
        key: 'workpackage',
        value: 'Lot de travaux'
      },
      {
        key: 'guest',
        value: 'Invité'
      },
    ];
    return roles[roles.findIndex(o => o.key === value)].value;
  }

}
