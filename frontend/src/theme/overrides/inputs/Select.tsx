import ThemeIcon from "../ThemeIcon";

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: <ThemeIcon name={'inputselect'} sx={{
          right: 12,
          fontSize: 16,
          position: 'absolute',
          pointerEvents: 'none',
        }}/>,
      },
    },
  };
}
