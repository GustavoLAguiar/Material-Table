import React, { forwardRef } from 'react';

import * as Icons from '@material-ui/icons';

const TableIcons = {
  Add: forwardRef((props, ref) => <Icons.AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Icons.Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Icons.Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <Icons.DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <Icons.ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Icons.Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <Icons.SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <Icons.FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <Icons.FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <Icons.LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <Icons.ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <Icons.ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Icons.Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Icons.Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <Icons.ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Icons.Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <Icons.ViewColumn {...props} ref={ref} />)
};

export default TableIcons;