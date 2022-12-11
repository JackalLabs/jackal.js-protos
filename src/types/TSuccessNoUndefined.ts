import NonNullable from '@/types/TNoUndefined'
import SuccessIncluded from '@/types/TSuccessIncluded'

type SuccessNoUndefined<T> = NonNullable<SuccessIncluded<T>>

export default SuccessNoUndefined
