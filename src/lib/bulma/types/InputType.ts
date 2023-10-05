import type { Colors } from './Colors';
import type { Sizes } from './Sizes';

export type InputType = {
	value: any;
	color?: Colors;
	size?: Sizes;
	isRounded?: boolean;
	isHovered?: boolean;
	isFocused?: boolean;
	isLoading?: boolean;
	isStatic?: boolean;
	disabled?: boolean;
	readonly?: boolean;
    leftIcon?: string;
	rightIcon?: string;
};
