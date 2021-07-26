import { Pipe } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'fitroArrayImpuro',
  pure: false
})

export class FitroArrayImpuroPipe extends FiltroArrayPipe {

  

}
