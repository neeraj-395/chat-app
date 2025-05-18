import type { Theme } from '@mui/material';
import ThemeIcon from '../ThemeIcon';

export default function TreeView(theme: Theme) {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: <ThemeIcon name= {'treeviewclps'} sx={{ width: 20, height: 20 }} />,
        defaultExpandIcon: <ThemeIcon name={'treeviewxpand'} sx={{ width: 20, height: 20 }} />,
        defaultEndIcon: <ThemeIcon name={'treeviewend'} sx={{ color: 'text.secondary', width: 20, height: 20 }} />,
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: 'auto' },
      },
    },
  };
}
