import { DimensionsTypes } from '@src/enums/DimensionsTypes';
import { IMediaValue } from '@features/AdaptivePage/interfaces/IMediaValue';

export type IAdaptiveDimensions = {
  [K in DimensionsTypes]: Array<Required<IMediaValue>>;
}
